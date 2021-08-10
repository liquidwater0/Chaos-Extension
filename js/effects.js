function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let effects = [];

chrome.storage.sync.get({
    nothingEffectChecked: true, rainbowTextEffectChecked: true, flipPageEffectChecked: true, disableMouseInputEffectChecked: true, disableScrollingEffectChecked: true, 
    reloadPageEffectChecked: true, getAlertEffectChecked: true, scrollToElementEffectChecked: true, invisibleTextChecked: true, halfSizeEffectChecked: true,
    randomTextSelectEffectChecked: true, terminalEffectChecked: true, removeImagesEffectChecked: true, blurryVisionEffectChecked: true, y1950sEffectChecked: true,
    hideScrollbarsEffectChecked: true, selectAllTextEffectChecked: true, hideTextSelectionEffectChecked: true, noCSSEffectChecked: true, randomTextColorEffectChecked: true,
    hideCursorEffectChecked: true, doubleSizeEffectChecked: true, unselectAllTextEffectChecked: true, muteEverythingEffectChecked: true, unmuteEverythingEffectChecked: true,
    playEverythingEffectChecked: true, pauseEverythingEffectChecked: true, invertedColorsEffectChecked: true
}, function(items) {
    effects = [
        {
            name: "Nothing",
            enabled: items.nothingEffectChecked,
    
            setDefaultValues: function() {},
            effectCode: function() {}
        },

        {
            name: "Rainbow Text",
            enabled: items.rainbowTextEffectChecked,
    
            setDefaultValues: function() { 
                const elements = document.querySelectorAll("*");
    
                elements.forEach(function(element) {
                    element.style.color = "";
                });
            },

            effectCode: function() {  
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

            setDefaultValues: function() { 
                const flipPageStyle = document.querySelector("[data-extension='chaosExtension']#flipPageStyle");
                
                if (flipPageStyle) flipPageStyle.remove();
            },
    
            effectCode: function() { 
                document.head.insertAdjacentHTML("beforeend", `
                    <style data-extension="chaosExtension" id="flipPageStyle">
                        html, body {
                            overflow: auto !important;
                        }

                        body {
                            position: fixed !important;
                            transform: rotate(180deg) !important;
                            bottom: 0px !important;
                            width: 100% !important;
                            height: 100% !important;
                        }
                    </style>
                `);
            }
        },
    
        {
            name: "Disable Mouse Input",
            enabled: items.disableMouseInputEffectChecked,
    
            setDefaultValues: function() { 
                const disableOverlay = document.querySelector("[data-extension='chaosExtension']#disableOverlay");
                
                if (disableOverlay) disableOverlay.remove();
            },
    
            effectCode: function() {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay" id="disableOverlay"></div>
                `);
            }
        },
    
        {
            name: "Disable Scrolling",
            enabled: items.disableScrollingEffectChecked,
            
            setDefaultValues: function() { 
                const elements = document.querySelectorAll("*");
    
                elements.forEach(function(element) {
                    element.style.overflow = "";
                });
            },
    
            effectCode: function() { 
                const elements = document.querySelectorAll("*");
    
                elements.forEach(function(element) {
                    element.style.overflow = "hidden";
                });
            }
        },

        {
            name: "Reload Page",
            enabled: items.reloadPageEffectChecked,
            
            setDefaultValues: function() {},
    
            effectCode: function() { 
                location.reload();
            }
        },

        {
            name: "Get Alert",
            enabled: items.getAlertEffectChecked,
            
            setDefaultValues: function() {},
    
            effectCode: function() { 
                setTimeout(function() { alert("Alert!") }, 250);
            }
        },

        {
            name: "Scroll To Random Element",
            enabled: items.scrollToElementEffectChecked,
            
            setDefaultValues: function() {},
    
            effectCode: function() { 
                const elements = document.querySelectorAll("*");

                elements[Math.floor(Math.random() * elements.length)].scrollIntoView();
            }
        },

        {
            name: "Invisible Text",
            enabled: items.invisibleTextChecked,
            
            setDefaultValues: function() {
                const invisibleTextStyle = document.querySelector("[data-extension='chaosExtension']#invisibleTextStyle");

                if (invisibleTextStyle) invisibleTextStyle.remove();
            },
    
            effectCode: function() { 
                document.head.insertAdjacentHTML("beforeend", `
                    <style data-extension="chaosExtension" id="invisibleTextStyle">
                        * {
                            color: rgba(0, 0, 0, 0) !important;
                        }
                    </style>
                `);
            }
        },

        {
            name: "Half Size",
            enabled: items.halfSizeEffectChecked,
            
            setDefaultValues: function() {
                document.body.style.transform = "";
            },
    
            effectCode: function() { 
                document.body.style.transform = "scale(0.5) translateY(-50%)";
            }
        },

        {
            name: "Random Text Selection",
            enabled: items.randomTextSelectEffectChecked,
            
            setDefaultValues: function() {
                const textSelectionStyle = document.querySelector("[data-extension='chaosExtension']#textSelection");

                if (textSelectionStyle) textSelectionStyle.remove();
            },
    
            effectCode: function() { 
                document.head.insertAdjacentHTML("beforeend", `
                    <style data-extension="chaosExtension" id="textSelection">
                        ::selection {
                            background-color: rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}) !important;
                            color: rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}) !important;
                        }
                    </style>
                `);
            }
        },

        { //fix background color not changing on some elements and make it so extension elements are unaffected
            name: "Terminalify",
            enabled: items.terminalEffectChecked,
            
            setDefaultValues: function() {
                const elements = document.querySelectorAll("*");
                const terminalStyle = document.querySelector("[data-extension='chaosExtension']#terminalStyle");

                if (terminalStyle) terminalStyle.remove();

                elements.forEach(function(element) {
                    element.style.backgroundColor = "";
                });
            },
    
            effectCode: function() { 
                const elements = document.querySelectorAll("*");

                document.head.insertAdjacentHTML("beforeend", `
                    <style data-extension="chaosExtension" id="terminalStyle">
                        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

                        ::selection {
                            background-color: rgba(0, 255, 0, 0.75) !important;
                            color: white !important;
                        }

                        :not([data-extension]) {
                            font-family: 'Roboto Mono', monospace !important;
                            color: rgb(0, 255, 0) !important;
                        }

                        :not([data-extension]) a {
                            color: rgba(0, 255, 0, 0.5) !important;
                        }
                    </style>
                `);

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
            name: "Remove Images",
            enabled: items.removeImagesEffectChecked,
            
            setDefaultValues: function() {
                const hideImagesStyle = document.querySelector("[data-extension]#hideImagesStyle");

                if (hideImagesStyle) hideImagesStyle.remove();
            },
    
            effectCode: function() { 
                document.head.insertAdjacentHTML("beforeend", `
                    <style data-extension="chaosExtension" id="hideImagesStyle">
                        img {
                            opacity: 0 !important;
                        }
                    </style>
                `);
            }
        },

        {
            name: "Blurry Vision",
            enabled: items.blurryVisionEffectChecked,
            
            setDefaultValues: function() { 
                const blurOverlay = document.querySelector("[data-extension='chaosExtension']#blurOverlay");
                
                if (blurOverlay) blurOverlay.remove();
            },
    
            effectCode: function() {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay noPointerEvents" id="blurOverlay"></div>
                `);
            }
        },

        {
            name: "1950s",
            enabled: items.y1950sEffectChecked,
            
            setDefaultValues: function() { 
                const y1950sOverlay = document.querySelector("[data-extension='chaosExtension']#y1950sOverlay");
                
                if (y1950sOverlay) y1950sOverlay.remove();
            },
    
            effectCode: function() {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay noPointerEvents" id="y1950sOverlay"></div>
                `);
            }
        },

        {
            name: "Hide Scrollbars",
            enabled: items.hideScrollbarsEffectChecked,
            
            setDefaultValues: function() { 
                const hideScrollbarsStyle = document.querySelector("[data-extension='chaosExtension']#hideScrollbarsStyle");
                
                if (hideScrollbarsStyle) hideScrollbarsStyle.remove();
            },
    
            effectCode: function() {
                document.head.insertAdjacentHTML("beforeend", `
                    <style data-extension="chaosExtension" id="hideScrollbarsStyle">
                        ::-webkit-scrollbar {
                            width: 0px !important;
                        }
                    </style>
                `);
            }
        },

        {
            name: "Select All Text",
            enabled: items.selectAllTextEffectChecked,
            
            setDefaultValues: function() {},
    
            effectCode: function() {
                document.getSelection().selectAllChildren(document.body);
            }
        },

        {
            name: "Hide Text Selection",
            enabled: items.hideTextSelectionEffectChecked,
            
            setDefaultValues: function() { 
                const hideTextSelectionStyle = document.querySelector("[data-extension='chaosExtension']#hideTextSelectionStyle");
                
                if (hideTextSelectionStyle) hideTextSelectionStyle.remove();
            },
    
            effectCode: function() {
                document.head.insertAdjacentHTML("beforeend", `
                    <style data-extension="chaosExtension" id="hideTextSelectionStyle">
                        ::selection {
                            background-color: rgba(0, 0, 0, 0) !important;
                            color: currentColor !important;
                        }
                    </style>
                `);
            }
        },

        {
            name: "No CSS",
            enabled: items.noCSSEffectChecked,
            
            setDefaultValues: function() {
                const stylesheets = document.styleSheets;

                for (stylesheet of stylesheets) {
                    stylesheet.disabled = false;
                }
            },
    
            effectCode: function() {
                const stylesheets = document.styleSheets;

                for (stylesheet of stylesheets) {
                    stylesheet.disabled = true;
                }
            }
        },

        {
            name: "Random Text Color",
            enabled: items.randomTextColorEffectChecked,
            
            setDefaultValues: function() { 
                const randomTextColorStyle = document.querySelector("[data-extension='chaosExtension']#randomTextColorStyle");
                
                if (randomTextColorStyle) randomTextColorStyle.remove();
            },
    
            effectCode: function() {
                document.head.insertAdjacentHTML("beforeend", `
                    <style data-extension="chaosExtension" id="randomTextColorStyle">
                        *:not([data-extension="chaosExtension"]) {
                            color: rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}) !important;
                        }
                    </style>
                `);
            }
        },

        {
            name: "Hide Cursor",
            enabled: items.hideCursorEffectChecked,
            
            setDefaultValues: function() { 
                const hideCursorStyle = document.querySelector("[data-extension='chaosExtension']#hideCursorStyle");
                
                if (hideCursorStyle) hideCursorStyle.remove();
            },
    
            effectCode: function() {
                document.head.insertAdjacentHTML("beforeend", `
                    <style data-extension="chaosExtension" id="hideCursorStyle">
                        * {
                            cursor: none !important;
                        }
                    </style>
                `);
            }
        },

        {
            name: "Double Size",
            enabled: items.doubleSizeEffectChecked,

            setDefaultValues: function() { 
                document.body.style.transform = "";
                document.body.style.overflowX = "";
            },
    
            effectCode: function() {
                document.body.style.transform = "scale(2) translate(25%, 25%)";
                document.body.style.overflowX = "auto";
            }
        },

        {
            name: "Unselect All Text",
            enabled: items.unselectAllTextEffectChecked,
            
            setDefaultValues: function() {},
    
            effectCode: function() {
                document.getSelection().selectAllChildren(document.head);
            }
        },

        {
            name: "Mute Everything",
            enabled: items.muteEverythingEffectChecked,
            
            setDefaultValues: function() {},
    
            effectCode: function() {
                const audioVideos = document.querySelectorAll("audio, video");

                audioVideos.forEach(function(element) {
                    element.muted = true;
                });
            }
        },

        {
            name: "Unmute Everything",
            enabled: items.unmuteEverythingEffectChecked,
            
            setDefaultValues: function() {},
    
            effectCode: function() {
                const audioVideos = document.querySelectorAll("audio, video");

                audioVideos.forEach(function(element) {
                    element.muted = false;
                });
            }
        },

        {
            name: "Play Everything",
            enabled: items.playEverythingEffectChecked,
            
            setDefaultValues: function() {},
    
            effectCode: function() {
                const audioVideos = document.querySelectorAll("audio, video");

                audioVideos.forEach(function(element) {
                    element.play();
                });
            }
        },

        {
            name: "Pause Everything",
            enabled: items.pauseEverythingEffectChecked,
            
            setDefaultValues: function() {},
    
            effectCode: function() {
                const audioVideos = document.querySelectorAll("audio, video");

                audioVideos.forEach(function(element) {
                    element.pause();
                });
            }
        },

        {
            name: "Inverted Colors",
            enabled: items.invertedColorsEffectChecked,
            
            setDefaultValues: function() { 
                const invertOverlay = document.querySelector("[data-extension='chaosExtension']#invertOverlay");
                
                if (invertOverlay) invertOverlay.remove();
            },
    
            effectCode: function() {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" class="overlay noPointerEvents" id="invertOverlay"></div>
                `);
            }
        }
    ];
});
