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
    attributeContainer.className = "element-list-item-content";
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

    // create child container
    var childContainer = document.createElement("div");
    listItem.append(childContainer);
    childContainer.className = "element-list-item-child-container no-children";


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

/*#####################################################\
 *|                                                    #
 *| 3. createElementForm()                             #
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
    var tagInput = createFormInput("tag", "code-variable-tag", "code-variable-tag");
    form.append(tagInput[0]);

    // create id input
    var idInput = createFormInput("id", "code-constant-attribute", "code-string");
    form.append(idInput[0]);

    // create class input
    var classInput = createFormInput("class", "code-constant-attribute", "code-string");
    form.append(classInput[0]);


    
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
    addFormAddEvent(rightButton, tagInput[1], idInput[1], classInput[1]);

    return form;

}

/*#####################################################\
 *|                                                    #
 *| 3. createEditForm()                                #
 *|                                                    #
\#####################################################*/

function createEditForm(parsedElement) {
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
    header.innerHTML = "edit element";

    // create parent header
    if(parsedElement.parent != null) {
        var parentHeader = document.createElement("div");
        form.append(parentHeader);
        parentHeader.id = "element-edit-parent";
        parentHeader.innerHTML+="parent:";

        var tag = document.createElement("span");
        parentHeader.append(tag);
        tag.className = "code-variable-tag";
        tag.innerHTML = parsedElement.tag;

        parentHeader.innerHTML+="&nbsp;"

        var selectors = document.createElement("span");
        parentHeader.append(selectors);
        selectors.className = "code-constant-attribute";

        selectors.innerHTML += "#" + parsedElement.id + " ";
        selectors.innerHTML += "." + parsedElement.className;
    }

    // create tag input
    var tagInput = createFormInput("tag", "code-variable-tag", "code-variable-tag");
    form.append(tagInput[0]);
    tagInput[1].value = parsedElement.tag;

    // create id input
    var idInput = createFormInput("id", "code-constant-attribute", "code-string");
    form.append(idInput[0]);
    idInput[1].value = parsedElement.id;

    // create class input
    var classInput = createFormInput("class", "code-constant-attribute", "code-string");
    form.append(classInput[0]);
    classInput[1].value = parsedElement.className;


    
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

    
    // create save button
    var widthWrapper = document.createElement("div");
    buttonContainer.append(widthWrapper);
    widthWrapper.className = "half-width-wrapper";

    var rightButton = document.createElement("div");
    widthWrapper.append(rightButton);
    rightButton.className = "element-creation-button generic-ui-button half-width-margin-left";

    rightButton.setAttribute("id", "element-creation-add-button");
    rightButton.innerHTML+="save";
    addFormAddEvent(rightButton, tagInput[1], idInput[1], classInput[1]);

    return form;

}

console.log("elementCreation.js is loaded!");
