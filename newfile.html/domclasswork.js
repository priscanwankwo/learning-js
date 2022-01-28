
const intro = document.querySelector(".intro");
const newPara = document.createElement("p");
newPara.textContent = "my name is prisca";
newPara.className = "name";
intro.append(newPara);


const listOfFavouriteBooks = [
    "Harry Potter and Deathly Hallows",
    "Lord of the Rings",
    "The witcher",
    "Game of thrones",
    "The Magicians",
    "Twilight",
    "The Dawn",
    "The Vampires Diary",
    "Corporate House Wives",
    "Muskeeteers",

];



 for (let i= 0; i < listOfFavouriteBooks.length;  i++) {
     const listOfFavouriteBooks = listOfFavouriteBooks[i];

     displayItem(listOfFavouriteBooks);
     
 }

// Create a new HTML file that has a 'div' with a class of "intro" inside the HTML file, the 'div' content is Hello Everyone, I am new here.
// - Now, create a javascript file and connect it to your HTML Page, inside the javascript file, perform the following:-

//   - Create a new paragraph element using the methods we just learned.
//   - Give the new paragraph element a textContent of "My Name is <your name>"
//   - Give the paragraph a class of "name"
//   - Append the paragraph element to the 'div' in the HTML Page.
//   - Create an array containing a list of your favorite books. The length of the array should be 10.
//   - Loop through the array then display each book on our webpage just like we did in class.