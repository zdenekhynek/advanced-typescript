type MyType<T> = T extends infer R ? R : never;
type T1 = MyType<{b: string}> // T1 is { b: string; }

type MyType2<T> = T extends R2 ? R2 : never; 

type R = { a: number }
type MyType3<T> = T extends R ? R : never; // compare T with type R
type T2 = MyType2<{b: string}> 