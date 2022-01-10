import { NextPage } from "next";
import { createContext, useContext, useReducer } from "react";

interface children {
  children: React.ReactNode;
}

interface contextTypes {
  currentOperand: stateTypes["currentOperand"];
  previousOperand: stateTypes["previousOperand"];
  operation: stateTypes["operation"];
  dispatch: React.Dispatch<action>;
}

const operationContext = createContext({} as contextTypes);
export const useOperation = () => useContext(operationContext);

export enum ACTIONS {
  ADD_DIGIT = "add_digit",
  CHOOSE_OPERATION = "chose_operation",
  CLEAR = "clear",
  DELETE_DIGIT = "delete_digit",
  EVALUATE = "evaluate",
}

interface action {
  type: ACTIONS;
  payload: string;
}

const startState: stateTypes = {
  currentOperand: "",
  previousOperand: "",
  operation: ""
}

interface stateTypes {
  currentOperand: string;
  previousOperand: string;
  operation: string;
  overwrite?: boolean;
}

const reducer = (state: stateTypes, { type, payload }: action) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload,
          overwrite: false,
        };
      }
      if (payload === "0" && state.currentOperand === "0") return state;

      if (payload === "." && state.currentOperand.includes(".")) return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == "" && state.previousOperand == "") return state;

      else if (state.currentOperand == "") {
        return {
          ...state,
          operation: payload,
        };
      }

      if (state.previousOperand == "") {
        return {
          ...state,
          operation: payload,
          previousOperand: state.currentOperand,
          currentOperand: "",
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload,
        currentOperand: "",
      };
    case ACTIONS.CLEAR:
      return startState
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: "",
        };
      }
      if (state.currentOperand == "") return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: "" };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (
        state.operation == "" ||
        state.currentOperand == "" ||
        state.previousOperand == ""
      )
        return state;

      return {
        ...state,
        overwrite: true,
        previousOperand: "",
        operation: "",
        currentOperand: evaluate(state),
      };
  }
};

const evaluate = ({
  currentOperand,
  previousOperand,
  operation
}: stateTypes) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = (prev + current).toString();
      break;
    case "-":
      computation = (prev - current).toString();
      break;
    case "*":
      computation = (prev * current).toString();
      break;
    case "÷":
      computation = (prev / current).toString();
      break;
  }

  return computation.toString();
};

const OperationContextProvider: NextPage<children> = ({ children }) => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    startState
  );
  return (
    <operationContext.Provider
      value={{ currentOperand, previousOperand, operation, dispatch}}
    >
      {children}
    </operationContext.Provider>
  );
};

export default OperationContextProvider;
