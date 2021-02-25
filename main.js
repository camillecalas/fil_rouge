const inputs = document.querySelectorAll ('input');

inputs.forEach(input => {
    input.addEventListener('click', (e) =>{
        inputs.forEach(input =>{
            if(input.checked){
                input.checked = false;
                e.target.checked = true;
            }
        })
    })
});










// const cercle = document.querySelector('.cercleContainer');
// const callBackFunction = function(entries){
//   console.log(entries[0]);
// };

// const observer = new IntersectionObserver(callBackFunction, {
//   threshold: [0.4]
// });




const elements = document.querySelectorAll('.anim');
const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry)=>{
        if(entry.intersectionRatio > 0){
            entry.target.classList.add('anim-reveal');
        } else {
            entry.target.classList.remove('anim-reveal');
        }
    })
});

    elements.forEach(element =>{
        observer.observe(element)
    });