/*

    ~Index elementCreation.js~
    ----------------------

    1. init values
    2. functions
    3. display functions
    4. event listeners
    5. initialization

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

    var listItemTag = document.createElement("div");
    listItemTag.className = "element-list-item-tag code-variable-tag";
    listItem.append(listItemTag);
    listItemTag.innerHTML+=tag;

    var attributeContainer = document.createElement("div");
    attributeContainer.className = "element-list-item-attribute code-line";
    listItem.append(attributeContainer);



    // create id attribute
    var attribute = document.createElement("div");
    attribute.className = "float-line";
    
    // create id attribute name
    var attributeName = document.createElement("span");
    attributeName.className = "code-constant-attribute";
    attribute.append(attributeName);
    attributeName.innerHTML+= "id";

    attribute.innerHTML+="=";

    // create id value
    var attributeValue = document.createElement("span");
    attributeValue.className = "code-string";
    attribute.append(attributeValue);
    attributeValue.innerHTML='"'+id+'"'+"&nbsp;";

    // append id attribute
    attributeContainer.append(attribute)





    // create class attribute
    var attribute = document.createElement("div");
    attribute.className = "float-line";
    
    // create class attribute name
    var attributeName = document.createElement("span");
    attributeName.className = "code-constant-attribute";
    attribute.append(attributeName);
    attributeName.innerHTML+= "class";

    attribute.innerHTML+="=";

    // create class value
    var attributeValue = document.createElement("span");
    attributeValue.className = "code-string";
    attribute.append(attributeValue);
    attributeValue.innerHTML='"'+className+'"';

    // append class attribute
    attributeContainer.append(attribute)

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

    form.append(inputContainer);



    // create class input
    var inputContainer = document.createElement("div");
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

    form.append(inputContainer);

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
