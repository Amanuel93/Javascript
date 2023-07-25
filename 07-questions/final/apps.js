//by going through every question articles

//const question = document.querySelectorAll(".question");

//question.forEach(function(question){
   // const btns = question.querySelector(".question-btn");
   // btns.addEventListener("click",function(){
      //  question.classList.toggle("show-text");
   // })
//})

//by travering

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })
})