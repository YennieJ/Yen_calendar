import React from "react";

import * as S from "./checkbox.styled";

function Checkbox({ checked, handleCheckbox }) {
  return (
    <>
      <S.CheckboxWrapper>
        <S.CheckboxType type="checkbox" isChecked={checked} />
        <S.Label onClick={handleCheckbox} isChecked={checked} />
      </S.CheckboxWrapper>
    </>
  );
}

export default Checkbox;
