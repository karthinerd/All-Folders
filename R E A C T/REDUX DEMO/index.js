
const Buy_Cake = 'Buy_Cake';

const Buy_IceCream = 'Buy_IceCream'

const redux = require('redux');

const createStore = redux.createStore

const combineReducers = redux.combineReducers

function buyCake() {
  return  {
        type:Buy_Cake ,
    
        info : "First Reduce Action"
    }
    
}

function buyIceCream() {

    return {
    type : Buy_IceCream ,

    info : "Second Reduce Action"
    }

}

/* const initialState = {
    numOfCakes : 10,
    numOfIceCreams : 20
} */

 const initialCakeState = {
    numOfCakes : 10
 }

 const initialIceCreamState = {
    numOfIceCreams : 20
 }

/* const reducer = (state=initialState , action) => {
      switch (action.type) {
        case Buy_Cake : return{
            ...state,
            numOfCakes : state.numOfCakes - 1     }
            case Buy_IceCream : return{
                ...state,
                numOfIceCreams : state.numOfIceCreams- 1     }
        default:
           return state
      }
} */

const cakeReducer = (state=initialCakeState , action) => {
    switch (action.type) {
      case Buy_Cake : return {
          ...state,
          numOfCakes : state.numOfCakes - 1     }       
      default:
         return state
    }
}

const iceCreamReducer = (state=initialIceCreamState , action) => {
    switch (action.type) {
          case Buy_IceCream : return{
              ...state,
              numOfIceCreams : state.numOfIceCreams- 1     }
      default:
         return state
    }
}

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream : iceCreamReducer
})

const store = createStore(rootReducer)

console.log('initial state',store.getState());

const unsubscribe = store.subscribe(()=> console.log('updated State', store.getState()));

store.dispatch(buyCake()) 

store.dispatch(buyCake())

store.dispatch(buyCake())

store.dispatch(buyIceCream())

store.dispatch(buyIceCream())

unsubscribe();

console.log(store.getState());