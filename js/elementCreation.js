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

    // create plus button
    var plusButton = document.createElement("input");
    plusButton.className = "element-list-item-button generic-ui-icon";
    plusButton.type = "image";
    plusButton.src = icons.plus;

    // create edit button
    var editButton = document.createElement("input");
    editButton.className = "element-list-item-button generic-ui-icon";
    editButton.type = "image";
    editButton.src = icons.pencil;

    // create delete button
    var deleteButton = document.createElement("input");
    deleteButton.className = "element-list-item-button generic-ui-icon";
    deleteButton.type = "image";
    deleteButton.src = icons.trash;



    var baseString = `
        <div class="element-list-item generic-container">
            <div class="element-list-item-content">
                <div class="element-list-item-tag code-variable-tag">`+ tag +`</div>
                <div class="line-wrap"><span class="code-constant-attribute line-wrap">id</span>=<span class="code-string line-wrap">"`+ id +`"</div>
                <div class="line-wrap"><span class="code-constant-attribute line-wrap">class</span>=<span class="code-string line-wrap">"`+ className +`"&nbsp;</span></div>
                
                <div class="element-list-item-child-container no-children"></div>

            </div>
            <div class="element-list-item-footer">
                <div class="element-list-item-button-container">
                    <input class="element-list-item-button generic-ui-icon" type="image" src="img/plus_icon.png"/>
                    <input class="element-list-item-button generic-ui-icon" type="image" src="img/pencil_icon.png"/>
                    <input class="element-list-item-button generic-ui-icon" type="image" src="img/trash_icon.png"/>
                </div>
            </div>
        </div>
    `;

    return baseString;

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
