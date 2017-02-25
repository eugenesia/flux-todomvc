/**
 * Store for a Todo that's being edited.
 */
'use strict';

import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';


// ReduceStore: A Store that reduces the current state and an action, to the
// new state. See https://facebook.github.io/flux/docs/flux-utils.html#reducestore-t
class TodoEditStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  // Called once at the beginning.
  getInitialState() {
    return {
      id: null,
      text: '',
    };
  }

  // Called at every state change.
  reduce(state, action) {
    switch (action.type) {

      // Record the ID of the Todo being edited.
      case TodoActionTypes.START_EDITING_TODO:
        this.setState({
          id: action.id,
          text: action.text,
        });

      case TodoActionTypes.STOP_EDITING_TODO:
        return state;

      default:
        return state;
    }
  }
}

export default new TodoDraftStore();

