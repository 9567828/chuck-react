import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonComponent = () => {
  const ButtonPrimary = ({ type, className, form, disabled, text }) => {
    return (
      <button type={type} className={className} form={form} disabled={disabled}>
        <span>{text}</span>
      </button>
    );
  };

  ButtonPrimary.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    form: PropTypes.string,
    disabled: PropTypes.any,
    text: PropTypes.string,
  };

  const EditBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    padding: 2px 0;
    border-radius: 4px;
    background-color: #9e9e9e;
    span {
      font-size: 12px;
      font-weight: 500;
      line-height: 150%;
      color: #ffffff;
    }
  `;

  const EditWorkBtn = () => {
    return (
      <div className="edit-btn-box">
        <EditBtn>
          <img src="/img/ic_edit.svg" alt="수정버튼" />
          <span>수정하기</span>
        </EditBtn>
      </div>
    );
  };

  return { ButtonPrimary, EditWorkBtn };
};

export default ButtonComponent;
