let app=document.getElementById('typewriter');

let typewriter=new typewriter (app, {
    loop:true, 
    delay:75,
});

typewriter
// 1000 milisegundos es 1 segundo 
    .pauseFor(1000)
    .typeString ('Abril Vazquez')
    .pauseFor(300)
    .deleteChars(10)
    .start();