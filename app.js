// let observer = new IntersectionObserver(function(observables){
//     observables.forEach(function(observable){
//         if(observable.intersectionRatio > 0.5){
//             observable.target.classList.remove('not-visble')
//         }
//     })
// }, {
// threshold: [0.5]

// })

// let items = document.querySelectorAll('.text')
// items.forEach(function(item){
//     item.classList.add('not-visible')
//     observer.observe(item)
// })


const text = document.querySelector('.fancy')
const strText = text.textContent;
const splitText = strText.split('');
// pour effacer le h1 sans char
text.textContent ="" 


for (let i=0; i <splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0; 
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    // if(char === splitText.length){
    //     complete();
    //     return;
    // }
}

// function complete(){
//     clearInterval(timer);
//     timer = null;
// }