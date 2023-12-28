import "./App.css";
import React from "react";

import { useFrame, useThree } from "@react-three/fiber";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

// ***********TEST*****************
function Rig() {
	const camera = useThree((state) => state.camera);

	return useFrame((state) => {
		camera.position.z = Math.sin(state.clock.elapsedTime) * 20;
	});
}

// ********************************

function App() {
	return (
		<>
			<div id="wrap">
				<Header />
				<Body />
			</div>
			<Footer />
		</>
	);
}

export default App;
