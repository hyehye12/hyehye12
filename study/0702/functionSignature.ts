// type Run2 = (miles: number) => boolean;
// let runner: Run2 = function (miles: number): boolean {
//   if (miles > 10) {
//     return true;
//   }
//   return false;
// };
// console.log(runner(9));

// type Greet = (name: string) => string;
// const greet2: Greet = (name) => `Hello, ${name}`;
// console.log(greet2("Tom"));

function log(message: string, user?: string) {
  console.log(`${user ?? "system"}: ${message}`);
}
log("Hello");
log("Hello", "Tom");
