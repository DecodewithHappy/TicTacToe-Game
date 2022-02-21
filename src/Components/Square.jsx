import React from 'react';

function Square({ value }) {
  return <button type="button" className="square" onClick = {() => {
      console.log(value);    // will display the number which will be clicked
  }}
  >
      {value}
      </button>;
}

export default Square;