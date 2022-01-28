// // Document Object Model
// // the whhole webpage is called a dom

// // benefit of using the javascript dom:
// // with the dom javascript can change all the html elements in a webpage
// // we can also change html attribute
// // change css styling using the dom 
// // can add and remove new elements from the dom


// // get element ny Id
// // get element by class name
// // get element by tagname
// // query selector
// // queryselctorall


// // selecting element by id: use getElementById
// // document.getElementById("location")

// const location = document. getElementById("location");

// // selecting an element with a class: use getElementByClassName
// // document.getElementByClassName("wrapper")
// const wrapper = documet.getElementsByClassName("wrapper");

// // // selecting ana element with either a classname, id or attribute)
// // document.querySelector(".wrapper .adress")
// const address = document.querySelector(.wrapper .address);

// selecting an element by tagName
// document.getElementsByTagName("p")

// using query selector:we can select any selector at all wheteher  a paragraph
// document.querySelector(".name") or ("hashlocation") or ("wrapper p: first-child") or (".wrapper p:nth-child(5)")


// document.querySelectorAll:  will return all the results if.e a note list of all elememts with dat same name e.g all the paragraphs or all the names as the case may be.
// document.querySelectorAll

// colours of ist paragraphs can be changed with a dom by :
// document.querySelector("name").getElementsByClassName.colour ='red'

// contents can also be changed with dom
// Document.querySelector("name").textContent
// my name is david

// or
// Document.querySelector("name").textcontent = i live in the uk

// change colour
// const title = docucment.querySelector(".tittle");
// title.style.colour ="green";
// change text
// title. style.textAlign = "center";

// change background colour
// title.style.backgroundColour = "yellow";


// changing contents using javascript
// address.textContent = "25 mongo Road Yaba Lagos State";
// address.style.padding = "1rem";
// address.style.textDecroration ="underline";
// address.style.fontSize = "20px";
// address.style.backgroundcolour ="aliceblue";

// styling button:
// loginBtn.style.height = "40px";
// loginBtn.style.backgroundColour = "Cyan";
// loginBtn.style.border = 0
// loginBtn.style.borderRadius = "10px";
// loginBtn.style.padding = "0 1rem";
// loginBtn.style.fontSize = "18px";
// loginBtn.style.cursor = "pointer";
// loginBtn.textContent = "signin"

// changing contents
// loginBtn.inerText 

// or (it replaces everything we have in our button and also the option of passing in an actual html content unlike the text content):
//  LoginBtn.InnerHTML = <span>icon</span>

// loginBtn.textContent = "Signin"



// query selector all returns a note list of all the element you have but query selctor select not all but the particular elemnet you 

// modifying element in a dom.
// -creating element in the dom
// let newPara = document.createElement("p")
// newPara.textcontent = "i am a new paragraph"
// const wrapper = document.querySelector.(". wrapper")
// or
// wrapper.append(newPara)
// or 
// wrapper[0].append(newPara)

// newPara.textContent = "i am a new paragraph thats being created multiple times"

// let newPara = document.createElement("p");
// newPara. textContent = "Hello world i am a new craeted paragraph";
// document.body.append(newPara);
// if you want the new element to be in wrapper instead of doing the immediate body u do wrapper.append(newPara);

// for class: newPara.className = "text-red". then you go to your css and style with the class name text red , you see it take eeffect.

// if you want to add to the begining of the elemnet and we use prepend else.g
// wrapper.prepend(newPara)

// we also have adjacent
// wrapper.insertAdjacentElement("afterbegin", newPara); 
// you can also use afterbegin or afterend,beforebeginning,


// create a delete button and append to the DOMException
// let deleteBtn.textContent = "delete"
// deleteBtn.ClassName = "delete-btn";

// document.body.appendChild(deleteBtn);

// to add event
// deleteBtn.onclick = function () {
//     console.log("Hello world");

//     new paragrpgh.remove() : to the exact elemnt u want to remove
//     wrapper.removeChild(address); :this removes the children or child one by one

//     document.body.appendChild(deleteBtn)

//     // create a copy button copy element:



    document.removeElement
}

document.addEventListener("click", function())


CLASSWORK:
-Create a new HTML file that has a div" with a class of intro", inside the HTML file, the div content is hello Everyone, I am new Here.
-Now create a javascript file and connect it to your HTML page, inside the javascript file, perform the following:


-create a new paragraph element  using the methods we just learnt.

-give the new paragraph element a textContent of "my Name is <your name>"
-give the paragraph a class of "name"
-Append the paragraph element to the "div" in the HTML page

solution;
const intro = document.querySelector(".intro");
const newPara = document.createElement("p");
newPara.textContent = "my name is prisca";
newPara.className = "name";
intro.append(newPara);



-displaying a list of items on our webpage;

const hobbies = ["reading", "sleeping, "playing]

function displayItem(item) {
    const newElement = document.createElement("p");
    newElement.textContent = item;
    newElement.className = "className" = "list-item";
    wrapper.append(newElement);
}

for (let i = 0; i < hobbies.length; i++) {
    const hobby = hobbies[i];

    displayItem(hobby);
    
}

Assignment 
Create a new HTML file that has a 'div' with a class of "intro" inside the HTML file, the 'div' content is Hello Everyone, I am new here.
- Now, create a javascript file and connect it to your HTML Page, inside the javascript file, perform the following:-

  - Create a new paragraph element using the methods we just learned.
  - Give the new paragraph element a textContent of "My Name is <your name>"
  - Give the paragraph a class of "name"
  - Append the paragraph element to the 'div' in the HTML Page.
  - Create an array containing a list of your favorite books. The length of the array should be 10.
  - Loop through the array then display each book on our webpage just like we did in class.