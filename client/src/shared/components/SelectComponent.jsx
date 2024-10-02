import React from "react";

function SelectComponent(props) {
  const {
    items = [],
    prependItems = [],
    pushItems = [],
    name = "",
    defaultValue = "",
    onChange,
    style = {},
    className = "",
  } = props;

  const resultItems = [...prependItems, ...items, ...pushItems];

  const handleChange = React.useCallback(() => {}, []);

  return (
    <select
      name={name}
      defaultValue={defaultValue}
      onChange={onChange ? onChange : handleChange}
      className={className}
      style={{ ...style }}
    >
      {resultItems &&
        resultItems.map(({ label, value }) => {
          return (
            <option key={`${label}-${value}`} value={value}>
              {label}
            </option>
          );
        })}
    </select>
  );
}

export default SelectComponent;
