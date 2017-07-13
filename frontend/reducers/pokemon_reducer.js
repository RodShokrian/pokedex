import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = {};

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      Object.entries(action.pokemon).forEach((poke) => {
        newState[poke.id] = poke;
        return newState;
      });

    default:
      return state;
  }
};
export default pokemonReducer;
