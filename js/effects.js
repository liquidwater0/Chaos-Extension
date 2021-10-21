function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let effects = [];

chrome.storage.sync.get({
    nothingEffectChecked: true, rainbowTextEffectChecked: true, flipPageEffectChecked: true, disableMouseInputEffectChecked: true, disableScrollingEffectChecked: true, 
    reloadPageEffectChecked: true, getAlertEffectChecked: true, scrollToElementEffectChecked: true, invisibleTextChecked: true, halfSizeEffectChecked: true,
    randomSelectionColorEffectChecked: true, terminalEffectChecked: true, hideImagesEffectChecked: true, blurryVisionEffectChecked: true, y1950sEffectChecked: true,
    hideScrollbarsEffectChecked: true, selectAllTextEffectChecked: true, hideTextSelectionEffectChecked: true, noCSSEffectChecked: true, randomTextColorEffectChecked: true,
    hideCursorEffectChecked: true, doubleSizeEffectChecked: true, unselectAllTextEffectChecked: true, muteEverythingEffectChecked: true, unmuteEverythingEffectChecked: true,
    playEverythingEffectChecked: true, pauseEverythingEffectChecked: true, invertedColorsEffectChecked: true, invertedPageEffectChecked: true, sidewaysPageEffectChecked: true,
    midasTouchEffectChecked: true, blackoutEffectChecked: true, emptyValuesEffectChecked: true, scrollToTopEffectChecked: true, disableTextSelectionEffectChecked: true,
    doublePlaybackSpeedEffectChecked: true, halfPlaybackSpeedEffectChecked: true, spinningPageEffectChecked: true
}, function(items) {
    effects = [
        {
            name: "Nothing",
            enabled: items.nothingEffectChecked,
    
            revertEffect: function() {},
            activateEffect: function() {}
        },

        {
            name: "Rainbow Text",
            enabled: items.rainbowTextEffectChecked,
    
            revertEffect: function() { 
                const elements = document.querySelectorAll("*");
    
                elements.forEach(function(element) {
                    element.style.color = "";
                });
            },

            activateEffect: function() {  
                const elements = document.querySelectorAll("*");
    
                elements.forEach(function(element) {
                    const interval = setInterval(randomizeColors, 1000);

                    randomizeColors();

                    function randomizeColors() {
                        element.style.color = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
                    }

                    setInterval(function() {
                        if (timerSeconds <= 0) clearInterval(interval);
                    }, 1000);
                });
            }
        },
    
        {
            name: "Flip Page",
            enabled: items.flipPageEffectChecked,

            revertEffect: function() { 
                document.documentElement.classList.remove("flipPageEffect");
            },
    
            activateEffect: function() { 
                document.documentElement.classList.add("flipPageEffect");
            }
        },
    
        {
            name: "Disable Mouse Input",
            enabled: items.disableMouseInputEffectChecked,
    
            revertEffect: function() { 
                const disableOverlay = document.querySelector("[data-extension='chaosExtension']#disableOverlay");
                
                if (disableOverlay) disableOverlay.remove();
            },
    
            activateEffect: function() {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay" id="disableOverlay"></div>
                `);
            }
        },
    
        {
            name: "Disable Scrolling",
            enabled: items.disableScrollingEffectChecked,
            
            revertEffect: function() { 
                document.documentElement.classList.remove("disableScrollingEffect");
            },
    
            activateEffect: function() { 
                document.documentElement.classList.add("disableScrollingEffect");
            }
        },

        {
            name: "Reload Page",
            enabled: items.reloadPageEffectChecked,
            
            revertEffect: function() {},
    
            activateEffect: function() { 
                location.reload();
            }
        },

        {
            name: "Get Alert",
            enabled: items.getAlertEffectChecked,
            
            revertEffect: function() {},
    
            activateEffect: function() { 
                setTimeout(function() { alert("Alert!") }, 250);
            }
        },

        {
            name: "Scroll To Random Element",
            enabled: items.scrollToElementEffectChecked,
            
            revertEffect: function() {},
    
            activateEffect: function() { 
                const elements = document.querySelectorAll("*");

                elements[Math.floor(Math.random() * elements.length)].scrollIntoView();
            }
        },

        {
            name: "Invisible Text",
            enabled: items.invisibleTextChecked,
            
            revertEffect: function() { 
                document.documentElement.classList.remove("invisibleTextEffect");
            },
    
            activateEffect: function() { 
                document.documentElement.classList.add("invisibleTextEffect");
            }
        },

        {
            name: "Half Size",
            enabled: items.halfSizeEffectChecked,
            
            revertEffect: function() { 
                document.documentElement.classList.remove("halfSizeEffect");
            },
    
            activateEffect: function() { 
                document.documentElement.classList.add("halfSizeEffect");
            }
        },

        {
            name: "Random Selection Color",
            enabled: items.randomSelectionColorEffectChecked,
            
            revertEffect: function() {
                document.documentElement.classList.remove("randomSelectionColor");
                document.documentElement.style.removeProperty("--randomBackgroundColor");
                document.documentElement.style.removeProperty("--randomTextColor");
            },
    
            activateEffect: function() { 
                const html = document.documentElement;

                html.classList.add("randomSelectionColor");
                html.style.setProperty("--randomBackgroundColor", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
                html.style.setProperty("--randomTextColor", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
            }
        },

        {//Maybe find a better way to set a dark background on everything
            name: "Terminalify",
            enabled: items.terminalEffectChecked,
            
            revertEffect: function() {
                document.documentElement.classList.remove("terminalifyEffect");

                const elements = document.querySelectorAll("*");

                elements.forEach(function(element) {
                    element.style.backgroundColor = "";
                });
            },
    
            activateEffect: function() { 
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

                elements.forEach(function(element) {
                    element.style.setProperty("background-color", getColor(element), "important");
                });
            }
        },

        {
            name: "Hide Images",
            enabled: items.hideImagesEffectChecked,
            
            revertEffect: function() { 
                document.documentElement.classList.remove("hideImagesEffect");
            },
    
            activateEffect: function() { 
                document.documentElement.classList.add("hideImagesEffect");
            }
        },

        {
            name: "Blurry Vision",
            enabled: items.blurryVisionEffectChecked,
            
            revertEffect: function() { 
                const blurOverlay = document.querySelector("[data-extension='chaosExtension']#blurOverlay");
                
                if (blurOverlay) blurOverlay.remove();
            },
    
            activateEffect: function() {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay noPointerEvents" id="blurOverlay"></div>
                `);
            }
        },

        {
            name: "1950s",
            enabled: items.y1950sEffectChecked,
            
            revertEffect: function() { 
                const y1950sOverlay = document.querySelector("[data-extension='chaosExtension']#y1950sOverlay");
                
                if (y1950sOverlay) y1950sOverlay.remove();
            },
    
            activateEffect: function() {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay noPointerEvents" id="y1950sOverlay"></div>
                `);
            }
        },

        {
            name: "Hide Scrollbars",
            enabled: items.hideScrollbarsEffectChecked,
            
            revertEffect: function() { 
                document.documentElement.classList.remove("hideScrollbarsEffect");
            },
    
            activateEffect: function() { 
                document.documentElement.classList.add("hideScrollbarsEffect");
            }
        },

        {
            name: "Select All Text",
            enabled: items.selectAllTextEffectChecked,
            
            revertEffect: function() {},
    
            activateEffect: function() {
                document.getSelection().selectAllChildren(document.body);
            }
        },

        {
            name: "Hide Text Selection",
            enabled: items.hideTextSelectionEffectChecked,
            
            revertEffect: function() { 
                document.documentElement.classList.remove("hideTextSelectionEffect");
            },
    
            activateEffect: function() { 
                document.documentElement.classList.add("hideTextSelectionEffect");
            }
        },

        {
            name: "No CSS",
            enabled: items.noCSSEffectChecked,
            
            revertEffect: function() {
                const styleSheets = document.styleSheets;

                for (styleSheet of styleSheets) {
                    styleSheet.disabled = false;
                }
            },
    
            activateEffect: function() {
                const styleSheets = document.styleSheets;

                for (styleSheet of styleSheets) {
                    styleSheet.disabled = true;
                }
            }
        },

        {
            name: "Random Text Color",
            enabled: items.randomTextColorEffectChecked,
            
            revertEffect: function() { 
                document.documentElement.classList.remove("randomTextColorEffect");
                document.documentElement.style.removeProperty("--randomTextColor");
            },
    
            activateEffect: function() {
                const html = document.documentElement;

                html.classList.add("randomTextColorEffect");
                html.style.setProperty("--randomTextColor", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
            }
        },

        {
            name: "Hide Cursor",
            enabled: items.hideCursorEffectChecked,
            
            revertEffect: function() { 
                document.documentElement.classList.remove("hideCursorEffect");
            },
    
            activateEffect: function() { 
                document.documentElement.classList.add("hideCursorEffect");
            }
        },

        {
            name: "Double Size",
            enabled: items.doubleSizeEffectChecked,

            revertEffect: function() { 
                document.documentElement.classList.remove("doubleSizeEffect");
            },
    
            activateEffect: function() { 
                document.documentElement.classList.add("doubleSizeEffect");
            }
        },

        {
            name: "Unselect All Text",
            enabled: items.unselectAllTextEffectChecked,
            
            revertEffect: function() {},
    
            activateEffect: function() {
                document.getSelection().selectAllChildren(document.head);
            }
        },

        {
            name: "Mute Everything",
            enabled: items.muteEverythingEffectChecked,
            
            revertEffect: function() {},
    
            activateEffect: function() {
                const audioVideos = document.querySelectorAll("audio, video");

                audioVideos.forEach(function(element) {
                    element.muted = true;
                });
            }
        },

        {
            name: "Unmute Everything",
            enabled: items.unmuteEverythingEffectChecked,
            
            revertEffect: function() {},
    
            activateEffect: function() {
                const audioVideos = document.querySelectorAll("audio, video");

                audioVideos.forEach(function(element) {
                    element.muted = false;
                });
            }
        },

        {
            name: "Play Everything",
            enabled: items.playEverythingEffectChecked,
            
            revertEffect: function() {},
    
            activateEffect: function() {
                const audioVideos = document.querySelectorAll("audio, video");

                audioVideos.forEach(function(element) {
                    element.play();
                });
            }
        },

        {
            name: "Pause Everything",
            enabled: items.pauseEverythingEffectChecked,
            
            revertEffect: function() {},
    
            activateEffect: function() {
                const audioVideos = document.querySelectorAll("audio, video");

                audioVideos.forEach(function(element) {
                    element.pause();
                });
            }
        },

        {
            name: "Inverted Colors",
            enabled: items.invertedColorsEffectChecked,
            
            revertEffect: function() { 
                const invertOverlay = document.querySelector("[data-extension='chaosExtension']#invertOverlay");
                
                if (invertOverlay) invertOverlay.remove();
            },
    
            activateEffect: function() {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay noPointerEvents" id="invertOverlay"></div>
                `);
            }
        },

        {
            name: "Inverted Page",
            enabled: items.invertedPageEffectChecked,

            revertEffect: function() { 
                document.documentElement.classList.remove("invertedPageEffect");
            },
    
            activateEffect: function() { 
                document.documentElement.classList.add("invertedPageEffect");
            }
        },

        {
            name: "Sideways Page",
            enabled: items.sidewaysPageEffectChecked,

            revertEffect: function() { 
                document.documentElement.classList.remove("sidewaysPageEffect");
            },
    
            activateEffect: function() { 
                document.documentElement.classList.add("sidewaysPageEffect");
            }
        },

        {
            name: "Midas Touch",
            enabled: items.midasTouchEffectChecked,

            makeGold: function(event) {
                event.target.classList.add("midasTouchGold");
            },

            revertEffect: function() { 
                document.documentElement.classList.remove("midasTouchEffect");
                document.removeEventListener("click", this.makeGold);

                const elements = document.querySelectorAll("*");

                elements.forEach(function(element) {
                    element.classList.remove("midasTouchGold");
                });
            },
    
            activateEffect: function() {
                document.documentElement.classList.add("midasTouchEffect");
                document.addEventListener("click", this.makeGold);
            }
        },

        {
            name: "Blackout",
            enabled: items.blackoutEffectChecked,
            
            revertEffect: function() { 
                const blackoutOverlay = document.querySelector("[data-extension='chaosExtension']#blackoutOverlay");
                
                if (blackoutOverlay) blackoutOverlay.remove();
            },
    
            activateEffect: function() {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay noPointerEvents" id="blackoutOverlay"></div>
                `);
            }
        },

        {
            name: "Empty Input Values",
            enabled: items.emptyValuesEffectChecked,
            
            revertEffect: function() {},
    
            activateEffect: function() {
                const inputs = document.querySelectorAll("input:not([type='button']), textarea");

                inputs.forEach(function(input) {
                    if (input.type == "color") input.value = "#000000";
                    if (input.value && input.type != "color") input.value = "";
                });
            }
        },

        {
            name: "Scroll To The Top",
            enabled: items.scrollToTopEffectChecked,
            
            revertEffect: function() {},
    
            activateEffect: function() {
                window.scrollTo(window.scrollX, 0);
            }
        },

        {
            name: "Disable Text Selection",
            enabled: items.disableTextSelectionEffectChecked,
            
            revertEffect: function() { 
                document.documentElement.classList.remove("disableTextSelectionEffect");
            },
    
            activateEffect: function() { 
                document.documentElement.classList.add("disableTextSelectionEffect");
            }
        },

        {
            name: "Double Playback Speed",
            enabled: items.doublePlaybackSpeedEffectChecked,
            
            revertEffect: function() { 
                const videoAndAudio = document.querySelectorAll("video, audio");

                videoAndAudio.forEach(function(media) {
                    media.preservesPitch = true;
                    media.playbackRate = 1;
                });
            },
    
            activateEffect: function() { 
                const videoAndAudio = document.querySelectorAll("video, audio");

                videoAndAudio.forEach(function(media) {
                    media.preservesPitch = false;
                    media.playbackRate = 2;
                });
            }
        },

        {
            name: "Half Playback Speed",
            enabled: items.halfPlaybackSpeedEffectChecked,
            
            revertEffect: function() { 
                const videoAndAudio = document.querySelectorAll("video, audio");

                videoAndAudio.forEach(function(media) {
                    media.preservesPitch = true;
                    media.playbackRate = 1;
                });
            },
    
            activateEffect: function() { 
                const videoAndAudio = document.querySelectorAll("video, audio");

                videoAndAudio.forEach(function(media) {
                    media.preservesPitch = false;
                    media.playbackRate = 0.5;
                });
            }
        },

        {
            name: "Spinning Page",
            enabled: items.spinningPageEffectChecked,
            
            revertEffect: function() { 
                document.documentElement.classList.remove("spinningPageEffect");
            },
    
            activateEffect: function() { 
                document.documentElement.classList.add("spinningPageEffect");
            }
        }
    ];
});
