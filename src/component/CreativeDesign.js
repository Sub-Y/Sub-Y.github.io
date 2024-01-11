import React, { useState, useRef, useEffect } from "react";
import "../styles/service.css";
import throttle from "lodash/throttle";
import CDModal1 from "./CDModal1";
import CDModal2 from "./CDModal2";
import CDModal3 from "./CDModal3";
import DS1 from "../image/DS1.png";
import DS2 from "../image/DS2.png";
import DS3 from "../image/DS3.png";
import { FormattedMessage } from "react-intl";
import { motion, AnimatePresence } from "framer-motion";

export default function CreativeDesign() {
	const [modalOpen1, setModalOpen1] = useState(false);
	const [modalOpen2, setModalOpen2] = useState(false);
	const [modalOpen3, setModalOpen3] = useState(false);
	const sliderRef = useRef(null);

	function toggleModal1() {
		setModalOpen1(!modalOpen1);
	}
	function toggleModal2() {
		setModalOpen2(!modalOpen2);
	}
	function toggleModal3() {
		setModalOpen3(!modalOpen3);
	}

	/* esc 버튼 클릭 시 모달 닫힘 */
	useEffect(() => {
		const close = (e) => {
			if (e.key === "Escape") {
				if (modalOpen1) {
					toggleModal1();
				} else if (modalOpen2) {
					toggleModal2();
				} else if (modalOpen3) {
					toggleModal3();
				}
			}
		};

		window.addEventListener("keydown", close);

		return () => {
			window.removeEventListener("keydown", close);
		};
	}, [modalOpen1, modalOpen2, modalOpen3]);

	const handleScroll = throttle((e) => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft += e.deltaY * 6; // deltaY 값에 따라 가로 스크롤을 조절
		}
	}, 200);
	/* 외부 클릭 시 모달닫힘 */
	const closeModalOnOutsideClick = () => {
		if (modalOpen1) {
			toggleModal1();
		} else if (modalOpen2) {
			toggleModal2();
		} else if (modalOpen3) {
			toggleModal3();
		}
	};
	return (
		<>
			<div
				className={`wrapper service ${
					modalOpen1 || modalOpen2 || modalOpen3 ? "blur-background" : ""
				}`}
				onClick={closeModalOnOutsideClick}
				onWheel={handleScroll} // 마우스 휠 이벤트 핸들러 추가
			>
				<motion.div
					key="CD"
					initial={{ opacity: 0, duration: 0.3 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0, duration: 1 }}
				>
					<section>
						<div className="service-text">
							<h1 className="title-container">
								<div className="title service">
									<div>Creative</div>
									<div>Design</div>
								</div>
							</h1>
							<div className="service-detail">
								<FormattedMessage id="CD-detail" />
							</div>
						</div>
						{/* 슬라이더 */}
						<div className="slider-container" ref={sliderRef}>
							<div className="sliders">
								<img
									className="slider"
									alt="DS1"
									src={DS1}
									onClick={toggleModal1}
								/>
								<div className="slider-text" onClick={toggleModal1}>
									<FormattedMessage id="CD-slider-text 1" />
								</div>
							</div>
							<div className="sliders">
								<img
									className="slider"
									alt="DS2"
									src={DS2}
									onClick={toggleModal2}
								/>
								<div className="slider-text" onClick={toggleModal2}>
									<FormattedMessage id="CD-slider-text 2" />
								</div>
							</div>
							<div className="sliders">
								<img
									className="slider"
									alt="DS3"
									src={DS3}
									onClick={toggleModal3}
								/>
								<div className="slider-text" onClick={toggleModal3}>
									<FormattedMessage id="CD-slider-text 3" />
								</div>
							</div>
						</div>
					</section>{" "}
				</motion.div>
			</div>
			<AnimatePresence wait>
				{modalOpen1 && <CDModal1 toggleModal1={toggleModal1} />}
				{modalOpen2 && <CDModal2 toggleModal2={toggleModal2} />}
				{modalOpen3 && <CDModal3 toggleModal3={toggleModal3} />}
			</AnimatePresence>
		</>
	);
}
