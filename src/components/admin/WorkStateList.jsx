// 출퇴근 관리 (일) 리스트
import { useState } from "react";
import PropTypes from "prop-types";
import ButtonComponent from "../common/ButtonComponents";
import EditWorkModal from "../modal/EditWorkModal";
import "../../assets/scss/screen/admin/work-state.scss";
import styled from "styled-components";

const DeptName = styled.li`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const WorkType = styled.li`
  color: ${(props) => (props.type === "결근" || props.type === "지각" ? "#FF5116" : null)};
`;

function WorkStateList({ date }) {
  const { EditWorkBtn } = ButtonComponent();
  const [isOn, setIsOn] = useState(false);
  const [beforeWorkTime, setBeforeWorkTime] = useState(null);
  const [name, setName] = useState(null);

  const thItems = [
    { id: 1, name: "이름" },
    { id: 2, name: "직책" },
    { id: 3, name: "출근시간" },
    { id: 4, name: "퇴근시간" },
    { id: 5, name: "근무형태" },
    { id: 6, name: "휴게시간" },
    { id: 7, name: "연장근무시간" },
    { id: 8, name: "근무시간" },
    { id: 9, name: "야간근무시간" },
  ];

  const contentList = [
    {
      id: 1,
      name: "김성은",
      dept: "프론트엔드 개발자",
      atWork: "-",
      fromWork: "-",
      workType: "결근",
      restTime: "1시간",
      overtime: "-",
      workTime: "-",
      nigthWork: "-",
    },
    {
      id: 2,
      name: "이현정",
      dept: "BX 디자이너",
      atWork: "10:02",
      fromWork: "09:02",
      workType: "지각",
      restTime: "1시간",
      overtime: "-",
      workTime: "00시간 00분",
      nigthWork: "-",
    },
    {
      id: 3,
      name: "정우성",
      dept: "인사관리자",
      atWork: "-",
      fromWork: "-",
      workType: "휴가",
      restTime: "1시간",
      overtime: "-",
      workTime: "-",
      nigthWork: "-",
    },
    {
      id: 4,
      name: "김지호",
      dept: "BX 디자이너",
      atWork: "09:02",
      fromWork: "18:09",
      workType: "정상",
      restTime: "1시간",
      overtime: "-",
      workTime: "09시간 00분",
      nigthWork: "-",
    },
    {
      id: 5,
      name: "이신우",
      dept: "퍼포먼스 마케터",
      atWork: "08:24",
      fromWork: "22:24",
      workType: "정상",
      restTime: "1시간",
      overtime: "3시간 24분",
      workTime: "12시간 24분",
      nigthWork: "24분",
    },
  ];

  const openModal = (name, item) => {
    setIsOn(true);
    setBeforeWorkTime(item);
    setName(name);
  };

  const closeModal = () => {
    setIsOn(false);
  };

  return (
    <div className="table-wrap date-table">
      <ul className="table-title">
        {thItems.map((item) => (
          <li key={item.id} className="table-head">
            {item.name}
          </li>
        ))}
      </ul>
      {contentList.map((item) => (
        <ul key={item.id} className="table-content">
          <li className="table-data">{item.name}</li>
          <DeptName className="table-data">{item.dept}</DeptName>
          <li className="table-data edit-data" onClick={() => openModal(item.name, item.atWork)}>
            <p>{item.atWork}</p>
            <EditWorkBtn />
          </li>
          <li className="table-data edit-data" onClick={() => openModal(item.name, item.fromWork)}>
            <p>{item.fromWork}</p>
            <EditWorkBtn />
          </li>
          <WorkType type={item.workType}>{item.workType}</WorkType>
          <li>{item.restTime}</li>
          <li className="table-data edit-data" onClick={() => openModal(item.name, item.overtime)}>
            <p>{item.overtime}</p>
            <EditWorkBtn />
          </li>
          <li>{item.workTime}</li>
          <li>{item.nigthWork}</li>
        </ul>
      ))}
      {isOn ? <EditWorkModal name={name} date={date} closeModal={closeModal} beforeWorkTime={beforeWorkTime} /> : <></>}
    </div>
  );
}

export default WorkStateList;

WorkStateList.propTypes = {
  date: PropTypes.any,
};
