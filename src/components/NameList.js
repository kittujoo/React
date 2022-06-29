import React from "react";
import Person from "./Person.js";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  const nameList = names.map((name) => <h1>{name}</h1>);
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 28,
      skill: "React"
    },
    {
      id: 2,
      name: "Clark",
      age: 29,
      skill: "Java"
    },
    {
      id: 3,
      name: "Diana",
      age: 30,
      skill: "Python"
    }
  ];
  const personsList = persons.map((person) => <Person person={person} />);
  return (
    <div>
      {personsList}
      {/* {nameList} */}
      {/* <h1>{names[0]}</h1>
      <h1>{names[1]}</h1>
      <h1>{names[2]}</h1> */}
    </div>
  );
}
export default NameList;
