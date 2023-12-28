import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";
import "../styles/utils.css";

export default function Header() {
	const [isBlack, setIsBlack] = React.useState(true);
	const [menuOpen, setMenuOpen] = useState(false);

	/* 외부 클릭 시 메뉴 닫힘 */
	useEffect(() => {
		window.addEventListener("click", handleOutsideClick);
		return () => {
			window.removeEventListener("click", handleOutsideClick);
		};
	}, [menuOpen]);

	const handleOutsideClick = (e) => {
		if (menuOpen) {
			if (
				headerRef.current &&
				!headerRef.current.contains(e.target) &&
				menuIconRef.current &&
				!menuIconRef.current.contains(e.target)
			) {
				setMenuOpen(false);
			}
		}
	};

	const headerRef = useRef(null);
	const menuIconRef = useRef(null);
	/* -------------------------- */

	/* 홈에서 메뉴 색상 Black */
	React.useEffect(() => {
		console.log(document.location.pathname);
		if (document.location.pathname === "/") {
			setIsBlack(true);
		}
	}, [document.location.pathname]);

	function toggleMenu() {
		setMenuOpen(!menuOpen);
	}

	useEffect(() => {
		const navIcon3 = menuIconRef.current;
		if (navIcon3) {
			navIcon3.classList.toggle("open", menuOpen);
		}
	}, [menuOpen]);
	return (
		<>
			{/* LOGO */}
			<Link
				to="/"
				onClick={() => {
					setIsBlack(false), setMenuOpen(false);
				}}
			>
				<img
					className="logo"
					src="Sub-Y.png"
					style={{
						filter:
							document.location.pathname === "/"
								? "brightness(0) invert(1)"
								: "",
					}}
				/>
			</Link>

			{/* 햄버거 메뉴 */}
			<div
				className="menu-icon"
				ref={menuIconRef}
				onClick={toggleMenu}
				style={{
					filter:
						document.location.pathname === "/" ? "brightness(0) invert(1)" : "",
				}}
			>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<header /* menu on/off */
				className={menuOpen ? `header ${isBlack ? "black" : ""} ` : "menuClose"}
				ref={headerRef}
			>
				<div className={menuOpen ? "header-inner" : ""}>
					<nav className={`header-menu`}>
						<ul style={{ display: menuOpen ? "flex" : "none" }}>
							<li>
								<NavLink
									className={`nav-item ${
										isBlack ? "black" : ""
									} disable-underline`}
									to="/DigitalSolutions"
									onClick={() => {
										setIsBlack(true);
										setMenuOpen(false);
									}}
								>
									Service
								</NavLink>
							</li>
							<NavLink
								className={`sub-menu ${isBlack ? "black" : ""}`}
								to="/DigitalSolutions"
								onClick={() => {
									setIsBlack(true);
									setMenuOpen(false);
								}}
							>
								<span className="plus-sign">+</span> Digital Solution
							</NavLink>
							<NavLink
								className={`sub-menu ${isBlack ? "black" : ""}`}
								to="/CreativeDesign"
								onClick={() => {
									setIsBlack(true);
									setMenuOpen(false);
								}}
							>
								<span className="plus-sign">+</span> Creative Design{" "}
							</NavLink>

							<li>
								<NavLink
									className={`nav-item ${isBlack ? "black" : ""}`}
									to="/product"
									onClick={() => {
										setIsBlack(true);
										setMenuOpen(false);
									}}
								>
									Product
								</NavLink>
							</li>
							<li>
								<NavLink
									className={`nav-item ${isBlack ? "black" : ""}`}
									to="/about"
									onClick={() => {
										setIsBlack(true);
										setMenuOpen(false);
									}}
								>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									className={`nav-item ${isBlack ? "black" : ""}`}
									to="/career"
									onClick={() => {
										setIsBlack(true);
										setMenuOpen(false);
									}}
								>
									Career
								</NavLink>
							</li>
							<li>
								<NavLink
									className={`nav-item ${isBlack ? "black" : ""}`}
									to="/contact"
									onClick={() => {
										setIsBlack(true);
										setMenuOpen(false);
									}}
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}
