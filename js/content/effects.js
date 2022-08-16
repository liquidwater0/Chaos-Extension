function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let effects = [];

chrome.storage.sync.get({
    checkStates: {}
}, items => {
    const checkStatesMap = new Map(Object.entries(items.checkStates));

    function getEnabledState(checkbox) {
        if (!checkStatesMap.has(checkbox)) {
            return true;
        } else {
            return checkStatesMap.get(checkbox);
        }
    }
    
    effects = [
        {
            name: "Nothing",
            enabled: getEnabledState("nothingEffect"),
    
            revertEffect: () => {},
            activateEffect: () => {}
        },

        {
            name: "Rainbow Text",
            enabled: getEnabledState("rainbowTextEffect"),
    
            revertEffect: () => { 
                const elements = document.querySelectorAll("*");
                elements.forEach(element => element.style.color = "");
            },

            activateEffect: () => {  
                const elements = document.querySelectorAll("*");
    
                elements.forEach(element => {
                    element.style.color = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
                });
            }
        },
    
        {
            name: "Upside Down",
            enabled: getEnabledState("upsideDownEffect"),

            revertEffect: () => document.documentElement.classList.remove("upside-down-effect"),
            activateEffect: () => document.documentElement.classList.add("upside-down-effect")
        },
    
        {
            name: "Disable Mouse Input",
            enabled: getEnabledState("disableMouseInputEffect"),

            disableRightClick: event => event.preventDefault(),
    
            revertEffect: function() { 
                document.documentElement.classList.remove("disable-mouse-input-effect");
                document.removeEventListener("contextmenu", this.disableRightClick);

                const disableOverlay = document.querySelector("[data-extension='chaosExtension']#disableOverlay");
                if (disableOverlay) disableOverlay.remove();
            },
    
            activateEffect: function() {
                document.documentElement.classList.add("disable-mouse-input-effect");
                document.addEventListener("contextmenu", this.disableRightClick);

                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay" id="disableOverlay"></div>
                `);
            }
        },
    
        {
            name: "Disable Scrolling",
            enabled: getEnabledState("disableScrollingEffect"),
            
            revertEffect: () => document.documentElement.classList.remove("disable-scrolling-effect"),
            activateEffect: () =>  document.documentElement.classList.add("disable-scrolling-effect")
        },

        {
            name: "Reload Page",
            enabled: getEnabledState("reloadPageEffect"),
            
            revertEffect: () => {},
            activateEffect: () => setTimeout(() => location.reload(), 250)
        },

        {
            name: "Get Alert",
            enabled: getEnabledState("getAlertEffect"),
            
            revertEffect: () => {},
            activateEffect: () => setTimeout(() => alert("Alert!"), 250)
        },

        {
            name: "Scroll To Random Element",
            enabled: getEnabledState("scrollToRandomElementEffect"),
            
            revertEffect: () => {},
            activateEffect: () => { 
                const elements = document.querySelectorAll("body *");
                elements[Math.floor(Math.random() * elements.length)].scrollIntoView();
            }
        },

        {
            name: "Invisible Text",
            enabled: getEnabledState("invisibleTextEffect"),
            
            revertEffect: () => document.documentElement.classList.remove("invisible-text-effect"),
            activateEffect: () => document.documentElement.classList.add("invisible-text-effect")
        },

        {
            name: "Half Size",
            enabled: getEnabledState("halfSizeEffect"),
            
            revertEffect: () => document.documentElement.classList.remove("half-size-effect"),
            activateEffect: () => document.documentElement.classList.add("half-size-effect")
        },

        {
            name: "Random Selection Color",
            enabled: getEnabledState("randomSelectionColorEffect"),
            
            revertEffect: () => {
                const html = document.documentElement;

                html.classList.remove("random-selection-color-effect");
                html.style.removeProperty("--randomBackgroundColor");
                html.style.removeProperty("--randomTextColor");
            },
    
            activateEffect: () => { 
                const html = document.documentElement;

                html.classList.add("random-selection-color-effect");
                html.style.setProperty("--randomBackgroundColor", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
                html.style.setProperty("--randomTextColor", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
            }
        },

        {//Maybe find a better way to set a dark background on everything
            name: "Terminalify",
            enabled: getEnabledState("terminalifyEffect"),
            
            revertEffect: () => {
                document.documentElement.classList.remove("terminalify-effect");

                const elements = document.querySelectorAll("*");
                elements.forEach(element => element.style.backgroundColor = "");
            },
    
            activateEffect: () => { 
                document.documentElement.classList.add("terminalify-effect");

                const elements = document.querySelectorAll("body *, body, html");

                function getColor(element) {
                    const parts = window.getComputedStyle(element, null).getPropertyValue("background-color").match(/[\d.]+/g);

                    if (parts.length == 3) {
                        return "rgb(25, 25, 25)";
                    } else {
                        return `rgba(25, 25, 25, ${parts[3]})`;
                    }
                }

                elements.forEach(element => element.style.setProperty("background-color", getColor(element), "important"));
            }
        },

        {
            name: "Hide Images",
            enabled: getEnabledState("hideImagesEffect"),
            
            revertEffect: () => document.documentElement.classList.remove("hide-images-effect"),
            activateEffect: () => document.documentElement.classList.add("hide-images-effect")
        },

        {
            name: "Blurry Vision",
            enabled: getEnabledState("blurryVisionEffect"),
            
            revertEffect: () => { 
                const blurOverlay = document.querySelector("[data-extension='chaosExtension']#blurOverlay");
                if (blurOverlay) blurOverlay.remove();
            },
    
            activateEffect: () => {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay no-pointer-events" id="blurOverlay"></div>
                `);
            }
        },

        {
            name: "1950s",
            enabled: getEnabledState("y1950sEffect"),
            
            revertEffect: () => { 
                const y1950sOverlay = document.querySelector("[data-extension='chaosExtension']#y1950sOverlay");
                if (y1950sOverlay) y1950sOverlay.remove();
            },
    
            activateEffect: () => {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay no-pointer-events" id="y1950sOverlay"></div>
                `);
            }
        },

        {
            name: "Hide Scrollbars",
            enabled: getEnabledState("hideScrollbarsEffect"),
            
            revertEffect: () => document.documentElement.classList.remove("hide-scrollbars-effect"),
            activateEffect: () => document.documentElement.classList.add("hide-scrollbars-effect")
        },

        {
            name: "Select All Text",
            enabled: getEnabledState("selectAllTextEffect"),
            
            revertEffect: () => {},
            activateEffect: () => document.getSelection().selectAllChildren(document.body)
        },

        {
            name: "Hide Text Selection",
            enabled: getEnabledState("hideTextSelectionEffect"),
            
            revertEffect: () => document.documentElement.classList.remove("hide-text-selection-effect"),
            activateEffect: () => document.documentElement.classList.add("hide-text-selection-effect")
        },

        {
            name: "No CSS",
            enabled: getEnabledState("noCSSEffect"),
            
            revertEffect: () => {
                const styleSheets = [...document.styleSheets];
                styleSheets.forEach(styleSheet => styleSheet.disabled = false);
            },
    
            activateEffect: () => {
                const styleSheets = [...document.styleSheets];
                styleSheets.forEach(styleSheet => styleSheet.disabled = true);
            }
        },

        {
            name: "Random Text Color",
            enabled: getEnabledState("randomTextColorEffect"),
            
            revertEffect: () => { 
                const html = document.documentElement;

                html.classList.remove("random-text-color-effect");
                html.style.removeProperty("--randomTextColor");
            },

            activateEffect: () => {
                const html = document.documentElement;

                html.classList.add("random-text-color-effect");
                html.style.setProperty("--randomTextColor", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
            }
        },

        {
            name: "No Cursor",
            enabled: getEnabledState("noCursorEffect"),
            
            revertEffect: () => document.documentElement.classList.remove("no-cursor-effect"),
            activateEffect: () => document.documentElement.classList.add("no-cursor-effect")
        },

        {
            name: "Double Size",
            enabled: getEnabledState("doubleSizeEffect"),

            revertEffect: () => document.documentElement.classList.remove("double-size-effect"),
            activateEffect: () => document.documentElement.classList.add("double-size-effect")
        },

        {
            name: "Unselect All Text",
            enabled: getEnabledState("unselectAllTextEffect"),
            
            revertEffect: () => {},
            activateEffect: () => document.getSelection().selectAllChildren(document.head)
        },

        {
            name: "Mute Everything",
            enabled: getEnabledState("muteEverythingEffect"),
            
            revertEffect: () => {},
            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                audioVideos.forEach(element => element.muted = true);
            }
        },

        {
            name: "Unmute Everything",
            enabled: getEnabledState("unmuteEverythingEffect"),
            
            revertEffect: () => {},
            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                audioVideos.forEach(element => element.muted = false);
            }
        },

        {
            name: "Play Everything",
            enabled: getEnabledState("playEverythingEffect"),
            
            revertEffect: () => {},
            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                audioVideos.forEach(element => element.play());
            }
        },

        {
            name: "Pause Everything",
            enabled: getEnabledState("pauseEverythingEffect"),
            
            revertEffect: () => {},
            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                audioVideos.forEach(element => element.pause());
            }
        },

        {
            name: "Inverted Colors",
            enabled: getEnabledState("invertedColorsEffect"),
            
            revertEffect: () => { 
                const invertOverlay = document.querySelector("[data-extension='chaosExtension']#invertOverlay");
                if (invertOverlay) invertOverlay.remove();
            },

            activateEffect: () => {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay no-pointer-events" id="invertOverlay"></div>
                `);
            }
        },

        {
            name: "Inverted Page",
            enabled: getEnabledState("invertedPageEffect"),

            revertEffect: () => document.documentElement.classList.remove("inverted-page-effect"),
            activateEffect: () => document.documentElement.classList.add("inverted-page-effect")
        },

        {
            name: "Sideways Page",
            enabled: getEnabledState("sidewaysPageEffect"),

            revertEffect: () => document.documentElement.classList.remove("sideways-page-effect"),
            activateEffect: () => document.documentElement.classList.add("sideways-page-effect")
        },

        {
            name: "Midas Touch",
            enabled: getEnabledState("midasTouchEffect"),

            makeGold: event => event.target.classList.add("midas-touch-gold"),

            //These are not arrow functions, because arrow functions don't work properly with this effect.
            revertEffect: function() { 
                document.documentElement.classList.remove("midas-touch-effect");
                document.removeEventListener("click", this.makeGold);

                const elements = document.querySelectorAll("*");
                elements.forEach(element => element.classList.remove("midas-touch-gold"));
            },
    
            activateEffect: function() {
                document.documentElement.classList.add("midas-touch-effect");
                document.addEventListener("click", this.makeGold);
            }
        },

        {
            name: "Blackout",
            enabled: getEnabledState("blackoutEffect"),
            
            revertEffect: () => { 
                const blackoutOverlay = document.querySelector("[data-extension='chaosExtension']#blackoutOverlay");
                if (blackoutOverlay) blackoutOverlay.remove();
            },
    
            activateEffect: () => {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay no-pointer-events" id="blackoutOverlay"></div>
                `);
            }
        },

        {
            name: "Empty All Inputs",
            enabled: getEnabledState("emptyAllInputsEffect"),
            
            revertEffect: () => {},
            activateEffect: () => {
                const inputs = document.querySelectorAll("input:not([type='button']), textarea");

                inputs.forEach(input => {
                    if (input.type == "color") input.value = "#000000";
                    if (input.value && input.type != "color") input.value = "";
                });
            }
        },

        {
            name: "Scroll To The Top",
            enabled: getEnabledState("scrollToTheTopEffect"),
            
            revertEffect: () => {},
            activateEffect: () => window.scrollTo(window.scrollX, 0)
        },

        {
            name: "Disable Text Selection",
            enabled: getEnabledState("disableTextSelectionEffect"),
            
            revertEffect: () => document.documentElement.classList.remove("disable-text-selection-effect"),
            activateEffect: () => document.documentElement.classList.add("disable-text-selection-effect")
        },

        {
            name: "Double Playback Speed",
            enabled: getEnabledState("doublePlaybackSpeedEffect"),
            
            revertEffect: () => { 
                const videoAndAudio = document.querySelectorAll("video, audio");

                videoAndAudio.forEach(media => {
                    media.preservesPitch = true;
                    media.playbackRate = 1;
                });
            },
    
            activateEffect: () => { 
                const videoAndAudio = document.querySelectorAll("video, audio");

                videoAndAudio.forEach(media => {
                    media.preservesPitch = false;
                    media.playbackRate = 2;
                });
            }
        },

        {
            name: "Half Playback Speed",
            enabled: getEnabledState("halfPlaybackSpeedEffect"),
            
            revertEffect: () => { 
                const videoAndAudio = document.querySelectorAll("video, audio");

                videoAndAudio.forEach(media => {
                    media.preservesPitch = true;
                    media.playbackRate = 1;
                });
            },
    
            activateEffect: () => { 
                const videoAndAudio = document.querySelectorAll("video, audio");

                videoAndAudio.forEach(media => {
                    media.preservesPitch = false;
                    media.playbackRate = 0.5;
                });
            }
        },

        {
            name: "Spinning Page",
            enabled: getEnabledState("spinningPageEffect"),
            
            revertEffect: () => document.documentElement.classList.remove("spinning-page-effect"),
            activateEffect: () => document.documentElement.classList.add("spinning-page-effect")
        },

        {
            name: "Roll",
            enabled: getEnabledState("rollEffect"),
            
            revertEffect: () => document.documentElement.classList.remove("roll-effect"),
            activateEffect: () => document.documentElement.classList.add("roll-effect")
        },

        {
            name: "Design Mode",
            enabled: getEnabledState("designModeEffect"),
            
            revertEffect: () => document.designMode = "off",
            activateEffect: () => document.designMode = "on"
        },

        {
            name: "Comic Sans",
            enabled: getEnabledState("comicSansEffect"),
            
            revertEffect: () => document.documentElement.classList.remove("comic-sans-effect"),
            activateEffect: () => document.documentElement.classList.add("comic-sans-effect")
        },

        {
            name: "Play Random Media",
            enabled: getEnabledState("playRandomMediaEffect"),
            
            revertEffect: () => {},
            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                const randomMedia = audioVideos[Math.floor(Math.random() * audioVideos.length)];
                
                if (randomMedia) randomMedia.play(); 
            }
        },

        {
            name: "Pause Random Media",
            enabled: getEnabledState("pauseRandomMediaEffect"),
            
            revertEffect: () => {},
            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                const randomMedia = audioVideos[Math.floor(Math.random() * audioVideos.length)];
               
                if (randomMedia) randomMedia.pause(); 
            }
        },

        {
            name: "Mute Random Media",
            enabled: getEnabledState("muteRandomMediaEffect"),
            
            revertEffect: () => {},
            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                const randomMedia = audioVideos[Math.floor(Math.random() * audioVideos.length)];

                if (randomMedia) randomMedia.muted = true; 
            }
        },

        {
            name: "Unmute Random Media",
            enabled: getEnabledState("unmuteRandomMediaEffect"),
            
            revertEffect: () => {},
            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                const randomMedia = audioVideos[Math.floor(Math.random() * audioVideos.length)];

                if (randomMedia) randomMedia.muted = false; 
            }
        },

        {
            name: "Random Images",
            enabled: getEnabledState("randomImagesEffect"),
            
            revertEffect: () => {
                const images = document.querySelectorAll("img");

                images.forEach(image => {
                    if (!image.getAttribute("data-original-src")) return;

                    image.src = image.getAttribute("data-original-src");
                    image.srcset = image.getAttribute("data-original-srcset");
                    image.alt = image.getAttribute("data-original-alt");

                    image.removeAttribute("data-original-src");
                    image.removeAttribute("data-original-srcset");
                    image.removeAttribute("data-original-alt");
                });
            },

            activateEffect: () => {
                const images = document.querySelectorAll("img");

                images.forEach(image => {
                    const randomImage = images[Math.floor(Math.random() * images.length)];

                    image.setAttribute("data-original-src", image.src);
                    image.setAttribute("data-original-srcset", image.srcset);
                    image.setAttribute("data-original-alt", image.alt);

                    image.src = randomImage.src;
                    image.srcset = randomImage.srcset;
                    image.alt = randomImage.alt;
                });
            }
        },

        {
            name: "Lowercase Text",
            enabled: getEnabledState("lowercaseTextEffect"),

            revertEffect: () => document.documentElement.classList.remove("lowercase-text-effect"),
            activateEffect: () => document.documentElement.classList.add("lowercase-text-effect")
        },

        {
            name: "Uppercase Text",
            enabled: getEnabledState("uppercaseTextEffect"),

            revertEffect: () => document.documentElement.classList.remove("uppercase-text-effect"),
            activateEffect: () => document.documentElement.classList.add("uppercase-text-effect")
        },

        {
            name: "Big Text",
            enabled: getEnabledState("bigTextEffect"),

            revertEffect: () => document.documentElement.classList.remove("big-text-effect"),
            activateEffect: () => document.documentElement.classList.add("big-text-effect")
        },

        {
            name: "Small Text",
            enabled: getEnabledState("smallTextEffect"),

            revertEffect: () => document.documentElement.classList.remove("small-text-effect"),
            activateEffect: () => document.documentElement.classList.add("small-text-effect")
        }
    ];
});