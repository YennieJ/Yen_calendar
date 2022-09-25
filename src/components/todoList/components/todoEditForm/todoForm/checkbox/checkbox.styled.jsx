import styled, { css } from "styled-components";

export default function Checkbox({ checked, handleCheckbox }) {
  return (
    <>
      <CheckboxWrapper>
        <CheckboxType type="checkbox" isChecked={checked} />
        <Label onClick={handleCheckbox} isChecked={checked} />
      </CheckboxWrapper>
    </>
  );
}

const CheckboxWrapper = styled.div`
  position: relative;
`;

const CheckboxType = styled.input`
  visibility: hidden;
  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: #66bb6a;
          border-color: #66bb6a;
          &:after: {
            opacity: 1;
          }
        `
      : null}
`;

const Label = styled.label`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 28px;
  height: 28px;
  position: absolute;
  left: 0;
  top: 0;
  ${({ isChecked }) => {
    return isChecked
      ? css`
          background-color: #66bb6a;
          border-color: #66bb6a;
          &:after {
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            content: "";
            height: 6px;
            left: 7px;
            position: absolute;
            top: 8px;
            transform: rotate(-45deg);
            width: 12px;
          }
        `
      : css`
          background-color: #fff !important;
          &:after {
            opacity: 1;
          }
        `;
  }}
`;
