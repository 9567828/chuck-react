import { Link } from "react-router";
import { useEffect, useState } from "react";
import CustomMove from "../hooks/CustomMove";
import { MessageStyle, Title } from "../common/StyledComponent";
import ButtonComponent from "../common/ButtonComponents";
import * as s from "../../assets/scss/modules/style.module.scss";
import "../../assets/scss/screen/account/join.scss";

function Join() {
  const [msg, setMsg] = useState("");
  const [isCheckAll, setisCheckAll] = useState(false);
  const [isAbleBtn, setIsAbleBtn] = useState(false);

  const [checkAgree, setCheckAgree] = useState({
    private: true, // 개인정보 동의 체크
    service: true, // 서비스 이용약관 동의 체크
    optional: false,
  });

  const { moveToPage } = CustomMove();
  const { ButtonPrimary } = ButtonComponent();

  const termsList = [
    { key: 1, title: "(필수) 개인정보 수집 이용 동의하기", isRequired: true, id: "private" },
    { key: 2, title: "(필수) 서비스 이용약관 동의하기", isRequired: true, id: "service" },
    { key: 3, title: "(선택) 메일, SNS 수신에 동의합니다.", isRequired: false, id: "optional" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputName = document.getElementById("inputName");
    const nameValue = inputName.value;
    if (nameValue.trim() === "") {
      setMsg("이름을 입력해주세요.");
      return;
    }
    moveToPage("/join/verify-email");
  };

  // 필수 체크박스의 상태를 업데이트하는 함수
  const isCheckRequired = (e) => {
    const { id, checked } = e.target;
    setCheckAgree((prev) => {
      const updated = { ...prev, [id]: checked };
      // 하나라도 체크가 안되면 버튼을 비활성화
      setIsAbleBtn(!(updated.private && updated.service));
      return updated;
    });
  };

  const isCheckOption = (e) => {
    const { checked } = e.target;
    if (checked) {
      setisCheckAll(true);
    }
    setCheckAgree((prev) => ({ ...prev, optional: checked }));
  };

  const handleChangeAll = (e) => {
    const checked = e.target.checked;
    setCheckAgree({
      private: checked,
      service: checked,
      optional: checked,
    });
    setisCheckAll(checked);
    setIsAbleBtn(!checked); // "모든 약관 동의"가 체크되면 버튼 활성화
  };

  // "모든 약관 동의" 체크 상태를 동적으로 설정
  useEffect(() => {
    const allChecked = checkAgree.private && checkAgree.service && checkAgree.optional;
    if (!allChecked) {
      setisCheckAll(false); // 모든 항목이 체크되지 않으면 "모든 약관 동의" 체크 해제
    }
  }, [checkAgree]);

  return (
    <div className="sign-container">
      <Title>이름 / 생년월일</Title>
      <div className="input-container">
        <form action="" id="joinForm" onSubmit={handleSubmit}>
          <div className="name-wrap">
            <label htmlFor="inputName"></label>
            <input type="text" name="" id="inputName" className="input-box name" placeholder="이름" />
          </div>
          <MessageStyle color="red">{msg ? msg : ""}</MessageStyle>
          <div className="input-birth-wrap">
            <label htmlFor="birthYear">
              <input type="number" name="" id="birthYear" className="input-box birth year" placeholder="YYYY" maxLength="4" />
            </label>
            <label htmlFor="birthMonth">
              <input type="number" name="" id="birthMonth" className="input-box birth month" placeholder="MM" maxLength="2" />
            </label>
            <label htmlFor="birthDate">
              <input type="number" name="" id="birthDate" className="input-box birth date" placeholder="DD" maxLength="2" />
            </label>
          </div>
        </form>
        <div className="check-box-wrap">
          {termsList.map((item) => (
            <div className="check-box" key={item.key}>
              <input
                type="checkbox"
                name="check-agree"
                id={item.id}
                className="square-check-box"
                onChange={item.isRequired ? isCheckRequired : isCheckOption}
                checked={checkAgree[item.id]}
              />
              <label></label>
              <label htmlFor={item.id}>{item.title}</label>
            </div>
          ))}
          <div>
            <input
              type="checkbox"
              name="check-all"
              id="allAgree"
              checked={isCheckAll}
              onChange={handleChangeAll}
              className="square-check-box"
            />
            <label></label>
            <label htmlFor="allAgree">모든 약관 및 방침에 동의합니다.</label>
          </div>
        </div>
      </div>
      <ButtonPrimary type={"submit"} className={"primary-btn long"} form={"joinForm"} disabled={isAbleBtn} text={"다음"} />
      <Link to="/login" className={`${s.textBtnMt}`}>
        돌아가기
      </Link>
    </div>
  );
}

export default Join;
