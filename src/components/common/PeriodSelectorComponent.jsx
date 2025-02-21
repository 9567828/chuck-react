export const PeriodSelector = () => {
  return (
    <div className="date-pick-wrap">
      <div id="todayBtn" className="date-btn date-today">
        오늘
      </div>
      <div className="date-pick">
        <div className="date-btn date-day on">일</div>
        <div className="date-btn date-week">주</div>
        <div className="date-btn date-month">월</div>
      </div>
    </div>
  );
};
