// Connect the state from Store to View using a Container.
// See https://facebook.github.io/flux/docs/flux-utils.html#container
import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions';

function getStores() {
  return [
    TodoStore,
  ];
}

function getState() {
  return {
    todos: TodoStore.getState(),

    // In a Flux app the only place that should have knowledge of Flux is the
    // container, this means we have to define the callbacks in AppContainer
    // and pass them down to AppView, the view does not dispatch the actions
    // directly.
    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,
  }
}

export default Container.createFunctional(AppView, getStores, getState);

