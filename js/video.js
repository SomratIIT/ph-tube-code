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

const displayCategories=(data)=>{
    // add Data in HTML
    console.log(data);
}