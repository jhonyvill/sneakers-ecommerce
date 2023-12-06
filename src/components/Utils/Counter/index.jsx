import * as S from "./styles";
import MinusSvg from "../../../assets/icon-minus.svg?react";
import PlusSvg from "../../../assets/icon-plus.svg?react";

const Counter = ({ count, setCount }) => {
  
  function increment(){
    count < 10 && setCount((count) => count + 1);
  }
  function decrement(){
    count > 0 && setCount((count) => count - 1);
  }

  return (
    <S.Container aria-label="selecione a quantidade de itens">
      <S.CounterButton onClick={decrement} aria-label="menos">
        <MinusSvg />
      </S.CounterButton>
      <span data-testid='counter'>{count}</span>
      <S.CounterButton onClick={increment} aria-label="mais">
        <PlusSvg />
      </S.CounterButton>
    </S.Container>
  );
};

export default Counter;
