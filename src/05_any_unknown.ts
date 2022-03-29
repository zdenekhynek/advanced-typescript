function example1(arg: any) {
  const a: string = arg; // no error
  const b: number = arg; // no error
}

function example2(arg: unknown) {
  const a: string = arg; // 🔴 Type 'unknown' is not assignable to type 'string'.(2322)
  const b: number = arg; // 🔴 Type 'unknown' is not assignable to type 'number'.(2322)
}