import "../styles/career.css";
import Y from "../image/Y.png";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

export default function Careers() {
	return (
		<>
			<div className="wrapper careers">
				<motion.div
					key="career"
					initial={{ opacity: 0, duration: 0.3 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0, duration: 1 }}
				>
					<div
						/* Background */
						className="Y"
						style={{
							backgroundImage: `url(${Y})`,
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							backgroundAttachment: "local",
							height: "100vh",
							width: "100%",
							position: "fixed",
							top: "0",
							backgroundPositionX: "right",
							zIndex: "-2",
						}}
					/>
					<div className="body">
						<div className="title">Career</div>
						<section className="sections career-section join">
							<h2>Join Our Team</h2>
							<h3>Introduction</h3>
							<div className="join-text">
								<FormattedMessage id="join-text 1" />
								<br />
								<FormattedMessage id="join-text 2" defaultMessage=" " />
								<br />
								<FormattedMessage id="join-text 3" defaultMessage=" " />
							</div>
						</section>
						<section className="sections career-section position">
							<h2>Positions</h2>
							<div className="position-list">
								<h3>
									<FormattedMessage id="accordion-header 1" />
									<div className="list-content">
										<FormattedMessage id="accordion-content 1" />
									</div>
								</h3>
								<div className="position-line" />
								<h3>
									<FormattedMessage id="accordion-header 2" />
									<div className="list-content">
										<FormattedMessage id="accordion-content 2" />
									</div>
								</h3>
								<div className="position-line" />
								<h3>
									<FormattedMessage id="accordion-header 3" />
									<div className="list-content">
										<FormattedMessage id="accordion-content 3" />
									</div>
								</h3>{" "}
								<div className="position-line" />
							</div>
						</section>
					</div>
				</motion.div>
			</div>
		</>
	);
}
