/**
 *  TypeScript has utility types to help with common transformations
 **/

/**
 * Partial
 * type Partial<T> = { [P in keyof T]?: T[P] };
 */
interface Item {
  id: string;
  name: string;
  desc: string;
}

function updateItem(item: Item, update: Partial<Item>) {
  return {
    ...item,
    ...update,
  };
}

const item = { id: "1", name: "Abc", desc: "Abd desc" };
updateItem(item, { desc: "new description" });

/**
 * Required
 */
interface Props {
  a?: string;
  b?: string;
}
const prop: Props = { a: "a" };
const requiredProp: Required<Props> = { a: "a" }; // TSC error

/**
 * Record
 */
interface Values {
  size: number;
  dimensions: number;
}
type Keys = "a" | "b" | "c";
type ObjectType = Record<Keys, Values>;
const obj: ObjectType = {
  a: { size: 2, dimensions: 2 },
  b: { size: 2, dimensions: 2 },
  //  c: { size: 2 }, // TSC error - missing dimensions
  s: { size: 2, dimensions: 2 }, // TSC error - s is not allowed key
};

/**
 * Pick, omit
 */
interface Video {
  id: string;
  name: string;
  pic: string;
  description: string;
}

// type Pick<T, K extends keyof T> = {[P in K]: T[P]};
type VideoPreview = Pick<Video, "id" | "name" | "pic">;

//  pick doesn't allow to include non-existing keys, probably not to create a fall sense of security
type VideoPreviewError = Pick<Video, "non-existing">; //  TSC error

//  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type VideoPreview2 = Omit<Video, "description">;

//  unlike Pick, Omit allows to pass any keys (since K extends keys of any, not just T)
type VideoPreview2Correct = Omit<Video, "non-existing">; // this is fine ️‍🔥

const video: Video = { id: "a", name: "Name", pic: "pic", description: "desc" };
const videoPreview: VideoPreview = { id: "a", name: "Name", pic: "pic" };
const videoPreview2: VideoPreview2 = { id: "a", name: "Name", pic: "pic" };

//  Exclude
//  type Exclude<T, U> = T extends U ? never : T;
type Animals = "cat" | "dog" | "fish" | "eagle";
type Mammals = Exclude<Animals, "fish" | "eagle">; // results in "cat" | "dog"

//  Extract
//  type Extract<T, U> = T extends U ? T : never;
type NonMammals = Extract<Animals, Exclude<Animals, Mammals>>;

//  Parameters
//  type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type param1 = Parameters<() => string>;
type param2 = Parameters<(arr: number[]) => void>;

//  ReturnType
//  type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type stringReturn = ReturnType<() => string>;
type numberArrReturn = ReturnType<() => number[]>;
