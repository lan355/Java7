var ModalShow = document.querySelectorAll('.js-modal-show');
var Overlay =  document.querySelector('.js-modal-overlay');
var Cross = document.querySelectorAll('.js-modal-cross');
var Close = document.querySelectorAll('.js-modal-close');
var Confirm = document.querySelectorAll('.js-modal-confirm');

//Текущее модальное окно
var Current = null;
//если текущий переход модального окна не закончен
var transition = false;

//Кнопка модального окна
ModalShow.forEach(function(point) {
  
  point.addEventListener('click', function(e) {

    e.preventDefault();
    var Name = this.getAttribute('data-modal'),
    ModalElement = document.querySelector('.js-modal[data-modal = "' + Name + '"]');
    //Устанавливаем видимое модальное окно и оверлей, добавляя класс "active"
    ModalElement.classList.add('active');
    Overlay.classList.add('active');

    //добавлен класс "active" и начался переход, поэтому необходимо установить флаг "transition"
    transition = true;
    //Сохраняем модальное окно как текущее
    Current = ModalElement;
    //Ждем оканчания перехода
    Current.addEventListener('transitionend', function()
        {
            transition = false;
        })
  });

})
//Кнопка Cross
Cross.forEach(function(point) {

  point.addEventListener('click', function() {

    close();

  });

})
//Кнопка Close
Close.forEach(function(point) {

  point.addEventListener('click', function() {

    close();

  });

})
//Кнопка Confirm
Confirm.forEach(function(point) {

  point.addEventListener('click', function() {

    close();

  });

})

//Предотвращаем мгновеное закрытие окна 
Overlay.addEventListener('click', function()
{
    if(!transition) 
    {
        close();
    }
})

function close()
{
    if(Current != null)
    {
        Current.classList.remove('active');
        Overlay.classList.remove('active');
        Current = null;
    }
}