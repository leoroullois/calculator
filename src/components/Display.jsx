import React from "react";
// import store from "../redux/store";
import { connect } from "react-redux";
import displayAction from "../redux/display/action";
class Presentational extends React.Component {
	componentDidUpdate() {
		console.table(this.props.calc);
	}
	// componentDidMount() {
	// 	const arr = ["10", "+", "5", "+"];
	// 	let subArr = arr.slice(0, 3);
	// 	let op = subArr[1];
	// 	console.log("subArr", subArr);
	// 	if (op === "+") {
	// 		console.log(Number(subArr[0]) + Number(subArr[2]));
	// 	}
	// }
	render() {
		return <section id='display'>{this.props.calc.number}</section>;
	}
}
const mapStateToProps = (state) => {
	return {
		calc: state.print,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		displayCalcul: () => {
			dispatch(displayAction());
		},
	};
};
// const Cell = connect(mapStateToProps,mapDispatchToProps)(Presentational);
const Display = connect(mapStateToProps, mapDispatchToProps)(Presentational);
export default Display;

