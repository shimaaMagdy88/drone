var hero = document.querySelector('.hero');
var drone = document.querySelector('.drone');
hero.onmousemove = function(e){                                     //onmousemove / onmouseover
    // drone.style.transform = "translate("+(e.pageX)+"px,"+(e.pageY)+"px)";

    let x = (e.pageX * -1/2) + 100;
    let y = (e.pageY * -1/3) + 150;
    console.log(x, y);  
    drone.style.transform = `translate(${x}px, ${y}px)`;
}