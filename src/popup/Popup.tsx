import "./popup.scss";
import { useChromeStorageSync } from "use-chrome-storage";
import Button from "@/components/Button";
import { PlayFill, PauseFill } from "react-bootstrap-icons";
import { PAUSED_STORAGE_KEY } from "@/constants/storage";

export default function Popup() {
	const [paused, setPaused] = useChromeStorageSync(PAUSED_STORAGE_KEY, false);

    return (
		<>
			<h1 className="title">
				Effect Timer
			</h1>

			<Button 
				className="play-pause-button"
				onClick={() => setPaused(!paused)}
				aria-label={`${paused ? "play" : "pause"} timer button`}
			>
				{ paused ? <PlayFill /> : <PauseFill /> }
			</Button>
		</>
    );
}