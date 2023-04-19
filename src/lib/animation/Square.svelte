<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { map } from "./util.js";
  import { update } from "./stores.js";

  import Joint from "./Joint.svelte";

  export let size = 20;
  export let gridSizeX = 6;
  export let gridSizeY = 6;
  export let margin = 10;
  export let radius = 4;
  export let innerRadius = 4;
  export let square; // the info object for this square
  export let squares; // all squares in the grid
  export let animationThreshold = 0.3;
  export let autoAnimate = true;
  export let animationInterval;
  export let animationProbability;

  // Parameters for the svg path
  let x = 0;
  let y = 0;
  let transform = ``;
  let d = "";

  // Helper variables for constructing the path
  let w;
  let r, s, q;

  let neighbors = [];
  // helper array for collecting the neighbors for all four corners
  let signs = [
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 },
  ];

  // if one of the parameters of the square (presence, x position or y position) has changed
  // increment the value of the store "update" to let everybody know that something has changed.
  const cp = square.presence;
  const xi = square.xi;
  const yi = square.yi;
  $: if ($cp || $xi || $yi) {
    update.update((n) => n + 1);
  }

  // Handling updates
  let doUpdate;
  update.subscribe((value) => {
    doUpdate = value;
  });

  // Automatic update a square if the presence of this or one of the neighbors has changed.
  $: if (doUpdate) {
    // calculate position from grid coordinates
    x = square.x = ($xi + 0.5) * size + margin;
    y = square.y = ($yi + 0.5) * size + margin;

    // console.log("square", square.id, x, y);
    transform = `translate(${x} ${y})`;

    // collect neighbors
    neighbors = [];
    // Only make path if the precence of this square is greater than zero.
    if ($cp > 0) {
      // Half width of the actual square/circle
      w = (map($cp, 0, 1 - animationThreshold, 0, 1) * size) / 2;

      // Arrays of four elements for each corner of the square
      r = []; // actual radius
      s = []; // line length from the middle to the start of the corner curve
      q = []; // line length from the middle to the bezier anchor that creates the curve
      for (let i = 0; i < 4; i++) {
        r[i] = Math.min(radius, w);

        const signx = signs[i].x;
        const signy = signs[i].y;

        for (let j = 0; j < squares.length; j++) {
          const sq = squares[j];
          if (sq.id != square.id) {
            let dx = ((sq.x - x) / size) * signx;
            let dy = ((sq.y - y) / size) * signy;
            // console.log(i, dx, dy);
            // if (0 <= dx && dx <= 1 && 0 <= dy && dy <= 1) setNeighbor(i, sq);

            // there is another square aside this one
            if ((-0.5 <= dx && dx <= 1.5 && dy == 1) || (-0.5 <= dy && dy <= 1.5 && dx == 1)) {
              let d = dx == 1 ? dy : dx;

              // collect neighbors for making joints
              neighbors.push(sq);

              // check if this neighbor would reduce the radius of this corner even further
              let newr = radius;
              if (dx == 1 && dy == 1) {
                // for diagonal neighbors check presence
                let neighborPresence = get(sq.presence);
                if ($cp < 1 - animationThreshold) {
                  newr = w * map($cp, 0, 1 - animationThreshold, 1, map(neighborPresence, 0, 1, 1, 0));
                } else {
                  newr =
                    map($cp, 1 - animationThreshold, 1, w, radius) *
                    map(neighborPresence, 0, 1 - animationThreshold, 1, 0);
                }
              } else if (-(radius + innerRadius) < d * size && d < 0) {
                // otherwise this neighbor is sharing more than half of the edge
                newr = -(d * size) * (radius / (innerRadius + radius));
              } else if (0 <= d && d <= 1) {
                // or moving along this corner -> corner has no radius
                newr = 0;
              } else if (d > 1) {
                // or moving away from the corner
                newr = map(d - 1, 0, 0.5, 0, radius);
              }

              // chose the smaller radius
              r[i] = Math.min(r[i], newr);
            }
          }
        }

        // adjust two other values to make constructin of the path
        s[i] = w - r[i];
        q[i] = w - r[i] * 0.45;
      }

      d = `M ${-w} ${-s[0]} C ${-w} ${-q[0]} ${-q[0]} ${-w} ${-s[0]} ${-w}
					 L ${s[1]} ${-w}  C ${q[1]} ${-w} ${w} ${-q[1]} ${w} ${-s[1]}
					 L ${w} ${s[2]} C ${w} ${q[2]} ${q[2]} ${w} ${s[2]} ${w} 
					 L ${-s[3]} ${w} C ${-q[3]} ${w} ${-w} ${q[3]} ${-w} ${s[3]} 
					 Z`;
    } else {
      d = "";
    }
  }

  // function toggleCell(ev) {
  //   // console.log(ev)
  //   // console.log(square.x, square.y)
  //   console.log(square);

  //   if ($cp > 0) {
  //     square.presence.set(0);
  //   } else {
  //     square.presence.set(1);
  //   }
  // }

  function moveSquare() {
    // if not alread moving
    if ($xi % 1 == 0 && $yi % 1 == 0) {
      let dir = Math.floor(Math.random() * 4);
      let [dx, dy] = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1],
      ][dir];

      if ($xi + dx >= 0 && $xi + dx < gridSizeX && $yi + dy >= 0 && $yi + dy < gridSizeY) {
        // check if the cell is free
        let isFree = true;
        for (let i = 0; i < squares.length; i++) {
          let sq = squares[i];
          // move only if the target position is free
          if ($xi + dx == sq.targetxi && $yi + dy == sq.targetyi) {
            isFree = false;
          }
          // move only if two cells away is free, so that it will not move towards another square
          if ($xi + dx*2 == sq.targetxi && $yi + dy*2 == sq.targetyi) {
            isFree = false;
          }
          // move only if the cell in the back is free, so that it will not move away from another square
          if ($xi - dx == sq.targetxi && $yi - dy == sq.targetyi) {
            isFree = false;
          }
        }

        if (isFree) {
          let newx = $xi + dx;
          let newy = $yi + dy;
          xi.set(newx);
          yi.set(newy);
          square.targetxi = newx;
          square.targetyi = newy;
        }
      }
    }
  }

  // function moveLeft(ev) {
  //   xi.set($xi - 1);
  //   square.targetxi -= 1;
  // }
  // function moveRight(ev) {
  //   xi.set($xi + 1);
  //   square.targetxi += 1;
  // }
  // function moveUp(ev) {
  //   yi.set($yi - 1);
  //   square.targetyi -= 1;
  // }
  // function moveDown(ev) {
  //   yi.set($yi + 1);
  //   square.targetyi += 1;
  // }

  onMount(() => {
    let speed = animationInterval;
    let interval = setInterval(intervalFn, speed);

    function intervalFn() {
      if (autoAnimate && Math.random() < animationProbability / 100) {
        moveSquare();
      }

      // clear interval when speed changes
      if (speed != animationInterval) {
        clearInterval(interval);
        speed = animationInterval;
        interval = setInterval(intervalFn, speed);
      }
    }

    return () => {
      clearInterval(interval);
    };
  });
