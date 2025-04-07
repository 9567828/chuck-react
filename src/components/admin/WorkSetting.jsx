import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as s from "../../assets/scss/modules/style.module.scss";
import SetWorkTimeModal from "../modal/SetWorkTimeModal";
import EditWorkModal from "../modal/EditWorkModal";

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  column-gap: 86px;
  padding: 24px 0;
  border-bottom: 1px solid #eee;
  h1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.02em;
  }
  &:nth-of-type(2),
  &:nth-of-type(3) {
    align-items: stretch;
  }
  &:nth-of-type(4),
  &:nth-of-type(5) {
    border-bottom: 0;
  }
  &:nth-of-type(4),
  &:nth-of-type(7) {
    grid-template-columns: 120px 1fr auto;
  }
  &:nth-of-type(5) {
    padding: 0;
  }
`;

const LabelFlex = styled.label`
  display: flex;
  align-items: center;
  gap: 13px;
`;

const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Div = styled.div`
  height: ${(props) => (props.height ? props.height : "auto")};
`;

const FlexUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  li {
    position: relative;
    &:not(:last-child)::after {
      position: absolute;
      top: 4px;
      right: -10px;
      content: "";
      width: 1px;
      height: 14px;
      background-color: #424242;
    }
    span {
      &:first-child {
        margin-right: 5px;
      }
    }
  }
`;

