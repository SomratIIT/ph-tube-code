function getTimeString(time) {
  const hour = parseInt(time / 3600);
  const minutes = time % 3600
  const minute = parseInt(minutes / 60);
  const seconds = minutes % 60
  const second = seconds;
  return `${hour} hour ${minute} minute ${second} second ago`;
}
const removeActiveClass=()=>
{
  const buttons = document.getElementsByClassName('category-btn');
  console.log(buttons);
  for(let btn of buttons)
  {
    btn.classList.remove("active");
  }
}

console.log('Kaj kortese');

// 1-Fetch ,Load and Show Categories on HTML

// Create loadCategories
const loadCategories = () => {
  // For Fetch the data 
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
 
    .then(data => displayCategories(data.categories))
    // .catch((error) => console.log(error));

};
loadCategories();  // 1st Load call kora hoiche

// video load kora hocche

const loadVideos = () => {
  // For Fetch the data 
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())

    .then(data => displayVideos(data.videos))
    .catch((error) => console.log(error));

};
loadVideos();   // 2nd Load
const loadcategoryVideos = (id) => {
  // alert(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(response => response.json())

    .then(data =>{

      // sobar active class k remove korbo
removeActiveClass();

      // id er class k active korbo
      const activeBtn = document.getElementById(`btn-${id}`);
      activeBtn.classList.add('active');
      console.log(activeBtn);
      displayVideos(data.category);
    })
}

// Display Videos
const displayVideos = (videos) => {
  console.log(videos);
  const videoContainer = document.getElementById('videos');
  videoContainer.innerHTML = ""
  if (videos.length == 0) {
    videoContainer.classList.remove('grid');
    //  videoContainer.classlist.remove("grid");
    videoContainer.innerHTML = `
  
  <div class="min-h-[200px] w-full flex flex-col gap-5 justify-center items-center ">
  <img  src="assets/Icon.png"  />
  </div>
  <h2 class="text-center font-bold text-xl">No Content here!</h2>
  `;
    return;
  }
  else {
    videoContainer.classList.add('grid');
  }
  videos.forEach((VID) => {
    console.log(VID);
    const card = document.createElement("div");
    card.classList = 'card card-compact'
    card.innerHTML = `
    <figure class="h-[200px] relative">
    <img
      src=${VID.thumbnail}
      alt="Shoes" class="h-full w-full object-cover"/>
    
    ${VID.others.posted_date?.length == 0 ? "" : `<span class="absolute text-white right-2 bottom-2 bg-black rounded  p-2 text-xs">${getTimeString(VID.others.posted_date)}</span>`
      }
    
      
  </figure>
  <div class="px-0 py-2 flex gap-4">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src="${VID.authors[0].profile_picture} "/>
    </div>
    <div >
    <h2 class="font-bold text-base"> ${VID.title} </h2>
    <div class="flex items-center ">
    <p class='text-gray-400'> ${VID.authors[0].profile_name} </p>
  
   ${VID.authors[0].verified == true ? '<img class="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png"  />' : ""}
    </div>
    
    <p> ${VID.others.views}</p>
    </div>
  </div>`


    videoContainer.append(card);
  })
}



// Crrate displayCategories
// 2nd Kaj
const displayCategories = (categories) => {
  // add Data in HTML
  const categoryContainer = document.getElementById('categories');
  // 3rd kaj
  categories.forEach((Cat) => {
    // console.log(Cat);

    // Create Button
    const buttonContainer = document.createElement('div');
    buttonContainer.innerHTML =
      `
   <button id="btn-${Cat.category_id}" onclick='loadcategoryVideos(${Cat.category_id})' class="btn btn-large category-btn">
   ${Cat.category} 
   </button>
  
`

    // Add btn to catagory container
    categoryContainer.append(buttonContainer);

  });
}