import * as types from './actionTypes';
import PortfolioApi from '../api/mockPortfolioApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadPortfoliosSuccess(portfolios) {
    return { type: types.LOAD_PORTFOLIOS_SUCCESS, portfolios};
}
  
export function createPortfolioSuccess(portfolio) {
    return {type: types.CREATE_PORTFOLIO_SUCCESS, portfolio};
}
  
export function updatePortfolioSuccess(portfolio) {
    return {type: types.UPDATE_PORTFOLIO_SUCCESS, portfolio};
}

export function loadPortfolios() {
  return function(dispatch) {
    dispatch(beginAjaxCall());

    return PortfolioApi.getAllPortfolios().then(portfolios => {
      dispatch(loadPortfoliosSuccess(portfolios));
    }).catch(error => {
      throw(error);
    });
  };
}

export function savePortfolio(portfolio) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return PortfolioApi.savePortfolio(portfolio).then(portfolio => {
      portfolio.id ? dispatch(updatePortfolioSuccess(portfolio)) :
        dispatch(createPortfolioSuccess(portfolio));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
