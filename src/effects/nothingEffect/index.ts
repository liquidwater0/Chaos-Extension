import Effect from "@effects/Effect";

export default new Effect({
    id: "nothingEffect",
    label: "Nothing",
    activate: () => {},
    revert: () => {}
});