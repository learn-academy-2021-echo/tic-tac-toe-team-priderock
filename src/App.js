import React, { Component } from "react";
import Square from "./components/Square";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      playerOne: "x",
      playerTwo: "o",
      currentTurn: "",
      winner: null,
      moveCount: 0,
    };
  }

  handleGamePlay = (index) => {
    const { squares, currentTurn } = this.state;
    if (squares.join("") === "") {
      squares[index] = "x";
      this.setState({ squares: squares, currentTurn: "x" });
    } else if (squares[index] !== "x" && currentTurn === "x") {
      squares[index] = "o";
      this.setState({ squares: squares, currentTurn: "o" });
    } else if (squares[index] !== "o") {
      squares[index] = "x";
      this.setState({ squares: squares, currentTurn: "x" });
    }
  };
  checkForWinner(moveCount) {
    var currentTurn = this.state.currentTurn;
    var symbols = this.state.squares;
    var winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningCombos.find(function (combo) {
      if (
        symbols[combo[0]] !== "" &&
        symbols[combo[1]] !== "" &&
        symbols[combo[2]] !== "" &&
        symbols[combo[0]] === symbols[combo[1]] &&
        symbols[combo[1]] === symbols[combo[2]]
      ) {
        alert("Found a winner", currentTurn, [combo[0], combo[1], combo[2]]);
        return currentTurn;
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <>
        <h1>Tic-React-Toe</h1>
        {this.state.winner ? (
          <h2 className="swing winner">{`${
            this.state.currentTurn === playerOne ? playerTwo : playerOne
          } WINS!!!`}</h2>
        ) : null}

        <div className="gameboard">
          {this.state.squares.map((value, index) => {
            return (
              <Square
                value={value}
                key={index}
                index={index}
                handleGamePlay={this.handleGamePlay}
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default App;
