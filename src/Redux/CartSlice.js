import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [] },
    reducers: {
        addTocart: (state, action) => {
            const newItem = action.payload;

            // Find index of the item in the cart
            const existingItemIndex = state.items.findIndex(item => item._id === newItem._id);

            if (existingItemIndex !== -1) {
                // If item already exists in cart, increase its quantity
                state.items[existingItemIndex].quantity++;
            } else {
                // If item doesn't exist in cart, add it with quantity 1
                state.items.push({ ...newItem, quantity: 1 });
            }
        },
        // Other reducers like removeFromCart, increaseQuantity, decreaseQuantity can be added here
        decreaseQuantity: (state, action) => {
          const itemIndex = state.items.findIndex(item => item._id === action.payload);
          if (itemIndex !== -1) {
              if (state.items[itemIndex].quantity > 1) {
                  state.items[itemIndex].quantity--;
              } else {
                  // If item quantity becomes 0, remove it from the cart
                  state.items.splice(itemIndex, 1);
              }
          }
      },
      increaseQuantity: (state, action) => {
        const itemIndex = state.items.findIndex(item => item._id === action.payload);
        if (itemIndex !== -1) {
            // Increase quantity if it's less than 10
            if (state.items[itemIndex].quantity < 10) {
                state.items[itemIndex].quantity++;
            }
        }
    },
    }
    
});

export const { addTocart ,decreaseQuantity,increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
