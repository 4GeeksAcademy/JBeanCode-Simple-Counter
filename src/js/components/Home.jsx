import React, {useState} from "react";
import { Timer } from "./Timer";

//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0)

	setTimeout(() => {
		setCounter(counter + 1)
		console.log(counter)
		clearTimeout()
	}, 1000)


	return (
		<div className="text-center">
			<div className="title bg-success">
				<h1 className="mb-0">Second Counter!</h1>
			</div>
			<Timer count={counter} />
		</div>
	);
};

export default Home;