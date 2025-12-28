import uiStyles from "./views/chaosUI.scss?inline";
import timerStyles from "./views/components/Timer/index.scss?inline";

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ChaosUI from './views/ChaosUI.tsx';

const html = document.documentElement;

html.setAttribute("chaos-extension", "");

const shadowStyle = document.createElement("style");
shadowStyle.setAttribute("chaos-extension-style", "");
shadowStyle.textContent = `${uiStyles} ${timerStyles}`;

const rootStyle = document.createElement("style");
rootStyle.setAttribute("chaos-extension-style", "");
rootStyle.textContent = "@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');";

const root = document.createElement("div");
const shadow = root.attachShadow({ mode: "open" });
const ui = document.createElement("div");

root.setAttribute("chaos-extension-root", "");
ui.setAttribute("chaos-extension-ui", "");

html.appendChild(root);
root.appendChild(rootStyle);
shadow.appendChild(shadowStyle);
shadow.appendChild(ui);

createRoot(ui).render(
	<StrictMode>
		<ChaosUI />
	</StrictMode>,
);