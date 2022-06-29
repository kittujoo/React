import React from "react";

// function Greet() {
//   return <h1>Hello KK</h1>;
// }

//Destructuring props and states
// const Greet = ({name,heroName}) => (
//   <h1>
//     Hi {name} a.k.a {heroName}
//   </h1>
// );

const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hi {name} a.k.a {heroName}
      </h1>
    </div>
  );
};
export default Greet;
