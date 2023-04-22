import React from "react";
import classes from "./quizCard.module.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/quiz?id=${props.id}`);
  }

  return (
    <>
      {/* <div style={classes}>
            <a>{props.title}</a>
            <a>{props.faculty}</a>
            <a>{props.year}</a>
            <a>{props.branch}</a>
            <a>{props.duration}</a>
            <a>{props.marks}</a>
      </div> */}
      <tr>
        <td>sno</td>
        <td>{props.faculty}</td>
        <td>{props.title}</td>
        <td>{props.year}</td>
        <td>{props.branch}</td>
        <td>{props.tques}</td>
        <td>{props.marks}</td>
        <td>{props.duration}</td>
        {/* <td>
          <label className={classes.switch}>
            <input
              type="checkbox"
              name="active"
              checked={toggle}
              onChange={handleChange}
            />
            <span className={classes.slider}></span>
          </label>
        </td> */}
        <td>
          <button className={classes.attemptButton}>Attempt</button>
        </td>
        {/* <td>
          <button className={classes.deleteButton}>Delete</button>
        </td> */}
      </tr>
    </>
  );
};

export default Card;
