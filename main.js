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

let observer = new IntersectionObserver(function(observables){
    observables.forEach(function(observable){
        if(observable.intersectionRatio > 0.5){
            observable.target.classList.remove('not-visble')
        }
    })
}, {
threshold: [0.5]

})

let items = document.querySelectorAll('.text')
items.forEach(function(item){
    item.classList.add('not-visible')
    observer.observe(item)
})


