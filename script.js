let ivalue = document.getElementById("ivalue");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");
let deletebtn = document.getElementById("deletebtn");

ivalue.addEventListener("keypress", (enter)=>{
    if(enter.key.toLocaleLowerCase() == "enter"){

        let li = document.createElement("li");
        li.innerHTML= (`<span>${ivalue.value}</span><button id="deletebtn">X</button>`);
        ul.appendChild(li);
        ivalue.value = " "
        li.addEventListener("click", ()=>{
            li.remove()
        })
    }
});
