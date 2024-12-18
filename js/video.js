function  getTimeString(time)
{   const hour = parseInt(time/3600) ;
    const minutes = time %3600
    const minute = parseInt(minutes/60) ;
    const seconds = minutes %60
    const second = seconds;
    return `${hour} hour ${minute} minute ${second} second ago`;
}

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
const loadVideos=()=>{
    // For Fetch the data 
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response=>response.json())
    
    .then(data=>displayVideos(data.videos))
    .catch((error)=>console.log(error));

};
loadVideos();
const loadcategoryVideos = (id)=>{
 // alert(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(response=>response.json())
    
    .then(data=>displayVideos(data.category))
}
const cardDemo = {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
};
// Display Videos
const displayVideos=(videos)=>{
 console.log(videos);
const videoContainer = document.getElementById('videos');
videoContainer.innerHTML=""
videos.forEach((VID)=>{
    console.log(VID);
    const card = document.createElement("div");
    card.classList='card card-compact'
    card.innerHTML = `
    <figure class="h-[200px] relative">
    <img
      src=${VID.thumbnail}
      alt="Shoes" class="h-full w-full object-cover"/>
    
    ${
        VID.others.posted_date?.length==0 ? "" :`<span class="absolute text-white right-2 bottom-2 bg-black rounded  p-2 text-xs">${getTimeString(VID.others.posted_date)}</span>`
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
  
   ${VID.authors[0].verified==true ?   '<img class="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png"  />'  : ""}
    </div>
    
    <p> ${VID.others.views}</p>
    </div>
  </div>`


  videoContainer.append(card);
})
}



// Crrate displayCategories

const displayCategories=(categories)=>{
    // add Data in HTML
    const categoryContainer = document.getElementById('categories');
  categories.forEach((Cat) => {
    // console.log(Cat);

    // Create Button
const buttonContainer = document.createElement('div');
buttonContainer.innerHTML=
`
   <button onclick='loadcategoryVideos(${Cat.category_id})' class="btn btn-large ">
   ${Cat.category}
   </button>
  
`

// Add btn to catagory container
categoryContainer.append(buttonContainer);

  });
}