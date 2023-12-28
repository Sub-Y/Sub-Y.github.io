// import { useState } from "react";
// import "../styles/digitalSolutions.css";
// import { BsPlusLg } from "react-icons/bs";
// import DSModal1 from "./DSModal1";
// import DSModal2 from "./DSModal2";
// import DSModal3 from "./DSModal3";
// import DS1 from "../image/DS1.png";
// import DS2 from "../image/DS2.png";
// import DS3 from "../image/DS3.png";
// import { FormattedMessage } from "react-intl";

// export default function DigitalSolutions() {
// 	const [modalOpen1, setModalOpen1] = useState(false);
// 	const [modalOpen2, setModalOpen2] = useState(false);
// 	const [modalOpen3, setModalOpen3] = useState(false);

// 	function toggleModal1() {
// 		setModalOpen1(!modalOpen1);
// 	}
// 	function toggleModal2() {
// 		setModalOpen2(!modalOpen2);
// 	}
// 	function toggleModal3() {
// 		setModalOpen3(!modalOpen3);
// 	}

// 	return (
// 		<>
// 			<div
// 				className={`wrapper DS ${
// 					(modalOpen1, modalOpen2, modalOpen3 ? "blur-background" : "")
// 				}`}
// 			>
// 				<section>
// 					<div className="DS-text">
// 						<h1 className="title-container">
// 							<div className="title DS">
// 								Digital
// 								<br />
// 								Solutions
// 							</div>
// 						</h1>
// 						<div className="DS-detail">
// 							Our digital solutions cover <br /> everything from data
// 							preparation <br />
// 							to optimization, asset production
// 							<br /> and asset management.
// 						</div>
// 					</div>
// 					<div className="slider-container">
// 						<div className="slider1">
// 							<img
// 								className="slider"
// 								alt="DS1"
// 								src={DS1}
// 								onClick={toggleModal1}
// 							></img>
// 							<div className="slider-text" onClick={toggleModal1}>
// 								WEB Configurator for <br />
// 								Fashion
// 							</div>
// 						</div>
// 						<div className="slider2">
// 							<img
// 								className="slider"
// 								alt="DS2"
// 								src={DS2}
// 								onClick={toggleModal2}
// 							></img>
// 							<div className="slider-text" onClick={toggleModal2}>
// 								WEBGL Cofigurator & <br />
// 								High-end Image Production
// 								<br /> System
// 							</div>
// 						</div>
// 						<div className="slider3">
// 							<img
// 								className="slider"
// 								alt="DS3"
// 								src={DS3}
// 								onClick={toggleModal3}
// 							></img>
// 							<div className="slider-text" onClick={toggleModal3}>
// 								Image License
// 							</div>
// 						</div>
// 					</div>
// 				</section>
// 			</div>
// 			{modalOpen1 && <DSModal1 toggleModal1={toggleModal1} />}
// 			{modalOpen2 && <DSModal2 toggleModal2={toggleModal2} />}
// 			{modalOpen3 && <DSModal3 toggleModal3={toggleModal3} />}
// 		</>
// 	);
// }

// // import gsap from "gsap";
// // import ScrollTrigger from "gsap/dist/ScrollTrigger";
// // import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// // import "../styles/services.css";
// // import Avante1 from "../image/service/Avante_Meta-Blue_Pearl_1920x1052.png";

// // export default function Service() {
// // 	// gsap 라이브러리를 사용하여 각 아이템의 나타내는 부분을 처리함
// // 	useLayoutEffect(() => {
// // 		gsap.registerPlugin(ScrollTrigger);
// // 		const animation1 = gsap.from(".item-1", {
// // 			scrollTrigger: {
// // 				trigger: ".item-1",
// // 				// markers: true,
// // 				start: "top bottom",
// // 				end: "bottom 10%",
// // 				toggleActions: "play none none none",
// // 			},
// // 			duration: 2,
// // 			x: -400,
// // 			opacity: 0,
// // 		});

// // 		const animation2 = gsap.from(".item-2", {
// // 			scrollTrigger: {
// // 				trigger: ".item-2",
// // 				// markers: true,
// // 				start: "top bottom",
// // 				end: "bottom 10%",
// // 				toggleActions: "play none none none",
// // 			},
// // 			duration: 2,
// // 			x: 400,
// // 			opacity: 0,
// // 		});

// // 		const animation3 = gsap.from(".item-3", {
// // 			scrollTrigger: {
// // 				trigger: ".item-3",
// // 				// markers: true,
// // 				start: "top bottom",
// // 				end: "bottom 10%",
// // 				toggleActions: "play none none none",
// // 			},
// // 			duration: 2,
// // 			x: -400,
// // 			opacity: 0,
// // 		});

