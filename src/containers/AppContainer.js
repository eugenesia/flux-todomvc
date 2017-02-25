// Connect the state from Store to View using a Container.
// See https://facebook.github.io/flux/docs/flux-utils.html#container
import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoDraftStore from '../data/TodoDraftStore';
import TodoEditStore from '../data/TodoEditStore';
import TodoActions from '../data/TodoActions';

function getStores() {
  return [
    TodoEditStore,
    TodoDraftStore,
    TodoStore,
  ];
}

function getState() {
  return {
    // The single draft Todo.
    draft: TodoDraftStore.getState(),
    // Keep track of ID of Todo being edited.
    editing: TodoEditStore.getState(),
    // Previously added Todos.
    todos: TodoStore.getState(),

    // In a Flux app the only place that should have knowledge of Flux is the
    // container, this means we have to define the callbacks in AppContainer
    // and pass them down to AppView, the view does not dispatch the actions
    // directly.
    onAdd: TodoActions.addTodo,
    onDeleteTodo: TodoActions.deleteTodo,
    onDeleteCompletedTodos: TodoActions.deleteCompletedTodos,

    onToggleTodo: TodoActions.toggleTodo,
    onToggleAllTodos: TodoActions.toggleAllTodos,

    onUpdateDraft: TodoActions.updateDraft,

    onStartEditingTodo: TodoActions.startEditingTodo,
    onStopEditingTodo: TodoActions.stopEditingTodo,
    onEditTodo: TodoActions.editTodo,
  }
}

export default Container.createFunctional(AppView, getStores, getState);

