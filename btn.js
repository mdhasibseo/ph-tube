

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
    
    <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${element.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${element.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `
    videoContainer.appendChild(divConteiner)
    
  });
  
}