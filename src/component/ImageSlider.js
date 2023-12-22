import { React, useState, useEffect, useRef } from "react";
import "../styles/imageSlider.css";

const ImageSlider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const touchStartX = useRef(null);

	useEffect(() => {
		const autoPlayInterval = setInterval(goToNext, 3000);
		return () => {
			clearInterval(autoPlayInterval);
		};
	}, [currentIndex]);

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};
	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = (e) => {
		const touchEndX = e.changedTouches[0].clientX;
		const touchThreshold = 50; // Adjust this value as needed for the swipe sensitivity

		if (touchStartX.current - touchEndX > touchThreshold) {
			goToNext();
		} else if (touchEndX - touchStartX.current > touchThreshold) {
			goToPrevious();
		}
	};
	return (
		<div>
			{slides.map((slide, slideIndex) => (
				<div
					key={slideIndex}
					className={`slideStyles ${
						slideIndex === currentIndex ? "active" : ""
					}`}
					style={{
						backgroundImage: `url(${slide})`,
					}}
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
				>
					<div className="dotsContainerStyles">
						{slides.map((index, slideIndex) => (
							<div
								key={slideIndex}
								className="dotStyles"
								onClick={() => goToSlide(slideIndex)}
							>
								{slideIndex === currentIndex ? "○" : "●"}
							</div>
						))}
					</div>
					<div className="leftArrowStyles" onClick={goToPrevious}>
						&lt;
					</div>
					<div className="rightArrowStyles" onClick={goToNext}>
						&gt;
					</div>
				</div>
			))}
		</div>
	);
};

export default ImageSlider;
