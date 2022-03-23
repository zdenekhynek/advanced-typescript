/**
 * Immutability with 'readonly'
 */
const letters: readonly string[] = ["a", "b", "c"];
letters[0] = "a1"; // tsc error

//  similar to provided ReadyonlyArray utility
const letters2: ReadonlyArray<string> = ["a", "b", "c"];
letters2[0] = "a1"; // tsc error

/**
 * Convert between mutable and immutable using a generic
 */
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

type ImmutablePerson = {
  readonly firstName: string;
  readonly lastName: string;
  readonly age?: number;
};

type MutablePerson = Mutable<ImmutablePerson>;

/**
 * Using const assertions
 * @see https://stackoverflow.com/questions/66993264/what-does-the-as-const-mean-in-typescript-and-what-is-its-use-case
 */
const arr = [0, 1];
const atans = Math.atan2(...arr); // TSC error
const arr2 = [0, 1] as const;
const atans2 = Math.atan2(...arr2);

/**
 * TSC considers `const` automatically immutable
 */
const name = "Claire";
name = "Anne-Claire"; // tsc error
