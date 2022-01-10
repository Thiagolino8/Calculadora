import { NextPage } from "next";
import { ACTIONS, useOperation } from "../../hooks/useOperation";
import Current from "../../styles/current";
import Grid from "../../styles/grid";
import Interface from "../../styles/interface";
import Output from "../../styles/output";
import Previous from "../../styles/Previous";
import CalcButton from "./calcButton";

const Calculator: NextPage = () => {
  const { currentOperand, previousOperand, operation } =
    useOperation();
  return (
    <Interface>
      <Grid>
        <Output>
          <Previous>
            {previousOperand} {operation}
          </Previous>
          <Current>{currentOperand}</Current>
        </Output>
        <CalcButton type="span" action={ACTIONS.CLEAR}>
          AC
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.DELETE_DIGIT}>
          DEL
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.CHOOSE_OPERATION}>
          ÷
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.ADD_DIGIT}>
          7
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.ADD_DIGIT}>
          8
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.ADD_DIGIT}>
          9
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.CHOOSE_OPERATION}>
          *
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.ADD_DIGIT}>
          4
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.ADD_DIGIT}>
          5
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.ADD_DIGIT}>
          6
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.CHOOSE_OPERATION}>
          +
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.ADD_DIGIT}>
          1
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.ADD_DIGIT}>
          2
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.ADD_DIGIT}>
          3
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.CHOOSE_OPERATION}>
          -
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.ADD_DIGIT}>
          .
        </CalcButton>
        <CalcButton type="button" action={ACTIONS.ADD_DIGIT}>
          0
        </CalcButton>
        <CalcButton type="span" action={ACTIONS.EVALUATE}>
          =
        </CalcButton>
      </Grid>
    </Interface>
  );
};

export default Calculator;
