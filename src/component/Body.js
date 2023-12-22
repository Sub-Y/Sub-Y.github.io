import { Route, Routes, useLocation } from "react-router-dom";
import Scene from "../Scene";
import Product from "./Product";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import DigitalSolutions from "./DigitalSolutions";
import CreativeDesign from "./CreativeDesign";
import { AnimatePresence } from "framer-motion";
import "../styles/utils.css";

export default function Body() {
	const location = useLocation();

	return (
		<main className="container">
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Scene />} />
					<Route path="/DigitalSolutions" element={<DigitalSolutions />} />
					<Route path="/CreativeDesign" element={<CreativeDesign />} />
					<Route path="/product" element={<Product />} />
					<Route path="/about" element={<About />} />
					<Route path="/career" element={<Career />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</AnimatePresence>
		</main>
	);
}
