import { Link } from "react-router";
import { useState } from "react";
import CustomMove from "../hooks/customMove";
import { MessageStyle, Title } from "../common/StyledComponent";
import ButtonComponent from "../common/ButtonComponents";

function Join() {
  const [msg, setMsg] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [isAble, setIsAble] = useState(false);

  const [checkAgree, setCheckAgree] = useState({
    requirePrivate: true, // 개인정보 동의 체크
    requireService: true, // 서비스 이용약관 동의 체크
  });

  const { moveToPage } = CustomMove();
  const { ButtonPrimary } = ButtonComponent();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputName = document.getElementById("inputName");
    const nameValue = inputName.value;
    if (nameValue.trim() === "") {
      setMsg("이름을 입력해주세요.");
      return;
    }
    moveToPage("/join/varify-email");
  };

  // 필수 체크박스의 상태를 업데이트하는 함수
  const isCheckRequired = (e) => {
    const { id, checked } = e.target;
    setCheckAgree((prev) => {
      const updated = { ...prev, [id]: checked };
      // 하나라도 체크가 안되면 버튼을 비활성화
      setIsAble(!(updated.requirePrivate && updated.requireService));
      return updated;
    });
  };

  const handleChangeAll = (e) => {
    const checked = e.target.checked;
    setCheckAgree({
      requirePrivate: checked,
      requireService: checked,
    });
    setIsClick(checked);
    setIsAble(!checked);
  };

  const isCheckOption = (e) => {
    if (e.target.checked) {
      setIsClick(true);
    } else {
      setIsClick(false);
    }
  };

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
          <div>
            <input
              type="checkbox"
              name="check-agree"
              id="requirePrivate"
              className="square-check-box"
              onChange={isCheckRequired}
              checked={checkAgree.requirePrivate}
            />
            <label></label>
            <label htmlFor="requirePrivate">(필수) 개인정보 수집 이용 동의하기</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="check-agree"
              id="requireService"
              className="square-check-box"
              onChange={isCheckRequired}
              checked={checkAgree.requireService}
            />
            <label></label>
            <label htmlFor="requireService">(필수) 서비스 이용약관 동의하기</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="check-agree"
              checked={isClick}
              onChange={isCheckOption}
              id="emailAgree"
              className="square-check-box"
            />
            <label></label>
            <label htmlFor="emailAgree">(선택) 메일, SNS 수신에 동의합니다.</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="check-all"
              id="allAgree"
              checked={isClick ? true : false}
              onChange={handleChangeAll}
              className="square-check-box"
            />
            <label></label>
            <label htmlFor="allAgree">모든 약관 및 방침에 동의합니다.</label>
          </div>
        </div>
      </div>
      <ButtonPrimary type={"submit"} className={"primary-btn long"} form={"joinForm"} disabled={isAble} text={"다음"} />
      <Link to="/login" className="text-btn back">
        돌아가기
      </Link>
    </div>
  );
}

export default Join;
