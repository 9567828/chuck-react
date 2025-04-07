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

function WorkStateList({
  isMontly,
  dates,
  workDate,
  empName,
  dept,
  atWork,
  fromWork,
  workType,
  restTime,
  overtime,
  workTime,
  nigthWork,
}) {
  const { EditWorkBtn } = ButtonComponent();
  const [isOn, setIsOn] = useState(false);
  const [beforeWorkTime, setBeforeWorkTime] = useState(null);
  const [name, setName] = useState(null);

  const openModal = (name, item) => {
    setIsOn(true);
    setBeforeWorkTime(item);
    setName(name);
  };

  const closeModal = () => {
    setIsOn(false);
  };

  return (
    <>
      <ul className={isMontly ? "table-content onWeekMonth" : "table-content"}>
        {isMontly ? null : <li className="table-data">{empName}</li>}
        {isMontly ? null : <DeptName className="table-data">{dept}</DeptName>}
        {isMontly ? <li>{dates}</li> : null}
        <li className="table-data edit-data" onClick={() => openModal(empName, atWork)}>
          <p>{atWork}</p>
          <EditWorkBtn />
        </li>
        <li className="table-data edit-data" onClick={() => openModal(empName, fromWork)}>
          <p>{fromWork}</p>
          <EditWorkBtn />
        </li>
        <WorkType type={workType}>{workType}</WorkType>
        <li>{restTime}</li>
        <li className="table-data">
          <p>{overtime}</p>
        </li>
        <li>{workTime}</li>
        <li>{nigthWork}</li>
      </ul>
      {isOn ? (
        <EditWorkModal isEditWork={true} name={name} date={workDate} closeModal={closeModal} beforeWorkTime={beforeWorkTime} />
      ) : null}
    </>
  );
}

export default WorkStateList;

WorkStateList.propTypes = {
  isMontly: PropTypes.bool,
  dates: PropTypes.any,
  workDate: PropTypes.any,
  empName: PropTypes.string,
  dept: PropTypes.string,
  atWork: PropTypes.string,
  fromWork: PropTypes.string,
  workType: PropTypes.string,
  restTime: PropTypes.string,
  overtime: PropTypes.string,
  workTime: PropTypes.string,
  nigthWork: PropTypes.string,
};
