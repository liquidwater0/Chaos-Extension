function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let effects = [];

chrome.storage.sync.get({
    nothingEffectChecked: true, rainbowTextEffectChecked: true, flipPageEffectChecked: true, disableEverythingEffectChecked: true, removeScrollbarsEffectChecked: true, 
    reloadPageEffectChecked: true, getAlertEffectChecked: true, scrollToElementEffectChecked: true, removeAllTextChecked: true
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
            name: "Remove All Scrollbars",
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
            name: "Refresh Page",
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
            name: "Remove All Text",
            enabled: items.removeAllTextChecked,
            
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
        }
    ];
});
