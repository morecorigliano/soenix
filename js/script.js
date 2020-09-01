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
var socBtn = document.getElementById("soc-li");
var serviciosOpt = document.getElementById("under-servicios");
var socOpt = document.getElementById("under-soc");
var standardsOpt = document.getElementById("under-standards");
var industriasOpt = document.getElementById("under-industrias");
var arrowServ = document.getElementById("arrow-serv");
var arrowInd = document.getElementById("arrow-ind");
var arrowStand = document.getElementById("arrow-sta");
var arrowSoc = document.getElementById("arrow-soc");

var navToggle = document.getElementById("nav-toggle");
var body = document.body;
var navList = document.getElementById("nav-list");
var close = document.getElementsByClassName("close");
var lineOne = document.getElementById("line-one");
var lineTwo = document.getElementById("line-two");
var lineThree = document.getElementById("line-three");
var header = document.querySelector("header");

var mediaQueries = window.matchMedia("(max-width: 1024px)");
myFunction(mediaQueries);
mediaQueries.addListener(myFunction);

function myFunction(mediaQueries){ 
    if(mediaQueries.matches){
      header.classList.add("mobile");
      header.classList.remove("white");
      header.classList.remove("less-pad");
      navToggle.addEventListener("click", OpenClose);
      serviciosBtn.addEventListener('click', openServicios);
      socBtn.addEventListener('click', openSoc);
      standardsBtn.addEventListener('click', openStandards);
      industriaBtn.addEventListener('click', openIndustrias);

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

    var timesSoc = 1;
    
    function openSoc(){
        timesSoc++;
        if(timesSoc % 2 == 0){
            socOpt.style.display = "block";
            arrowSoc.style.transform = "rotate(180deg)";
        }else{
            socOpt.style.display = "none"; 
            arrowSoc.style.transform = "rotate(0deg)";
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
    }
}

////// navbar en desktop ////////

var nav = document.getElementById("header");
var hide = document.getElementsByClassName("hide");
var logo = document.getElementById("logo-img");
var letter = document.getElementById("letters");

var mediaQueriesMax = window.matchMedia("(min-width: 1025px)");
myFunctionMax(mediaQueriesMax);
mediaQueriesMax.addListener(myFunctionMax);

function myFunctionMax(mediaQueriesMax){ 
  
  if(mediaQueriesMax.matches){

    ////// achicar/agrandar en scroll ////////
    header.classList.remove("mobile");
    var scrollPos = 0;
    window.addEventListener('scroll', function(){
    "use strict";
    if ((document.body.getBoundingClientRect()).top > scrollPos){
    for (var b = 0; b < hide.length; b++) {
        hide[b].style.transform = "scale(1)";
    }
    letter.style.transform= "scale(1)";
    header.classList.remove("less-pad");
    setTimeout( function() {
    logo.setAttribute("viewBox","0 0 340 151.125");
    logo.style.transform = "scale(1)";
    }, 100);
	}else{
        for (var b = 0; b < hide.length; b++) {
            hide[b].style.transform = "scale(0)";
        }
        letter.style.transform= "scale(0)";
        header.classList.add("less-pad");
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