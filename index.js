let lidOne=document.querySelector("#one");
let lidTwo=document.querySelector("#two");
let letter=document.querySelector(".letter");
let heart=document.querySelector(".heart");
let slides=document.querySelectorAll(".slide");
let prev=document.querySelector(".slide-prev");
let next=document.querySelector(".slide-next");
let count=0;
heart.addEventListener("click",()=>{
    lidOne.classList.toggle("transition-one");
    lidTwo.classList.toggle("transition-two");
    letter.classList.toggle("transition-letter");
    heart.classList.toggle("transition-heart");
});
//expend all image towards left
slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`;
});

prev.addEventListener("click",()=>{
    goPrev();
});
next.addEventListener("click",()=>{
    if(count<slides.length-1){
        count++;
        slideImage();
    }
});
const goPrev=()=>{
    if(count>0){
        count--;
        slideImage();
    }
};
const goNext=()=>{
    count++;
    slideImage();
};
const slideImage=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(${-count*100}%)`;
    });
};
