import React from "react";
import "../styles/about.css";
import office from "../image/office.jpg";
import { FormattedMessage } from "react-intl";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
	return (
		<motion.div
			key="about"
			initial={{ opacity: 0, duration: 0.3 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, duration: 1 }}
		>
			<div className="wrapper about">
				<img
					/* Background */
					className="office"
					style={{
						backgroundImage: `url(${office})`,
					}}
				/>
				<div className="body">
					<div className="title">About</div>
					<div className="value">
						<h1 className="about-title">Value</h1>
						<ul>
							<li className="value-content">
								<FormattedMessage id="value-content" />
							</li>
						</ul>
					</div>
					<div className="vision">
						<h1 className="about-title">Vision</h1>
						<ul>
							<li className="vision-content">
								<FormattedMessage id="vision-content" />
							</li>
						</ul>
					</div>
					<div className="history">
						<h1 className="about-title">History</h1>
						<ul>
							<li className="history-wrap">
								<FormattedMessage id="history-year 1" />
							</li>
							<li className="history-wrap">
								<FormattedMessage id="history-year 2" />
							</li>
							<li className="history-wrap">
								<FormattedMessage id="history-year 3" />
							</li>
							<li className="history-wrap">
								<FormattedMessage id="history-year 4" />
							</li>
							<li className="history-wrap">
								<FormattedMessage id="history-year 5" />
							</li>
							<li className="history-wrap">
								<FormattedMessage id="history-year 6" />
							</li>
							<li className="history-wrap">
								<FormattedMessage id="history-year 7" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
