class Person {
  name: String;
}

const jill: { name: string } = { name: "jill" };
const person: Person = jill;

console.log(person);
