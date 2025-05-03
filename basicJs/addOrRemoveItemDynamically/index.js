let inputField = document.getElementById('inputField');
let addElement = document.getElementById('addbtn');
let showElementDiv = document.querySelector('.list-elements');


const getList = () => {
    return JSON.parse(localStorage.getItem("Data"));
}

const updateElemetafterDelete = (localStorageElement) => {
    return localStorage.setItem("Data", JSON.stringify(localStorageElement));
}

let localStorageElement = getList() || [];


const addElementDynamically = (curr) => {
    let createDiv = document.createElement('div');
    createDiv.classList.add('showElementHere');
    createDiv.innerHTML = `<li>${curr}</li> <button class="deletebtn">Delete</button>`;
    showElementDiv.append(createDiv);
}


addElement.addEventListener('click', (e) => {
    e.preventDefault();
    let inputValue = inputField.value.trim();
    if (!inputValue) {
        return;
    }

    inputField.value = "";

    if (!localStorageElement.includes(inputValue)) {
        localStorageElement.push(inputValue);
        localStorageElement = [...new Set(localStorageElement)];
        localStorage.setItem("Data", JSON.stringify(localStorageElement));
        addElementDynamically(inputValue);
    }

})

const showElement = () => {
    console.log(localStorageElement);
    localStorageElement.forEach((curr) => {
        addElementDynamically(curr);
    })
}

showElement();

const deleteElementDynamically = (e) => {
    let removeElment = e.target;

    let listContent = removeElment.previousElementSibling.innerText;
    let parentElement = removeElment.parentElement;
    localStorageElement = localStorageElement.filter((curr) => {
        return curr !== listContent;
    })
    console.log(localStorageElement);

    updateElemetafterDelete(localStorageElement);
    parentElement.remove();
}



showElementDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('deletebtn')) {
        deleteElementDynamically(e);
    }
    
})







