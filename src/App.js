import "./css/App.css";
import Cell from "./components/Cell";
import Display from "./components/Display";
// import Clear from "./components/Clear";
import store from "./redux/store";
import { Provider } from "react-redux";
function App() {
	console.log(store);
	return (
		<Provider store={store}>
			<h1>Calculatrice avec React et Redux</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex quis
				ea ipsa, distinctio molestias repellat exercitationem accusamus dolore
				eveniet, ipsum quas porro assumenda ducimus enim aliquid, deserunt
				voluptates rem?
			</p>
			<div className='App'>
				<Display />
				<section id='numbers'>
					<Cell content={"AC"} id='clear' />
					<Cell content={"÷"} id='divide' />
					<Cell content={"×"} id='multiply' />
					<Cell content={"7"} id='seven' />
					<Cell content={"8"} id='eight' />
					<Cell content={"9"} id='nine' />
					<Cell content={"-"} id='subtract' />
					<Cell content={"4"} id='four' />
					<Cell content={"5"} id='five' />
					<Cell content={"6"} id='six' />
					<Cell content={"+"} id='add' />
					<Cell content={"1"} id='one' />
					<Cell content={"2"} id='two' />
					<Cell content={"3"} id='three' />
					<Cell content={"0"} id='zero' />
					<Cell content={"."} id='decimal' />
					<Cell content={"="} id='equals' />
				</section>
			</div>
		</Provider>
	);
}

export default App;
