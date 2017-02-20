// Connect the state from Store to View using a Container.
// See https://facebook.github.io/flux/docs/flux-utils.html#container
import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';

function getStores() {
  return [
    TodoStore,
  ];
}

function getState() {
  return {
    todos: TodoStore.getState(),
  }
}

export default Container.createFunctional(AppView, getStores, getState);

