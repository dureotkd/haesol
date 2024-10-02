import React from "react";

function CheckboxComponent(props) {
  const { items = [], prependItems = [], name = "", defaultValue = [], onChange, style } = props;

  const resItems = [...prependItems, ...items];

  return (
    <>
      {resItems &&
        resItems.map(({ label, value }) => {
          return (
            <label key={`${name}-${value}`} style={{ ...style }}>
              <input
                type="checkbox"
                onChange={onChange}
                name={name}
                value={value}
                defaultChecked={defaultValue.includes(String(value))}
              />
              {label}
            </label>
          );
        })}
    </>
  );
}

export default React.memo(CheckboxComponent);
