import { useState, useRef } from "react";
import "../styles/service.css";
import throttle from "lodash/throttle";
import DSModal1 from "./DSModal1";
import DSModal2 from "./DSModal2";
import DSModal3 from "./DSModal3";
import DSModal4 from "./DSModal4";
import DS1 from "../image/DS1.png";
import DS2 from "../image/DS2.png";
import DS3 from "../image/DS3.png";
import DS4 from "../image/DS4.png";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

export default function DigitalSolutions() {
	const [modalOpen1, setModalOpen1] = useState(false);
	const [modalOpen2, setModalOpen2] = useState(false);
	const [modalOpen3, setModalOpen3] = useState(false);
	const [modalOpen4, setModalOpen4] = useState(false);

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
	function toggleModal4() {
		setModalOpen4(!modalOpen4);
	}

	const handleScroll = throttle((e) => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft += e.deltaY * 5; // deltaY 값에 따라 가로 스크롤을 조절
		}
	}, 200);
	/* 외부 클릭 시 모달닫힘 */
	const closeModalOnOutsideClick = () => {
		if (modalOpen1) {
			toggleModal1();
		}
		if (modalOpen2) {
			toggleModal2();
		}
		if (modalOpen3) {
			toggleModal3();
		}
		if (modalOpen4) {
			toggleModal4();
		}
	};
	return (
		<>
			<div
				className={`wrapper service ${
					modalOpen1 || modalOpen2 || modalOpen3 || modalOpen4
						? "blur-background"
						: ""
				}`}
				onClick={closeModalOnOutsideClick}
				onWheel={handleScroll} // 마우스 휠 이벤트 핸들러 추가
			>
				<motion.div
					key="DS"
					initial={{ opacity: 0, duration: 0.3 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0, duration: 1 }}
				>
					<section>
						<div className="service-text">
							<h1 className="title-container">
								<div className="title service">
									<div>Digital </div>
									<div>Solution</div>
								</div>
							</h1>
							<div className="service-detail">
								<FormattedMessage id="DS-detail" />
								<br />
								<br />
								<br />
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
									<FormattedMessage id="DS-slider-text 1" />
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
									<FormattedMessage id="DS-slider-text 2" />
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
									<FormattedMessage id="DS-slider-text 3" />
								</div>
							</div>
							<div className="sliders">
								<img
									className="slider"
									alt="DS4"
									src={DS4}
									onClick={toggleModal4}
								/>
								<div className="slider-text" onClick={toggleModal4}>
									<FormattedMessage id="DS-slider-text 4" />
								</div>
							</div>
						</div>
					</section>{" "}
				</motion.div>
			</div>
			{modalOpen1 && <DSModal1 toggleModal1={toggleModal1} />}
			{modalOpen2 && <DSModal2 toggleModal2={toggleModal2} />}
			{modalOpen3 && <DSModal3 toggleModal3={toggleModal3} />}
			{modalOpen4 && <DSModal4 toggleModal4={toggleModal4} />}
		</>
	);
}
