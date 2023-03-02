import React from "react";
import makeAnimated from "react-select/animated";
import { components } from "react-select";

export interface IOptions {
  value: string,
  label: string;
}
const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const MultiValue = (props) => (
  <components.MultiValue {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);

const animatedComponents = makeAnimated();

export { Option, MultiValue, animatedComponents };
