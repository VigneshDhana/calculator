import React, { useState } from "react";
import "./App.css";

function App() {
  const [string, setString] = useState("");
  return (
    <div className="App">
      <div className="calculator">
        <div className="title">
          <h1>CALCULATOR</h1>
        </div>
        <div className="top">
          <div className="input">
            <input type="text" value={string} />
          </div>
          <div
            className="reset"
            onClick={() => {
              setString("");
            }}
          >
            C
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <td
                onClick={() => {
                  setString(string + "1");
                }}
              >
                1
              </td>
              <td
                onClick={() => {
                  setString(string + "2");
                }}
              >
                2
              </td>
              <td
                onClick={() => {
                  setString(string + "3");
                }}
              >
                3
              </td>
              <td
                onClick={() => {
                  setString(string + "/");
                }}
              >
                /
              </td>
            </tr>
            <tr>
              <td
                onClick={() => {
                  setString(string + "4");
                }}
              >
                4
              </td>
              <td
                onClick={() => {
                  setString(string + "5");
                }}
              >
                5
              </td>
              <td
                onClick={() => {
                  setString(string + "6");
                }}
              >
                6
              </td>
              <td
                onClick={() => {
                  setString(string + "-");
                }}
              >
                -
              </td>
            </tr>
            <tr>
              <td
                onClick={() => {
                  setString(string + "7");
                }}
              >
                7
              </td>
              <td
                onClick={() => {
                  setString(string + "8");
                }}
              >
                8
              </td>
              <td
                onClick={() => {
                  setString(string + "9");
                }}
              >
                9
              </td>
              <td
                onClick={() => {
                  setString(string + "+");
                }}
              >
                +
              </td>
            </tr>
            <tr>
              <td
                onClick={() => {
                  setString(string + ".");
                }}
              >
                .
              </td>
              <td
                onClick={() => {
                  setString(string + "0");
                }}
              >
                0
              </td>
              <td
                onClick={() => {
                  console.log(eval(string));
                  setString(eval(string));
                }}
              >
                =
              </td>
              <td
                onClick={() => {
                  setString(string + "*");
                }}
              >
                *
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
