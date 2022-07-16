import { createStore } from "redux";

const intialState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = () => ({
  type: CHANGE_TEXT,
});

const addToList = () => ({
  type: ADD_TO_LIST,
});

function reducer(state = intialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
//현재 스토어 안에있는 스테이트 조회
console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
//unsubscribe();

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("hello"));
store.dispatch(addToList({ id: 1, text: "wow" }));

window.store = store;
window.unsubscribe = unsubscribe;
