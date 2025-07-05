import React, { useEffect, useState } from "react";
import "./MainHeader.css";

const MainHeader = ({ data, setFilteredData, filteredData, title, smiley }) => {
  const [filterType, setFilterType] = useState("date");
  const [filterOrder, setFilterOrder] = useState("asc");
  const filterStar = function (rating) {
    let updatedData = [...data];
    updatedData = updatedData.filter(
      (element) => element.vote_average > rating
    );

    setFilteredData(updatedData);
  };
  useEffect(() => {
    let updatedData = [...filteredData];
    if (filterType == "date") {
      if (filterOrder == "asc") {
        updatedData = updatedData.sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date)
        );
      } else if (filterOrder == "desc") {
        updatedData = updatedData.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
      }
    } else if (filterType == "rating") {
      if (filterOrder == "asc") {
        updatedData = updatedData.sort(
          (a, b) => a.vote_average - b.vote_average
        );
      } else if (filterOrder == "desc") {
        updatedData = updatedData.sort(
          (a, b) => b.vote_average - a.vote_average
        );
      }
    }
    setFilteredData(updatedData);
  }, [filterType, filterOrder, data]);
  return (
    <div className="main-header">
      <div className="title-wrapper">
        <h2>{title}</h2>
        <img className="list_img" src={smiley} alt="fireimg"></img>
      </div>

      <div>
        <span className="main-filters" onClick={() => filterStar(8)}>
          8+ Star
        </span>
        <span className="main-filters" onClick={() => filterStar(7)}>
          7+ Star
        </span>
        <span className="main-filters" onClick={() => filterStar(6)}>
          6+ Star
        </span>
        <select
          className="select-filters"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="date">Date</option>
          <option value="rating">Rating</option>
        </select>
        <select
          className="select-filters"
          value={filterOrder}
          onChange={(e) => setFilterOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default MainHeader;
