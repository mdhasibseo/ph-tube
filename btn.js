

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