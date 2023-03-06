import React from "react";
import { createRoot } from "react-dom/client";
import ChaosUI from "./ChaosUI";
import EffectsProvider from "../../context/EffectsContext";

const rootElement = document.createElement("div");
rootElement.id = "chaosExtensionRoot";
rootElement.setAttribute("data-extension", "chaosExtension");

document.documentElement.prepend(rootElement);

const shadow = rootElement.attachShadow({ mode: "open" });

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = chrome.runtime.getURL("content/content.css");

shadow.appendChild(link);

createRoot(shadow).render(
    <EffectsProvider>
        <ChaosUI />
    </EffectsProvider>
);