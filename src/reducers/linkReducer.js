import { v4 as uuidv4 } from 'uuid';

export const linkReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LINK':
      return [...state, {
        date: action.link.date,
        id: uuidv4(),
        name: action.link.name,
        url: action.link.url,
        vote: 0,
        lastVoteDate: action.link.date,
      }]
    case 'REMOVE_LINK':
      return state.filter(link => link.id !== action.id)
    case 'UP_VOTE':
      const itemIndexUp = state.findIndex(link => link.id === action.id);
      state[itemIndexUp].vote = state[itemIndexUp].vote + 1;
      state[itemIndexUp].lastVoteDate = action.lastVoteDate;
      return [...state]
    case 'DOWN_VOTE':
      const itemIndexDown = state.findIndex(link => link.id === action.id);
      state[itemIndexDown].vote = state[itemIndexDown].vote - 1;
      state[itemIndexUp].lastVoteDate = action.lastVoteDate;
      return [...state]
    default:
      return state
  }
}