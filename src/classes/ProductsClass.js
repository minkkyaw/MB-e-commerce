class Products {
  constructor() {
    this.freshFruits = [];
    this.vegetables = [];
  }

  addFruitItem(item) {
    this.freshFruits.push(item);
  }

  addFruitItems(...items) {
    this.freshFruits = [...this.freshFruits, ...items];
  }

  addVegetableItem(item) {
    this.vegetables.push(item);
  }

  addVegetableItems(...items) {
    this.vegetables = [...this.vegetables, ...items];
  }
}

export default Products;
