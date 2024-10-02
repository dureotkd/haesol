import { $ } from "../utils/document";
import { wait } from "../../shared/utils/time";
import { getQs } from "../../shared/utils/url";

import React from "react";

function SearchButtonComponent(props) {
  const { total = true, name = "", items = [], defaultValue = ["all"], onClick } = props;

  const [selectValue, setSelectValue] = React.useState(defaultValue);

  const resultValue = React.useMemo(() => {
    return selectValue && selectValue.join("/");
  }, [selectValue]);

  const handleOnClick = React.useCallback(
    async (value) => {
      const actionType = selectValue.includes(value) ? "DELETE" : "INSERT";

      const cloneSelectValue = [...selectValue].filter((item) => item !== "all");

      switch (actionType) {
        case "INSERT":
          cloneSelectValue.push(value);

          console.log(cloneSelectValue);

          setSelectValue(cloneSelectValue);

          break;

        case "DELETE":
          let newSelectValue = [...selectValue].filter((item) => item !== value);
          setSelectValue(newSelectValue.length > 0 ? newSelectValue : ["all"]);

          break;
      }

      if (value === "all") {
        setSelectValue(["all"]);
      }

      await wait(100);
      $("form").submit();
    },
    [selectValue],
  );
  //

  return (
    <div>
      {total && (
        <button
          className="search-basic-btn"
          state={selectValue.includes("all") ? "selected" : ""}
          type="button"
          onClick={onClick ? onClick.bind(this, "all") : handleOnClick.bind(this, "all")}
        >
          전체
        </button>
      )}
      {items.map(({ label, value }) => {
        return (
          <button
            key={`${name}-${value}`}
            className="search-basic-btn"
            state={selectValue.includes(value) ? "selected" : ""}
            type="button"
            value={value}
            onClick={onClick ? onClick.bind(this, value) : handleOnClick.bind(this, value)}
          >
            {label}
          </button>
        );
      })}
      <input type="hidden" name={name} value={resultValue} />
    </div>
  );
}

export default React.memo(SearchButtonComponent);
