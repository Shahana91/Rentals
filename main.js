let nextDom=document.getElementById('next');
let prevDom=document.getElementById('prev');
let carouselDom=document.querySelector('.carousel');
let listItemDom=document.querySelector('.carousel .list');
let thumbnailDom=document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailDom.querySelectorAll('.item');
nextDom.onclick=function(){
    showSlider('next');
}
prevDom.onclick=function(){
    showSlider('prev');
}


thumbnailDom.appendChild(thumbnailItemsDom[0]);

let timeRunning=3000;
let timeAutoNext = 7000;
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)



function showSlider(type){
    let itemSlider=document.querySelectorAll('.carousel .list .item');
    let itemThumbnail=document.querySelectorAll('.carousel .thumbnail .item');
    console.log(itemSlider);
    console.log(itemThumbnail);
    console.log(itemSlider[0]);
    console.log(itemThumbnail[0]);
    if(type==='next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
        // let pos_item=0;
        // if(pos_item>itemSlider.length-1)pos_item=0;
        // listItemDom.appendChild(itemSlider[pos_item]);
        // thumbnailDom.appendChild(itemThumbnail[pos_item]);
        // carouselDom.classList.add('next');
        // pos_item++;
    }else{
        // let positionLastItem=itemSlider.length-1;
        listItemDom.prepend(itemSlider[itemSlider.length-1]);
        thumbnailDom.prepend(itemThumbnail[itemThumbnail.length-1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut=setTimeout(()=>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');

    },timeRunning);
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}