import style from "../../assets/scss/modules/style.module.scss";
import styled from "styled-components";

const Pred = styled.p`
  color: #ff3333;
  font-size: 14px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px 0;
`;

const CodeTime = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ResendBtn = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

function VerifyComponent() {
  return (
    <div className="verify-container" id="verifyContainer">
      <div>
        <label htmlFor="verifyCode"></label>
        <input type="text" name="" id="verifyCode" className="input-box" placeholder="인증번호 (숫자6자리)" />
      </div>
      <Container>
        <CodeTime className="code-time-wrap">
          <Pred>2분 내로 인증을 완료해주세요.</Pred>
          <Pred id="timer">02:00</Pred>
        </CodeTime>
        <ResendBtn className={style.grayMsgFont}>재전송</ResendBtn>
      </Container>
    </div>
  );
}

export default VerifyComponent;
