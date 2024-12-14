console.log('Kaj kortese');

// 1-Fetch ,Load and Show Categories on HTML

// Create loadCategories
const loadCategories=()=>{
    // For Fetch the data 
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response=>response.json())
    
    .then(data=>displayCategories(data.categories))
    .catch((error)=>console.log(error));

};
loadCategories();


// Crrate displayCategories

const displayCategories=(categories)=>{
    // add Data in HTML
    const categoryContainer = document.getElementById('categories');
  categories.forEach((Cat) => {
    console.log(Cat);

    // Create Button
const button = document.createElement('button');
button.classList = 'btn btn-large';
button.innerText = Cat.category;
// Add btn to catagory container
categoryContainer.append(button);
  });
}