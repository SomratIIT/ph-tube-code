/* function loadData()
{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then(data=>showDataUi(data.categories));
}

loadData();

function showDataUi(categories)
{
const categoryContainer2 = document.getElementById('categoryGhoreAni');
categories.forEach(Cat => {
    console.log(Cat);

    const button2 = document.createElement('button');
    button2.innerText = Cat.category;
    button2.classList= 'btn'
    categoryContainer2.append(button2);
});
} */