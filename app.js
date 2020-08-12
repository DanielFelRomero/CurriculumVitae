const logo =document.querySelectorAll('#logo path');

for(let i=0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
    logo[i].style.strokeDasharray = logo[i].getTotalLength();
    logo[i].style.strokeDashoffset = logo[i].getTotalLength();
    logo[i].style.animation = `line-anim var(--time-line-anim) ease forwards calc( var(--time-transition-fill)*${i})`;
    document.querySelector('#logo').style.animation = `fill 0.5s ease forwards calc( var(--time-transition-fill)*${logo.length})`;
}