</script>

<!-- The path of the square -->
<path {transform} {d} />

<!-- Add joints to the neighbors -->
{#each neighbors as neighbor, i}
  {#if neighbor}
    {#if square.id > neighbor.id}
      <Joint {size} {radius} {innerRadius} neighbors={[square, neighbor]} {animationThreshold} />
    {/if}
  {/if}
{/each}

<!-- For testing: make clickareas to toggle or move the square -->

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- <rect
  on:click={toggleCell}
  {transform}
  x={-size / 2}
  y={-size / 2}
  width={size}
  height={size}
  opacity="0"
/> -->

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- <rect
  on:click={moveLeft}
  {transform}
  x={-size / 2}
  y={-size / 4}
  width={size / 4}
  height={size / 2}
  opacity="0"
/> -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- <rect
  on:click={moveRight}
  {transform}
  x={size / 4}
  y={-size / 4}
  width={size / 4}
  height={size / 2}
  opacity="0"
/> -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- <rect
  on:click={moveUp}
  {transform}
  x={-size / 4}
  y={-size / 2}
  width={size / 2}
  height={size / 4}
  opacity="0"
/> -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- <rect
  on:click={moveDown}
  {transform}
  x={-size / 4}
  y={size / 4}
  width={size / 2}
  height={size / 4}
  opacity="0"
/> -->

<style>
  /* text {
    font: 2.5px sans-serif;
    fill: red;
    text-align: center;
  } */

  /* path {
    filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  } */
</style>
