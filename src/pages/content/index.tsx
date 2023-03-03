import React from "react";
import { createRoot } from "react-dom/client";
import ChaosUI from "./ChaosUI";
import EffectsProvider from "../../context/EffectsContext";

const rootElement = document.createElement("div");
rootElement.id = "chaosExtensionRoot";
rootElement.setAttribute("data-extension", "chaosExtension");

document.documentElement.prepend(rootElement);

createRoot(rootElement).render(
    <EffectsProvider>
        <ChaosUI />
    </EffectsProvider>
);