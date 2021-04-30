const main = document.querySelector("#main");
const qna1 = document.querySelector("#qna1");
const qna2 = document.querySelector("#qna2");
const qna3 = document.querySelector("#qna3");
const qna4 = document.querySelector("#qna4");
const result = document.querySelector("#result");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const result3 = document.querySelector("#result3");
const result4 = document.querySelector("#result4");
const result5 = document.querySelector("#result5");


function begin(){
    
   
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
    
    qna1.style.WebkitAnimation = "fadeIn 1s";
    qna1.style.animation = "fadeIn 1s";
    setTimeout(() => {
        main.style.display = "none";
        qna1.style.display ="block";    
        },450)
    }, 450);

    }

    

function begin1(){

  
    
    qna1.style.WebkitAnimation = "fadeOut 1s";
    qna1.style.animation = "fadeOut 1s";
    setTimeout(() => {
    
    qna2.style.WebkitAnimation = "fadeIn 1s";
    qna2.style.animation = "fadeIn 1s";
    setTimeout(() => {
        qna1.style.display = "none";
        qna2.style.display ="block";    
        },450)
    }, 450);


    
}

function begin2(){
    qna2.style.WebkitAnimation = "fadeOut 1s";
    qna2.style.animation = "fadeOut 1s";
    setTimeout(() => {
    
    qna3.style.WebkitAnimation = "fadeIn 1s";
    qna3.style.animation = "fadeIn 1s";
    setTimeout(() => {
        qna2.style.display = "none";
        qna3.style.display ="block";    
        },450)
    }, 450);
    
}

function begin3(){
    qna3.style.WebkitAnimation = "fadeOut 1s";
    qna3.style.animation = "fadeOut 1s";
    setTimeout(() => {
    
    qna4.style.WebkitAnimation = "fadeIn 1s";
    qna4.style.animation = "fadeIn 1s";
    setTimeout(() => {
        qna3.style.display = "none";
        qna4.style.display ="block";    
        },450)
    }, 450);
    
}

function begin4(){
    qna4.style.WebkitAnimation = "fadeOut 1s";
    qna4.style.animation = "fadeOut 1s";
    setTimeout(() => {
    
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
        qna4.style.display = "none";
        result.style.display ="block";    
        },450)
    }, 450);
    
}

 
function result_1(){
result.style.WebkitAnimation = "fadeOut 1s";
result.style.animation = "fadeOut 1s";
if(sum >=14){
    setTimeout(() => {
    
        result1.style.WebkitAnimation = "fadeIn 1s";
        result1.style.animation = "fadeIn 1s";
        setTimeout(() => {
            result.style.display = "none";
            result1.style.display ="block";    
            },450)
        }, 450);
}
else if(sum >=11){
    setTimeout(() => {
    
        result2.style.WebkitAnimation = "fadeIn 1s";
        result2.style.animation = "fadeIn 1s";
        setTimeout(() => {
            result.style.display = "none";
            result2.style.display ="block";    
            },450)
        }, 450);
}
else if(sum >=8){
    setTimeout(() => {
    
        result3.style.WebkitAnimation = "fadeIn 1s";
        result3.style.animation = "fadeIn 1s";
        setTimeout(() => {
            result.style.display = "none";
            result3.style.display ="block";    
            },450)
        }, 450);
}
else if(sum >=6){
    setTimeout(() => {
    
        result4.style.WebkitAnimation = "fadeIn 1s";
        result4.style.animation = "fadeIn 1s";
        setTimeout(() => {
            result.style.display = "none";
            result4.style.display ="block";    
            },450)
        }, 450);
}
else {
    setTimeout(() => {
    
        result5.style.WebkitAnimation = "fadeIn 1s";
        result5.style.animation = "fadeIn 1s";
        setTimeout(() => {
            result.style.display = "none";
            result5.style.display ="block";    
            },450)
        }, 450);
}
}

function home1(){
    result1.style.WebkitAnimation = "fadeOut 1s";
    result1.style.animation = "fadeOut 1s";
    setTimeout(() => {
    
    main.style.WebkitAnimation = "fadeIn 1s";
    main.style.animation = "fadeIn 1s";
    setTimeout(() => {
        result1.style.display = "none";
        main.style.display ="block";    
        },450)
    }, 450);
    sum =0;
}

function home2(){
    result2.style.WebkitAnimation = "fadeOut 1s";
    result2.style.animation = "fadeOut 1s";
    setTimeout(() => {
    
    main.style.WebkitAnimation = "fadeIn 1s";
    main.style.animation = "fadeIn 1s";
    setTimeout(() => {
        result2.style.display = "none";
        main.style.display ="block";    
        },450)
    }, 450);
    sum =0;
}

function home3(){
    result3.style.WebkitAnimation = "fadeOut 1s";
    result3.style.animation = "fadeOut 1s";
    setTimeout(() => {
    
    main.style.WebkitAnimation = "fadeIn 1s";
    main.style.animation = "fadeIn 1s";
    setTimeout(() => {
        result3.style.display = "none";
        main.style.display ="block";    
        },450)
    }, 450);
    sum =0;
}

function home4(){
    result4.style.WebkitAnimation = "fadeOut 1s";
    result4.style.animation = "fadeOut 1s";
    setTimeout(() => {
    
    main.style.WebkitAnimation = "fadeIn 1s";
    main.style.animation = "fadeIn 1s";
    setTimeout(() => {
        result4.style.display = "none";
        main.style.display ="block";    
        },450)
    }, 450);
    sum =0;
}

function home5(){
    result5.style.WebkitAnimation = "fadeOut 1s";
    result5.style.animation = "fadeOut 1s";
    setTimeout(() => {
    
    main.style.WebkitAnimation = "fadeIn 1s";
    main.style.animation = "fadeIn 1s";
    setTimeout(() => {
        result5.style.display = "none";
        main.style.display ="block";    
        },450)
    }, 450);
    sum =0;
}