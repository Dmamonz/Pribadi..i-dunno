const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const list = document.querySelectorAll("li");
const paragraph = document.querySelectorAll("p");

container1.style.backgroundColor = "Lightblue";
container2.style.backgroundColor = "Lightblue";

for(let i = 0; i < paragraph.length; i++){
    paragraph[i].style.backgroundColor = 'lightyellow';
}

for(let i = 0; i < list.length; i++){
    list[i].style.backgroundColor = 'lightyellow';
    list[i].style.fontWeight = '';
    list[i].style.fontFamily = 'courier new';
}
