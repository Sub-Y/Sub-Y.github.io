import "../styles/product.css";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

export default function Product() {
	return (
		<motion.div
			key="product"
			initial={{ opacity: 0, duration: 0.3 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, duration: 1 }}
		>
			<section className="wrapper">
				<div className="body">
					<div className="title">Product</div>
					<div className="products-text">
						<FormattedMessage id={"products-text"} />
					</div>
					<section className="products-maground">
						<div className="products-maground-title">Maground</div>
						<div className="products-maground-content">
							<FormattedMessage id={"products-maground-content"} />
						</div>
						<a
							href="https://maground.com/"
							target="_blank"
							rel="noopener noreferrer"
							style={{ fontSize: "50px" }}
						>
							<img src={1} alt="maground.com" />
						</a>
					</section>
					<section className="products-researchers">
						<div className="products-researchers-title">
							United Visual Researchers
						</div>
						<div className="products-researchers-content">
							<FormattedMessage id={"products-researchers-content"} />
						</div>
						<a
							href="https://www.united-vr.com/"
							target="_blank"
							rel="noopener noreferrer"
							style={{ fontSize: "50px" }}
						>
							<img src={2} alt="united-vr.com" />
						</a>
					</section>
				</div>
			</section>
		</motion.div>
	);
}
