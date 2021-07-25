import "./main.css";
import exchangeIcon from "../../images/money-exchange.svg";

function Main() {
  return (
    <div className="page-wrapper">
      <div className="landing-page">
        <div className="landing-component-wrapper">
          <div className="landing-background"></div>
          <div className="landing-content">
            <div className="landing-title">
              <h1>The World's Trusted Currency Authority</h1>
              <p>
                Check exchange rates, send money internationally, and free
                currency tools
              </p>
            </div>
            <div className="exchange-box">
              <div className="box-top">
                <img src={exchangeIcon}></img>
                <h1 className="top-text">Convert</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
