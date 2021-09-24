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
const calc = (arr, currNumber) => {
	arr.push(currNumber);
	arr.push("+");
	// if(!isNaN(Number(arr[arr.length-1]))) {
	// 	arr.push("+");
	// }
	console.log("DEBUT CALCUL :", arr);
	// Renvoie true si elt est un opérateur !
	const isOp = (elt) => {
		return isNaN(Number(elt));
	}
	while (arr.length >= 3) {
		let subArr = arr.slice(0, 3);
		let op = subArr[1];
		console.log("SUB ARR :", subArr);
		if(isOp(subArr[2])) {
			if (subArr[2]==="-") {
				let firstElt = arr.shift();
				arr.shift();
				arr.shift();
				let fourthElt=arr.shift();
				if (isOp(fourthElt)) {
					arr=[firstElt,fourthElt,...arr];
				} else {
					arr=[firstElt,op,String(-1*fourthElt),...arr];
				}
			} else {
				let firstElt = arr.shift();
				arr.shift();
				arr=[firstElt,...arr];
			}
		} else if (op === "+") {
			arr.shift();
			arr.shift();
			arr.shift();
			arr.unshift(String(Number(subArr[0]) + Number(subArr[2])));
			// console.log(arr);
		} else if (op === "-") {
			arr.shift();
			arr.shift();
			arr.shift();
			arr.unshift(String(Number(subArr[0]) - Number(subArr[2])));
			// console.log(arr);
		} else if (op === "/") {
			arr.shift();
			arr.shift();
			arr.shift();
			arr.unshift(String(Number(subArr[0]) / Number(subArr[2])));
			// console.log(arr);
		} else if (op === "*") {
			arr.shift();
			arr.shift();
			arr.shift();
			arr.unshift(String(Number(subArr[0]) * Number(subArr[2])));
			// console.log(arr);
		}
	}
	return arr[0];
};

const printAction = (number) => {
	return {
		type: PRINT_NUMBER,
		number: number,
	};
};
const dotAction = () => {
	return {
		type: ADD_DOT,
	};
};
const clearAction = () => {
	return {
		type: CLEAR_CALCUL,
	};
};
const addAction = (number) => {
	return {
		type: ADD,
		number: number,
		operation: "+",
	};
};
const subtractAction = (number) => {
	return {
		type: SUBTRACT,
		number: number,
		operation: "-",
	};
};
const divideAction = (number) => {
	return {
		type: DIVIDE,
		number: number,
		operation: "/",
	};
};
const multAction = (number) => {
	return {
		type: MULT,
		number: number,
		operation: "*",
	};
};
const equalAction = (oppArray, currNumber) => {
	return {
		type: EQUAL,
		oppArray: oppArray,
		operation: "=",
		finalResult: calc(oppArray, currNumber),
	};
};
export {
	printAction,
	clearAction,
	addAction,
	subtractAction,
	divideAction,
	multAction,
	equalAction,
	dotAction,
};
