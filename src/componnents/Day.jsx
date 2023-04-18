import React, { useState } from "react";
import Appointment from "./Appointment";

export default function Day(props) {
  const [appointments, setAppointments] = useState([]);
  const [input, setInput] = useState("");

  const addOrders = () => {
    const newAppointment = {
      id: Math.floor(100000 * (Math.random() + 1)),
      name: input,
      done: false,
    };

    setAppointments((currentState) => [...currentState, newAppointment]);
    setInput("");
  };

  const toogleDone = (appointmenteId) => {
    setAppointments((currentState) => {
      return currentState.map((appointment) => {
        if (appointment.id !== appointmenteId) return appointment;
        else return { ...appointment, done: !appointment.done };
      });
    });
  };

  const removeAppointment = (appoimentId) => {
    setAppointments((currentState) => {
      return currentState.filter(
        (appointment) => appointment.id !== appoimentId
      );
    });
  };

  return (
    <div className="day">
      <div className="search">
        <h3>{props.day}</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite seu compromisso"
        />
        <button onClick={addOrders}>+</button>
      </div>

      <ul>
        {appointments.map((appointment) => {
          return (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              toogleDone={toogleDone}
              removeAppointment={removeAppointment}
            />
          );
        })}
      </ul>
    </div>
  );
}
