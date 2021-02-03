import React from 'react'

export const Square = ({ mark, handleClick }) => (
    <button
      style={{
        width: 100,
        height: 100,
        fontWeight: "bold",
        fontSize: 30
      }}
      onClick={() => !mark.signature && handleClick(mark)}
    >
      {mark.signature}
    </button>
  );
