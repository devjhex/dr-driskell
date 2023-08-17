/* const slides = document.querySelectorAll('.slide');
const slideBtn = document.querySelectorAll('.slideBtn');

console.log(slideBtn);

slides[1].style.left = `${100}%`;
slides[2].style.left = `${100}%`;

let index = ['zero','one','two'];

slideBtn.forEach(function(btn){
    btn.addEventListener('click',function(e){

        if (e.currentTarget.dataset.id === 'zero') {
            slideBtn.forEach(function(btn){
                btn.classList.remove('after:bg-[#BB8C5F]');
            })
            slides[1].style.transform = `translateX(${0}%)`;
            slideBtn[0].classList.add('after:bg-[#BB8C5F]')
            slides[2].style.transform = `translateX(${0}%)`;   
            slides[0].style.transform = `translateX(${0}%)`;   
           }
        else if (e.currentTarget.dataset.id === 'one'){
            slideBtn.forEach(function(btn){
                btn.classList.remove('after:bg-[#BB8C5F]');
            })
            slideBtn[1].classList.add('after:bg-[#BB8C5F]')
            slides[0].style.transform = `translateX(${100}%)`;
            slides[2].style.transform = `translateX(${0}%)`; 
            slides[1].style.transform = `translateX(-${100}%)`; 
        }else if(e.currentTarget.dataset.id === 'two'){
            slideBtn.forEach(function(btn){
                btn.classList.remove('after:bg-[#BB8C5F]');
            })
            slideBtn[2].classList.add('after:bg-[#BB8C5F]');
            slides[0].style.transform = `translateX(${100}%)`;
            slides[2].style.transform = `translateX(-${100}%)`; 
            slides[1].style.transform = `translateX(${0}%)`; 
        }
    })
})
 */