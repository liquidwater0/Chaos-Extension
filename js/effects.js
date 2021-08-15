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
    playEverythingEffectChecked: true, pauseEverythingEffectChecked: true, invertedColorsEffectChecked: true, invertedPageEffectChecked: true, sidewaysPageEffectChecked: true,
    midasTouchEffectChecked: true
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
                document.documentElement.classList.remove("flipPageEffect");
            },
    
            effectCode: function() { 
                document.documentElement.classList.add("flipPageEffect");
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
                document.documentElement.classList.remove("disableScrollingEffect");
            },
    
            effectCode: function() { 
                document.documentElement.classList.add("disableScrollingEffect");
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
                document.documentElement.classList.remove("invisibleTextEffect");
            },
    
            effectCode: function() { 
                document.documentElement.classList.add("invisibleTextEffect");
            }
        },

        {
            name: "Half Size",
            enabled: items.halfSizeEffectChecked,
            
            setDefaultValues: function() { 
                document.documentElement.classList.remove("halfSizeEffect");
            },
    
            effectCode: function() { 
                document.documentElement.classList.add("halfSizeEffect");
            }
        },

        {
            name: "Random Text Selection",
            enabled: items.randomTextSelectEffectChecked,
            
            setDefaultValues: function() {
                document.documentElement.classList.remove("randomTextSelectionEffect");
            },
    
            effectCode: function() { 
                const html = document.documentElement;

                html.classList.add("randomTextSelectionEffect");
                html.style.setProperty("--randomBackgroundColor", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
                html.style.setProperty("--randomTextColor", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
            }
        },

        {//extension elements font is still being affected and some sites still have some unchanged backgrounds
            name: "Terminalify",
            enabled: items.terminalEffectChecked,
            
            setDefaultValues: function() {
                document.documentElement.classList.remove("terminalifyEffect");

                const elements = document.querySelectorAll("*");

                elements.forEach(function(element) {
                    element.style.backgroundColor = "";
                });
            },
    
            effectCode: function() { 
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
            name: "Remove Images",
            enabled: items.removeImagesEffectChecked,
            
            setDefaultValues: function() { 
                document.documentElement.classList.remove("removeImagesEffect");
            },
    
            effectCode: function() { 
                document.documentElement.classList.add("removeImagesEffect");
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
                document.documentElement.classList.remove("hideScrollbarsEffect");
            },
    
            effectCode: function() { 
                document.documentElement.classList.add("hideScrollbarsEffect");
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
                document.documentElement.classList.remove("hideTextSelectionEffect");
            },
    
            effectCode: function() { 
                document.documentElement.classList.add("hideTextSelectionEffect");
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
                document.documentElement.classList.remove("randomTextColorEffect");
            },
    
            effectCode: function() {
                const html = document.documentElement;

                html.classList.add("randomTextColorEffect");
                html.style.setProperty("--randomTextColor", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
            }
        },

        {
            name: "Hide Cursor",
            enabled: items.hideCursorEffectChecked,
            
            setDefaultValues: function() { 
                document.documentElement.classList.remove("hideCursorEffect");
            },
    
            effectCode: function() { 
                document.documentElement.classList.add("hideCursorEffect");
            }
        },

        {
            name: "Double Size",
            enabled: items.doubleSizeEffectChecked,

            setDefaultValues: function() { 
                document.documentElement.classList.remove("doubleSizeEffect");
            },
    
            effectCode: function() { 
                document.documentElement.classList.add("doubleSizeEffect");
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
        },

        {
            name: "Inverted Page",
            enabled: items.invertedPageEffectChecked,

            setDefaultValues: function() { 
                document.documentElement.classList.remove("invertedPageEffect");
            },
    
            effectCode: function() { 
                document.documentElement.classList.add("invertedPageEffect");
            }
        },

        {
            name: "Sideways Page",
            enabled: items.sidewaysPageEffectChecked,

            setDefaultValues: function() { 
                document.documentElement.classList.remove("sidewaysPageEffect");
            },
    
            effectCode: function() { 
                document.documentElement.classList.add("sidewaysPageEffect");
            }
        },

        {/*Make it so the the event listener doesn't multiply when effect happens more than once in a row.
           Make it so extension elements are unaffected.*/
            name: "Midas Touch",
            enabled: items.midasTouchEffectChecked,

            setDefaultValues: function() { 
                document.documentElement.classList.remove("midasTouchEffect");

                const elements = document.querySelectorAll("*");

                elements.forEach(function(element) {
                    element.classList.remove("midasTouchGold");
                });
            },
    
            effectCode: function() {
                document.documentElement.classList.add("midasTouchEffect");

                document.addEventListener("click", makeGold);

                function makeGold(event) {
                    if (!document.documentElement.classList.contains("midasTouchEffect")) {
                        document.removeEventListener("click", makeGold);
                        return;
                    }

                    event.target.classList.add("midasTouchGold");
                }
                
            }
        }
    ];
});
