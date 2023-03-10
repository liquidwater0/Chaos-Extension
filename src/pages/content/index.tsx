import React from "react";
import { createRoot } from "react-dom/client";
import ChaosUI from "./ChaosUI";
import EffectsProvider from "../../context/EffectsContext";

const rootElement = document.createElement("div");
rootElement.id = "chaosExtensionRoot";
rootElement.setAttribute("data-extension", "chaosExtension");

//why do i have to do this?
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";

rootElement.appendChild(fontLink);

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = chrome.runtime.getURL("content/content.css");

document.documentElement.prepend(rootElement);

const shadow = rootElement.attachShadow({ mode: "open" });
shadow.appendChild(link);

createRoot(shadow).render(
    <EffectsProvider>
        <ChaosUI />
    </EffectsProvider>
);