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


    var listItem = document.createElement("div");
    listItem.className = "element-list-item generic-container";
    elementListContainer.append(listItem);

    var attributeContainer = document.createElement("div");
    attributeContainer.className = "element-list-item-attribute";
    listItem.append(attributeContainer);

    var listItemTag = document.createElement("div");
    listItemTag.className = "element-list-item-tag code-variable-tag";
    listItemTag.innerHTML+=tag;
    attributeContainer.append(listItemTag);





    // create id attribute
    var attribute = document.createElement("div");
    attributeContainer.append(attribute)
    attribute.className = "line-wrap";
    
    // create id attribute name
    var attributeName = document.createElement("span");
    attribute.append(attributeName);
    attributeName.className = "code-constant-attribute";
    attributeName.innerHTML += "id";

    attribute.innerHTML += "=";

    // create id value
    var attributeValue = document.createElement("span");
    attribute.append(attributeValue);
    attributeValue.className = "code-string line-wrap";
    attributeValue.innerHTML = '"'+id+'"';


    attributeContainer.innerHTML+="\n";


    // create class attribute
    var attribute = document.createElement("div");
    attributeContainer.append(attribute)
    attribute.className = "line-wrap";
    
    // create class attribute name
    var attributeName = document.createElement("span");
    attribute.append(attributeName);
    attributeName.className = "code-constant-attribute line-wrap";
    attributeName.innerHTML+= "class";

    attribute.innerHTML+="=";

    // create class value
    var attributeValue = document.createElement("span");
    attribute.append(attributeValue);
    attributeValue.className = "code-string line-wrap";
    attributeValue.innerHTML='"'+className+'"';





    // create element-list-item-footer
    var footer = document.createElement("div");
    listItem.append(footer);
    footer.className = "element-list-item-footer";


    // create button container
    var buttonContainer = document.createElement("div");
    footer.append(buttonContainer);
    buttonContainer.className = "element-list-item-button-container";

    // create plus button
    var plusButton = document.createElement("input");
    buttonContainer.append(plusButton);
    plusButton.className = "element-list-item-button generic-ui-icon";
    plusButton.type = "image";
    plusButton.src = icons.plus;

    // create edit button
    var editButton = document.createElement("input");
    buttonContainer.append(editButton);
    editButton.className = "element-list-item-button generic-ui-icon";
    editButton.type = "image";
    editButton.src = icons.pencil;

    // create delete button
    var deleteButton = document.createElement("input");
    buttonContainer.append(deleteButton);
    deleteButton.className = "element-list-item-button generic-ui-icon";
    deleteButton.type = "image";
    deleteButton.src = icons.trash;
    addListItemDeleteEvent(deleteButton);


    return listItem;

}

/*#####################################################\
 *|                                                    #
 *| 2. createElementForm()                             #
 *|                                                    #
\#####################################################*/

function createElementForm(){

    var form = document.createElement("div");
    form.className = "generic-container";
    form.setAttribute("id", "element-creation-form");

    // create form close button
    var closeButton = document.createElement("input");
    form.append(closeButton);
    closeButton.className = "generic-form-close-button generic-ui-icon";
    closeButton.type = "image";
    closeButton.src = "img/cross_icon.png";

    // create form header
    var header = document.createElement("div");
    form.append(header);
    header.className = "generic-form-header";
    header.innerHTML = "element-creation";


    // create tag input
    var inputContainer = document.createElement("div");
    form.append(inputContainer);
    inputContainer.className = "generic-form-input-container";
    
    var labelContainer = document.createElement("div");
    inputContainer.append(labelContainer);
    labelContainer.className = "generic-form-input-label";
    
    var labelValue = document.createElement("span");
    labelContainer.append(labelValue);
    labelValue.className = "code-variable-tag";
    labelValue.innerHTML+="tag";
    
    var widthWrapper = document.createElement("span");
    inputContainer.append(widthWrapper);
    widthWrapper.className = "element-creation-input-width-wrapper";

    var input = document.createElement("input");
    widthWrapper.append(input);
    input.className = "generic-form-input code-variable-tag";
    input.placeholder = "div";
    var tagInput = input;

    // create id input
    var inputContainer = document.createElement("div");
    form.append(inputContainer);
    inputContainer.className = "generic-form-input-container";
    
    var labelContainer = document.createElement("div");
    inputContainer.append(labelContainer);
    labelContainer.className = "generic-form-input-label";
    
    var labelValue = document.createElement("span");
    labelContainer.append(labelValue);
    labelValue.className = "code-constant-attribute";
    labelValue.innerHTML+="id";

    var widthWrapper = document.createElement("span");
    inputContainer.append(widthWrapper);
    widthWrapper.className = "element-creation-input-width-wrapper";

    var input = document.createElement("input");
    widthWrapper.append(input);
    input.className = "generic-form-input code-string";
    var idInput = input;




    // create class input
    var inputContainer = document.createElement("div");
    form.append(inputContainer);
    inputContainer.className = "generic-form-input-container";
    
    var labelContainer = document.createElement("div");
    inputContainer.append(labelContainer);
    labelContainer.className = "generic-form-input-label";
    
    var labelValue = document.createElement("span");
    labelContainer.append(labelValue);
    labelValue.className = "code-constant-attribute";
    labelValue.innerHTML+="class";
    
    var widthWrapper = document.createElement("span");
    inputContainer.append(widthWrapper);
    widthWrapper.className = "element-creation-input-width-wrapper";

    var input = document.createElement("input");
    widthWrapper.append(input);
    input.className = "generic-form-input code-string";
    var classInput = input;




    
    // create half button UI
    var buttonContainer = document.createElement("div");
    form.append(buttonContainer);
    buttonContainer.className = "half-width-container";



    // create cancel button
    var widthWrapper = document.createElement("div");
    widthWrapper.className = "half-width-wrapper";
    buttonContainer.append(widthWrapper);

    var leftButton = document.createElement("div");
    leftButton.className = "element-creation-button generic-ui-button half-width-margin-right";
    widthWrapper.append(leftButton);
    leftButton.setAttribute("id", "element-creation-cancel-button");
    leftButton.innerHTML+="cancel";
    addFormCancelEvent(leftButton);

    
    // create add button
    var widthWrapper = document.createElement("div");
    buttonContainer.append(widthWrapper);
    widthWrapper.className = "half-width-wrapper";

    var rightButton = document.createElement("div");
    widthWrapper.append(rightButton);
    rightButton.className = "element-creation-button generic-ui-button half-width-margin-left";

    rightButton.setAttribute("id", "element-creation-add-button");
    rightButton.innerHTML+="add";
    addFormAddEvent(rightButton, tagInput, idInput, classInput);


    return form;

}

console.log("elementCreation.js is loaded!");
