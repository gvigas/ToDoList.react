import React from "react";
import Day from "./componnents/Day";

const week = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];
function App() {
  return (
    <>
      <main>
        <h1>TO DO LIST.</h1>
        <div className="days">
          {week.map((day) => (
            <Day key={day} day={day} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
