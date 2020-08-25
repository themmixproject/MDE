/*

    ~Index elementCreation.js~
    ----------------------

    1. createElementListItem()
    2. createElementForm()

*/

/**
 * TO MOORE AWAKE STEVEN
 * ---------------------
 * 
 * 
 */

/*#####################################################\
 *|                                                    #
 *| 1. createElementListItem()                         #
 *|                                                    #
\#####################################################*/

function createElementListItem(parsedElement){

    var listItem = document.createElement("div");
    listItem.className = "element-list-item generic-container";
    parsedElement.container = listItem;

    var content = document.createElement("div");
    listItem.append(content);
    content.className = "element-list-item-content";
    parsedElement.attributeContainer = content;

    // property container
    var propertyContainer = document.createElement("div");
    propertyContainer.className = "element-list-item-property-container";
    


    // attribute container
    var attributeContainer = document.createElement("div");
    attributeContainer.className = "element-list-item-attribute-container";
    if((parsedElement.id === "") && parsedElement.class === ""){
        attributeContainer.className += " no-attributes";
    }

    // create footer
    var footer = document.createElement("div");
    footer.className = "element-list-item-footer";

    // create button container
    var buttonContainer = document.createElement("div");
    footer.append(buttonContainer);
    buttonContainer.className = "element-list-item-button-container";

    // create plus button
    var plusButton = document.createElement("input");
    buttonContainer.append(plusButton)
    plusButton.className = "element-list-item-button generic-ui-icon";
    plusButton.type = "image";
    plusButton.src = icons.plus;

    plusButton.addEventListener("click", function(){
        displayForm(formType.create, null, parsedElement);
    });

    // create edit button
    var editButton = document.createElement("input");
    buttonContainer.append(editButton);
    editButton.className = "element-list-item-button generic-ui-icon";
    editButton.type = "image";
    editButton.src = icons.pencil;

    editButton.addEventListener("click",function(){
        displayForm(formType.edit, parsedElement);
    });

    
    // create delete button
    var deleteButton = document.createElement("input");
    buttonContainer.append(deleteButton);
    deleteButton.className = "element-list-item-button generic-ui-icon";
    deleteButton.type = "image";
    deleteButton.src = icons.trash;

    if(parsedElement.parent==null){
        deleteButton.addEventListener("click", function(){
            parsedElement.container.outerHTML = "";
            var index = elements.indexOf(parsedElement);
            if (index > -1) {
                elements.splice(index, 1);
            }
        });
    }
    else{
        deleteButton.addEventListener("click", function(){
            parsedElement.container.outerHTML = "";
            var index = parsedElement.parent.children.indexOf(parsedElement);
            if (index > -1) {
                parsedElement.parent.children.splice(index, 1);
            }
            if(parsedElement.parent.children.length == 0){
                parsedElement.parent.childContainer.className = "element-list-item-child-container no-children";
            }
        });
    }


    content.append(propertyContainer);
    propertyContainer.innerHTML+= '<div class="element-list-item-tag code-variable-tag">'+ parsedElement.tag +'</div>';

    var baseString = '';

    if(parsedElement.id !== ""){
        tempString = '<div class="line-wrap"><span class="code-constant-attribute line-wrap">id</span>=<span class="code-string line-wrap">"' + parsedElement.id + '"</div>';
        baseString = baseString + tempString;
    };
    if(parsedElement.id !== "" && parsedElement.class !== ""){
        tempString = "&nbsp;";
        baseString = baseString + tempString;
    }
    if(parsedElement.className !== null && parsedElement.className !== ""){
        tempString = '<div class="line-wrap"><span class="code-constant-attribute line-wrap">class</span>=<span class="code-string line-wrap">"' + parsedElement.className + '"</div>';
        baseString = baseString + tempString;
    };

    propertyContainer.append(attributeContainer);
    parsedElement.attributeContainer = attributeContainer;
    parsedElement.propertyContainer = propertyContainer;
    attributeContainer.innerHTML+=baseString;

    var childContainer = document.createElement("div");
    content.append(childContainer);
    childContainer.className = "element-list-item-child-container no-children";
    parsedElement.childContainer = childContainer;

    // tempString = `
    //     <div class="element-list-item-child-container no-children"></div>
    // </div>
    // `;
    // baseString = baseString+tempString;


    listItem.append(footer);

    return listItem;

}

/*#####################################################\
 *|                                                    #
 *| 2. createFormInput()                               #
 *|                                                    #
\#####################################################*/


function createFormInput(label, tagClass, inputClass) {
    var inputContainer = document.createElement("div");
    inputContainer.className = "generic-form-input-container";
    
    var labelContainer = document.createElement("div");
    inputContainer.append(labelContainer);
    labelContainer.className = "generic-form-input-label";
    
    var labelValue = document.createElement("span");
    labelContainer.append(labelValue);
    labelValue.className = tagClass;
    labelValue.innerHTML+=label;
    
    var widthWrapper = document.createElement("span");
    inputContainer.append(widthWrapper);
    widthWrapper.className = "element-creation-input-width-wrapper";

    var input = document.createElement("input");
    widthWrapper.append(input);
    input.className = "generic-form-input " + inputClass;
    input.placeholder = "tag";

    return [inputContainer, input];
}

function createLeftFormButton(innerText){
    var button = document.createElement("div");
    button.className = "half-width-button generic-ui-button half-width-margin-right";
    button.innerHTML = innerText;
    return button;
}

function createRightFormButton(innerText){
    var button = document.createElement("div");
    button.className = "half-width-button generic-ui-button half-width-margin-left";
    button.innerHTML = innerText;
    return button;
}

console.log("elementCreation.js is loaded!");
