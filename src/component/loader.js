import { Html, useProgress } from "@react-three/drei";

export default function Loader({ onLoadingComplete }) {
	const { progress } = useProgress();
	console.log(progress);
	if (progress >= 100) {
		onLoadingComplete();
	}
	return <Html center>{progress} % loaded</Html>;
}
