function identity<T>(value: T): T {
  return value;
}

let output = identity<string>("Hello");
console.log(output);

let output2 = identity<number>(10);
console.log(output2);

function getValue<k extends string, v>(obj: Record<k, v>, key: k): v {
  return obj[key];
}

let objects = { name: "Tom", age: 20 };

let result = getValue(objects, "name");
