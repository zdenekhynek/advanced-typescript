// https://www.typescriptlang.org/play?#code/C4TwDgpgBAwg9gWzHArgOwCYBVzQLxQByEAzsBBvEqpjpFAD5RooIBGEATgNwBQo9YmSrJ02XAB4sAPigEsUCAA9ymEkVLlKiUbVwB+DWQoia4yAC5YOs3Qh8B0IVtNi7cqAG9eUX1ADaANJQAJZoUGScYQDmALpWzq56kBJJ5hDSvAC+vLwA9HlQAMZwaGQRwACG5AmaJjZuuB7eBX6+lVYthW1tbFYAzPndfjmtWXy8JWXAFdUQtcba1I30BN5tHV4+Pb59Wzs7RVYALNs7OW0547mtWADKxToANpVhJLxkcwB0lV9sX0VclMSHAnhAvk84NEABSfcg-P4AShuhUcUAAkncABZwTjALGVTAABU4cDAciGfiYkRilN8TBY7C4dMYUDYcFBEEJLKYmJxeIJmDSJLJ71aaOcFD5uPxhIwIrAUlk8kUKggagx2JlgqWunlpLAJEM0oFcuFBpIVkZHE4KNVyDxUDRJtlQoaxItzRZQVC4RpaDiCy0Lp1CokIblCsyYztwJmYAtVgjbuWHtFXtaG06LJ2e0GmZGlOurQTooRbEppcNPyAA

// https://www.youtube.com/watch?v=nNse0r0aRT8&t=590s

const a = [1, 2, 3, 4, 5] as const;
const b = [1, 2, 3, 4, 5] as const;

type IndexOf<
  T extends [],
  S extends number[] = []
> = T["length"] extends S["length"] ? S[number] : IndexOf<T, [S["length"], ...S]>;

a.map((_, i: IndexOf<typeof a>) => {
  const c = b[i];
});
