function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let effects = [];

chrome.storage.sync.get({
    nothingEffectChecked: true, rainbowTextEffectChecked: true, flipPageEffectChecked: true, disableEverythingEffectChecked: true, removeScrollbarsEffectChecked: true, 
    reloadPageEffectChecked: true, getAlertEffectChecked: true, scrollToElementEffectChecked: true, invisibleTextChecked: true, halfSizeEffectChecked: true,
    randomTextSelectEffectChecked: true, terminalEffectChecked: true, removeImagesEffectChecked: true
}, function(items) {
    effects = [
        {
            name: "Nothing",
            enabled: items.nothingEffectChecked,
    
            setDefaultValues: function() {},
            effectCode: function() {}
        },
    
        { //make clear interval happen when default values are set
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
                    const interval = setInterval(function() {
                        element.style.color = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
                    }, 500);
    
                    setTimeout(function() { clearInterval(interval) }, timer * 1000);
                });
            }
        },
    
        { //fix broken site when flipped
            name: "Flip Page",
            enabled: items.flipPageEffectChecked,
    
            setDefaultValues: function() { 
                document.querySelector("html").style.transform = "";
            },
    
            effectCode: function() { 
                document.querySelector("html").style.transform = "rotate(180deg)";
            }
        },
    
        {
            name: "Disable Everything",
            enabled: items.disableEverythingEffectChecked,
    
            setDefaultValues: function() { 
                const overlay = document.querySelector("[data-extension='chaosExtension']#overlay");
                
                if (overlay) overlay.remove();
            },
    
            effectCode: function() {
                document.body.insertAdjacentHTML("afterbegin", `
                    <div data-extension="chaosExtension" id="overlay"></div>
                `);
            }
        },
    
        {
            name: "Remove Scrollbars",
            enabled: items.removeScrollbarsEffectChecked,
            
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
                const elements = document.querySelectorAll("*");

                elements.forEach(function(element) {
                    element.style.color = "";
                });
            },
    
            effectCode: function() { 
                const elements = document.querySelectorAll("*");

                elements.forEach(function(element) {
                    element.style.color = "rgba(0, 0, 0, 0)";
                });
            }
        },

        {
            name: "Half Size",
            enabled: items.halfSizeEffectChecked,
            
            setDefaultValues: function() {
                document.body.style.transform = "";
            },
    
            effectCode: function() { 
                document.body.style.transform = "scale(0.5)";
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
        }
    ];
});
