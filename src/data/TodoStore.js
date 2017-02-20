// Store for all our to-dos.

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

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
        // Do nothing for now, we will add logic here soon!
        return state;

      default:
        return state;
    }
  }
}

export default new TodoStore();


