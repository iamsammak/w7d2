
import {RECEIVE_TODOS} from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  let newState = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      // action.todos.forEach(function (todo) {
      //   newState[todo.id] = todo;
      // });
      action.todos.forEach(todo => newState[todo.id] = todo);
      return newState;
    default:
      return state;
  }
};
//
// const defaultState = {
//   "1": {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   "2": {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   },
// };

export default todosReducer;
