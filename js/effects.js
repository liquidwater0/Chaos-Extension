function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let effects = [];

chrome.storage.sync.get({
    nothingEffectChecked: true, rainbowTextEffectChecked: true, upsideDownEffectChecked: true, disableMouseInputEffectChecked: true, disableScrollingEffectChecked: true, 
    reloadPageEffectChecked: true, getAlertEffectChecked: true, scrollToElementEffectChecked: true, invisibleTextChecked: true, halfSizeEffectChecked: true,
    randomSelectionColorEffectChecked: true, terminalEffectChecked: true, hideImagesEffectChecked: true, blurryVisionEffectChecked: true, y1950sEffectChecked: true,
    hideScrollbarsEffectChecked: true, selectAllTextEffectChecked: true, hideTextSelectionEffectChecked: true, noCSSEffectChecked: true, randomTextColorEffectChecked: true,
    noCursorEffectChecked: true, doubleSizeEffectChecked: true, unselectAllTextEffectChecked: true, muteEverythingEffectChecked: true, unmuteEverythingEffectChecked: true,
    playEverythingEffectChecked: true, pauseEverythingEffectChecked: true, invertedColorsEffectChecked: true, invertedPageEffectChecked: true, sidewaysPageEffectChecked: true,
    midasTouchEffectChecked: true, blackoutEffectChecked: true, emptyInputsEffectChecked: true, scrollToTopEffectChecked: true, disableTextSelectionEffectChecked: true,
    doublePlaybackSpeedEffectChecked: true, halfPlaybackSpeedEffectChecked: true, spinningPageEffectChecked: true, rollEffectChecked: true, designModeEffectChecked: true,
    comicSansEffectChecked: true, playRandomEffectChecked: true, pauseRandomEffectChecked: true, muteRandomEffectChecked: true, unmuteRandomEffectChecked: true,
    randomImagesEffectChecked: true
}, items => {
    effects = [
        {
            name: "Nothing",
            enabled: items.nothingEffectChecked,
    
            revertEffect: () => {},
            activateEffect: () => {}
        },

        {
            name: "Rainbow Text",
            enabled: items.rainbowTextEffectChecked,
    
            revertEffect: () => { 
                const elements = document.querySelectorAll("*");
                elements.forEach(element => element.style.color = "");
            },

            activateEffect: () => {  
                const elements = document.querySelectorAll("*");
    
                elements.forEach(element => {
                    const interval = setInterval(randomizeColors, 1250);

                    randomizeColors();

                    function randomizeColors() {
                        element.style.color = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
                    }

                    setInterval(() => { if (timerSeconds <= 0) clearInterval(interval) }, 1000);
                });
            }
        },
    
        {
            name: "Upside Down",
            enabled: items.upsideDownEffectChecked,

            revertEffect: () => document.documentElement.classList.remove("upsideDownEffect"),
            activateEffect: () => document.documentElement.classList.add("upsideDownEffect")
        },
    
        {
            name: "Disable Mouse Input",
            enabled: items.disableMouseInputEffectChecked,
    
            revertEffect: () => { 
                const disableOverlay = document.querySelector("[data-extension='chaosExtension']#disableOverlay");
                if (disableOverlay) disableOverlay.remove();
            },
    
            activateEffect: () => {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay" id="disableOverlay"></div>
                `);
            }
        },
    
        {
            name: "Disable Scrolling",
            enabled: items.disableScrollingEffectChecked,
            
            revertEffect: () => document.documentElement.classList.remove("disableScrollingEffect"),
            activateEffect: () =>  document.documentElement.classList.add("disableScrollingEffect")
        },

        {
            name: "Reload Page",
            enabled: items.reloadPageEffectChecked,
            
            revertEffect: () => {},
            activateEffect: () => location.reload()
        },

        {
            name: "Get Alert",
            enabled: items.getAlertEffectChecked,
            
            revertEffect: () => {},
            activateEffect: () => setTimeout(() => { alert("Alert!") }, 250)
        },

        {
            name: "Scroll To Random Element",
            enabled: items.scrollToElementEffectChecked,
            
            revertEffect: () => {},
            
            activateEffect: () => { 
                const elements = document.querySelectorAll("body *");
                elements[Math.floor(Math.random() * elements.length)].scrollIntoView();
            }
        },

        {
            name: "Invisible Text",
            enabled: items.invisibleTextChecked,
            
            revertEffect: () => document.documentElement.classList.remove("invisibleTextEffect"),
            activateEffect: () => document.documentElement.classList.add("invisibleTextEffect")
        },

        {
            name: "Half Size",
            enabled: items.halfSizeEffectChecked,
            
            revertEffect: () => document.documentElement.classList.remove("halfSizeEffect"),
            activateEffect: () => document.documentElement.classList.add("halfSizeEffect")
        },

        {
            name: "Random Selection Color",
            enabled: items.randomSelectionColorEffectChecked,
            
            revertEffect: () => {
                const html = document.documentElement;

                html.classList.remove("randomSelectionColorEffect");
                html.style.removeProperty("--randomBackgroundColor");
                html.style.removeProperty("--randomTextColor");
            },
    
            activateEffect: () => { 
                const html = document.documentElement;

                html.classList.add("randomSelectionColorEffect");
                html.style.setProperty("--randomBackgroundColor", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
                html.style.setProperty("--randomTextColor", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
            }
        },

        {//Maybe find a better way to set a dark background on everything
            name: "Terminalify",
            enabled: items.terminalEffectChecked,
            
            revertEffect: () => {
                document.documentElement.classList.remove("terminalifyEffect");

                const elements = document.querySelectorAll("*");
                elements.forEach(element => element.style.backgroundColor = "");
            },
    
            activateEffect: () => { 
                document.documentElement.classList.add("terminalifyEffect");

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
            enabled: items.hideImagesEffectChecked,
            
            revertEffect: () => document.documentElement.classList.remove("hideImagesEffect"),
            activateEffect: () => document.documentElement.classList.add("hideImagesEffect")
        },

        {
            name: "Blurry Vision",
            enabled: items.blurryVisionEffectChecked,
            
            revertEffect: () => { 
                const blurOverlay = document.querySelector("[data-extension='chaosExtension']#blurOverlay");
                if (blurOverlay) blurOverlay.remove();
            },
    
            activateEffect: () => {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay noPointerEvents" id="blurOverlay"></div>
                `);
            }
        },

        {
            name: "1950s",
            enabled: items.y1950sEffectChecked,
            
            revertEffect: () => { 
                const y1950sOverlay = document.querySelector("[data-extension='chaosExtension']#y1950sOverlay");
                if (y1950sOverlay) y1950sOverlay.remove();
            },
    
            activateEffect: () => {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay noPointerEvents" id="y1950sOverlay"></div>
                `);
            }
        },

        {
            name: "Hide Scrollbars",
            enabled: items.hideScrollbarsEffectChecked,
            
            revertEffect: () => document.documentElement.classList.remove("hideScrollbarsEffect"),
            activateEffect: () => document.documentElement.classList.add("hideScrollbarsEffect")
        },

        {
            name: "Select All Text",
            enabled: items.selectAllTextEffectChecked,
            
            revertEffect: () => {},
            activateEffect: () => document.getSelection().selectAllChildren(document.body)
        },

        {
            name: "Hide Text Selection",
            enabled: items.hideTextSelectionEffectChecked,
            
            revertEffect: () => document.documentElement.classList.remove("hideTextSelectionEffect"),
            activateEffect: () => document.documentElement.classList.add("hideTextSelectionEffect")
        },

        {
            name: "No CSS",
            enabled: items.noCSSEffectChecked,
            
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
            enabled: items.randomTextColorEffectChecked,
            
            revertEffect: () => { 
                const html = document.documentElement;

                html.classList.remove("randomTextColorEffect");
                html.style.removeProperty("--randomTextColor");
            },

            activateEffect: () => {
                const html = document.documentElement;

                html.classList.add("randomTextColorEffect");
                html.style.setProperty("--randomTextColor", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
            }
        },

        {
            name: "No Cursor",
            enabled: items.noCursorEffectChecked,
            
            revertEffect: () => document.documentElement.classList.remove("noCursorEffect"),
            activateEffect: () => document.documentElement.classList.add("noCursorEffect")
        },

        {
            name: "Double Size",
            enabled: items.doubleSizeEffectChecked,

            revertEffect: () => document.documentElement.classList.remove("doubleSizeEffect"),
            activateEffect: () => document.documentElement.classList.add("doubleSizeEffect")
        },

        {
            name: "Unselect All Text",
            enabled: items.unselectAllTextEffectChecked,
            
            revertEffect: () => {},
            activateEffect: () => document.getSelection().selectAllChildren(document.head)
        },

        {
            name: "Mute Everything",
            enabled: items.muteEverythingEffectChecked,
            
            revertEffect: () => {},
    
            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                audioVideos.forEach(element => element.muted = true);
            }
        },

        {
            name: "Unmute Everything",
            enabled: items.unmuteEverythingEffectChecked,
            
            revertEffect: () => {},
    
            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                audioVideos.forEach(element => element.muted = false);
            }
        },

        {
            name: "Play Everything",
            enabled: items.playEverythingEffectChecked,
            
            revertEffect: () => {},

            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                audioVideos.forEach(element => element.play());
            }
        },

        {
            name: "Pause Everything",
            enabled: items.pauseEverythingEffectChecked,
            
            revertEffect: () => {},
    
            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                audioVideos.forEach(element => element.pause());
            }
        },

        {
            name: "Inverted Colors",
            enabled: items.invertedColorsEffectChecked,
            
            revertEffect: () => { 
                const invertOverlay = document.querySelector("[data-extension='chaosExtension']#invertOverlay");
                if (invertOverlay) invertOverlay.remove();
            },
    
            activateEffect: () => {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay noPointerEvents" id="invertOverlay"></div>
                `);
            }
        },

        {
            name: "Inverted Page",
            enabled: items.invertedPageEffectChecked,

            revertEffect: () => document.documentElement.classList.remove("invertedPageEffect"),
            activateEffect: () => document.documentElement.classList.add("invertedPageEffect")
        },

        {
            name: "Sideways Page",
            enabled: items.sidewaysPageEffectChecked,

            revertEffect: () => document.documentElement.classList.remove("sidewaysPageEffect"),
            activateEffect: () => document.documentElement.classList.add("sidewaysPageEffect")
        },

        {
            name: "Midas Touch",
            enabled: items.midasTouchEffectChecked,

            makeGold: event => event.target.classList.add("midasTouchGold"),

            revertEffect: function() { 
                document.documentElement.classList.remove("midasTouchEffect");
                document.removeEventListener("click", this.makeGold);

                const elements = document.querySelectorAll("*");
                elements.forEach(element => element.classList.remove("midasTouchGold"));
            },
    
            activateEffect: function() {
                document.documentElement.classList.add("midasTouchEffect");
                document.addEventListener("click", this.makeGold);
            }
        },

        {
            name: "Blackout",
            enabled: items.blackoutEffectChecked,
            
            revertEffect: () => { 
                const blackoutOverlay = document.querySelector("[data-extension='chaosExtension']#blackoutOverlay");
                if (blackoutOverlay) blackoutOverlay.remove();
            },
    
            activateEffect: () => {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay noPointerEvents" id="blackoutOverlay"></div>
                `);
            }
        },

        {
            name: "Empty All Inputs",
            enabled: items.emptyInputsEffectChecked,
            
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
            enabled: items.scrollToTopEffectChecked,
            
            revertEffect: () => {},
            activateEffect: () => window.scrollTo(window.scrollX, 0)
        },

        {
            name: "Disable Text Selection",
            enabled: items.disableTextSelectionEffectChecked,
            
            revertEffect: () => document.documentElement.classList.remove("disableTextSelectionEffect"),
            activateEffect: () => document.documentElement.classList.add("disableTextSelectionEffect")
        },

        {
            name: "Double Playback Speed",
            enabled: items.doublePlaybackSpeedEffectChecked,
            
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
            enabled: items.halfPlaybackSpeedEffectChecked,
            
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
            enabled: items.spinningPageEffectChecked,
            
            revertEffect: () => document.documentElement.classList.remove("spinningPageEffect"),
            activateEffect: () => document.documentElement.classList.add("spinningPageEffect")
        },

        {
            name: "Roll",
            enabled: items.rollEffectChecked,
            
            revertEffect: () => document.documentElement.classList.remove("rollEffect"),
            activateEffect: () => document.documentElement.classList.add("rollEffect")
        },

        {
            name: "Design Mode",
            enabled: items.designModeEffectChecked,
            
            revertEffect: () => document.designMode = "off",
            activateEffect: () => document.designMode = "on"
        },

        {
            name: "Comic Sans",
            enabled: items.comicSansEffectChecked,
            
            revertEffect: () => document.documentElement.classList.remove("comicSansEffect"),
            activateEffect: () => document.documentElement.classList.add("comicSansEffect")
        },

        {
            name: "Play Random Media",
            enabled: items.playRandomEffectChecked,
            
            revertEffect: () => {},

            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                const randomMedia = audioVideos[Math.floor(Math.random() * audioVideos.length)];
                
                if (randomMedia) randomMedia.play(); 
            }
        },

        {
            name: "Pause Random Media",
            enabled: items.pauseRandomEffectChecked,
            
            revertEffect: () => {},

            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                const randomMedia = audioVideos[Math.floor(Math.random() * audioVideos.length)];
               
                if (randomMedia) randomMedia.pause(); 
            }
        },

        {
            name: "Mute Random Media",
            enabled: items.muteRandomEffectChecked,
            
            revertEffect: () => {},

            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                const randomMedia = audioVideos[Math.floor(Math.random() * audioVideos.length)];

                if (randomMedia) randomMedia.muted = true; 
            }
        },

        {
            name: "Unmute Random Media",
            enabled: items.unmuteRandomEffectChecked,
            
            revertEffect: () => {},

            activateEffect: () => {
                const audioVideos = document.querySelectorAll("audio, video");
                const randomMedia = audioVideos[Math.floor(Math.random() * audioVideos.length)];

                if (randomMedia) randomMedia.muted = false; 
            }
        },

        {
            name: "Random Images",
            enabled: items.randomImagesEffectChecked,
            
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
        }
    ];
});
