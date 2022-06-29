import React from "react";

function FunctionClick() {
  function clickHanler() {
    console.log("Button clicked");
  }
  return (
    <div>
      <button onClick={clickHanler}>Click</button>
    </div>
  );
}

export default FunctionClick;
