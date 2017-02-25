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

  // Toggle all Todos.
  toggleAllTodos() {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_ALL_TODOS,
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
  },

  // Start editing an existing todo.
  startEditingTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.START_EDITING_TODO,
      id,
    })
  },

  // Stop editing an existing todo.
  stopEditingTodo() {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.STOP_EDITING_TODO,
      id,
    })
  },

  editTodo(id, text) {
    TodoDispatcher.dispatch(
      type: TodoActionTypes.EDIT_TODO,
      id,
      text,
    );
  }
};

export default Actions;

