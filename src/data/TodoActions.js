// Each function dispatches an action.

import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {

  addTodo(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text,
    });
  },

  deleteTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_TODO,
      id,
    });
  },

  toggleTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_TODO,
      id,
    });
  },

  // Update the draft todo with new text.
  updateDraft(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.UPDATE_DRAFT,
      text,
    });
  },

  // Delete completed todos.
  deleteCompletedTodos() {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_COMPLETED_TODOS,
    });
  }
};

export default Actions;

