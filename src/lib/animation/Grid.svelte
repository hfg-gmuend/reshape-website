<script>
  import Square from "./Square.svelte";
  import { tweened } from "svelte/motion";
  import { sineInOut } from "svelte/easing";

  export let squareCount;
  export let gridSizeX;
  export let gridSizeY;
  export let margin;
  export let squareSize;
  export let outerRadius;
  export let innerRadius;
  export let autoAnimate;
  export let animationThreshold;
  export let animationDuration;
  export let animationInterval;
  export let animationProbability;

    // just for init: make a 2d-array to kee track of the filled cells
    let grid = [];
  for (let yi = 0; yi < gridSizeY; yi++) {
    let row = [];
    for (let xi = 0; xi < gridSizeX; xi++) {
      // fill every cell of the grid with an object
      row.push({ filled: false, square: undefined, xi: xi, yi: yi });
    }
    grid.push(row);
  }

  // create some squares
  let cycles = 0;
  let squares = [];
  for (let i = 0; i < squareCount; i++) {
    let xi = Math.floor(Math.random() * gridSizeX);
    let yi = Math.floor(Math.random() * gridSizeY);
    if (!grid[yi][xi].filled && (xi+yi) % 2 == 0) {
      const p = tweened(1, {
        duration: animationDuration,
        easing: sineInOut,
      });
      const xistore = tweened(xi, {
        duration: animationDuration,
        easing: sineInOut,
      });
      const yistore = tweened(yi, {
        duration: animationDuration,
        easing: sineInOut,
      });
      let square = {
        id: i,
        presence: p,
        xi: xistore,
        yi: yistore,
        targetxi: xi,
        targetyi: yi,
        xmod: 0,
        ymod: 0,
      };
      squares.push(square);
      grid[yi][xi].square = square;
      grid[yi][xi].filled = true;
    } else {
      i--;
    }
    // prevent getting in an infinite loop
    cycles++;
    if (cycles > 1000) {
      break;
    }
  }
</script>

{#each squares as square, i}
  <Square
    size={squareSize}
    radius={outerRadius}
    {innerRadius}
    {gridSizeX}
    {gridSizeY}
    {margin}
    {square}
    {squares}
    {animationThreshold}
    {autoAnimate}
    {animationInterval}
    {animationProbability}
  />
{/each}
