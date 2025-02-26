// 출퇴근 관리 (일) 리스트
import { useState } from "react";
import ButtonComponent from "../common/ButtonComponents";
import EditWorkStateModal from "../modal/EditWorkStateModal";

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
  return (
    <div className="table-wrap date-table">
      <ul className="table-title">
        {thItems.map((item) => (
          <li key={item.id} className="table-head">
            {item.name}
          </li>
        ))}
      </ul>
      <ul className="table-content">
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
      </ul>
      {isOn ? <EditWorkStateModal cancelFn={closeModal} /> : <></>}
    </div>
  );
}

export default WorkStateList;