function WorkSetting() {
  const [isOn, setIsOn] = useState(false);
  const [clickType, setClickType] = useState(null);
  const [selOpts, setSelOpts] = useState([
    { id: 1, menu: "고정 출퇴근제", select: true },
    { id: 2, menu: "시차 출퇴근제", select: false },
    { id: 3, menu: "탄력 출퇴근제", select: false },
    { id: 4, menu: "출퇴근 사용 안함", select: false },
  ]);
  const [isModalOn, setIsModalOn] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [workingHours, setWorkingHours] = useState("");
  const [isChecked, setIsChecked] = useState({
    realWorkTimeStart: false,
    setWorkTimeStart: false,
    realWorkTimeFinish: false,
    setWorkTimeFinish: false,
  });
  const optionsRef = useRef(null);
  const workingHoursRef = useRef(null);

  const workingHourLists = [
    { id: 1, day: "월", start: "09:00", finish: "18:00", work: true },
    { id: 2, day: "화", start: "09:00", finish: "18:00", work: true },
    { id: 3, day: "수", start: "09:00", finish: "18:00", work: true },
    { id: 4, day: "목", start: "09:00", finish: "18:00", work: true },
    { id: 5, day: "금", start: "09:00", finish: "18:00", work: true },
    { id: 6, day: "토", start: "09:00", finish: "18:00", work: false },
    { id: 7, day: "일", start: "09:00", finish: "18:00", work: false },
  ];

  const lunchTimeLists = [
    { id: 1, day: "월", start: "12:00", finish: "13:00", work: true },
    { id: 2, day: "화", start: "12:00", finish: "13:00", work: true },
    { id: 3, day: "수", start: "12:00", finish: "13:00", work: true },
    { id: 4, day: "목", start: "12:00", finish: "13:00", work: true },
    { id: 5, day: "금", start: "12:00", finish: "13:00", work: true },
    { id: 6, day: "토", start: "12:00", finish: "13:00", work: false },
    { id: 7, day: "일", start: "12:00", finish: "13:00", work: false },
  ];

  useEffect(() => {
    if (workingHoursRef.current) {
      setWorkingHours(workingHoursRef.current.innerText);
    }
  }, []); // 빈 배열을 넣어 컴포넌트가 처음 렌더링될 때만 실행

  // 셀렉트박스 클릭 이벤트 (드롭다운 열기)
  const clickSelBox = () => {
    setIsOn((prev) => !prev);
  };

  const handleSelectOpt = (item) => {
    setSelOpts((prev) => prev.map((opt) => (opt.menu === item ? { ...opt, select: true } : { ...opt, select: false })));
  };

  // 셀렉트옵션 클릭이벤트
  const selType = (item) => {
    handleSelectOpt(item);
    setClickType(item);
    if (item === "출퇴근 사용 안함") {
      setIsChecked({
        realWorkTimeStart: false,
        setWorkTimeStart: false,
        realWorkTimeFinish: false,
        setWorkTimeFinish: false,
      });
    }
  };

  // 셀렉트 옵션 hover(마우스엔터)이벤트
  const handleMouseEnter = (menu) => {
    handleSelectOpt(menu);
  };

  const handleRadioBtn = (item) => {
    console.log(item);
  };

  const openModal = (type) => {
    if (modalType === type) {
      setIsModalOn(!isModalOn);
    } else {
      setIsModalOn(true);
      setModalType(type);
    }
  };

  const closeModal = () => {
    setIsModalOn(false);
    setModalType(null);
  };

  // 근무요일
  const workDays = workingHourLists.filter((day) => day.work).map((day) => day.day);
  const workDaysStr = workDays.join(", ");

  return (
    <>
      <GridWrap>
        <h1>근무 유형 선택</h1>
        <div className="select-wrap" onClick={clickSelBox}>
          <div className={isOn ? "select-box-square active" : "select-box-square"}>
            <div className="select-one">{clickType ? clickType : "고정 출퇴근제"}</div>
            {/* <div className="select-one">{selOpts.map((item) => (item.select === true ? item.menu : clickType))}</div> */}
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.175 5.5L8 9.325L11.825 5.5L13 6.68333L8 11.6833L3 6.68333L4.175 5.5Z" fill="#616161" />
            </svg>
          </div>
          {isOn ? (
            <Div ref={optionsRef} className="sel-options-square">
              {selOpts.map((item) => (
                <p
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.menu)}
                  onClick={() => selType(item.menu)}
                  className={item.select ? "active" : ""}
                >
                  {item.menu}
                </p>
              ))}
            </Div>
          ) : null}
        </div>
      </GridWrap>
      <GridWrap>
        <h1>출근 시간 기준 설정</h1>
        <ColumnWrap>
          <ColumnWrap>
            <LabelFlex htmlFor="realTimeS">
              <input
                type="radio"
                name="startTime"
                id="realTimeS"
                onChange={() => handleRadioBtn("실제출근시간")}
                checked={clickType === "고정 출퇴근제" || clickType === "시차 출퇴근제" ? true : isChecked.realWorkTimeStart}
              />
              <span className={s.captionXsM}>실제 업무 시간으로 출근 시간을 기록</span>
            </LabelFlex>
            <p className={`${s.grayMsgFont12} ${s.ml33}`}>출근 버튼을 클릭한 시간으로 기록합니다.</p>
          </ColumnWrap>
          <ColumnWrap>
            <LabelFlex htmlFor="ruleTimeS">
              <input
                type="radio"
                name="startTime"
                id="ruleTimeS"
                onChange={() => handleRadioBtn("설정출근시간")}
                checked={isChecked.setWorkTimeStart}
              />
              <span className={s.captionXsM}>설정된 근무 스케줄에 맞춰 출근 시간을 기록</span>
            </LabelFlex>
            <p className={`${s.grayMsgFont12} ${s.ml33}`}>
              출근 시간보다 일찍 출근하면 설정된 출근 시간에 올림처리 되어 기록됩니다.
            </p>
          </ColumnWrap>
        </ColumnWrap>
      </GridWrap>
      <GridWrap>
        <h1>퇴근 시간 기준 설정</h1>
        <ColumnWrap>
          <ColumnWrap>
            <LabelFlex htmlFor="realTimeF">
              <input
                type="radio"
                name="finishTime"
                id="realTimeF"
                onChange={() => handleRadioBtn("실제퇴근시간")}
                checked={isChecked.realWorkTimeFinish}
              />
              <span className={s.captionXsM}>실제 업무 시간으로 퇴근 시간을 기록</span>
            </LabelFlex>
            <p className={`${s.grayMsgFont12} ${s.ml33}`}>퇴근 버튼을 클릭한 시간으로 기록합니다.</p>
          </ColumnWrap>
          <ColumnWrap>
            <LabelFlex htmlFor="ruleTimeF">
              <input
                type="radio"
                name="finishTime"
                id="ruleTimeF"
                onChange={() => handleRadioBtn("설정퇴근시간")}
                checked={isChecked.setWorkTimeFinish}
              />
              <span className={s.captionXsM}>설정된 근무 스케줄에 맞춰 퇴근 시간을 기록</span>
            </LabelFlex>
            <p className={`${s.grayMsgFont12} ${s.ml33}`}>
              퇴근 시간보다 늦게 퇴근하면 설정된 퇴근 시간에 내림처리 되어 기록됩니다.
            </p>
          </ColumnWrap>
        </ColumnWrap>
      </GridWrap>
      <GridWrap className={s.captionXsM}>
        <h1>근무일</h1>
        <div>{`${workDaysStr} (주 ${workDays.length}일)`}</div>
        <button className="edit-btn" onClick={() => openModal("set-worktimes")}>
          수정하기
        </button>
      </GridWrap>
      <GridWrap>
        <h1>근무 시간</h1>
        <FlexUl className={s.captionXsM}>
          {workingHourLists.map((list) =>
            list.work ? (
              <li key={list.id}>
                <span>{list.day}</span>
                <span>{`${list.start} ~ ${list.finish}`}</span>
              </li>
            ) : null
          )}
        </FlexUl>
      </GridWrap>
      <GridWrap>
        <h1>점심 시간</h1>
        <FlexUl className={s.captionXsM}>
          {lunchTimeLists.map((list) =>
            list.work ? (
              <li key={list.id}>
                <span>{list.day}</span>
                <span>{`${list.start} ~ ${list.finish}`}</span>
              </li>
            ) : null
          )}
        </FlexUl>
      </GridWrap>
      <GridWrap>
        <h1>주 소정 근로시간</h1>
        <div ref={workingHoursRef} className={s.gray800Font14}>
          40시간
        </div>
        <button className="edit-btn" onClick={() => openModal("set-workinghours")}>
          수정하기
        </button>
      </GridWrap>
      {isModalOn && modalType === "set-worktimes" ? <SetWorkTimeModal closeModal={closeModal} /> : null}
      {isModalOn && modalType === "set-workinghours" ? (
        <EditWorkModal isEditWork={false} title={"주 소정 근로시간 설정"} beforeWorkTime={workingHours} closeModal={closeModal} />
      ) : null}
    </>
  );
}

export default WorkSetting;