// // 		const animation4 = gsap.from(".item-4", {
// // 			scrollTrigger: {
// // 				trigger: ".item-4",
// // 				// markers: true,
// // 				start: "top bottom",
// // 				end: "bottom 10%",
// // 				toggleActions: "play none none none",
// // 			},
// // 			duration: 2,
// // 			x: 400,
// // 			opacity: 0,
// // 		});
// // 		const animation5 = gsap.from(".creative-item-1", {
// // 			scrollTrigger: {
// // 				trigger: ".creative-item-1",
// // 				// markers: true,
// // 				start: "bottom bottom",
// // 				end: "bottom 10%",
// // 				toggleActions: "play none none none",
// // 			},
// // 			duration: 2,
// // 			y: 300,
// // 			opacity: 0,
// // 		});
// // 		const animation6 = gsap.from(".creative-item-2", {
// // 			scrollTrigger: {
// // 				trigger: ".creative-item-2",
// // 				// markers: true,
// // 				start: "bottom bottom",
// // 				end: "bottom 10%",
// // 				toggleActions: "play none none none",
// // 			},
// // 			duration: 2,
// // 			y: 300,
// // 			opacity: 0,
// // 		});
// // 		const animation7 = gsap.from(".creative-item-3", {
// // 			scrollTrigger: {
// // 				trigger: ".creative-item-3",
// // 				// markers: true,
// // 				start: "bottom bottom",
// // 				end: "bottom 10%",
// // 				toggleActions: "play none none none",
// // 			},
// // 			duration: 2,
// // 			y: 300,
// // 			opacity: 0,
// // 		});

// // 		window.scrollTo(0, 0);

// // 		// 리로드시, 실행된 애니메이션을 중지한다.
// // 		return () => {
// // 			ScrollTrigger.killAll();
// // 			animation1.kill();
// // 			animation2.kill();
// // 			animation3.kill();
// // 			animation4.kill();
// // 		};
// // 	}, []);

// // 	// *** 이미지 슬라이드 시작 ***
// // 	const [imageRevealFraq, setImageRevealFraq] = useState(0.5);
// // 	const imageContainer = useRef(undefined);

// // 	const slide = (xPosition) => {
// // 		const containerBoundingRect =
// // 			imageContainer.current.getBoundingClientRect();

// // 		setImageRevealFraq(() => {
// // 			// 슬라이드가 이미지를 벗어나지 않게
// // 			if (xPosition < containerBoundingRect.left) {
// // 				return 0;
// // 			} else if (xPosition > containerBoundingRect.right) {
// // 				return 1;
// // 			} else {
// // 				return (
// // 					(xPosition - containerBoundingRect.left) / containerBoundingRect.width
// // 				);
// // 			}
// // 		});
// // 	};

// // 	// 터치이벤트 관리
// // 	const handleTouchMove = (e) => {
// // 		slide(e.touches.item(0).clientX);
// // 	};
// // 	const handleMouseDown = () => {
// // 		window.onmousemove = handleMouseMove;
// // 		window.onmouseup = handleMouseUp;
// // 	};

// // 	const handleMouseMove = (event) => {
// // 		slide(event.clientX);
// // 	};

// // 	const handleMouseUp = () => {
// // 		window.onmousemove = undefined;
// // 		window.onmouseup = undefined;
// // 	};
// // 	// *** 이미지 슬라이드 끝 ***

