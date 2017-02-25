// Store for all our to-dos.

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

import Counter from '../data/Counter';
import Todo from '../data/Todo';


// ReduceStore: A Store that reduces the current state and an action, to the
// new state. See https://facebook.github.io/flux/docs/flux-utils.html#reducestore-t
class TodoStore extends ReduceStore {

  constructor() {
    super(TodoDispatcher);
  }

  // Called once at the beginning.
  getInitialState() {
    // Immutable map.
    return Immutable.OrderedMap();
  }

  // Called at every state change.
  reduce(state, action) {
    switch (action.type) {

      case TodoActionTypes.ADD_TODO:
        // Don't add todos with no text.
        if (! action.text) {
          return state;
        }
        const id = Counter.increment();

        // Runs Immutable.Map.set() and sets the map value to a new Todo
        // instance, with key id.
        return state.set(id, new Todo({
          id,
          text: action.text,
          complete: false,
        }));

      case TodoActionTypes.DELETE_TODO:
        return state.delete(action.id);

      case TodoActionTypes.TOGGLE_TODO:
        // Immutable.Map.update().
        return state.update(
          action.id,
          todo => todo.set('complete', ! todo.complete),
        );

      case TodoActionTypes.TOGGLE_ALL_TODOS:
        const allAreComplete = state.every(todo => todo.complete);
        return state.map(todo => todo.set('complete', ! allAreComplete));

      // Return only incomplete Todos.
      case TodoActionTypes.DELETE_COMPLETED_TODOS:
        return state.filter(todo => ! todo.complete);

      // Find the edited Todo by ID, and set its text.
      case TodoActionTypes.EDIT_TODO:
        return state.setIn([action.id, 'text'], action.text);

      default:
        return state;
    }
  }
}

export default new TodoStore();


