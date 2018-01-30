import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function portfolioReducer(state = initialState.portfolios, action) {
  switch (action.type) {
    case types.LOAD_PORTFOLIOS_SUCCESS:
      return action.portfolios;

      case types.CREATE_PORTFOLIO_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.portfolio)
      ];

    case types.UPDATE_PORTFOLIO_SUCCESS:
      return [
        ...state.filter(portfolio => portfolio.id !== action.portfolio.id),
        Object.assign({}, action.portfolio)
      ];

    default:
      return state;
  }
}

