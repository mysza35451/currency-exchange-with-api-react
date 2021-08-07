import "./main.css";
import exchangeIcon from "../../images/money-exchange.svg";
import React, { Component } from "react";

const axios = require("axios");

function getData() {
  let from = document.getElementById("from-currency").value;
  let to = document.getElementById("to-currency").value;
  let value = document.getElementById("amount").value;

  console.log("values passed: " + from + " " + to + " " + value);

  var options = {
    method: "GET",
    url: "https://currency-exchange.p.rapidapi.com/exchange",
    params: { to: to, from: from, q: value },
    headers: {
      "x-rapidapi-key": "c4a656f2c4msh42c8dc413eeae46p14338cjsn4fedbdefa51c",
      "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
    },
  };

  console.log(options.params);

  axios
    .request(options)
    .then(function (response) {
      alert("The converted value is: " + response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    let startValues = [
      "SGD",
      "MYR",
      "EUR",
      "USD",
      "AUD",
      "JPY",
      "CNH",
      "HKD",
      "CAD",
      "INR",
      "DKK",
      "GBP",
      "RUB",
      "NZD",
      "MXN",
      "IDR",
      "TWD",
      "THB",
      "VND",
    ];
    let finalValues = [];
    startValues.forEach((element) => {
      let arrayElement = { id: element };
      finalValues.push(arrayElement);
    });

    this.state = {
      currencies: finalValues,
    };
  }

  componentDidMount() {
    var options = {
      method: "GET",
      url: "https://currency-exchange.p.rapidapi.com/listquotes",
      headers: {
        "x-rapidapi-key": "c4a656f2c4msh42c8dc413eeae46p14338cjsn4fedbdefa51c",
        "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(async function (response) {
        console.log(response.data);
        let responseData = [
          "SGD",
          "MYR",
          "EUR",
          "USD",
          "AUD",
          "JPY",
          "CNH",
          "HKD",
          "CAD",
          "INR",
          "DKK",
          "GBP",
          "RUB",
          "NZD",
          "MXN",
          "IDR",
          "TWD",
          "THB",
          "VND",
        ];
        let fullCurrencyList = [{ id: "" }];
        await responseData.data.forEach((element) => {
          let currencyItem = { id: element };
          fullCurrencyList.push(currencyItem);
        });
        // console.log(this.state.currencies);
        this.setState({
          currencies: fullCurrencyList,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  fetchSelectData = function () {};

  render() {
    const { currencies } = this.state;

    let currenciesList =
      currencies.length > 0 &&
      currencies.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.id}
          </option>
        );
      }, this);

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

                <div className="box-bottom">
                  <div className="amount-wrapper">
                    <label htmlFor="amount">Amount:</label>
                    <input name="amount" id="amount" placeholder="1.00"></input>
                  </div>

                  <div className="from-currency-wrapper">
                    <label htmlFor="from-currency">From:</label>
                    <select name="from-currency" id="from-currency">
                      {currenciesList}
                    </select>
                  </div>

                  <div className="to-currency-wrapper">
                    <label htmlFor="to-currency">To:</label>
                    <select name="to-currency" id="to-currency">
                      {currenciesList}
                    </select>
                  </div>
                  <button onClick={getData}>GET DATA</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
