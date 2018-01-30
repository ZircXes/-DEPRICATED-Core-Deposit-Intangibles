import delay from './delay';

const portfolios = [
  {
    id: "ni-checking",
    type: "NMD",
    title: "Non-Interest Checking",
    balance: 2142,
    waRate: 0.00,
    truncYear: 10,
    y1Decay: 0.10,
    segments: 1,
    theta: 1,
    decayA: 0.05,
    decayB: 0.00,
    beta: 0.00
  },
  {
    id: "savings",
    type: "NMD",
    title: "Savings Deposits",
    balance: 3052,
    waRate: 0.0060,
    truncYear: 10,
    y1Decay: 0.10,
    segments: 2,
    theta: 0.6,
    decayA: 0.15,
    decayB: 0.05,
    beta: 0.40
  },
  {
    id: "mmda",
    type: "NMD",
    title: "Money-Market Deposit Accounts",
    balance: 6000,
    waRate: 0.0095,
    truncYear: 10,
    y1Decay: 0.10,
    segments: 2,
    theta: 0.6,
    decayA: 0.15,
    decayB: 0.07,
    beta: 0.80
  },  
  {
    id: "sm-time-deposits",
    type: "CD",
    title: "Small Time Deposits",
    balance: 411,
    waRate: 0.012,
    truncYear: 10,
    y1Decay: 0.10,
    segments: 1,
    theta: 1,
    decayA: 0.02,
    decayB: 0.00,
    beta: 0.00
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (portfolio) => {
  return replaceAll(portfolio.title, ' ', '-');
};

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

class PortfolioApi {
  static getAllPortfolios() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], portfolios));
      }, delay);
    });
  }


  static savePortfolio(portfolio) {
    portfolio = Object.assign({}, portfolio); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minPortfolioTitleLength = 1;
        if (portfolio.title.length < minPortfolioTitleLength) {
          reject(`Title must be at least ${minPortfolioTitleLength} characters.`);
        }
  
        if (portfolio.id) {
          const existingPortfolioIndex = portfolios.findIndex(a => a.id == portfolio.id);
          portfolios.splice(existingPortfolioIndex, 1, portfolio);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          portfolio.id = generateId(portfolio);
          portfolios.push(portfolio);
        }
  
        resolve(portfolio);
      }, delay);
    });
  }

}

export default PortfolioApi;