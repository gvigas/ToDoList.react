export default function Appointment(props) {
  return (
    <div className="list">
      <li className={props.appointment.done ? "done" : ""}>
        <div className="appointment">
          <input
            type="checkbox"
            id={`appointment-${props.appointment.id}`}
            onChange={() => props.toogleDone(props.appointment.id)}
            checked={props.appointment.done}
          />
          <label htmlFor={`appointment-${props.appointment.id}`}>
            {props.appointment.name}
          </label>

          <button onClick={() => props.removeAppointment(props.appointment.id)}>
            X
          </button>
        </div>
      </li>
    </div>
  );
}
