import Cookie from "js-cookie";

export const collectIdsAndDocs = (doc) => ({ ...doc.data(), id: doc.id });

export const saveToCart = (cart) => {
  Cookie.set("cart", JSON.stringify(cart));
};
