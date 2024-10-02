import React from "react";

function PageComponent(props) {
  const { pages, nowPage, onClick } = props;

  return (
    <div className="pagination-wrap">
      <ul className="pagination">
        {pages.is_prev && (
          <li onClick={onClick.bind(this, nowPage - 1)}>
            <span>
              <i className="fas fa-angle-double-left"></i>
            </span>
          </li>
        )}
        {pages.page_num &&
          Object.entries(pages.page_num).map(([number, active], index) => {
            return (
              <li key={`page-${index}`} className={active} onClick={onClick.bind(this, number)}>
                {number}
              </li>
            );
          })}

        {pages.is_next && (
          <li onClick={onClick.bind(this, nowPage + 1)}>
            <span>
              <i className="fas fa-angle-double-right"></i>
            </span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default PageComponent;
