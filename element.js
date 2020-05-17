console.log("element.js file is loaded!");
function element (elementTag, elementId, elementClass) {
    this.tag = elementTag;
    if(this.tag==""){
        this.tag="div";
    }
    this.id = elementId;
    this.class = elementClass;
}

var myElement = new element("", "elementStuff", "myClass");

console.log(myElement);
