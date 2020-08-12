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

function createElementListItem(tag, id, className){

     newElement = new element(tag, id, className);

    var listItem = document.createElement("div");
    listItem.className = "element-list-item generic-container";
    elementListContainer.append(listItem);

    var content = document.createElement("div");
    listItem.append(content);
    content.className = "element-list-item-content";

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
        console.log("add child");
        displayForm(formType.create, newElement);
    });

    // create edit button
    var editButton = document.createElement("input");
    buttonContainer.append(editButton);
    editButton.className = "element-list-item-button generic-ui-icon";
    editButton.type = "image";
    editButton.src = icons.pencil;
    editButton.addEventListener("click",function(){
        console.log("edit element");
    });

    // create delete button
    var deleteButton = document.createElement("input");
    buttonContainer.append(deleteButton);
    deleteButton.className = "element-list-item-button generic-ui-icon";
    deleteButton.type = "image";
    deleteButton.src = icons.trash;
    deleteButton.addEventListener("click", function(){
        console.log("delete element");
    });



    var baseString = `
            <div class="element-list-item-tag code-variable-tag">`+ newElement.tag +`</div>
    `;

    if(newElement.id != ""){
        tempString = '<div class="line-wrap"><span class="code-constant-attribute line-wrap">id</span>=<span class="code-string line-wrap">"' + newElement.id + '"</div>';
        baseString = baseString + tempString;
    };
    if(newElement.className != ""){
        tempString = '&nbsp;<div class="line-wrap"><span class="code-constant-attribute line-wrap">class</span>=<span class="code-string line-wrap">"' + newElement.className + '"</div>';
        baseString = baseString + tempString;
    };

    content.innerHTML+=baseString;

    var childContainer = document.createElement("div");
    content.append(childContainer);
    newElement.childContainer = childContainer;
    childContainer.className = "element-list-item-child-container no-children";

    // tempString = `
    //     <div class="element-list-item-child-container no-children"></div>
    // </div>
    // `;
    // baseString = baseString+tempString;


    listItem.append(footer);

    elements.push(newElement);

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
