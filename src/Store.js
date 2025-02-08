import { configureStore, createSlice } from "@reduxjs/toolkit";


// Product Slice
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: 'Tomato', price: 200.5 ,image: "public/tomato.jpg" },
            { name: 'Potato', price: 100.8 , image:"public/potato.jpg"},
            { name: 'Carrot', price: 150.8 , image:"public/carrot.jpg"},
            { name: 'Onion', price: 150.8 ,image:"public/onion.jpg"},
            { name: 'Brinjal', price: 150.8 ,image:"public/brinjal.jpg"},
            { name: 'Peas', price: 150.8 ,image:"public/peas.jpg"},
            { name: 'BitterGaurd', price: 150.8 ,image:"public/bittergaurd.jpg"},
            { name: 'MushRoom', price: 150.8 ,image:"public/mushroom.jpg"}
        ],
        nonVeg: [
            { name: 'chicken-65', price: 200.5 ,image:"public/Chicken-65.jpg"},
            { name: 'Fish-Fry', price: 100.8 ,image:"public/fishfry.jpeg"},
            { name: 'Biryani', price: 150.8 ,image:"public/biryani.jpg"},
            { name: 'Chicken-lolipop', price: 150.8 ,image:"public/chickenlolipop.jpeg"},
            { name: 'Egg-rice', price: 150.8 ,image:"public/eggrice.jpg"},
            { name: 'Prawns', price: 150.8 ,image:"public/Prawn.jpg"}
        ],
        milk: [
            { name: 'Jelabi', price: 50.5 ,image:"public/jalebi.jpeg"},
            { name: 'Gulab - Jamun', price: 80.8 ,image:"public/jamun.jpeg"},
            { name: 'Rasgulla', price: 150 ,image:"public/Rasgulla.webp"},
            { name: 'Rasmalai', price: 150.8 ,image:"public/rasmalai.jpg"},
            { name: 'Motichoor-Laddoo', price: 150.8 ,image:"public/Motichoor.jpg"},
            { name: 'Kalakand', price: 150.8 ,image:"public/kalakand.jpeg"},
            { name: 'Doodh-Mithi-Fini', price: 150.8 ,image:"public/mithifini.webp"}
        ]
    },
    reducers: {}
});

// Cart Slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart:(state,action)=>{
            const item = state.find(item=>item.name === action.payload.name)
            if(item)
            {
                item.quantity += 1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
            },
            increament:(state,action)=>{
                const item = state.find(item=>item.name === action.payload.name)
                if(item)
                {
                    item.quantity +=1;
                }
            },
            decreament:(state,action)=>{
                const item = state.find(item=>item.name === action.payload.name)
                if(item && item.quantity>1)
                {
                    item.quantity -= 1;
                }
                else{
                    return state.filter(item=>item.name !== action.payload.name)
                }
            },
            remove:(state,action) =>{
                return state.filter(item=>item.name !== action.payload.name)
            },
            clearCart: () => []
    }
});

// Orders Slice
const OrdersSlice = createSlice({
    name: "orders",
    initialState: [],
    reducers: {
        purchageDetailsReducer: (state, action) => { state.push(action.payload); },
        
    }
});


//AuthSlice
const authSlice = createSlice({
   name:"auth",
   initialState:{
    isAuthenticated : localStorage.getItem("username") ? true : false,
    user : localStorage.getItem("username") || "",   //get Stored username
   },
   reducers:{
    login:(state,action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        localStorage.setItem("username",action.payload);  //storing in localStorage
    },
    logout:(state) => {
        state.isAuthenticated = false,
        state.user = "";
        localStorage.removeItem("username");  //clearing from localStorage
    }


   }
})

// Configure Store
const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
        orders: OrdersSlice.reducer,
        auth:authSlice.reducer
    }
});

export const { addToCart, increament, decreament, remove,clearCart } = cartSlice.actions;
export const { purchageDetailsReducer } = OrdersSlice.actions;
export const {login,logout} = authSlice.actions;
export default store;
