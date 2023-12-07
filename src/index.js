import fruits from "./foods";
import { choice, remove } from "./helpers";

const order = () => {
  let f = choice(fruits);
  console.log(`I would like one ${f}, please.`);
  console.log(`Here you go: ${remove(fruits, f)}`);
  console.log("Delicious! May I have another?");
  console.log(
    `Sorry we're all out. But we do have ${fruits.length} other different fruits left`
  );
  console.log("------------------------------------");
};
order();
order();
order();
order();
order();
order();
order();