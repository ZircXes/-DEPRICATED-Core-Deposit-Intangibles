import React from 'react';
import AboutReferences from './AboutReferences';
import AboutThanks from './AboutThanks';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <h3>Web App Design</h3>
        <p>This application uses React, Redux, React Router and Microsoft Azure Functions (Lambdas).</p>
        <p>Current Version is 0.1 -- Last Updated January 2018.</p>
        <h3>Technical Tool Design</h3>
        <p>This tool is for illustrative benchmarking and educational purposes only and should not be relied on for final documents. This implementation may not capture all of the requirements under GAAP when accounting for Core Deposit Intangibles.</p>
        <h3>Deposit Models</h3>
        <p>This tool allows for both one and two-segment deposit decay models with an initial run-off post merger/acquisition.</p>
        <p>For forward cashflows, I provide two repricing methods: a non-lagged Beta for rate sensitivity and a rate-following (Beta=1.0) method.</p>
        <h3>Core Deposits</h3>
        <p>There are multiple interpretations of Core Deposits. This tool allows the user to input any deposit; however, the recommendation is to use non-maturity and small time-deposits within your geographical footprint; excluding brokered, listing services, or wholesale deposits. This definition is very close to the one used by SNL (S&P Global).</p>
        <h3>Chris Kennedy, CFA</h3>
        <p>I'm a FinTech enthusiast, working in the banking industry; I also am an adjunct professor at a top business school.</p>
        <p>Here are links to my <a href="http://www.github.com/ZircXes" target="_blank">GitHub</a> page and <a href="http://linkedin.com/in/christopherbkennedy" target="_blank"> LinkedIn</a>.</p>
        <AboutThanks/>        
        <AboutReferences/>
      </div>
    );
  }
}

export default AboutPage;
