import { configureStore, createSlice } from "@reduxjs/toolkit";


// Product Slice
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: 'Arugula', price: 79.99,image:"http://www.seasonsandsuppers.ca/wp-content/uploads/2010/06/arugula.jpg"},
            { name: 'Brinjal', price: 80.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.v9xh2rnmlG2WClFbCLrU8AHaHa&pid=Api&P=0&h=180"},
            { name: 'beets', price: 89.99,image:"https://i1.wp.com/baybranchfarm.com/wp-content/uploads/2018/12/redbeets.jpg?fit=2000%2C2000&ssl=1"},
            { name: 'Bell peppers', price: 99.99,image:"https://images.freeimages.com/images/large-previews/d21/bell-peppers-1329005.jpg"},
            { name: 'BitterGaurd', price: 99.9 ,image:"https://tse3.mm.bing.net/th?id=OIP.F5T7VfUkGNw7V7EgkSLsrwHaD3&pid=Api&P=0&h=180"},
            { name: 'Broccoli', price: 159.99,image:"https://images6.alphacoders.com/658/658529.jpg"},
            { name: 'Corn', price: 39.99,image:"https://tse3.mm.bing.net/th?id=OIP.TAdCIdNs4s0396lj8MFqNQHaE6&pid=Api&P=0&h=180"},
            { name: 'cauliflowers', price: 69.99,image:"https://c8.alamy.com/comp/2AXEHGE/cauliflowers-on-a-market-stall-2AXEHGE.jpg"},
            { name: 'Celery', price: 79.99,image:"https://images.saymedia-content.com/.image/t_share/MTc2MjQ3MjYxOTMwNTMwMjE3/health-benefits-of-celery.jpg"},
            { name: 'Carrot', price: 79.8 , image:"https://tse3.mm.bing.net/th?id=OIP.h8ISIodUaQRtSBU06KkvPwHaGr&pid=Api&P=0&h=180"},
            { name: 'Cucumber', price: 79.99,image:"https://images.fineartamerica.com/images-medium-large-5/basket-of-cucumbers-michael-moriarty.jpg"},
            { name: 'Esarole ', price: 119.99,image:"https://www.mashed.com/img/gallery/the-difference-between-endive-and-escarole/intro-1619281786.jpg"},
            { name: 'French Beans', price: 159.99,image:"https://thumbs.dreamstime.com/b/french-beans-17364333.jpg"},
            { name: 'Green Beans', price: 129.99,image:"https://thumbs.dreamstime.com/b/fresh-green-beans-21791876.jpg"},
            { name: 'Ginger', price: 139.99,image:"https://static.india.com/wp-content/uploads/2021/02/ginger-1.jpg"},
            { name: 'Green peas', price: 159.99,image:"https://tse1.mm.bing.net/th?id=OIP.UCG1j-dYQvCvt0lloQcKNQHaEK&pid=Api&P=0&h=180"},
            { name: 'Garlic', price: 299.99,image:"https://cdn.pixabay.com/photo/2020/09/15/07/05/garlic-5572882_1280.jpg"},
            { name: 'Lentils', price: 199.99,image:"https://northernnester.com/wp-content/uploads/2021/01/types-of-lentils.jpg"},
            { name: 'Onion', price: 149.8 ,image:"https://tse4.mm.bing.net/th?id=OIP.VX-fRronTA0KV1puV3fvkAHaE8&pid=Api&P=0&h=180"},
            { name: 'Parsley', price: 159.99,image:"https://www.housedigest.com/img/gallery/how-to-grow-and-care-for-your-own-parsley-plant/l-intro-1676921688.jpg"},
            { name: 'Potato', price: 59.8 , image:"https://tse3.mm.bing.net/th?id=OIP.xdxwjQ_mSva9hgccLToezgHaE9&pid=Api&P=0&h=180"},
            { name: 'Pumpkin', price: 199.8 , image:"https://img.washingtonpost.com/rw/2010-2019/WashingtonPost/2014/10/24/Food/Images/pumpkins171414111212.jpg"},
            { name: 'Sweet Potato', price: 119.8 , image:"https://naads.or.ug/wp-content/uploads/2020/09/sweet-potatoes1.jpg"},
            { name: 'Spinach', price: 179.8 , image:"https://nationaltoday.com/wp-content/uploads/2022/05/3-Spinach.jpg"},
            { name: 'MushRoom', price: 159.8 ,image:"https://tse3.mm.bing.net/th?id=OIP.M4vr-t_PxdlTvg6zdVHbDQHaE9&pid=Api&P=0&h=180"},
            { name: 'Tomato', price: 199.5 ,image: "https://tse3.mm.bing.net/th?id=OIP.VLq0kRvM53MGoT7XMmwLOwHaE8&pid=Api&P=0&h=180" },
            { name: 'Turnips', price: 209.5 ,image: "https://tse2.mm.bing.net/th?id=OIP.5PUUV7_E42wBsqfiHxXkFwHaFj&pid=Api&P=0&h=180" },
            { name: 'Watercress', price: 119.5 ,image: "https://image.freepik.com/free-photo/watercress-bamboo-basket-white-background_51524-17099.jpg" }
             
        ],
        nonVeg: [
            { name: 'chicken-65', price: 200.5 ,image:"https://tse2.mm.bing.net/th?id=OIP.PVuUzNdXnMDyA5QFOydFlwHaEK&pid=Api&P=0&h=180"},
            { name: 'Fish-Fry', price: 100.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.Utz-BhMyLk1FzUaqx3nilgHaHa&pid=Api&P=0&h=180"},
            { name: 'Biryani', price: 100.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.RzJfmrSX00YO7lRLmf7GiAHaE8&pid=Api&P=0&h=180"},
            { name: 'Chicken-lolipop', price: 80.8 ,image:"https://tse3.mm.bing.net/th?id=OIP.JPqhOa2yWScL4xERS-DPUgHaIH&pid=Api&P=0&h=180"},
            { name: 'Egg-rice', price: 90.8 ,image:"https://thefoodietakesflight.com/wp-content/uploads/2021/08/Easy-Vegan-Soy-Sauce-Egg-Fried-Rice-Recipe-8-of-24.jpg"},
            { name: 'Prawns', price: 150.8 ,image:"https://tse2.mm.bing.net/th?id=OIP.RY3kKMMz9HW7xltludKTeAHaE8&pid=Api&P=0&h=180"},
            { name: 'Tuna-Fish', price: 150.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.ij4Az0ynCSPQAiiC03_B5AHaD1&pid=Api&P=0&h=180"},
            { name: 'Mutton', price: 150.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.tWalUWrEPWfd4J7oDUiZPgHaFR&pid=Api&P=0&h=180"},
            { name: 'Pork', price: 150.8 ,image:"https://tse3.mm.bing.net/th?id=OIP.d1I5yjX-mJhdUfVPtESljwHaE8&pid=Api&P=0&h=180"},
            { name: 'Lamb', price: 150.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.I3eqIWB7xpZ3w4JwCET8WQHaD_&pid=Api&P=0&h=180"}
        ],
        milk: [
            { name: 'Jelabi', price: 50.5 ,image:"https://tse2.mm.bing.net/th?id=OIP.ALNVrDctDELKjmqSe9uniQHaFh&pid=Api&P=0&h=180"},
            { name: 'Gulab-Jamun', price: 80.8 ,image:"https://tse4.mm.bing.net/th?id=OIP.nTBxcq-XpKASURFqCg__bAHaHa&pid=Api&P=0&h=180"},
            { name: 'Rasgulla', price: 150 ,image:"https://tse1.mm.bing.net/th?id=OIP.LZBb3ayeVGrl6aE_4FBH6wHaLH&pid=Api&P=0&h=180"},
            { name: 'Rasmalai', price: 150.8 ,image:"https://tse3.mm.bing.net/th?id=OIP.9fhCy5FZcUbfl6QPli-mmQHaE8&pid=Api&P=0&h=180"},
            { name: 'Double-ka-meta', price: 150.8 ,image:"https://tse1.mm.bing.net/th?id=OIP.h5Azz6kDFK_DR0ZG4IxVKQHaEg&pid=Api&P=0&h=180"},
            { name: 'Cham-cham', price: 150.8 ,image:"https://tse2.mm.bing.net/th?id=OIP.K1VlJHwCr3QtdiVnctKUogHaEK&pid=Api&P=0&h=180"},
            { name: 'Ice cream', price: 150.8 ,image:"https://tse4.mm.bing.net/th?id=OIP.TcQ0vEAye_t8lWFhKNopQQHaEo&pid=Api&P=0&h=180"}
        ]
    },
    reducers: {}
});

// Cart Slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if(item) {
                item.quantity += 1;
            } else {
                state.push({...action.payload, quantity: 1});
            }
        },
        increment: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if(item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if(item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                return state.filter(item => item.name !== action.payload.name);
            }
        },
        remove: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
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

const timerSlice = createSlice({
    name: 'timer',
    initialState: {
      timeLeft: 300 // 15 minutes in seconds
    },
    reducers: {
      decrementTime: (state) => {
        if(state.timeLeft > 0) state.timeLeft -= 1;
      },
      resetTimer: (state) => {
        state.timeLeft = 300;
      }
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
        timer: timerSlice.reducer,
        auth:authSlice.reducer
    }
});

export const { addToCart, increment, decrement, remove, clearCart } = cartSlice.actions;
export const { purchageDetailsReducer } = OrdersSlice.actions;
export const { decrementTime, resetTimer } = timerSlice.actions;
export const {login,logout} = authSlice.actions;
export default store;
