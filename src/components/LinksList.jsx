import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

function LinksList({ list, title, hideable }) {
  return (
    <div className="links">
      <h3 className="links__title">{title}</h3>
      <ul
        className={
          hideable ? "links__list links__list_hideable" : "links__list"
        }
      >
        {list.map((item) => (
          <li key={item.id} className="links__list-item">
            <div className="links__list-icon">
              <HiOutlineChevronRight />
            </div>
            <a href={item.url} className="links__list-link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinksList;
