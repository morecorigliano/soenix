////// suavizar el scroll en anchors de href ////////

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

////// click en icono y mostrar su respectivo texto ////////

////// servicios ////////

var icon = document.getElementsByClassName("icon");
var serviceText = document.getElementsByClassName("services-text");

for (var i = 0; i < icon.length; i++) {
    icon[i].addEventListener('click', function(){
        var classNumber = this.classList[1];
        for (var b = 0; b < serviceText.length; b++) {
            serviceText[b].classList.remove("show");
            if(serviceText[b].classList.contains(classNumber)){
                serviceText[b].classList.add("show");
            }
        }
    });
}

////// standards ////////

var iconSt = document.getElementsByClassName("icon-st");
var standardText = document.getElementsByClassName("standards-text");

for (var i = 0; i < iconSt.length; i++) {
    iconSt[i].addEventListener('click', function(){
        var className = this.classList[1];
        for (var b = 0; b < standardText.length; b++) {
            standardText[b].classList.remove("show");
            if(standardText[b].classList.contains(className)){
                standardText[b].classList.add("show");
            }
        }
    });
}

////// industrias ////////

var iconInd = document.getElementsByClassName("icon-ind");
var industriasText = document.getElementsByClassName("industrias-text");

for (var i = 0; i < iconInd.length; i++) {
    iconInd[i].addEventListener('click', function(){
        var className = this.classList[1];
        for (var b = 0; b < industriasText.length; b++) {
            industriasText[b].classList.remove("show");
            if(industriasText[b].classList.contains(className)){
                industriasText[b].classList.add("show");
            }
        }
    });
}

////// animación de titulo de inputs en el form ////////

var formInputs = document.getElementsByClassName("form");

for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].children[0].addEventListener("input", function(){
        if(this.value.length == 0){
            this.parentElement.children[1].classList.remove("filled"); 
        }else{
        this.parentElement.children[1].classList.add("filled");
        }
    });
}

////// navbar en mobile ////////

var serviciosBtn = document.getElementById("servicios-li");
var standardsBtn = document.getElementById("standards-li");
var industriaBtn = document.getElementById("industrias-li");
var serviciosOpt = document.getElementById("under-servicios");
var standardsOpt = document.getElementById("under-standards");
var industriasOpt = document.getElementById("under-industrias");
var arrowServ = document.getElementById("arrow-serv");
var arrowInd = document.getElementById("arrow-ind");
var arrowStand = document.getElementById("arrow-sta");

var navToggle = document.getElementById("nav-toggle");
var body = document.body;
var navList = document.getElementById("nav-list");
var close = document.getElementsByClassName("close");
var lineOne = document.getElementById("line-one");
var lineTwo = document.getElementById("line-two");
var lineThree = document.getElementById("line-three");

var mediaQueries = window.matchMedia("(max-width: 1024px)");
myFunction(mediaQueries);
mediaQueries.addListener(myFunction);

function myFunction(mediaQueries){ 
    if(mediaQueries.matches){
      navToggle.addEventListener("click", OpenClose);
      serviciosBtn.addEventListener('click', openServicios);
      standardsBtn.addEventListener('click', openStandards);
      industriaBtn.addEventListener('click', openIndustrias);
    }
}

var times = 1;

function openServicios(){
    times++;
    if(times % 2 == 0){
        serviciosOpt.style.display = "block";
        arrowServ.style.transform = "rotate(180deg)";
    }else{
        serviciosOpt.style.display = "none"; 
        arrowServ.style.transform = "rotate(0deg)";
    }
};

var timesSt = 1;

function openStandards(){
    timesSt++;
    if(timesSt % 2 == 0){
        standardsOpt.style.display = "block";
        arrowStand.style.transform = "rotate(180deg)";
    }else{
        standardsOpt.style.display = "none"; 
        arrowStand.style.transform = "rotate(0deg)";
    }
};

var timesInd = 1;

