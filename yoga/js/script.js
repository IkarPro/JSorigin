window.addEventListener('DOMContentLoaded', function () {
   'use strict';

    //TAB
   let tab = document.querySelectorAll('.info-header-tab'),
       info = document.querySelector('.info-header'),
       infoContent = document.querySelectorAll('.info-tabcontent');

   function hideTabContent(a) {
       for (let i = a; i < infoContent.length; i++){
           infoContent[i].classList.remove('show');
           infoContent[i].classList.add('hide');
       }
   }
   
   hideTabContent(1);
   
   function showTabContent(b) {
       if (infoContent[b].classList.contains('hide')){
           infoContent[b].classList.remove('hide');
           infoContent[b].classList.add('show');
       }
   }

   info.addEventListener('click', function (event) {
       let target = event.target;
       if (target && target.classList.contains('info-header-tab')){
           for (let i = 0; i < tab.length ; i++){
               if (target == tab[i]){
                   hideTabContent(0);
                   showTabContent(i);
               }
           }
       }

   });

    // TIMER
    let deadline = '2019-10-16';
   
   function getTimeLeft(endtime) {
       let t = Date.parse(endtime) - Date.parse(new Date()) - (3*60*60*1000),
           seconds = Math.floor((t/1000) % 60),
           minutes = Math.floor( (t/1000/60)%60 ),
           hours = Math.floor(t/(1000*60*60) );
       
       return {
           'total' : t,
           'seconds' : seconds,
           'minutes' : minutes,
           'hours' : hours
       }
   }

   function setTimer(id, endtime) {
       let timer = document.getElementById(id),
           hours = timer.querySelector('.hours'),
           minutes = timer.querySelector('.minutes'),
           seconds = timer.querySelector('.seconds'),
           timeInterval = setInterval(updateTimer, 1000);

       function updateTimer() {
           let t = getTimeLeft(endtime);
           if (t.hours >= 10){
               hours.textContent = t.hours;
           }else{
               hours.textContent = '0' + t.hours.toString();
           }
           if (t.minutes >= 10) {
               minutes.textContent = t.minutes;
           }else{
               minutes.textContent = '0' + t.minutes.toString();
           }
           if (t.seconds >= 10){
               seconds.textContent = t.seconds;
           }else {
               seconds.textContent = '0' + t.seconds.toString();
           }

           if (t.total <= 0) {
               clearInterval(timeInterval);
               hours.textContent = '00';
               minutes.textContent = '00';
               seconds.textContent = '00';
           }
       }
   }

   setTimer('timer' , deadline);

   //MODAL
    let moreButton = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        popupClose = document.querySelector('.popup-close');

    moreButton.addEventListener('click', function () {
        openOverlay(this);
    });

    let infoContainer = document.querySelector('.info');

    infoContainer.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('description-btn')) {
            openOverlay(target);
        }
    });

    function openOverlay(button) {
        overlay.style.display = 'block';
        button.classList.add('more-splash');
        document.body.style.overflow = 'hidden';

        popupClose.addEventListener('click', function () {
            overlay.style.display = 'none';
            button.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }
});

