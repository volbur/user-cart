export default {
  addProductToCart(state, payload) {
    const productData = payload;
    const productInCartIndex = state.items.findIndex(
      ci => ci.productId === productData.id
    );

    if (productInCartIndex >= 0) {
      state.items[productInCartIndex].quantity++;
    } else {
      const newItem = {
        productId: productData.id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
        quantity: 1
      };
      state.items.push(newItem);
    }
    state.quantity++;
    state.total += productData.price;
  }
};
