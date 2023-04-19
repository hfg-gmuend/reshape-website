// map value 'val' from the first range to the second. With clipping set to true the result
// won't get lower than low2 or higher than high2.
export function map(val, low1, high1, low2, high2, clipping = true) {
  if (clipping)
    val =
      low1 < high1 ? Math.min(Math.max(val, low1), high1) : Math.min(Math.max(val, high1), low1);
  return ((val - low1) / (high1 - low1)) * (high2 - low2) + low2;
}
