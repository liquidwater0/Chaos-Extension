import initEffect from "../initEffect";

initEffect({
    label: "Random Images",
    storageKey: "randomImagesEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const images = document.querySelectorAll<HTMLImageElement>("img");

    images.forEach(image => {
        if (!image) return;
        
        const randomImage = images[Math.floor(Math.random() * images.length)];

        image.setAttribute("data-original-src", image.src);
        image.setAttribute("data-original-srcset", image.srcset);
        image.setAttribute("data-original-alt", image.alt);

        image.src = randomImage.src;
        image.srcset = randomImage.srcset;
        image.alt = randomImage.alt;
    });
}

function revert() {
    const images = document.querySelectorAll<HTMLImageElement>("img");

    images.forEach(image => {
        if (!image) return;
        if (!image.getAttribute("data-original-src")) return;

        image.src = image.getAttribute("data-original-src");
        image.srcset = image.getAttribute("data-original-srcset");
        image.alt = image.getAttribute("data-original-alt");

        image.removeAttribute("data-original-src");
        image.removeAttribute("data-original-srcset");
        image.removeAttribute("data-original-alt");
    });
}