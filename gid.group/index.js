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
const btn2 = document.getElementById('btn2');
const sct2 = document.getElementById('boxing');
const sct3 = document.getElementById('sct-3');
const hsb = document.getElementById('h-s-b');
const hdss = document.getElementById('hidden-s');
const cll = document.getElementById('cll');
const hds = document.getElementById('hidden-s');



const func = function(){
    mainS.style.background = "rgba(19, 19, 19, 0.9)";
    grp.style.display = "none";
    grp2.style.display = "none";
    mainS.style.height = "1090px";
    h.style.background = "none";
    hd.style.display = "flex";
    btn.style.display = "none";
    clse.style.display = "flex";
    clse.style.textDecoration = "none";
    clse.style.border = "none";
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
    clse.style.display = "none";
    btn.style.display = "flex";
    clse.style.textDecoration = "none";
}

clse.addEventListener('click', fun3);

const fun4 = function(){
    hsb.style.background = "rgba(0, 0, 0, 0.8)";
    sct2.style.background = "rgba(0, 0, 0, 0.0)";
    hdss.style.display = "grid"
    sct3.style.display = "none";
}

btn2.addEventListener('click', fun4);

const func5 = function(){
    hds.style.display = "none";
    sct3.style.display = "grid";
    hsb.style.background = "#fff";
}

cll.addEventListener('click', func5);