// Never is a bottom type from the set theory. It's the opposite of unknown (top type).

// It's an identity element
type stringType = string;
type stillStringType = stringType | never; //  T => still just string
type unknownType = stringType | unknown; //  T => unkwon
type againStringType = stringType | unknown; //  T => still just string

function throwError(msg: string): never {
  throw new Error(msg);
}

function timeout(ms: number): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Time elapsed.")), ms);
  });
}

function fetchStock(ticketSymbol: string): Promise<{ price: number }> {
  return new Promise((resolve) => {
    resolve({ price: 1000 });
  });
}

//  returns Promise<number> since the timeout promise does not extend possible return type
//  function race<A, B>(inputs: [Promise<A>, Promise<B>]): Promise<A | B>
async function fetchPriceWithTimeout(tickerSymbol: string): Promise<number> {
  const stock = await Promise.race([
    fetchStock(tickerSymbol), // returns `Promise<{ price: number }>`
    timeout(3000),
  ]);
  return stock.price;
}

function sayHi(msg: string): void {
  console.log(msg);
  //  returns undefined
}
