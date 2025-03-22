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
  const optionsRef = useRef(null);
  const workingHoursRef = useRef(null);
  const [workingHours, setWorkingHours] = useState("");

  useEffect(() => {
    if (workingHoursRef.current) {
      setWorkingHours(workingHoursRef.current.innerText);
    }
  }, []); // 빈 배열을 넣어 컴포넌트가 처음 렌더링될 때만 실행

  // 셀렉트박스 클릭 이벤트 (드롭다운 열기)
  const clickSelBox = () => {
    setIsOn((prev) => !prev);
  };

  // 셀렉트옵션 클릭이벤트
  const selType = (item) => {
    setClickType(item);
  };

  // 셀렉트 옵션 hover(마우스엔터)이벤트
  const handleMouseEnter = (item) => {
    setSelOpts((prev) => prev.map((opt) => (opt.menu === item ? { ...opt, select: true } : { ...opt, select: false })));
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

  return (
    <>
      <GridWrap>
        <h1>근무 유형 선택</h1>
        <div className="select-wrap" onClick={clickSelBox}>
          <div className={isOn ? "select-box-square active" : "select-box-square"}>
            <div className="select-one">{clickType ? clickType : "고정 출퇴근제"}</div>
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
            <LabelFlex htmlFor="SrealTime">
              <input type="radio" name="startTime" id="SrealTime" />
              <span className={s.captionXsM}>실제 업무 시간으로 출근 시간을 기록</span>
            </LabelFlex>
            <p className={`${s.grayMsgFont12} ${s.ml33}`}>출근 버튼을 클릭한 시간으로 기록합니다.</p>
          </ColumnWrap>
          <ColumnWrap>
            <LabelFlex htmlFor="SruleTime">
              <input type="radio" name="startTime" id="SruleTime" />
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
            <LabelFlex htmlFor="FrealTime">
              <input type="radio" name="finishTime" id="FrealTime" />
              <span className={s.captionXsM}>실제 업무 시간으로 퇴근 시간을 기록</span>
            </LabelFlex>
            <p className={`${s.grayMsgFont12} ${s.ml33}`}>퇴근 버튼을 클릭한 시간으로 기록합니다.</p>
          </ColumnWrap>
          <ColumnWrap>
            <LabelFlex htmlFor="FruleTime">
              <input type="radio" name="finishTime" id="FruleTime" />
              <span className={s.captionXsM}>설정된 근무 스케줄에 맞춰 퇴근 시간을 기록</span>
            </LabelFlex>
            <p className={`${s.grayMsgFont12} ${s.ml33}`}>
              퇴근 시간보다 늦게 퇴근하면 설정된 퇴근 시간에 내림처리 되어 기록됩니다.
            </p>
          </ColumnWrap>
        </ColumnWrap>
      </GridWrap>
      <GridWrap>
        <h1>근무일</h1>
        <div>월, 화, 수, 목, 금 (주 5일)</div>
        <button className="edit-btn" onClick={() => openModal("set-worktimes")}>
          수정하기
        </button>
      </GridWrap>
      <GridWrap>
        <h1>근무 시간</h1>
        <div>월 09:00~18:00 화 09:00~18:00 수 09:00~18:00 목 09:00~18:00 금 09:00~18:00</div>
      </GridWrap>
      <GridWrap>
        <h1>점심 시간</h1>
        <div>월 12:00~13:00 화 12:00~13:00 수 12:00~13:00 목 12:00~13:00 금 12:00~13:00</div>
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
      {isModalOn && modalType === "set-worktimes" ? <SetWorkTimeModal closeModal={closeModal} /> : <></>}
      {isModalOn && modalType === "set-workinghours" ? (
        <EditWorkModal isEditWork={false} title={"주 소정 근로시간 설정"} beforeWorkTime={workingHours} closeModal={closeModal} />
      ) : (
        <></>
      )}
    </>
  );
}

export default WorkSetting;
