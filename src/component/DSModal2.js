import React, { useState } from "react";
import "../styles/modal.css";
import DS1 from "../image/DS1.png";
import DS2 from "../image/DS2.png";
import DS3 from "../image/DS3.png";
import DS4 from "../image/DS4.png";
import ImageSlider from "./ImageSlider";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import { PiXCircleLight } from "react-icons/pi";

export default function DSModal2({ toggleModal2 }) {
	const slides = [DS2, DS1, DS3];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.4 }}
		>
			<div className="modal-container">
				<PiXCircleLight className="closeButton" onClick={toggleModal2} />
				<div className="close" onClick={toggleModal2} />
				<div className="modal-text">
					<div className="modal-title">
						<FormattedMessage id="DS-slider-text 2" />
					</div>
					<div className="modal-subhead">
						<FormattedMessage id="DS-modal-subhead 2" />
					</div>
					<div className="modal-detail">
						<ul>
							<FormattedMessage id="DS-modal-detail 2-1" />
						</ul>
						<br />
						<ul>
							<i>
								<FormattedMessage id="DS-modal-detail 2-2" />
							</i>
						</ul>
					</div>
				</div>
				<div>
					<div className="modal-slider">
						<ImageSlider slides={slides} />
					</div>
				</div>
			</div>
		</motion.div>
	);
}
