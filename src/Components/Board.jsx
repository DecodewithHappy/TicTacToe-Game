import React, {useState} from 'react'; // use state keyword is required for react-hook. 
import Square from './Square';

function Board() {

  const [board, setBoard] = useState(Array(9).fill(null));

  console.log(board); // it will display 9 elements in the array with null values.

  return (
    <div className="board">
    <div className="board-row">
      <Square value={0} />
      <Square value={1} />
      <Square value={2} />
    </div>
    <div className="board-row">
      <Square value={3} />
      <Square value={4} />
      <Square value={5} />
    </div>
    <div className="board-row">
      <Square value={6} />
      <Square value={7} />
      <Square value={8} />
    </div>
  </div>
  );
}

export default Board;