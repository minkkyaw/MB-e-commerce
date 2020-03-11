import React from "react";
import PropTypes from "prop-types";

import Products from "../classes/ProductsClass";
import { Fruit, Vegetable } from "../classes/GroceryClass";
import ProductItem from "../components/product-item/ProductItem";

const products = new Products();

const apple = new Fruit("apple", 1, 10, "It is a good fruit.");
const orange = new Fruit("orange", 0.8, 11, "It is a little sour.");
const banana = new Fruit(
  "banana",
  0.2,
  110,
  "It is a sweet fruit. You can't eat the outer skin"
);
const pineapple = new Fruit(
  "pineapple",
  3,
  21,
  "It is a little sour and sweet. The appearance looks ugly."
);
const peach = new Fruit(
  "peach",
  0.5,
  31,
  "It is a good fruit. You can also eat its fuzzy textured skin"
);

products.addFruitItems(apple, orange, banana, pineapple, peach);

const carrot = new Vegetable("carrot", 0.5, 100, "It is good for eye.");
const cabbage = new Vegetable("cabbage", 1.2, 120, "It is good to eat.");
const corn = new Vegetable("corn", 1, 150, "It is sweet.");
const potato = new Vegetable(
  "potato",
  0.5,
  100,
  "It is used to make meshed potato."
);
const aspagaragus = new Vegetable("aspagaragus", 2, 170, "It is .....");

products.addVegetableItems(carrot, cabbage, corn, potato, aspagaragus);

const Home = props => {
  return (
    <div>
      <div style={{ padding: 20 }}>
        <h1>Fresh Fruits</h1>
        <div style={{ display: "flex", flexWrap: "nowrap" }}>
          {products.freshFruits.map((fruit, i) => (
            <ProductItem key={i + fruit.name} item={fruit} />
          ))}
        </div>
      </div>
      <div style={{ padding: 20 }}>
        <h1>Vegetables</h1>
        <div style={{ display: "flex", flexWrap: "nowrap" }}>
          {products.vegetables.map((fruit, i) => (
            <ProductItem key={i + fruit.name} item={fruit} />
          ))}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
