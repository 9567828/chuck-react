import { useState } from "react";

const PeriodSelectorCompnent = () => {
  const [isClick, setIsClick] = useState("일");

  const onClick = (period) => {
    setIsClick(period);
  };

  const PeriodSelector = () => {
    return (
      <div className="date-pick-wrap">
        <div id="todayBtn" onClick={() => onClick("일")} className={"date-btn date-today"}>
          오늘
        </div>
        <div className="date-pick">
          <div onClick={() => onClick("일")} className={isClick === "일" ? "date-btn date-day on" : "date-btn date-day"}>
            일
          </div>
          <div onClick={() => onClick("주")} className={isClick === "주" ? "date-btn date-week on" : "date-btn date-week"}>
            주
          </div>
          <div onClick={() => onClick("월")} className={isClick === "월" ? "date-btn date-month on" : "date-btn date-month"}>
            월
          </div>
        </div>
      </div>
    );
  };

  return { PeriodSelector, isClick };
};

export default PeriodSelectorCompnent;
