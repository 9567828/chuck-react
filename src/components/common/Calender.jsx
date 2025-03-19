import * as s from "../../assets/scss/modules/style.module.scss";
import "../../assets/scss/components/calender.scss";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import DateFormatter from "../hooks/MakeDate";
import { getHoliday, clearCache } from "../../api/holiday";

const Span = styled.span`
  text-transform: capitalize;
`;

function Calender({ onRows, clickFn }) {
  const dateForm = new DateFormatter();
  const monthEng = dateForm.monthArr;
  const [weeks, setWeeks] = useState([]);
  const [curDate, setCurDate] = useState(new Date()); // 초기값: 현재 날짜
  const [rows, setRows] = useState(0); // 높이
  const [holidays, setHolidays] = useState([]);
  const [schedules, setSchdules] = useState([
    {
      id: 1,
      date: 20250319,
      title: "BX팀 외부 미팅",
    },
  ]);

  const year = curDate.getFullYear(); // getFullYear로 연도 얻기
  const month = curDate.getMonth(); // getMonth로 월 얻기 (0부터 시작하므로 1을 더해야 실제 월)

  const drawCalendar = () => {
    const firstDate = new Date(year, month, 1);
    const startDay = new Date(firstDate);
    const firstNum = firstDate.getDay();
    startDay.setDate(1 - firstDate.getDay());

    const lastDate = new Date(year, month + 1, 0); // 다음 달로 넘어가서 마지막 날 구하기
    const lastDay = new Date(lastDate);
    const lastNum = lastDate.getDate();

    lastDay.setDate(lastDate.getDate() + (6 - lastDate.getDay()));

    let currWeeks = [];
    let allWeeks = [];
    // const curDate = new Date(startDay);
    const curDate = new DateFormatter(startDay).ndate;

    while (curDate <= lastDay) {
      const newDates = new DateFormatter(new Date(curDate));
      currWeeks.push(newDates);
      if (currWeeks.length === 7 || curDate.getDay() === 6) {
        allWeeks.push(currWeeks);
        currWeeks = [];
      }
      curDate.setDate(curDate.getDate() + 1);
    }

    if (currWeeks.length > 0) {
      allWeeks.push(currWeeks);
    }

    setWeeks(allWeeks);
    setRows(Math.ceil((firstNum + lastNum) / 7));
    onRows(Math.ceil((firstNum + lastNum) / 7));
  };

  useEffect(() => {
    drawCalendar();
  }, [curDate]);

  const handlePrevMonth = () => {
    const newDate = new Date(curDate);
    newDate.setMonth(curDate.getMonth() - 1); // 이전 달로 이동
    setCurDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(curDate);
    newDate.setMonth(curDate.getMonth() + 1); // 다음 달로 이동
    setCurDate(newDate);
  };

  const handleHolidays = (y, m) => {
    const prevYear = m === 1 ? y - 1 : y;
    const prevMonth = m === 1 ? 12 : m - 1;
    const nextYear = m === 12 ? y + 1 : y;
    const nextMonth = m === 12 ? 1 : m + 1;

    getHoliday(y, m).then((data) => {
      const currentHolidays = data?.item ? (Array.isArray(data.item) ? data.item : [data.item]) : [];
      setHolidays(currentHolidays);

      getHoliday(prevYear, prevMonth).then((prevData) => {
        const prevHolidays = prevData?.item ? (Array.isArray(prevData.item) ? prevData.item : [prevData.item]) : [];
        setHolidays((prevHolidaysState) => [...prevHolidaysState, ...prevHolidays]);
      });

      getHoliday(nextYear, nextMonth).then((nextData) => {
        const nextHolidays = nextData?.item ? (Array.isArray(nextData.item) ? nextData.item : [nextData.item]) : [];
        setHolidays((nextHolidaysState) => [...nextHolidaysState, ...nextHolidays]);
      });
    });
  };

  useEffect(() => {
    handleHolidays(year, month + 1);
    clearCache();
  }, [month, year]);

  useEffect(() => {
    const dateEle = document.querySelectorAll(".day-wrap");

    dateEle.forEach((d) => {
      const dataDate = parseInt(d.dataset.date);

      if (holidays) {
        if (holidays.length >= 0) {
          holidays.forEach((value) => {
            if (value.isHoliday === "Y") {
              if (dataDate === value.locdate) {
                d.classList.add("holiday");
                d.setAttribute("data-holidayName", value.dateName);
              }
            }
          });
        } else {
          if (holidays.isHoliday === "Y") {
            if (dataDate === holidays.locdate) {
              d.classList.add("holiday");
              d.setAttribute("data-holidayName", holidays.dateName);
            }
          }
        }
      }
    });
  }, [holidays]);

  // 일정 조회
  // const getSchedule = () => {
  //   setSchdules()
  // }

  return (
    <div className="calender-card">
      <div className="calender-head">
        <button onClick={handlePrevMonth}>
          <img src="/img/ic_move_in.svg" alt="화살표" />
        </button>
        <div className="month-year">
          <Span className={`${s.captionXsB}`}>{monthEng[month]}</Span>
          <span className={`${s.captionXsB}`}>{year}</span>
        </div>
        <button onClick={handleNextMonth}>
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
      <div className={`days-container ${s.captionXxsM}`}>
        <ul>
          {weeks.map((week, index) => (
            <li key={index} className="weekday-wrap">
              {week.map((day, dindex) => {
                const MS = day.month;
                const m = month + 1;
                const d = day.dateToNum;
                const today = new DateFormatter().dateToNum;
                // JSX 요소 반환
                return (
                  <div
                    onClick={() => {
                      if (clickFn) {
                        clickFn();
                      }
                    }}
                    data-date={d}
                    key={`d_${dindex}`}
                    className={MS < m || MS > m ? "day-wrap other-month" : d === today ? "day-wrap today" : "day-wrap"}
                  >
                    <button className="date-num">{day.date}</button>
                    {schedules.map((s, i) =>
                      s.date === d ? (
                        <span key={`S_${i}`} data-schedule={s.date}>
                          {s.title}
                        </span>
                      ) : (
                        <></>
                      )
                    )}
                  </div>
                );
              })}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Calender.propTypes = {
  onRows: PropTypes.func.isRequired,
  clickFn: PropTypes.func,
};

export default Calender;
