import {
	PRINT_NUMBER,
	CLEAR_CALCUL,
	ADD,
	SUBTRACT,
	DIVIDE,
	MULT,
	EQUAL,
	ADD_DOT,
} from "./type";
const initialState = {
	number: "",
	operation: "",
	prevNumber: "",
	currNumber: "",
	oppArray: [],
};
const cellReducer = (state = initialState, action) => {
	switch (action.type) {
		case PRINT_NUMBER:
			return {
				...state,
				number:
					state.number === "0"
						? action.number
						: state.number.concat(action.number),
				currNumber:
					state.currNumber === "0"
						? action.number
						: state.currNumber.concat(action.number),
			};
		case ADD_DOT:
			return {
				...state,
				number: !state.number.includes(".")
					? state.number.concat(".")
					: state.number,
				currNumber: !state.currNumber.includes(".")
					? state.currNumber.concat(".")
					: state.currNumber,
			};
		case CLEAR_CALCUL:
			return {
				number: "0",
				operation: "",
				prevNumber: "",
				currNumber: "",
				oppArray: [],
			};
		case ADD:
			return {
				...state,
				operation: action.operation,
				prevNumber: state.currNumber,
				currNumber: "",
				number:
					state.number === "0"
						? action.number
						: state.number.concat(action.operation),
				oppArray:
					state.currNumber === ""
						? [...state.oppArray, action.operation]
						: [...state.oppArray, state.currNumber, action.operation],
			};
		case SUBTRACT:
			return {
				...state,
				operation: action.operation,
				prevNumber: state.currNumber,
				currNumber: "",
				number:
					state.number === "0"
						? action.operation
						: state.number.concat(action.operation),
				oppArray:
					state.currNumber === ""
						? [...state.oppArray, action.operation]
						: [...state.oppArray, state.currNumber, action.operation],
				// oppArray: [...state.oppArray,action.operation,state.prevNumber],
			};
		case DIVIDE:
			return {
				...state,
				operation: action.operation,
				prevNumber: state.currNumber,
				currNumber: "",
				number:
					state.number === "0"
						? action.operation
						: state.number.concat(action.operation),
				oppArray:
					state.currNumber === ""
						? [...state.oppArray, action.operation]
						: [...state.oppArray, state.currNumber, action.operation],
			};
		case MULT:
			return {
				...state,
				operation: action.operation,
				prevNumber: state.currNumber,
				currNumber: "",
				number:
					state.number === "0"
						? action.number
						: state.number.concat(action.operation),
				oppArray:
					state.currNumber === ""
						? [...state.oppArray, action.operation]
						: [...state.oppArray, state.currNumber, action.operation],
			};
		case EQUAL:
			return {
				number: action.finalResult,
				operation: "",
				prevNumber: "",
				currNumber: action.finalResult,
				oppArray: [],
			};
		default:
			return state;
	}
};
export default cellReducer;
