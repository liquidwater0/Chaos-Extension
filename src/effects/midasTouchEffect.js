export default {
    name: "Midas Touch",
    storageKey: "midasTouchEffect",

    makeGold: event => event.target.classList.add("midas-touch-gold"),

    revert: function() { 
        document.documentElement.classList.remove("midas-touch-effect");
        document.removeEventListener("click", this.makeGold);

        const elements = document.querySelectorAll("*");
        elements.forEach(element => element.classList.remove("midas-touch-gold"));
    },

    activate: function() {
        document.documentElement.classList.add("midas-touch-effect");
        document.addEventListener("click", this.makeGold);
    }
}