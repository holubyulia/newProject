function allertMessage(){
    alert('У тебя все удалось!')
}
function yellowButton(){
    alert ('Yellow button click!')
}


// document.getElementById()
// document.getElementsByTagName()
//document.getElementsByClassName()

// querySelector
// querySelectorAll

const [firstButton] = document.getElementsByTagName('button')
firstButton.addEventListener('click', allertMessage)

const yellow_Button = document.getElementsByClassName('yellow-button'); 

for(const item of yellowButton){
   item.addEventListener('click', yellowButton)
}

//вывести счетчик сколько нажимали

