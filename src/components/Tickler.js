import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }

  return (
    <button
      onClick={() => {
        console.log("Teehee");
      }}
    >
      Tickle me!
    </button>
  );
}

export default Tickler;
