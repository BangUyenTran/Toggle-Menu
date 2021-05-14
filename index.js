const menu = document.querySelectorAll('#menu > li');
const menuList = document.querySelectorAll('#menu > li > ul');
let checkNumber; 
const show = (i) => {
    for(let j = 0; j < menuList.length; j++){
        menuList[j].style.display = 'none'
    }
    if(checkNumber === i){
        menuList[i].style.display = 'none'
        checkNumber = null
    }
    else{
        menuList[i].style.display = 'block'
        checkNumber = i
    }
}
for(let i = 0; i <menu.length; i++){
    menu[i].addEventListener('click',function(){return show(i)})
}