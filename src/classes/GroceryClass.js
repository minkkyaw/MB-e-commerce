import Product from "./ProductClass";
import { generateUUID } from "../utils/utilsFunc";

export class Grocery extends Product {
  constructor(
    name,
    subcategory,
    subsubcategory,
    price,
    quantity,
    description,
    imageUrls,
    coverUrl
  ) {
    super(
      name,
      subcategory,
      subsubcategory,
      price,
      description,
      imageUrls,
      coverUrl,
      quantity
    );
    this.id = generateUUID(name);
    this.name = name;
    this.category = "grocery";
    this.subcategory = subcategory;
    this.subsubcategory = subsubcategory;
    this.price = price;
    this.description = description;
    this.imageUrls = imageUrls;
    this.coverUrl = coverUrl;
    this.quantity = quantity;
  }
}

export class FreshFruitsAndVegetables extends Grocery {
  constructor(
    name,
    subsubcategory,
    price,
    quantity,
    description,
    imageUrls,
    coverUrl
  ) {
    super(
      name,
      subsubcategory,
      price,
      quantity,
      description,
      imageUrls,
      coverUrl
    );
    this.id = generateUUID(name);
    this.name = name;
    this.subcategory = "fresh fruits and vegetables";
    this.subsubcategory = subsubcategory;
    this.price = price;
    this.description = description;
    this.imageUrls = imageUrls;
    this.coverUrl = coverUrl;
    this.quantity = quantity;
  }
}

export class Fruit extends FreshFruitsAndVegetables {
  constructor(name, price, quantity, description, imageUrls, coverUrl) {
    super(name, price, quantity, description, imageUrls, coverUrl);
    this.id = generateUUID(name);
    this.subsubcategory = "fresh fruits";
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrls = imageUrls;
    this.coverUrl = coverUrl;
    this.quantity = quantity;
  }
}

export class Vegetable extends FreshFruitsAndVegetables {
  constructor(name, price, quantity, description, imageUrls, coverUrl) {
    super(name, price, quantity, description, imageUrls, coverUrl);
    this.id = generateUUID(name);
    this.subsubcategory = "vegetables";
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrls = imageUrls;
    this.coverUrl = coverUrl;
    this.quantity = quantity;
  }
}
