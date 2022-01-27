function allertMessage(){
    alert('У тебя все удалось!')
}
function yellowButton(){
    alert ('Yellow button click!')
}


// document.getElementById()
// document.getElementsByTagName()
//document.getElementsByClassName()

// querySelector - принимает любой валидный css селектор.Возвращает один элемент(первый встреченный)
//Селекторы прописываем по правилам css
// querySelectorAll - возвращает все элементы по валидному селектору

const [firstButton] = document.getElementsByTagName('button') //возвращает HTML-collection (живая коллекция)
firstButton.addEventListener('click', allertMessage)

const yellow_Button = document.getElementsByClassName('yellow-button'); 

for(const item of yellowButton){
   item.addEventListener('click', yellowButton)
}

//вывести счетчик сколько нажимали

// const p = document.querySelector('article > p') //возвращает NodeList - ведет себя как массив
const ps = document.querySelectorAll('article > p') 

const h1 = document.querySelector('h1')
const img = document.querySelector('img')
const span = document.querySelector('span')