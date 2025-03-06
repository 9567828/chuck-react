import * as s from "../../assets/scss/modules/style.module.scss";
import "../../assets/scss/components/calender.scss";
import { useEffect } from "react";
import DateFormatter from "../hooks/MakeDate";
import getHoliday from "../../api/holiday";

function Calender() {
  const date = new DateFormatter();

  useEffect(() => {
    getHoliday(2025, 4);
  }, []);

  return (
    <div className="calender-card">
      <div className="calender-head">
        <button>
          <img src="/img/ic_move_in.svg" alt="화살표" />
        </button>
        <div className="month-year">
          <span className={`${s.captionXsB}`}>{date.monthInEnglish}</span>
          <span className={`${s.captionXsB}`}>{date.year}</span>
        </div>
        <button>
          <img src="/img/ic_move_in.svg" alt="화살표" />
        </button>
      </div>
      <ul className={`weekday ${s.captionXxsM}`}>
        <li>SUN</li>
        <li>MON</li>
        <li>TUE</li>
        <li>WED</li>
        <li>THU</li>
        <li>FRI</li>
        <li>SAT</li>
      </ul>
      <div className="days-container"></div>
    </div>
  );
}

export default Calender;
