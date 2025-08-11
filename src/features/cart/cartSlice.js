import { createSlice } from "@reduxjs/toolkit";

// this is the cart slice in redux, it will manage the card state

const cartSlice = createSlice({
    name: 'cart',

    // Initial cart is an empty array
    initialState: [],

    reducers: {
        addToCart: (state, action) => {
            // Adds a product to the cart or increases quantity if already exists
            const newItem = action.payload;

            const item = state.find((i) => i.id === newItem.id);

            if (item) {
                item.quantity += 1;
            }
            else {
                state.push({...newItem, quantity: 1})
            }
        },

        removeFromCart: (state, action) => {
            // Removes an item completely from the cart
            return state.filter((item) => item.id !== action.payload.id)
        },

        clearCart: () => {
            // Clears the entire cart
            return [];
        },

        decrementQuantity: (state, action) => {
            // Decreases quantity, and removes item if quantity reaches 0
            const itemId = action.payload.id;

            const item = state.find((i) => i.id === itemId);

            if(item) {
                item.quantity =- 1;

                // remove item if quantity becomes 0
                if (item.quantity <= 0) {
                    return state.filter(i => i.id !== itemId)
                }
            }
        }
    }
})


// (parameter) action: {
//     payload: any;
//     type: string;
// }

// here is what a new product will look like
// {
//     "id": 4,
//     "title": "Handmade Fresh Table",
//     "slug": "handmade-fresh-table",
//     "price": 687,
//     "description": "Andy shoes are designed to keeping in...",
//     "category": {
//       "id": 5,
//       "name": "Others",
//       "image": "https://placehold.co/600x400",
//       "slug": "others"
//     },
//     "images": [
//       "https://placehold.co/600x400",
//       "https://placehold.co/600x400",
//       "https://placehold.co/600x400"
//     ]
//   }

// Export actions to use in components
const { addToCart, removeFromCart, clearCart, decrementQuantity } = cartSlice.actions;

// Export reducer to include in store
export default cartSlice.reducer;