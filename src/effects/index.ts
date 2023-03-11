import "./bigTextEffect/bigTextEffect"
import "./blackoutEffect/blackoutEffect";
import "./blurryVisionEffect/blurryVisionEffect";
import "./comicSansEffect/comicSansEffect";
import "./designModeEffect/designModeEffect";
import "./disableMouseInputEffect/disableMouseInputEffect";
import "./disableScrollingEffect/disableScrollingEffect";
import "./disableTextSelectionEffect/disableTextSelectionEffect";
import "./doublePlaybackSpeedEffect/doublePlaybackSpeedEffect";
import "./doubleSizeEffect/doubleSizeEffect";
import "./emptyAllInputsEffect/emptyAllInputsEffect";
import "./getAlertEffect/getAlertEffect";
import "./halfPlaybackSpeedEffect/halfPlaybackSpeedEffect";
import "./halfSizeEffect/halfSizeEffect";
import "./hideImagesEffect/hideImagesEffect";
import "./hideScrollbarsEffect/hideScrollbarsEffect";
import "./hideTextSelectionEffect/hideTextSelectionEffect";
import "./invertedColorsEffect/invertedColorsEffect";
import "./invertedPageEffect/invertedPageEffect";
import "./invisibleTextEffect/invisibleTextEffect";
import "./lowercaseTextEffect/lowercaseTextEffect";
import "./midasTouchEffect/midasTouchEffect";
import "./muteEverythingEffect/muteEverythingEffect";
import "./muteRandomMediaEffect/muteRandomMediaEffect";
import "./noCSSEffect/noCSSEffect";
import "./noCursorEffect/noCursorEffect";
import "./nothingEffect/nothingEffect";
import "./pauseEverythingEffect/pauseEverythingEffect";
import "./pauseRandomMediaEffect/pauseRandomMediaEffect";
import "./playEverythingEffect/playEverythingEffect";
import "./playRandomMediaEffect/playRandomMediaEffect";
import "./randomImagesEffect/randomImagesEffect";
import "./randomSelectionColorEffect/randomSelectionColorEffect";
import "./randomTextColorEffect/randomTextColorEffect";
import "./reloadPageEffect/reloadPageEffect";
import "./rollEffect/rollEffect";
import "./scrollToRandomElementEffect/scrollToRandomElementEffect";
import "./scrollToTheTopEffect/scrollToTheTopEffect";
import "./selectAllTextEffect/selectAllTextEffect";
import "./sidewaysPageEffect/sidewaysPageEffect";
import "./smallTextEffect/smallTextEffect";
import "./spinningPageEffect/spinningPageEffect";
import "./terminalifyEffect/terminalifyEffect";
import "./unmuteEverythingEffect/unmuteEverythingEffect";
import "./unmuteRandomMediaEffect/unmuteRandomMediaEffect";
import "./unselectAllTextEffect/unselectAllTextEffect";
import "./uppercaseTextEffect/uppercaseTextEffect";
import "./upsideDownEffect/upsideDownEffect";
import "./y1950sEffect/y1950sEffect";
import "./vignetteEffect/vignetteEffect";
import "./circleCursorEffect/circleCursorEffect";
import "./squareCursorEffect/squareCursorEffect";
import "./rainbowEffect/rainbowEffect";

export class Overlay {
    constructor({ id, pointerEvents }: { id: string, pointerEvents: boolean }) {
        document.body.insertAdjacentHTML("afterbegin", `
            <div 
                data-extension="chaosExtension" 
                class="overlay ${pointerEvents ? '' : 'no-pointer-events'}" 
                id="${id}"
            />
        `);
    }
}