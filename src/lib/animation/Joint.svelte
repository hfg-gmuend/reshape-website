<script>
  import { map } from "./util.js";
  import { update } from "./stores.js";
  import { get } from "svelte/store";

  export let radius = 4;
  export let innerRadius = 4;
  export let size = 10;
  export let neighbors;
  export let animationThreshold = 0.5;

  // Handling updates
  let doUpdate;
  update.subscribe((value) => {
    doUpdate = value;
  });

  let x = 0;
  let y = 0;

  let transform1 = ``;
  let transform2 = ``;

  const np0 = neighbors[0].presence;
  const np1 = neighbors[1].presence;

  // Automatic update of the shape if one of the neighbors has changed.
  let maxr, r, q, d;
  $: if (doUpdate) {
    x = (neighbors[0].x + neighbors[1].x) / 2;
    y = (neighbors[0].y + neighbors[1].y) / 2;

    // "grid distance": if e.g. xi is not integer, it means that it is
    // moving to another position. But if the fraction is lower animationThreshold or greater
    // than 1-animationThreshold, the real position is still/already in th starting/final position.
    let dxi = Math.abs(get(neighbors[1].xi) - get(neighbors[0].xi));
    let dyi = Math.abs(get(neighbors[1].yi) - get(neighbors[0].yi));
    
    // real distance
    let dx = neighbors[1].x - neighbors[0].x;
    let dy = neighbors[1].y - neighbors[0].y;

    if (dx == 0 || dy == 0) {
      // the two neighbors are orthogonally neighbors. No joint needed.
      d = "";
    } else {
      let mindist = Math.min(Math.abs(dx), Math.abs(dy));

      // If one of the distances is already smaller than the sum of both radiuses,
      // distribute the mindist in the same ratio to inner and outer radius.
      maxr =
        mindist < radius + innerRadius ? mindist * (innerRadius / (innerRadius + radius)) : size;
      r = Math.pow(map($np0, animationThreshold, 1, 0, 1) * map($np1, animationThreshold, 1, 0, 1), 2) * innerRadius;
      r = Math.min(r, maxr);

      if (dxi > 1 || dyi > 1) {
        let di = dxi == 1 ? dyi : dxi;
        r = map(di, 1, 1+animationThreshold, r, 0);
      }

      q = r * 0.45;
      d = `M 0 0 L 0 -${r} C 0 -${q} ${q} 0 ${r} 0 L 0 0`;
    }

    let offx = (size - Math.abs(dx)) / 2;
    if (dx < 0) offx *= -1;
    let offy = (size - Math.abs(dy)) / 2;
    if (dy < 0) offy *= -1;

    let angle = 0;

    if (dx < 0 && dy > 0) {
      angle = 90;
      offx *= -1;
      offy *= -1;
    } else if (dx < 0 && dy < 0) {
      angle = 180;
    } else if (dx > 0 && dy < 0) {
      angle = 270;
      offx *= -1;
      offy *= -1;
    }

    transform1 = `translate(${x + offx} ${y - offy}) rotate(${angle})`;
    transform2 = `translate(${x - offx} ${y + offy}) rotate(${angle + 180})`;
  }
</script>

<g>
  {#if $np0 > 1 - animationThreshold && $np1 > 1 - animationThreshold}
    <path transform={transform1} {d} />
    <path transform={transform2} {d} />
  {/if}
</g>
