<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { map } from "./util.js";

  export let size = 20;
  export let radius = 4;
  export let cell;
  export let x = 0;
  export let y = 0;
  export let neighbors;
  export let threshold = 0.5;
  export let autoAnimate = true;

  // Parameters for the svg path
  let transform = `translate(${x} ${y})`;
  let d = "";

  // Helper variables for constructing the path
  let w;
  let r, s, q;

  // get the dynamic values of the presences of this and the neighbor squares
  const cp = cell.presence;
  const np0 = neighbors[0].presence;
  const np1 = neighbors[1].presence;
  const np2 = neighbors[2].presence;
  const np3 = neighbors[3].presence;

  // Automatic update a square if the presence of this or one of the neighbors has changed.
  $: if ($cp || $np0 || $np1 || $np2 || $np3) {
    if ($cp > 0) {
      // Half width of the actual square/circle
      w = (map($cp, 0, threshold, 0, 1) * size) / 2;

      // Arrays of four elements for each corner of the sqare
      r = []; // actual radius
      s = []; // line length from the middle to the start of the corner curve
      q = []; // line length from the middle to the bezier anchor that creates the curve
      for (let i = 0; i < 4; i++) {
        r[i] = 0;
        if ($cp < threshold) {
          r[i] = w * map($cp, 0, threshold, 1, map(get(neighbors[i].presence), 0, 1, 1, 0));
        } else {
          r[i] =
            map($cp, threshold, 1, w, radius) * map(get(neighbors[i].presence), 0, threshold, 1, 0);
        }

        s[i] = w - r[i];
        q[i] = w - r[i] * 0.45;
      }

      d = `M ${-w} ${-s[0]} C ${-w} ${-q[0]} ${-q[0]} ${-w} ${-s[0]} ${-w}
					 L ${s[1]} ${-w}  C ${q[1]} ${-w} ${w} ${-q[1]} ${w} ${-s[1]}
					 L ${w} ${s[2]} C ${w} ${q[2]} ${q[2]} ${w} ${s[2]} ${w} 
					 L ${-s[3]} ${w} C ${-q[3]} ${w} ${-w} ${q[3]} ${-w} ${s[3]} 
					`;
    } else {
      d = "";
    }
  }

  function toggleCell() {
    if ($cp > 0) {
      cell.presence.set(0);
    } else {
      cell.presence.set(1);
    }
  }

  onMount(() => {
    const interval = setInterval(() => {
      if (autoAnimate && Math.random() < 0.02 && ($cp == 0 || $cp == 1)) {
        toggleCell();
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<path {transform} {d} />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<rect
  on:click={toggleCell}
  {transform}
  x={-size / 2}
  y={-size / 2}
  width={size}
  height={size}
  opacity="0"
/>

<!-- <text {transform}>{$cp.toFixed(2)}</text> -->
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
