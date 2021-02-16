const { expect, test } = require("@jest/globals");
const testTargets = require("./animals");
const Cat = testTargets.cat;
const Dog = testTargets.dog;
const greetAnimals = testTargets.greet;

const dogJson = {
  name: "duke",
  breed: "corgi",
  age: 1,
  weight: 22,
  chipId: "55cdac0e-2029-4764-85bd-f2378f87c4cf",
};
const catJson = {
  name: "merlin",
  breed: "maine coon",
  age: 12,
  weight: 17,
  chipId: "55cdac0e-2029-4764-85bd-f2378f87c483",
};
const animalsJson = [dogJson, catJson];

test("Cat class should set name", () => {
  const cat = new Cat(catJson);
  expect(cat.name).toEqual(catJson.name);
});

test("Cat class should greet appropriately", () => {
  const cat = new Cat(catJson);
  expect(cat.greet()).toEqual(`Meow, my name is ${catJson.name}`);
});

test("Dog class should set name", () => {
  const dog = new Dog(dogJson);
  expect(dog.name).toEqual(dogJson.name);
});

test("Dog class should greet appropriately", () => {
  const dog = new Dog(dogJson);
  expect(dog.greet()).toEqual(`Woof, my name is ${dogJson.name}`);
});

test("greetAnimals should greet each animal", () => {
  expect(greetAnimals(animalsJson)).toEqual(
    `Woof, my name is ${dogJson.name}\nMeow, my name is ${catJson.name}`
  );
});
