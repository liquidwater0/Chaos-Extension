import { PaletteOptions } from "@mui/material";

declare module '@mui/material/styles' {
    interface PaletteOptions {
        blurBackground: string;
    }
}