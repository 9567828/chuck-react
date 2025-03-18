import { Link } from "react-router";
import * as s from "../assets/scss/modules/style.module.scss";
import "../assets/scss/screen/home/home.scss";
import ElectricListComponent from "./home/ElectricListComponent";
import Calender from "./common/Calender";
import ScheduleListComp from "./home/ScheduleListComp";
import NoticeComp from "./home/NoticeComp";
import VacationComp from "./home/VacationComp";
import DateFormatter from "./hooks/MakeDate";
import { useEffect, useRef, useState } from "react";

function Home() {
  const date = new DateFormatter();
  const [updateDate, setUpdateDate] = useState(date);
  const [btnText, setBtnText] = useState("출근하기");
  const [isAbleBtn, setIsAbleBtn] = useState(true);
  const [isWork, setIsWork] = useState("출근 전");
  const [row, setRow] = useState(0);
  // beforeWork: false,
  // atWork: false,
  // Away: false,
  // onVaction: false,
  // absent: false,
  const timeRef = useRef(null);

  // 현재 날짜 객체를 기준으로 자정, 지각, 퇴근 시간을 설정
  const getMidnight = () => {
    const midnight = new Date();
    midnight.setHours(0, 0, 0, 0); // 자정으로 설정
    return midnight;
  };

  const getLateness = () => {
    const lateness = new Date();
    lateness.setHours(11, 0, 0, 0); // 지각 시간 설정 (11시)
    return lateness;
  };

  const getFinishTime = () => {
    const finishTime = new Date();
    finishTime.setHours(18, 0, 0, 0); // 퇴근 시간 설정 (18시)
    return finishTime;
  };

  const midnight = getMidnight();
  const lateness = getLateness();
  const finishTime = getFinishTime();

  // 클릭한 시간을 기록하는 함수
  const checkWorkTime = () => {
    let clickedTime = new Date(); // 클릭 시 현재 시간 기록
    if (clickedTime >= finishTime) {
      setIsAbleBtn(true);
      setIsWork("퇴근완료");
    }
    if (clickedTime >= midnight && clickedTime < lateness) {
      setIsAbleBtn(true);
      setIsWork("출근완료");
    }
  };

  useEffect(() => {
    const currentDate = new Date();

    if (currentDate >= midnight && currentDate < lateness) {
      setBtnText("출근하기");
      setIsAbleBtn(false);
    } else if (currentDate >= lateness && currentDate < finishTime) {
      setBtnText("출근하기");
      setIsAbleBtn(true);
    } else if (currentDate >= finishTime) {
      setBtnText("퇴근하기");
      setIsAbleBtn(false);
    }
  }, []);

  useEffect(() => {
    const interValId = setInterval(() => {
      setUpdateDate(new DateFormatter());
    }, 1000);

    return () => clearInterval(interValId);
  }, []);

  const getRows = (r) => {
    setRow(r);
  };

  return (
    <div className="inner">
      <div id="main-container">
        {/* 전자결재 */}
        <div className="dashboard-box electric">
          <div className="title-bar">
            <div className="title-left">
              <img src="/img/main-icons/ic_fill_electric.svg" alt="전자결재아이콘" />
              <h1 className={`${s.bodyMdB}`}>전자결재</h1>
              <p className={`${s.captionXxsM} ${s.redFont}`}>확인하지 않은 결재 (7)</p>
            </div>
            <Link to="" className="show-all">
              전체보기
            </Link>
          </div>
          <ElectricListComponent row={row} />
        </div>

        {/* 스케줄 */}
        <div className="dashboard-box schedule">
          <div className="title-bar">
            <div className="title-left">
              <img src="/img/main-icons/ic_fill_calender.svg" alt="스케줄" />
              <h1 className={`${s.bodyMdB}`}>스케줄</h1>
            </div>
            <Link to="" className="show-all">
              전체보기
            </Link>
          </div>
          <div className={row >= 6 ? "schedule-container height" : "schedule-container"}>
            {/* 달력 */}
            <Calender onRows={getRows} />
            <ScheduleListComp />
          </div>
        </div>

        {/* 공지사항 */}
        <div className="dashboard-box white notice">
          <div className="title-bar">
            <div className="title-left">
              <img src="/img/main-icons/ic_fill_notice.svg" alt="공지사항" />
              <h1 className={`${s.bodyMdB}`}>공지사항</h1>
            </div>
            <Link to="" className="show-all">
              전체보기
            </Link>
          </div>
          <NoticeComp />
        </div>
        {/* 출퇴근 및 휴가현황 */}
        <div className="status-container">
          {/* 출퇴근관리 */}
          <div className="dashboard-box white attendance">
            <div className="title-bar">
              <div className="title-left">
                <img src="/img/main-icons/ic_attendance.svg" alt="출퇴근" />
                <h1 className={`${s.bodyMdB}`}>출퇴근 관리</h1>
              </div>
            </div>
            <div className="timer">
              <div className={`${s.captionXsM} ${s.gray700Font}`}>{updateDate.dateWithDay}</div>
              <div ref={timeRef} className={`${s.displayB}`}>
                {updateDate.hours}
              </div>
              <div className={`${s.bodySmM} ${s.gray700Font}`}>{isWork}</div>
            </div>
            <button className="primary-btn punch-in" onClick={checkWorkTime} disabled={isAbleBtn}>
              <span>{btnText}</span>
            </button>
          </div>

          {/* 휴가현황 */}
          <div className="dashboard-box white vacation">
            <div className="title-bar">
              <div className="title-left">
                <img src="/img/main-icons/ic_vacation.svg" alt="휴가" />
                <h1 className={`${s.bodyMdB}`}>휴가 현황</h1>
              </div>
              <Link to="" className="show-all">
                전체보기
              </Link>
            </div>
            <VacationComp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
