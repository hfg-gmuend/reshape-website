<script>
  import Square from "./Square.svelte";
  import Joint from "./Joint.svelte";

  export let grid;
  export let gridSizeX;
  export let gridSizeY;
  export let s;
  export let outerRadius;
  export let innerRadius;
  export let threshold;
  export let autoAnimate;
</script>

{#each grid as row, yi}
  {#each row as cell, xi}
    {#if cell.active}
      <Square
        x={xi * s}
        y={yi * s}
        size={s}
        radius={outerRadius}
        {cell}
        neighbors={[
          grid[yi - 1][xi - 1],
          grid[yi - 1][xi + 1],
          grid[yi + 1][xi + 1],
          grid[yi + 1][xi - 1],
        ]}
        {threshold}
        {autoAnimate}
      />
    {/if}

    {#if xi < gridSizeX - 1 && yi < gridSizeY - 1}
      <Joint
        x={(xi + 0.5) * s}
        y={(yi + 0.5) * s}
        radius={innerRadius}
        type="0"
        neighbors={[grid[yi][xi], grid[yi + 1][xi + 1]]}
        {threshold}
      />
      <Joint
        x={(xi + 0.5) * s}
        y={(yi + 0.5) * s}
        radius={innerRadius}
        type="1"
        neighbors={[grid[yi + 1][xi], grid[yi][xi + 1]]}
        {threshold}
      />
    {/if}
  {/each}
{/each}
