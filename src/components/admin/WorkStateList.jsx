// 출퇴근 관리 (일) 리스트
import { useState } from "react";
import ButtonComponent from "../common/ButtonComponents";
import EditWorkStateModal from "../modal/EditWorkStateModal";
import EditWorkModal from "../modal/EditWorkModal";
import "../../assets/scss/screen/admin/work-state.scss";

function WorkStateList() {
  const { EditWorkBtn } = ButtonComponent();
  const [isOn, setIsOn] = useState(false);

  const openModal = () => {
    setIsOn(true);
  };

  const closeModal = () => {
    setIsOn(false);
  };

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
          <li className="table-data">{item.dept}</li>
          <li className="table-data edit-data" onClick={openModal}>
            <p>{item.atWork}</p>
            <EditWorkBtn />
          </li>
          <li className="table-data edit-data" onClick={openModal}>
            <p>{item.fromWork}</p>
            <EditWorkBtn />
          </li>
          <li>{item.workType}</li>
          <li>{item.restTime}</li>
          <li className="table-data edit-data" onClick={openModal}>
            <p>{item.overtime}</p>
            <EditWorkBtn />
          </li>
          <li>{item.workTime}</li>
          <li>{item.nigthWork}</li>
        </ul>
      ))}
      {/* <ul className="table-content">
        <li className="table-data emp-name">김성은</li>
        <li className="table-data dept-name">프론트엔드 개발자</li>
        <li className="table-data edit-data" onClick={openModal}>
          <p>-</p>
          <EditWorkBtn />
        </li>
        <li className="table-data edit-data" onClick={openModal}>
          <p>-</p>
          <EditWorkBtn />
        </li>
        <li className="table-data">결근</li>
        <li className="table-data">1시간</li>
        <li className="table-data edit-data" onClick={openModal}>
          <p>-</p>
          <EditWorkBtn />
        </li>
        <li className="table-data">-</li>
        <li className="table-data">-</li>
      </ul> */}
      {isOn ? <EditWorkStateModal cancelFn={closeModal} /> : <></>}
      <EditWorkModal />
    </div>
  );
}

export default WorkStateList;
