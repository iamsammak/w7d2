import { REQUEST_TODOS,
         RECEIVE_TODOS,
         receiveTodos } from '../actions/todo_actions';
import {fetchTodos} from '../util/todo_api_util';

const todoMiddleware = ({ getState, dispatch }) => next => action => {

  switch (action.type) {
    case REQUEST_TODOS:
      console.log("here is where todos would be fetched");
      // const success = data => console.log(data);
      const requestSuccess = todos => dispatch(receiveTodos(todos));
      const error = e => console.log(e);
      fetchTodos(requestSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default todoMiddleware;
