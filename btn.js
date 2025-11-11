

function btncall (){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data => btnshaow(data.categories))
}
btncall()

function btnshaow(deta){
    
    const btncontainer = document.getElementById("dynamic-btn")
    for(let singlebtn of deta){
        
        
      const divbtn = document.createElement("div")
      divbtn.innerHTML=`
      <button onclick="loadId(${singlebtn.category_id})" class="btn hover:bg-red-600 hover:text-white hover:transition delay-150 duration-500">${singlebtn.category}</button>

      `
      btncontainer.appendChild(divbtn)
    }
}

const loadId =(id)=>{
  console.log(id);
  const uRl=`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(uRl);
  fetch(uRl)
  .then(rEs=>rEs.json())
  .then(net=>videoShow(net.category)
  )
  
  
}

function videoS(){
fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
.then(Response =>Response.json())
.then(Deta=>videoShow(Deta.videos));
}
const videoShow = (picture)=>{
 const videoContainer=document.getElementById("video-container")
  videoContainer.innerHTML = " "
  picture.forEach(element => {
   
    
    
    
    const divConteiner = document.createElement("div")
    
    divConteiner.innerHTML=`

    <div class="card   ">
  <figure>
    <img class ="object-cover w-[312px] h-[200px]"
      src="${element.thumbnail}"
      alt="video" />
  </figure>
  <div class="card-body ">
    <div class="flex gap-3">
    <div>
    <div class="avatar w-10">
  <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
    <img src="${element.authors[0].profile_picture}" />
  </div>
</div>
</div>
    <div>
    <h2 class="card-title font-bold">${element.title}</h2>
    <h5 class="flex gap-3"> ${element.authors[0].profile_name}  ${element.authors[0].verified=== true ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>` : "" }
</h5>
    <span>${element.others.views} </span>
    </div>
  </div>
  </div>
</div>
    `
    videoContainer.appendChild(divConteiner)
    
    
  }
);
  
  
}
