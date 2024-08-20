// setTimeout(() => {
//   alert('Hello, World!');
// }, 5000);


// setInterval(()=>{
    
// }
// )


// const hour =document.querySelector('.hour');
// const minute =document.querySelector('.minute');
// const seconds =document.querySelector('.seconds');

// setInterval(()=>{
//     const date = new Date();
//     console.log(date.gatHours(), date.getMinutes(), date.getSeconds());
// },
// 5000);

const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const seconds = document.querySelector('.seconds');

setInterval(() => {
    const date = new Date();
    hour.textContent = date.getHours();
    minute.textContent = date.getMinutes();
    seconds.textContent = date.getSeconds();
},
1000);
