import React from "react";
import { connect } from "react-redux";
import {
	printAction,
	clearAction,
	addAction,
	subtractAction,
	divideAction,
	multAction,
	equalAction,
	dotAction,
} from "../redux/cell/action";

class Presentational extends React.PureComponent {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		console.log(this.props);
		if (this.props.id === "clear") {
			this.props.clearCalcul();
		} else if (this.props.id === "add") {
			this.props.addNumber();
		} else if (this.props.id === "subtract") {
			this.props.subtractNumber();
		} else if (this.props.id === "multiply") {
			this.props.multNumber();
		} else if (this.props.id === "divide") {
			this.props.divideNumber();
		} else if (this.props.id === "equals") {
			this.props.getResult(
				this.props.calc.oppArray,
				this.props.calc.currNumber
			);
		} else if (this.props.id === "decimal") {
			this.props.addDot();
		} else {
			this.props.printNewNumber(this.props.content);
		}
	}
	render() {
		return (
			<button className={"cell"} id={this.props.id} onClick={this.handleClick}>
				{this.props.content}
			</button>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		calc: state.print,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		printNewNumber: (number) => {
			dispatch(printAction(number));
		},
		clearCalcul: () => {
			dispatch(clearAction());
		},
		addNumber: () => {
			dispatch(addAction());
		},
		addDot: () => {
			dispatch(dotAction());
		},
		subtractNumber: () => {
			dispatch(subtractAction());
		},
		divideNumber: () => {
			dispatch(divideAction());
		},
		multNumber: () => {
			dispatch(multAction());
		},
		getResult: (oppArray, currNumber) => {
			dispatch(equalAction(oppArray, currNumber));
		},
	};
};
const Cell = connect(mapStateToProps, mapDispatchToProps)(Presentational);
export default Cell;
