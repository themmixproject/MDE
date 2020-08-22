function element (elementTag, elementId, elementClass) {
    this.tag = elementTag;
    if(this.tag==""){
        this.tag="div";
    }
    
    this.id = elementId;
    if(this.id===undefined){
        this.id=null;
    }

    this.className = elementClass;
    if(this.className===undefined){
        this.className=null;
    }

    this.children = [];
    this.childContainer = null;
    this.attributeContainer = null;
    this.id.element = null;
    this.className.element = null;
    this.container = null;


    this.updateAttributes = function(){
        this.attributeContainer.innerHTML = "";
        
        var baseString = '<div class="element-list-item-tag code-variable-tag">'+ newElement.tag +'</div>';

        if(this.id !== null && this.id !== ""){
            tempString = '<div class="line-wrap"><span class="code-constant-attribute line-wrap">id</span>=<span class="code-string line-wrap">"' + this.id + '"</div>';
            baseString = baseString + tempString;
        };
        if((this.id !== null && this.id !== "") && (this.className !== null && this.class !== "")){
            tempString = "&nbsp;";
            baseString = baseString + tempString;
        }
        if(this.className !== null && this.className !== ""){
            tempString = '<div class="line-wrap"><span class="code-constant-attribute line-wrap">class</span>=<span class="code-string line-wrap">"' + this.className + '"</div>';
            baseString = baseString + tempString;
        };

        this.attributeContainer.innerHTML+=baseString;
    }
}
console.log("element.js is loaded!");
