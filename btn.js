

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
      <button class="btn hover:bg-red-600 hover:text-white hover:transition delay-150 duration-500">${singlebtn.category}</button>

      `
      btncontainer.appendChild(divbtn)
    }
}

fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
.then(Response =>Response.json())
.then(Deta=>videoShow(Deta.videos));

const videoShow = (picture)=>{
  
  picture.forEach(element => {
    console.log(element);
    
    const videoContainer=document.getElementById("video-container")
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
    <h5>${element.authors[0].profile_name}</h5>
    <span>${element.others.views}</span>
    </div>
  </div>
  </div>
</div>
    `
    videoContainer.appendChild(divConteiner)
    
  });
  
}