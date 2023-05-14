window.addEventListener('DOMContentLoaded', function () {

      const modal = new GraphModal();

      /* Аккордион */
      $(".accordion__list").accordion({
        heightStyle: "content",
        active: true,
        collapsible: true,
        icons: false
      });

      /* Селект */

      const element = document.querySelector('select');
      const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
      });

      /* Открыть мобильное меню */

      document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('.burger').classList.toggle('burger__block-active')
        document.querySelector('.header__nav').classList.toggle('header__nav-active')
        document.querySelector('.header').classList.toggle('header-active')
        document.querySelector('.header__bottom-nav').classList.toggle('header__bottom-nav-active')
        document.body.classList.toggle('stop-scroll');
      });

/*       let box = document.querySelector('.header::after');
      let btnX = document.querySelector('.burger__block-active');

      document.querySelector('.burger__block-active').addEventListener('click', function () {
  
  if (box.classList.contains('.header-active.header::after')) {
        box.classList.remove('.header-active.header::after');
        setTimeout(function () {
        box.classList.remove('.header-active.header::after');
      }, 20);
      } else {
      box.classList.add('.header-active.header::after');    
      box.addEventListener('transitionend', function(e) {
      box.classList.add('.header-active.header::after');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  
      }, false); */

      /* Включить эфир в header */
      document.querySelector('.bottom-players__btnarchiv').addEventListener('click', function () {
        document.querySelector('.bottom-players__btnarchiv .pause').classList.toggle('btn-active')
      });

      document.querySelector('.bottom-players__btnnow').addEventListener('click', function () {
        document.querySelector('.bottom-players__btnnow .pause').classList.toggle('btn-active')
      });

      document.querySelector('.bottom-players__btnarchiv1').addEventListener('click', function () {
        document.querySelector('.bottom-players__btnarchiv1 .pause').classList.toggle('btn-active')
      });

      document.querySelector('.bottom-players__btnnow1').addEventListener('click', function () {
        document.querySelector('.bottom-players__btnnow1 .pause').classList.toggle('btn-active')
      });

      /* Включить эфир в карточках  */

      let btnPlay = document.querySelectorAll('.card-content__btnplay');
        btnPlay.forEach(function(el) {
          el.addEventListener('click', function(ev) {
            ev.stopPropagation();
              btnPlay.forEach(el => { if (el != this) { el.classList.remove('btn-active') }; });
                this.classList.toggle('btn-active');
        });
      });

      document.querySelector('.podcasts__more-btn').addEventListener('click', function () {
        var elements = document.getElementsByClassName('podcasts__item');
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.toggle("podcasts__item_active");
        }
      });

      const btnClose = document.querySelector('.podcasts__more-btn');
      btnClose.addEventListener('click', function() {
        btnClose.innerHTML =
          (btnClose.innerHTML === 'Скрыть') ? btnClose.innerHTML = 'Ещё подкасты' : btnClose.innerHTML = 'Скрыть';
      })

      /* Плавный скролл  */

      const anchors = document.querySelectorAll('.header__nav-link, .footer__nav-link, .guests-list__link')
      for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const blockID = anchor.getAttribute('href').substr(1)
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        })
      }

      document.querySelectorAll('.guests-list__btn').forEach(function(guestsBtn){
        guestsBtn.addEventListener('click', function(e){
          const path = e.currentTarget.dataset.path;
          document.querySelectorAll('.guests-list__btn').forEach(function(btn){
      btn.classList.remove('guests-list__btn--active')});
          e.currentTarget.classList.add('guests-list__btn--active');
      document.querySelectorAll('.guests__cards').forEach(function(guestsBtn){
      guestsBtn.classList.remove('guests__cards--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('guests__cards--active');
       });
      });

      const swiper = new Swiper('.swiper', {
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      /*   touchEventsTarget: '.container', */
        breakpoints: {
          // when window width is >= 320px
          1200: {
            slidesPerView: 4,
          },
          // when window width is >= 480px
          319: {
            slidesPerView: 2,
          }
        }
      /* 	slidesPerGroup: 3, */
      });

      new JustValidate('.about__form', {
        colorWrong: 'var(--color-error)',

        rules: {
          name: {
            required: true,
            minLength: 2,
            maxLength: 35
          },
          mail: {
            required: true,
            email: true
          },
        },
        messages: {
          name: {
            required: 'Ошибка',
            minLength: 'Ошибка',
            maxLength: 'Ошибка'
          },
          mail: {
            required: 'Ошибка',
            email: 'Ошибка'
          },
        },
      });

      new JustValidate('.graph-modal__form', {
        colorWrong: 'var(--color-error)',

        rules: {
          login: {
            required: true,
            minLength: 1,
          },
        },
        messages: {
          login: {
            required: 'Ошибка',
            minLength: 'Ошибка',
          },
        },
      });
});
