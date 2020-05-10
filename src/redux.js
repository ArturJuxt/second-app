import { createStore } from "redux";
import uuid from "uuid/v4";

const initialState = {
  todos: [
    {
      id: uuid(),
      name: "To go the gim",
      complete: false,
    },
    {
      id: uuid(),
      name: "Do laudry",
      complete: true,
    },
  ],
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

function reducer(state, { type, payload }) {
    console.log('type', type);
    console.log('payload', payload);
    
  switch (type) {
    case "ADD_TODO":
        console.log('state', state);
        
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
}

export const addTodoAction = (todo) => ({
    type: "ADD_TODO",
    payload: todo
});

export const toggleTodoAction = todoid => ({
    type: "TOGGLE_TODO",
    payload: todoid
});
export const deleteTodoAction = todoid => ({
    type: "DELETE_TODO",
    payload: todoid
});
