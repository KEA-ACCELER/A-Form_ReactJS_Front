import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../../App.css";

function SelectionAnswer(props) {

  return (
    <Form.Group>
      <div key={`question-${props.qIndex}`} className="mb-3">
        {props.q.item.map((item, index) => (
          <Form.Check
            type={props.type}
            id={`checkbox-${props.qIndex}-${index}`}
            label={props.q.item[index]}
          />
        ))}
      </div>
    </Form.Group>
  );
}

export default SelectionAnswer;
