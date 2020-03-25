export const addItemToCart = (cartItems, cartItemToAdd) => {
  // Check if item is already in the cart
  const exists = cartItems.find(item => item.id === cartItemToAdd.id);

  // Increase quantity
  if (exists) {
    return cartItems.map(item => (item.id === cartItemToAdd.id 
      ? { ...item, quantity: item.quantity+1 }
      : item ));
  }
  // Add item

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}