import "../styles/contact.css";
import { BsPlusLg } from "react-icons/bs";
import building from "../image/building.jpg";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

export default function Contact() {
	return (
		<>
			<div className="wrapper contact">
				<section>
					<motion.div
						key="contact2"
						initial={{ opacity: 0, duration: 0.3 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, duration: 1 }}
					>
						<motion.img /* Background */
							className="building"
							style={{
								backgroundImage: `url(${building})`,
							}}
							key="contact1"
							initial={{ opacity: 0, duration: 0.3 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, duration: 1 }}
						/>
						<div className="body">
							<h1 className="title">
								<div>Contact</div>
							</h1>
							<div className="detail-wrap">
								<div className="title-wrap">
									<BsPlusLg className="plus-sign" />
									<div className="title-text">
										<div className="contact-title">
											<FormattedMessage id="title-text .title 1" />
										</div>
										<div className="detail">+82 2 540 6784</div>
									</div>
								</div>
								<div className="title-wrap">
									<BsPlusLg className="plus-sign" />
									<div className="title-text">
										<div className="contact-title">
											<FormattedMessage id="title-text .title 2" />
										</div>
										<div className="detail">
											<FormattedMessage id="title-text .detail 2-1" />
											<div className="line-break"></div>
											<FormattedMessage
												id="title-text .detail 2-2"
												defaultMessage=" "
											/>
											<div className="line-break"></div>
											<FormattedMessage
												id="title-text .detail 2-3"
												defaultMessage=" "
											/>
										</div>
									</div>
								</div>
								<div className="title-wrap">
									<BsPlusLg className="plus-sign" />
									<div className="title-text">
										<div className="contact-title">
											<FormattedMessage id="title-text .title 3" />
										</div>
										<div className="detail">
											LinkedIn:
											<a
												href="https://www.linkedin.com/company/submarine-y/mycompany/"
												target="_blank"
												rel="noopener noreferrer"
											>
												https://www.linkedin.com/company/submarine-y/mycompany/
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</section>
			</div>
		</>
	);
}
