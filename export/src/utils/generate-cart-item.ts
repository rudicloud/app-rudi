import isEmpty from 'lodash/isEmpty';
interface Item {
  id: string | number;
  name: string;
  slug: string;
  image_original: string;
  price: number;
  sale_price?: number;
  quantity?: number;
  [key: string]: unknown;
}
interface Variation {
  id: string | number;
  title: string;
  price: number;
  sale_price?: number;
  quantity: number;
  [key: string]: unknown;
}
export function generateCartItem(item: Item, variation: Variation) {
  const { id, name, slug, image_original, price, sale_price, quantity, unit } =
    item;
  if (!isEmpty(variation)) {
    return {
      id: `${id}.${variation.id}`,
      productId: id,
      name: `${name} - ${variation.title}`,
      slug,
      unit,
      stock: variation.quantity,
      price: variation.sale_price ? variation.sale_price : variation.price,
      image_original: image_original,
      variationId: variation.id,
    };
  }
  return {
    id,
    name,
    slug,
    unit,
    image_original: image_original,
    stock: quantity,
    price: sale_price ? sale_price : price,
  };
}
