function element (elementTag, elementId, elementClass, parent) {
    this.tag = elementTag;
    if(this.tag==""){
        this.tag="div";
    }
    this.id = elementId;
    this.className = elementClass;
    if(parent) {
        this.parent = parent;
    }
    else {
        this.parent = null;
    }
}
console.log("element.js is loaded!");
