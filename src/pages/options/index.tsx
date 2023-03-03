import React from "react";
import { createRoot } from "react-dom/client";
import Options from "./Options";
import EffectsProvider from "../../context/EffectsContext";

const root = createRoot(document.querySelector("#options") as HTMLDivElement);
root.render(
    <EffectsProvider>
        <Options />
    </EffectsProvider>
);