import { generateUUID } from "../utils/utilsFunc";
function Product(
  name,
  category,
  subcategory,
  subsubcategory,
  price,
  imageUrls,
  coverUrl,
  description,
  quantity
) {
  this.id = generateUUID(name);
  this.name = name;
  this.category = category;
  this.subcategory = subcategory;
  this.subsubcategory = subsubcategory;
  this.price = price;
  this.description = description;
  this.imageUrls = imageUrls;
  this.coverUrl = coverUrl;
  this.quantity = quantity;
}

export default Product;
