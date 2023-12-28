import "../styles/footer.css";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
	console.log(window.location.pathname === "/");

	const footer = document.querySelector("footer");
	console.log(footer);
	if (window.location.pathname === "/") {
		// footer.classList.add("on");
	}

	return (
		<>
			<footer className="footer">
				<div className="footer-inner">
					<a
						href="https://www.linkedin.com/company/submarine-y/mycompany/"
						target="_blank"
						className="social-area"
					>
						<AiFillLinkedin
							className="hvr-glow"
							style={{ fontSize: "2vw", position: "absolute" }}
						/>
					</a>
					<div className="copyright-area">
						Copyright 2024. submarine-y all rights reserved.
					</div>
				</div>
			</footer>
		</>
	);
}
