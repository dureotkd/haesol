import React from "react";

function ActionButtonComponent(props) {
  const { items, name, defaultValue = "", selectMultiple = false, readOnly = false, onClick } = props;

  const [selectValue, setSelectValue] = React.useState(selectMultiple ? [defaultValue] : defaultValue);

  const resultValue = React.useMemo(() => {
    return selectMultiple ? selectValue.join("/") : selectValue;
  }, [selectValue]);

  return (
    <div>
      {items &&
        items.map(({ label, value }) => {
          const selectState = selectMultiple
            ? selectValue.includes(value)
              ? "selected"
              : ""
            : selectValue == value
            ? "selected"
            : "";

          return (
            <button
              key={`${name}-${value}`}
              className="search-basic-btn"
              state={selectState}
              type="button"
              value={value}
              onClick={async () => {
                if (readOnly) {
                  return;
                }

                onClick && (await onClick(value));

                if (selectMultiple) {
                  setSelectValue((prev) => {
                    const clonePrev = [...prev];

                    return clonePrev.includes(value)
                      ? clonePrev.filter((item) => item != value)
                      : [...clonePrev, value];
                  });
                } else {
                  setSelectValue(selectValue == value ? "" : value);
                }
              }}
            >
              {label}
            </button>
          );
        })}
      <input type="hidden" name={name} value={resultValue} />
    </div>
  );
}

export default ActionButtonComponent;
