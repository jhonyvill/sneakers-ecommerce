import * as S from "./styles";
import MinusSvg from "../../../assets/icon-minus.svg?react";
import PlusSvg from "../../../assets/icon-plus.svg?react";

const operator = {
  sum: "+",
  subtraction: "-",
};

const Counter = ({ count, setCount }) => {
  function handleCounter(operation) {
    if (operation === operator.sum)
      count < 10 && setCount((count) => count + 1);
    if (operation === operator.subtraction)
      count > 0 && setCount((count) => count - 1);
  }

  return (
    <S.Container>
      <S.CounterButton onClick={() => handleCounter(operator.subtraction)} aria-label="menos">
        <MinusSvg />
      </S.CounterButton>
      <span>{count}</span>
      <S.CounterButton onClick={() => handleCounter(operator.sum)} aria-label="mais">
        <PlusSvg />
      </S.CounterButton>
    </S.Container>
  );
};

export default Counter;
