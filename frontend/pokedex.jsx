import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.store = store;
  window.dispatch = store.dispatch;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
