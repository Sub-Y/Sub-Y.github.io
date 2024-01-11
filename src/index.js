import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import English from "./Languages/en-US.json";
import Korean from "./Languages/ko-KR.json";
import ScrollToTop from "./component/ScrollToTop";

/* 언어 설정 */
const local = navigator.language;
let lang;
if (local === "ko") {
	lang = Korean;
} else {
	lang = English;
}

/* 커서 잔상 */
const MAX_TRAILING_CURSORS = 20;
const trailingCursors = [];

document.addEventListener("mousemove", function (e) {
	const cursor = document.createElement("div");
	cursor.className = "custom-cursor";
	document.body.appendChild(cursor);

	let posX = e.clientX;
	let posY = e.clientY;
	const cursorSize = 25;

	function updateCursor() {
		posX += (e.clientX - posX - cursorSize / 3) * 0.2;
		posY += (e.clientY - posY - cursorSize / 3) * 0.2;
		cursor.style.left = posX + "px";
		cursor.style.top = posY + "px";

		requestAnimationFrame(updateCursor);
	}

	updateCursor();

	cursor.style.opacity = 0.2; // 초기 투명도 설정
	trailingCursors.push({ cursor, posX, posY });

	if (trailingCursors.length > MAX_TRAILING_CURSORS) {
		const trailingCursor = trailingCursors.shift();
		removeTrailingCursor(trailingCursor);
	}
});

function removeTrailingCursor(trailingCursor) {
	document.body.removeChild(trailingCursor.cursor);
}

setInterval(() => {
	if (trailingCursors.length > 0) {
		const trailingCursor = trailingCursors.shift();
		removeTrailingCursor(trailingCursor);
	}
}, 25);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<IntlProvider locale={local} messages={English}>
			<ScrollToTop />
			<App />
		</IntlProvider>
	</BrowserRouter>
	// {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
