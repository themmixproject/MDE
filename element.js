console.log("element.js is loaded!");
function element (elementTag, elementId, elementClass) {
    this.tag = elementTag;
    if(this.tag==""){
        this.tag="div";
    }
    this.id = elementId;
    this.class = elementClass;
}
