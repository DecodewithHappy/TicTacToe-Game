import React, {useState} from 'react'; // use state keyword is required for react-hook. 
import Square from './Square';

function Board() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  // console.log(board);

  const handleSquareClick = (position) => {

    if(board[position]) {
      return;
    }
    // business logic
    setBoard((prev) => {
      return prev.map((square, pos) => {
        if(pos === position) {
          return isXNext ? 'X' : 'O';
        }

        return square;
      });

    });

    setIsXNext(prev => !prev);
  };

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)} />
    );
  };

  return (
    <div className="board">
    <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
    <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>
    <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  </div>
  );
}

export default Board;