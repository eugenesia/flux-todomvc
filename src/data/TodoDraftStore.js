/**
 * Store for a new Todo.
 */
'use strict';

import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';


// ReduceStore: A Store that reduces the current state and an action, to the
// new state. See https://facebook.github.io/flux/docs/flux-utils.html#reducestore-t
class TodoDraftStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  // Called once at the beginning.
  getInitialState() {
    return '';
  }

  // Called at every state change.
  reduce(state, action) {
    switch (action.type) {

      // Update draft to newly entered text.
      case TodoActionTypes.UPDATE_DRAFT:
        return action.text;

      // Clear draft contents becos Todo was added and is no longer a draft.
      case TodoActionTypes.ADD_TODO:
        return '';

      default:
        return state;
    }
  }
}

export default new TodoDraftStore();