function openIndustrias(){
    timesInd++;
    if(timesInd % 2 == 0){
        industriasOpt.style.display = "block";
        arrowInd.style.transform = "rotate(180deg)";
    }else{
        industriasOpt.style.display = "none"; 
        arrowInd.style.transform = "rotate(0deg)";
    }
};

var navToggleClicks = 1

function OpenClose(){
    navToggleClicks++;
    if(navToggleClicks % 2 == 0){
        openNav();
    }else{
        closeNav();
    }
    for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function(){
            navToggleClicks++;
            closeNav();
        });
    }
}

function openNav(){
    lineOne.style.transform = "rotate(-45deg) scale(0.8)";
    lineTwo.style.opacity = "0";
    lineThree.style.transform = "rotate(45deg) scale(0.8) translate(0.1vw, 0.4vw)";
    lineThree.style.width = "8vw";
    navList.style.transform = "translateX(0)";
}

function closeNav(){
    lineOne.style.transform = "rotate(0) scale(1)";
    lineTwo.style.opacity = "1";
    lineThree.style.transform = "rotate(0) scale(1) translate(0, 0)";
    lineThree.style.width = "4vw";
    navList.style.transform = "translateX(100vw)";
    serviciosOpt.style.display = "none"; 
    standardsOpt.style.display = "none"; 
    arrowStand.style.transform = "rotate(0deg)";
}



var incidentServ = document.getElementsByClassName("incident-service");
var incidentText = document.getElementsByClassName("incident-text");

for (var i = 0; i < incidentServ.length; i++) {
    incidentServ[i].addEventListener('click', function(){
        var classInc = this.classList[1];
        for (var x = 0; x < incidentServ.length; x++) {
            incidentServ[x].style.color = "#5f5f5f";
        }
        for (var b = 0; b < incidentText.length; b++) {
            incidentText[b].classList.remove("show");
            if(incidentText[b].classList.contains(classInc)){
                incidentText[b].classList.add("show");
                this.style.color = "#5100BA";
            }
        }
    });
}

////// cambias en el nav ////////

var nav = document.getElementById("header");
var hide = document.getElementsByClassName("hide");
var idioma = document.getElementById("idioma-mobile");
var logo = document.getElementById("logo-img");
var header = document.querySelector("header");
var letter = document.getElementById("letters");

var mediaQueriesMax = window.matchMedia("(min-width: 1024px)");
myFunctionMax(mediaQueriesMax);
mediaQueriesMax.addListener(myFunction);

function myFunctionMax(mediaQueriesMax){ 
  
  if(mediaQueriesMax.matches){

    ////// achicar/agrandar en scroll ////////

    var scrollPos = 0;
    window.addEventListener('scroll', function(){
    "use strict";
    if ((document.body.getBoundingClientRect()).top > scrollPos){
    for (var b = 0; b < hide.length; b++) {
        hide[b].style.transform = "scale(1)";
    }
    idioma.style.display = "flex";
    header.style.padding = "0.4rem 3rem 0.4rem .7rem";
    letter.style.transform= "scale(1)";
    setTimeout( function() {
    logo.setAttribute("viewBox","0 0 340 151.125");
    logo.style.transform = "scale(1)";
    }, 100);
	}else{
        for (var b = 0; b < hide.length; b++) {
            hide[b].style.transform = "scale(0)";
        }
        idioma.style.display = "none";
        header.style.padding = "0.2rem 3rem 0.2rem .7rem";
        letter.style.transform= "scale(0)";
        setTimeout( function() {
        logo.setAttribute("viewBox","0 0 200 151.125");
        logo.style.transform = "scale(.8)";
        }, 110);
    }
	scrollPos = (document.body.getBoundingClientRect()).top;
    if (document.body.scrollTop >= 180 || document.documentElement.scrollTop >= 180) {
        nav.classList.add("white");
    } else{
        nav.classList.remove("white");
    }
    });
    }
}