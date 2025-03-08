import styled from "styled-components";
import PropTypes from "prop-types";
import * as s from "../../assets/scss/modules/style.module.scss";

const Div = styled.div`
  margin: 32px 0;
`;

const Label = styled.label`
  display: block;
  width: fit-content;
  margin-bottom: 6px;
  padding-left: 4px;
`;

function ProfileEditComp({ empName, empNumber, empPhone }) {
  return (
    <>
      <Div>
        <div>
          <Label htmlFor="empName" className={s.bodySmB}>
            이름
          </Label>
          <input type="text" name="" id="empName" className="input-box small" placeholder={empName} />
        </div>
        <div>
          <Label htmlFor="empNumber" className={s.bodySmB}>
            전화번호
          </Label>
          <input type="text" name="" id="empNumber" className="input-box small" placeholder={empNumber} />
        </div>
        <div>
          <Label htmlFor="empPhone" className={s.bodySmB}>
            핸드폰 번호
          </Label>
          <input type="text" name="" id="empPhone" className="input-box small" placeholder={empPhone} />
        </div>
      </Div>
      <div className={s.btnWrap}>
        <button className="primary-btn small">저장하기</button>
        <button className="primary-btn small cancel">취소</button>
      </div>
    </>
  );
}

export default ProfileEditComp;

ProfileEditComp.propTypes = {
  empName: PropTypes.string,
  empNumber: PropTypes.string,
  empPhone: PropTypes.string,
};
