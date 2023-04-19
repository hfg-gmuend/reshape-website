<script>
  import { map } from "./util.js";
	
  export let radius = 4;
  export let type = 0;
  export let x = 0;
  export let y = 0;
  export let neighbors;
	export let threshold = 0.5;

  let transform = `translate(${x} ${y})`;
  if (type == 1) transform += " rotate(90)";

  const np0 = neighbors[0].presence;
  const np1 = neighbors[1].presence;

  // Automatic update of the shape if one of the neighbors has changed.
  let r, q;
  $: if ($np0 || $np1) {
    r = Math.pow(map($np0, 1-threshold, 1, 0, 1) * map($np1, 1-threshold, 1, 0, 1), 2) * radius;
    q = r * 0.45;
  }
</script>

<g>
  {#if $np0 > threshold && $np1 > threshold}
    <path {transform} d="M -{r} 0 L 0 -{r} C 0 -{q} {q} 0 {r} 0 L 0 {r} C 0 {q} -{q} 0 -{r} 0" />
  {/if}
</g>
