const CART_ITEM_KEY = "cart-items";
export function createCartLocal() {
  localStorage.setItem(CART_ITEM_KEY, JSON.stringify([]));
}

export function getCartLocal() {
  const data = JSON.parse(localStorage.getItem(CART_ITEM_KEY)) || [];
  return data;
}

export function setCartItem(cartData) {
  localStorage.setItem(CART_ITEM_KEY, JSON.stringify(cartData));
}

export function resetCartItem() {
  localStorage.setItem(CART_ITEM_KEY, JSON.stringify([]));
}

export function addSingleProductToCart(data) {
  const oldData = getCartLocal();
  let isNew = false;
  const updatedData = oldData.map((prod) => {
    if (prod._id == data._id) {
      isNew = true;
      return { ...prod, quantity: ++prod.quantity };
    } else {
      return prod;
    }
  });

  if (!isNew) {
    updatedData.push({ _id: data._id, quantity: 1 });
  }

  setCartItem(updatedData);
}

export function manipulateQuantityById(id, isInc = true) {
  const updatedCart = getCartLocal().map((prod) => {
    if (prod._id == id) {
      const quantity = isInc ? ++prod.quantity : --prod.quantity;
      console.log(quantity);
      return {
        ...prod,
        quantity,
      };
    } else {
      return prod;
    }
  });
  console.log(updatedCart);
  setCartItem(updatedCart);
}
