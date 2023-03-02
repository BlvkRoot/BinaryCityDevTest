import React from "react";
import PropTypes from "prop-types";
import { default as ReactSelect, GroupBase } from "react-select";

function MultiSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props) {
  if (props.allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        options={[props.allOption, ...props.options]}
        onChange={(selected) => {
          if (
            selected !== null &&
            selected?.length > 0 &&
            selected[selected.length - 1].value === props.allOption.value
          ) {
            return props.onChange(props.options);
          }
          return props.onChange(selected);
        }}
      />
    );
  }

  return <ReactSelect {...props} />;
}

MultiSelect.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  allowSelectAll: PropTypes.bool,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};

MultiSelect.defaultProps = {
  allOption: {
    label: "Select all",
    value: "*",
  },
};

export default MultiSelect;
