import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import PortfoliosPage from './components/portfolio/PortfoliosPage';
import MarketsPage from './components/markets/MarketsPage';
// import AssetsPage from './components/assets/AssetsPage';
// import ManageAssetPage from './components/assets/ManageAssetPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="portfolios" component={PortfoliosPage} />
    <Route path="markets" component={MarketsPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);

// <Route path="assets" component={AssetsPage} />
// <Route path="asset" component={ManageAssetPage} />
// <Route path="asset/:id" component={ManageAssetPage} />