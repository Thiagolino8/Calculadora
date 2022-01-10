import { ACTIONS, useOperation } from "../../hooks/useOperation";
import Button from "../../styles/button";
import SpanTwo from "../../styles/spanTwo";

interface children {
  action: ACTIONS
  type: "button" | "span"
  children: string;
}

const CalcButton = ({ action, type, children }: children) => {
  const { dispatch } = useOperation();

  if (type === "button") {
    return (
      <Button
        onClick={() =>
          dispatch({ type: action, payload: children })
        }
      >
        {children}
      </Button>
    )
  }
  if(type === "span") {
    return (
      <SpanTwo
        onClick={() =>
          dispatch({ type: action, payload: children })
        }
      >
        {children}
      </SpanTwo>
    )
  }
  return null;
};
export default CalcButton;
