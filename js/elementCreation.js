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

    // append class attribute





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
    plusButton.className = "element-list-item-button";
    plusButton.type = "image";
    plusButton.src = icons.plus;

    // create edit button
    var editButton = document.createElement("input");
    buttonContainer.append(editButton);
    editButton.className = "element-list-item-button";
    editButton.type = "image";
    editButton.src = icons.pencil;

    // create delete button
    var deleteButton = document.createElement("input");
    buttonContainer.append(deleteButton);
    deleteButton.className = "element-list-item-button";
    deleteButton.type = "image";
    deleteButton.src = icons.trash;


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



    // create id input
    var inputContainer = document.createElement("div");
    form.append(inputContainer);
    inputContainer.className = "element-creation-input-container";
    
    var inputLabel = document.createElement("div");
    inputLabel.className = "element-creation-input-label";
    
    var inputLabelValue = document.createElement("span");
    inputLabelValue.className = "code-constant-attribute";
    inputLabelValue.innerHTML+="id";
    inputLabel.append(inputLabelValue);

    inputLabel.innerHTML+=" =&nbsp;"
    
    inputContainer.append(inputLabel);

    var inputWrapper = document.createElement("span");
    inputWrapper.className = "element-creation-input-width-wrapper";
    inputContainer.append(inputWrapper);

    var input = document.createElement("input");
    input.className = "element-creation-input code-string";

    inputWrapper.append(input);


    // create class input
    var inputContainer = document.createElement("div");
    form.append(inputContainer);
    inputContainer.className = "element-creation-input-container";
    
    var inputLabel = document.createElement("div");
    inputLabel.className = "element-creation-input-label";
    
    var inputLabelValue = document.createElement("span");
    inputLabelValue.className = "code-constant-attribute";
    inputLabelValue.innerHTML+="class";
    inputLabel.append(inputLabelValue);

    inputLabel.innerHTML+=" =&nbsp;"
    
    inputContainer.append(inputLabel);

    var inputWrapper = document.createElement("span");
    inputWrapper.className = "element-creation-input-width-wrapper";
    inputContainer.append(inputWrapper);

    var input = document.createElement("input");
    input.className = "element-creation-input code-string";

    inputWrapper.append(input);


    // create half button UI
    var buttonContainer = document.createElement("div");
    buttonContainer.className = "half-width-container";

    // create cancel button
    var buttonWrapper = document.createElement("div");
    buttonWrapper.className = "half-width-wrapper";
    buttonContainer.append(buttonWrapper);

    var button = document.createElement("div");
    button.className = "generic-ui-button half-width-margin-right";
    buttonWrapper.append(button);
    button.setAttribute("id", "element-creation-cancel-button");
    button.innerHTML+="cancel";

    // create cancel button
    var buttonWrapper = document.createElement("div");
    buttonWrapper.className = "half-width-wrapper";
    buttonContainer.append(buttonWrapper);

    var button = document.createElement("div");
    button.className = "generic-ui-button half-width-margin-right";
    buttonWrapper.append(button);
    button.setAttribute("id", "element-creation-add-button");
    button.innerHTML+="add";

    form.append(buttonContainer);

    return form;

}
