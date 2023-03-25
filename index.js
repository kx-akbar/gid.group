"use script";

const h = document.getElementById('header');
const c = document.getElementById('close');
const btn = document.getElementById('burger');
const mainS = document.getElementById('main-section');
const grp = document.getElementById('group');
const phn = document.getElementById('phone');
const grp2 = document.getElementById('group-2');
const cls = document.getElementById('cls');
const bac = document.getElementById('main-bacground');
const hd = document.getElementById('header-nav');
const clse = document.getElementById('clse');



const func = function(){
    mainS.style.background = "rgba(19, 19, 19, 0.9)";
    grp.style.display = "none";
    grp2.style.display = "none";
    mainS.style.height = "1090px";
    h.style.background = "none";
    hd.style.display = "flex";
    btn.style.display = "none";
    clse.style.display = "inline-block";
}

btn.addEventListener("click", func);

const fun = function(){
    grp.style.display = "none";
    grp2.style.display = "inline-block";
    mainS.style.background = "rgba(19, 19, 19, 0.4)";
}

phn.addEventListener('click', fun);

const fun2 = function(){
    grp2.style.display = "none";
    grp.style.display = "flex";
}

cls.addEventListener('click', fun2);

const fun3 = function(){
    hd.style.display = "none";
    grp.style.display = "flex";
    h.style.background = "rgba(0, 0, 0, 0.4)";
    mainS.style.background = "rgba(0, 0, 0, 0.0)";
    clse.preventDefault();
}

clse.addEventListener('click', fun3);