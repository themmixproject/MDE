/*

    ~Index MDE.js~
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
 *| 1. init values                                     #
 *|                                                    #
\#####################################################*/


var addElementButton = document.getElementById("add-element-button");

var elementListContainer = document.getElementById("element-list-container");

var editorPageContent = document.getElementById("editor-page-content");

var formContainer = document.getElementById("form-container");

var formHeader = document.getElementById("form-header");

var formParentContainer = document.getElementById("element-edit-parent");

var tagInput = document.getElementById("tag-input");

var idInput = document.getElementById("id-input");

var classInput = document.getElementById("class-input");

var formCloseButton = document.getElementById("form-close-button");

var formPageOverLay = document.getElementById("bottom-form-page-overlay");

var formLeftButtonContainer = document.getElementById("form-left-button-container");

var formRightButtonContainer = document.getElementById("form-right-button-container");

var icons = {
    pencil: "img/pencil_icon.png",
    plus: "img/plus_icon.png",
    trash: "img/trash_icon.png"
};

var formType = {
    edit : "edit",
    create : "create"
};

var elements = [];

/*#####################################################\
 *|                                                    #
 *| 2. functions                                       #
 *|                                                    #
\#####################################################*/

function createElement(tag, id, className, parent){
    newElement = new element(tag, id, className);
    if(parent==undefined){
        elements.push(newElement);
    }
    else{
        newElement.parent = parent;
        parent.children.push(newElement);
    }
    return newElement;
}

/*#####################################################\
 *|                                                    #
 *| 3. display functions                               #
 *|                                                    #
\#####################################################*/

function displayForm(type, parsedElement, parentElement) {
    
    formLeftButtonContainer.innerHTML = "";
    formRightButtonContainer.innerHTML = "";

    formPageOverLay.style.display = "block";
    formContainer.style.display = "block";

    if(parentElement !== undefined && parentElement !== null) {
        formParentContainer.innerHTML = "";
        formParentContainer.style.display = "block";
        formParentContainer.innerHTML += "parent: ";
        formParentContainer.innerHTML+=`<span class="code-variable-tag">` + parentElement.tag +`</span>`;
        if(parentElement.id!="" && parentElement.className!="" || parentElement.className!=undefined || element.id != undefined) {
            formParentContainer.innerHTML+="&nbsp;";
            attributeContainer = document.createElement("span");
            formParentContainer.appendChild(attributeContainer);
            attributeContainer.className = "code-constant-attribute";
            if(parentElement.id!==null) {
                attributeContainer.innerHTML+="#"+parentElement.id;
            };
            if(parentElement.className!==null) {
                classNameArray = parentElement.className.split(" ");
                classString = "";
                classNameArray.forEach(function(item, index){
                    classString+=" ."+item;
                })
                attributeContainer.innerHTML+=classString;
            }
        }
    }
    else {
        formParentContainer.style.display = "none";
    }

    if(type == formType.create) {
        formHeader = "element creation"
        leftButton = createLeftFormButton("add");

        if(parentElement==undefined){
            leftButton.addEventListener("click", function(){
                console.log("create!");
                var newElement = new element(tagInput.value, idInput.value, classInput.value);
                elementListContainer.append(createElementListItem(newElement));
                closeForm();
            });
        }
        else{
            leftButton.addEventListener("click", function(){
                newElement = createElement(tagInput.value, idInput.value, classInput.value, parentElement);
                parentElement.childContainer.append(createElementListItem(newElement));
                parentElement.childContainer.className = "element-list-item-child-container";
            });
        }

    }
    else {
        tagInput.value = parsedElement.tag
        idInput.value = parsedElement.id;
        classInput.value = parsedElement.className;
        formHeader = "edit element"
        leftButton = createLeftFormButton("confirm");

        leftButton.addEventListener("click", function(){
            console.log("edit!");
            parsedElement.tag = tagInput.value;
            parsedElement.id = idInput.value;
            parsedElement.className = classInput.value;
            parsedElement.updateAttributes();
            closeForm();
        });

    }

    rightButton = createRightFormButton("cancel");
    rightButton.addEventListener("click", closeForm);

    formLeftButtonContainer.append(leftButton)
    formRightButtonContainer.append(rightButton);

    
}

function closeForm() {
    tagInput.value = "";
    idInput.value = "";
    classInput.value = "";
    formPageOverLay.style.display = "none";
    formContainer.style.display = "none";
    formLeftButtonContainer.innerHTML = "";
    formRightButtonContainer.innerHTML = "";
}

/*#####################################################\
 *|                                                    #
 *| 4. event listeners                                 #
 *|                                                    #
\#####################################################*/

addElementButton.addEventListener("click", function(){
    console.log("you clicked the add-element button!");
    displayForm(formType.create);
})

formCloseButton.addEventListener("click", function(){
    closeForm();
});

function addFormCancelEvent(button) {
    button.addEventListener("click", function(){
        console.log("cancel");
        button.parentNode.parentNode.parentNode.remove(button.parentNode.parentNode);
        addElementButton.style.display = "block";
    });
}

function addFormAddEvent(button, tagInput, idInput, classInput) {
    button.addEventListener("click", function(){
        elementListContainer.append(createElementListItem(tagInput.value, idInput.value, classInput.value));
        button.parentNode.parentNode.parentNode.remove(button.parentNode.parentNode);
        addElementButton.style.display = "block";
    });
}

function addListItemDeleteEvent(button) {
    button.addEventListener("click", function(){
        button.parentNode.parentNode.parentNode.remove(button.parentNode.parentNode);
    });
}

// button.parentNode.parentNode.parentNode.remove(button.parentNode.parentNode);
// addElementButton.style.display = "block";

/*#####################################################\
 *|                                                    #
 *| 5. initialization                                  #
 *|                                                    #
\#####################################################*/

console.log("MDE.js is loaded!");

var myElement = createElementListItem(createElement("div", "asdf", "adsf"));
elementListContainer.append(myElement);

var myElement = createElement("div", "asdf", "adsf2");
var listItem = createElementListItem(myElement);
elementListContainer.append(listItem);
myElement.childContainer.append(createElementListItem(createElement("div", "", "shoot", myElement)));