// // 	return (
// // 		<>
// // 			<div className="wrapper service">
// // 				<div className="service-wrap">
// // 					<div className="service-title">
// // 						<div className="title-banner">
// // 							<div className="banner-text">
// // 								<h1>Service</h1>
// // 								<div className="arrow"></div>
// // 							</div>
// // 						</div>
// // 					</div>
// // 					<div>
// // 						<div className="service-section-solution">
// // 							<div className="service-section solution">
// // 								<div className="service-section-title">
// // 									<h1>Digital Solutions</h1>
// // 									<div className="service-section-title-item">
// // 										From data collection to preparation, logic, modeling and
// // 										management, our digital foundation pipeline covers it all.
// // 									</div>
// // 									<div>
// // 										<h3>
// // 											Data Logic, Asset Management, Simulation, Lighting,
// // 											Rendering
// // 										</h3>
// // 										<div>
// // 											We transform your digital assets into engaging and
// // 											immersive experiences
// // 										</div>
// // 									</div>
// // 									<div>
// // 										<h3>Example</h3>
// // 										<div>
// // 											Genesis Bespoke Configurator, Kia Showroom Configurator
// // 										</div>
// // 									</div>
// // 								</div>
// // 								<div className="solution-contents">
// // 									<div className="solution-item item-1">
// // 										<div className="solution-item-text">
// // 											<h2>Data Visualization</h2>
// // 											<div>
// // 												<div>
// // 													<h3>Data Collection & Preparation</h3>
// // 													<div className="solution-item-text-detail">
// // 														<div>
// // 															We turn your data into digital assets through
// // 															seamless integration
// // 														</div>
// // 														<div>
// // 															We go beyond just creating digital illustrations
// // 															of automobiles. At the core of our work is a deep
// // 															understanding of the significance and intent
// // 															behind car content. We meticulously gather,
// // 															refine, clean, and prepare data to empower our
// // 															digital artists to craft impactful visuals for the
// // 															global{" "}
// // 														</div>
// // 													</div>
// // 												</div>
// // 												<div>
// // 													<h3>Data Management & Governance</h3>
// // 													<div className="solution-item-text-detail">
// // 														<div>
// // 															We ensure accuracy and security of your assets
// // 															through our solutions
// // 														</div>
// // 													</div>
// // 												</div>
// // 												<div>
// // 													<h3>Example</h3>
// // 													<div className="solution-item-text-detail">
// // 														<div>
// // 															Hyundai, Kia, Genesis 3D Visual/Vehicle Contents
// // 															Management
// // 														</div>
// // 													</div>
// // 												</div>
// // 											</div>
// // 										</div>
// // 										<div>
// // 											{/* 이미지 슬라이드 처리 */}
// // 											<div
// // 												ref={imageContainer}
// // 												className="image-container group"
// // 											>
// // 												<img src={Avante1} />
// // 												{/* 흑백 이미지처리 */}
// // 												<img
// // 													id="my-img"
// // 													style={{
// // 														filter: "grayscale(100%)",
// // 														clipPath: `polygon(0 0, ${
// // 															imageRevealFraq * 100
// // 														}% 0, ${imageRevealFraq * 100}% 100%, 0 100%)`,
// // 													}}
// // 													src={Avante1}
// // 												/>
// // 												<div
// // 													style={{ left: `${imageRevealFraq * 100}%` }}
// // 													className="slider-container"
// // 												>
// // 													<div className="slider-wrap">
// // 														<div className="slider"></div>
// // 														<div
// // 															style={{ touchAction: "none" }}
// // 															onMouseDown={handleMouseDown}
// // 															onTouchMove={handleTouchMove}
// // 															className="slider-btn"
// // 														>
// // 															<svg
// // 																xmlns="http://www.w3.org/2000/svg"
// // 																fill="none"
// // 																viewBox="0 0 24 24"
// // 																strokeWidth={1.5}
// // 																stroke="currentColor"
// // 																className="slider-btn-arrow"
// // 															>
// // 																<path
// // 																	strokeLinecap="round"
// // 																	strokeLinejoin="round"
// // 																	d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
// // 																/>
// // 															</svg>
// // 														</div>
// // 													</div>
// // 												</div>
// // 											</div>
// // 										</div>
// // 									</div>
// // 									<div className="solution-item item-2">
// // 										<div className="solution-item-text">
// // 											<h2>Digital Asset Creation</h2>
// // 											<div>
// // 												<div>
// // 													<h3>
// // 														Modeling, Texturing, Rigging, Skinning, Animation
// // 													</h3>
// // 													<div className="solution-item-text-detail">
// // 														<div>
// // 															We bring your visualizations to life with our
// // 															expert 2D and 3D asset creation services
// // 														</div>
// // 														<div>
// // 															We delve into the realm of sophisticated user
// // 															experiences with our expertise in creating
// // 															ultra-high-resolution marketing images and polygon
// // 															optimization for various media platforms,
// // 															including mobile and web. Our mastery of material
// // 															work and attention to even the smallest details,
// // 															such as soft parts modeling, sets us apart and
// // 															elevates your visuals to new heights.
// // 														</div>
// // 													</div>
// // 												</div>
// // 												<div>
// // 													<h3>Example</h3>
// // 													<div className="solution-item-text-detail">
// // 														<div>Genesis Image Production System</div>
// // 													</div>
// // 												</div>
// // 											</div>
// // 										</div>
// // 										<div>
// // 											<img src="https://casper.hyundai.com/wcontents/repn-car/side-45/AX01/exterior/YP5/engine/T/m.png" />
// // 										</div>
// // 									</div>

