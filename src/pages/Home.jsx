import React, { useState } from "react";

const Home = () => {
  let day = new Date().getDay();
  if (day < 10) {
    day = "0" + day;
  }
  let month = new Date().getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  const year = new Date().getFullYear();
  const today = [year, month, day].join("-");
  const [startDate, setStartDate] = useState(today);
  const [finishDate, setFinishDate] = useState();

  console.log(startDate);
  return (
    <div className="mt-5">
      <form action="">
        <label htmlFor="start">Start date:</label>
        <input
          className="me-5"
          type="date"
          id="start"
          name="trip-start"
          value={startDate}
          min={today}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label htmlFor="finish">Finish date:</label>
        <input
          type="date"
          id="finish"
          name="trip-finish"
          value={finishDate}
          min={startDate}
          onChange={(e) => setFinishDate(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Home;
