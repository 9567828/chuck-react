import styled from "styled-components";

export const MessageStyle = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "padding", // 'padding'은 DOM으로 전달되지 않음
})`
  font-size: 14px;
  color: ${(props) => (props.color === "red" ? "#ff3333" : "#757575")};
  text-align: left;
  padding: ${(props) => (props.padding ? props.padding : `8px 8px 0`)};
`;

export const EmptyMessage = styled.div`
  height: calc(100% - 81px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #757575;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 140%;
  margin-bottom: 24px;
`;