// // 									<div className="solution-item item-4">
// // 										<div className="solution-item-text">
// // 											<h2>Post-Production & Deployment</h2>
// // 											<div>
// // 												<div>
// // 													<h3>3D CGI, Shader, Maintenance</h3>
// // 													<div className="solution-item-text-detail">
// // 														<div>
// // 															We bring it all together with our post-production
// // 															and deployment services
// // 														</div>
// // 													</div>
// // 												</div>
// // 												<div>
// // 													<h3>Example</h3>
// // 													<div className="solution-item-text-detail">
// // 														<div>WebGL Configurator</div>
// // 													</div>
// // 												</div>
// // 											</div>
// // 										</div>
// // 										<div>
// // 											<img src="https://www.hyundai.com/contents/mainbanner/sonata-23fl-w.png" />
// // 										</div>
// // 									</div>
// // 								</div>
// // 							</div>
// // 						</div>
// // 						<div className="service-section-creative">
// // 							<div className="service-section creative">
// // 								<div className="service-section-title">
// // 									<h1>Creative Offerings</h1>
// // 									<div>
// // 										We offer a wide range of design services, including
// // 										editorial design, image stock, brochure design, and
// // 										brand/identity design. Our team of designers can help you
// // 										create visually stunning and effective marketing materials
// // 										that communicate your message clearly and effectively.
// // 									</div>
// // 								</div>
// // 								<div className="creative-contents">
// // 									<div className="creative-item creative-item-1">
// // 										<div className="creative-item-text">
// // 											<h3>Film/Animation</h3>
// // 											<div>
// // 												<div>
// // 													<div>
// // 														We elevate your advertising with our fully rendered,
// // 														visually striking 3D animation films
// // 													</div>
// // 													<div>
// // 														<div>
// // 															<h4>Example: Real Life Video</h4>
// // 															<div>
// // 																<div>
// // 																	- Global Dealership Space Identity / Hyundai
// // 																	Motor Company / Worldwide
// // 																</div>
// // 																<div>
// // 																	- Dealer Mission / Hyundai Motor Company /
// // 																	Worldwide
// // 																</div>
// // 															</div>
// // 														</div>
// // 														<div>
// // 															<h4>Example: Animation Video</h4>
// // 															<div>
// // 																<div>
// // 																	- Hanover Motor Show Opening / Hyundai Motor
// // 																	Group / Germany, Europe
// // 																</div>
// // 																<div>
// // 																	- Genesis New Technology / Genesis Motor
// // 																	Company / Worldwide
// // 																</div>
// // 																<div>
// // 																	- ix35 New Technology / Genesis Motor Company
// // 																	/ Worldwide
// // 																</div>
// // 																<div>
// // 																	- Digital Contents Management System / Hyundai
// // 																	Motor Company, Kia Motor Company
// // 																</div>
// // 															</div>
// // 														</div>
// // 													</div>
// // 												</div>
// // 											</div>
// // 										</div>
// // 										<div>
// // 											<img src="https://www.hyundai.com/contents/mainbanner/sonata-23fl-w.png" />
// // 										</div>
// // 									</div>
// // 								</div>
// // 								<div className="creative-contents">
// // 									<div className="creative-item creative-item-2">
// // 										<div className="creative-item-text">
// // 											<h3>Editorial/Brochure</h3>
// // 											<div>
// // 												<div>
// // 													<div>
// // 														We make a lasting impression with our professional
// // 														brochure design that communicates your message
// // 														clearly and beautifully
// // 													</div>
// // 													<div>
// // 														<div>
// // 															<h4>Example: Brochures</h4>
// // 															<ul>
// // 																<li>i40 / Hyundai Motor Company / Europe</li>
// // 															</ul>
// // 														</div>
// // 													</div>
// // 												</div>
// // 											</div>
// // 										</div>
// // 										<div>
// // 											<img src="https://www.hyundai.com/contents/mainbanner/sonata-23fl-w.png" />
// // 										</div>
// // 									</div>
// // 								</div>
// // 								<div className="creative-contents">
// // 									<div className="creative-item creative-item-3">
// // 										<div className="creative-item-text">
// // 											<h3>Brand/Identity</h3>
// // 											<div>
// // 												<div>
// // 													<div>
// // 														We define your brand's image and leave a lasting
// // 														impression with our expert identity design
// // 													</div>
// // 													<div>
// // 														<div>
// // 															<h4>Example: Logo Design</h4>
// // 															<div>
// // 																<div>
// // 																	Hyundai Motor Group & Shell Composite Logo
// // 																	Guideline
// // 																</div>
// // 																<div>
// // 																	Hyundai Motor Group & Quaker State Composite
// // 																	Logo Guideline
// // 																</div>
// // 															</div>
// // 														</div>
// // 														<div>
// // 															<h4>Example: Event Design</h4>
// // 															<div>
// // 																<div>experience Hyundai</div>
// // 																<div>Roadshow in the Middle East</div>
// // 															</div>
// // 														</div>
// // 													</div>
// // 												</div>
// // 											</div>
// // 										</div>
// // 										<div>
// // 											<img src="https://www.hyundai.com/contents/mainbanner/sonata-23fl-w.png" />
// // 										</div>
// // 									</div>
// // 								</div>
// // 							</div>
// // 						</div>
// // 					</div>
// // 				</div>
// // 			</div>
// // 		</>
// // 	);
// // }
