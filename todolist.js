let inputbx = document.querySelector('#inputbx');
let list = document.querySelector('#list');


inputbx.addEventListener('keyup',function(event){
    if (event.key == "Enter"){
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (inputbx) =>{
    let listitem = document.createElement("li");
    listitem.innerHTML = `${inputbx}<i></i>`;

    listitem.addEventListener("click", function(){
        this.classList.toggle('done');
    })

    listitem.querySelector("i").addEventListener("click",function(){
        listitem.remove();
    })
    list.appendChild(listitem);

}
