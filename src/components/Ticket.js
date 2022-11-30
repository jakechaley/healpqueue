import React from "react";

function Ticket(props) {
  return (
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issues}</em></p>
      <hr />
    </React.Fragment>
  );
}

export default Ticket;