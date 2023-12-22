import "./App.css";
import "./scene.css";
import React, { useState, useEffect, Suspense, useRef } from "react";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useScroll } from "@react-three/drei";

import gsap from "gsap";

import Loader from "./component/loader.js";
import City from "./component/City";
import * as THREE from "three";

function CameraControls() {
	const { camera } = useThree();
	const cameraRef = useRef();

	useFrame(({ mouse }) => {
		const x = (mouse.x * 2 - 1) * 0.1;
		const y = (mouse.y * 2 - 1) * 0.1;
		cameraRef.current.position.x = x;
		cameraRef.current.position.y = y;
		camera.lookAt(0, 0, 0);
	});

	return <perspectiveCamera ref={cameraRef} />;
}

function Scene() {
	// Loader 로딩상태 체크
	const [loadingComplete, setLoadingComplete] = useState(false);

	const tl = useRef();

	const scroll = useScroll();

	let currentPage = 1;
	let pastPage = currentPage;
	let time = -1;

	// Scene이 진행될때는 scroll 막기
	let lockScroll = false;
	let prevWheelTime = Date.now();
	let prevWheelDelta = 0;

	let contents;

	// Loader가 로딩이 끝난 후 호출될 함수
	const handleLoadingComplete = () => {
		setLoadingComplete(true);
	};

	useEffect(() => {
		// gsap 타임라인 생성
		tl.current = gsap.timeline();

		// 현재 페이지 번호
		const currentNumber = document.querySelector(".current-page");
		console.log(currentNumber.innerText);

		// 스킵버튼
		const skip = document.querySelector(".skip");
		skip.addEventListener("click", function () {
			console.log("click");
			currentPage = 6;
			lockScroll = false;
			gsap.to(".scene", 2, {
				opacity: 0,
				ease: "power1.easeout",
				onComplete: () => {
					// 애니메이션 완료 후 실행할 동작 추가
					const sceneElement = document.querySelector(".scene");
					sceneElement.style.display = "none"; // .scene을 숨기도록 변경
				},
			});
		});

		// 시작하자마자 1번째 씬 실행
		startScene1();

		// 휠 이벤트 제어
		window.addEventListener("wheel", function (e) {
			// deltaY 마우스 휠의 값 (위, 아래)
			let wheelCount = e.deltaY;
			let now = Date.now();
			let delta = Math.abs(wheelCount);

			// 이전 휠 이벤트와 현재 휠 이벤트 사이의 시간간격 체크 및 lockScroll 상태 확인
			if (delta <= prevWheelDelta && now - prevWheelTime < 100 && lockScroll) {
				return;
			} else {
				prevWheelTime = now;
				prevWheelDelta = delta;
				changeScene(wheelCount);
			}
		});

		// 화면 바꾸는 함수
		function changeScene(wheelCount) {
			if (lockScroll) {
				// 휠 감지
				if (wheelCount > 0) {
					if (currentPage === 6) return;
					pastPage = currentPage;
					currentPage++;
				} else {
					if (1 === currentPage) return;
					pastPage = currentPage;
					currentPage--;
				}
				// 현재페이지 번호 출력
				currentNumber.innerText = "0" + currentPage;
				// Scene 세팅
				setScene(currentPage);
				console.log(currentPage);
			}
		}

		let currentScene = 1;

		// Scene 호출
		function setScene(currentPage) {
			return (
				(currentScene = currentPage),
				1 === currentScene
					? startScene1()
					: 2 === currentScene
					? startScene2()
					: 3 === currentScene
					? startScene3()
					: 4 === currentScene
					? startScene4()
					: 5 === currentScene
					? startScene5()
					: 6 === currentScene && startScene6()
			);
		}

		// 텍스트 부분 배열로 가져오기
		contents = document.querySelectorAll(".common-contents");
		console.log(contents);

		// 1번재 씬
		function startScene1() {
			console.log(pastPage);

			// 이전 페이지가 있을때
			if (pastPage - 1 != 0) {
				// 3초동안 scroll하지 못하도록 제어, 이전 텍스트를 내린다.
				tl.current.to(contents[pastPage - 1], 3, {
					onStart() {
						lockScroll = false;
						console.log("start");
						console.log("pastPage = " + pastPage);
						if (pastPage == 0) return;
						contents[pastPage - 1].classList.remove("show");
					},
					onComplete() {
						console.log("end");
						lockScroll = true;
					},
				});

				// 현재페이지 글자 나타나기 (2.33초뒤)
				gsap.delayedCall(2.33, function () {
					contents[currentPage - 1].classList.add("show");
				});
			} else {
				// 처음 진입했을 때, 임의로 1초로 지정
				gsap.delayedCall(1, function () {
					contents[currentPage - 1].classList.add("show");
					lockScroll = true;
				});
			}
		}

		// 2번째 씬
		function startScene2() {
			console.log(pastPage);

			tl.current.to(contents[pastPage - 1], 3, {
				onStart() {
					lockScroll = false;
					console.log("start");
					console.log("pastPage = " + pastPage);
					if (pastPage == 0) return;
					contents[pastPage - 1].classList.remove("show");
				},
				onComplete() {
					console.log("end");
					lockScroll = true;
				},
			});

			// 글자 나타나기 (2.33초뒤)
			gsap.delayedCall(2.33, function () {
				contents[currentPage - 1].classList.add("show");
			});
		}

		// 3번째 씬
		function startScene3() {
			tl.current.to(contents[pastPage - 1], 3, {
				onStart() {
					lockScroll = false;
					console.log("start");
					console.log("pastPage = " + pastPage);
					if (pastPage == 0) return;
					contents[pastPage - 1].classList.remove("show");
				},
				onComplete() {
					console.log("end");
					lockScroll = true;
				},
			});

			// 글자 나타나기 (2.33초뒤)
			gsap.delayedCall(2.33, function () {
				contents[currentPage - 1].classList.add("show");
			});
		}

		// 4번째 씬
		function startScene4() {
			tl.current.to(contents[pastPage - 1], 3, {
				onStart() {
					lockScroll = false;
					console.log("start");
					console.log("pastPage = " + pastPage);
					if (pastPage == 0) return;
					contents[pastPage - 1].classList.remove("show");
				},
				onComplete() {
					console.log("end");
					lockScroll = true;
				},
			});

			// 글자 나타나기 (2.33초뒤)
			gsap.delayedCall(2.33, function () {
				contents[currentPage - 1].classList.add("show");
			});
		}

		// 5번째 씬
		function startScene5() {
			tl.current.to(contents[pastPage - 1], 3, {
				onStart() {
					lockScroll = false;
					console.log("start");
					console.log("pastPage = " + pastPage);
					if (pastPage == 0) return;
					contents[pastPage - 1].classList.remove("show");
				},
				onComplete() {
					console.log("end");
					lockScroll = true;
				},
			});

			// 글자 나타나기 (2.33초뒤)
			gsap.delayedCall(2.33, function () {
				contents[currentPage - 1].classList.add("show");
			});
		}

		// 6번째 씬
		function startScene6() {
			tl.current.to(contents[pastPage - 1], 3, {
				onStart() {
					lockScroll = false;
					console.log("start");
					console.log("pastPage = " + pastPage);
					if (pastPage == 0) return;
					contents[pastPage - 1].classList.remove("show");
				},
				onComplete() {
					console.log("end");
					lockScroll = true;
				},
			});

			// 글자 나타나기 (2.33초뒤)
			gsap.delayedCall(2.33, function () {
				contents[currentPage - 1].classList.add("show");
			});
		}
	}, []);

	// const width = window.clientWidth;
	// const height = window.clientHeight;
	// const { width, setWidth } = useState(window.clientWidth);
	// const { height, setHeight } = useState(window.clientHeight);

	// // 초기 state 값은 undefined로 세팅한다.
	// const [windowSize, setWindowSize] = useState({
	//   width: window.innerWidth,
	//   height: window.innerHeight,
	// });

	// useLayoutEffect(() => {
	//   window.scrollTo(0, 0);

	//   const handleResize = () => {
	//     setWindowSize({
	//       // 현재 브라우저의 가로, 세로 길이로 셋팅
	//       width: window.innerWidth,
	//       height: window.innerHeight,
	//     });
	//   };

	//   // resize 이벤트가 발생할 때 handleResize 함수가 실행되도록 한다.
	//   window.addEventListener("resize", handleResize);
	// });

	return (
		<>
			<div className="scene">
				<Canvas
					className="canvas"
					camera={{ position: [0, 0, 16], fov: 64 }}
					style={{
						backgroundColor: "#727272",
						// width: "3072px",
						width: "100%",
						height: "100%",
						// width: windowSize.width,
						// height: windowSize.height,
						// height: "1586px",
					}}
				>
					<CameraControls />
					{/* 로딩되는동안 Suspense의 fallback인 Loader를 띄워준다. */}
					<Suspense
						fallback={<Loader onLoadingComplete={handleLoadingComplete} />}
					>
						<ambientLight intensity={0.8} />
						<pointLight intensity={2} position={[0, 0, -1000]} />
						<City />
						<OrbitControls enableZoom={false} />
					</Suspense>
				</Canvas>
				<div className="scroll">
					<span className="current-page">01</span>
					<span> / 06</span>
				</div>
				<div className="skip">
					<span>skip</span>
				</div>
				{/* 텍스트 부분 */}
				<div>
					<section className="common-contents content-1">
						<img
							className="logo"
							src="Submarine-Y-logo_300x150.png"
							style={{ width: "600px" }}
						/>
					</section>
					<section className="common-contents content-2">
						<h1>services</h1>
						<div>
							<span>Digital Solutions</span>
							<br />
							<span>Creative Offerings</span>
							<br />
							<a href="/service">-{">"} see more</a>
						</div>
					</section>
					<section className="common-contents content-3">
						<h1>products</h1>
						<div>
							<span>Maground</span>
							<br />
							<span>United Visual Researchers</span>
							<br />
							<a href="/product">-{">"} see more</a>
						</div>
					</section>
					<section className="common-contents content-4">
						<h1>about</h1>
						<div>
							<a href="/about">-{">"} see more</a>
						</div>
					</section>
					<section className="common-contents content-5">
						<h1>career</h1>
						<div>
							<a href="/career">-{">"} see more</a>
						</div>
					</section>
					<section className="common-contents content-6">
						<h1>contact</h1>
						<div>
							<a href="/contact">-{">"} see more</a>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}

export default Scene;
