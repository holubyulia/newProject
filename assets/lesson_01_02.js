/* 
1. Вычислить сумму первых N элементов последовательности, параметр N задает пользователь.

(1+2+3.....+N)

2.
2.1 Создать объект Student, который содержит следующие свойства: имя, фамилию, пол, контактные данные.
2.2 Создать объект, содержащий информацию о факультете и кафедре.
2.3. Связать объекты между собой, т.е. прописать данные о факультете и кафедре для студента.
2.4 Реализовать функцию вывода на экран полной информации о студенте.


3.
3.1 Создать числовой массив и проинициализировать его 25 элементами с помощью случайных чисел.
3.2 Вывести элементы с четными индексами.
3.3 Вывести только четные элементы
3.4 Вывести индексы нулевых элементов (элемент = 0)
3.5 Посчитать количество нулевых элементов

4.
Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат файла, электронный номер)

*/

//Task 1 

const number = +prompt('Take your number')

function sumOfNumbers(number) {
    
    if(number === 1) {
        return 1}

    return number + sumOfNumbers(number -1);
}

console.log(sumOfNumbers(number));

//Task 2
class universityDetails{
    constructor(faculty, department){
         this.faculty = faculty,
         this.department = department
     }
 } 


class Student extends universityDetails{
    constructor(faculty,department,firstName,lastName,isMale = true, contact = {}){
        super(faculty,department),

        this.name = firstName,
        this.lastName = lastName,
        this.isMale = isMale,
        this.contact = Object.assign({
            tel: null,
            email: null
        }, contact)
        }
        getFullInformation(){
            return console.log(this.values)
        }
    }

//Task 3

function arrayRandomNumbers(){
    const newArray = [];

    for( let i = 0; i <= 25; i++){
       newArray.push( Math.random());
    }

    return newArray
}

const array = arrayRandomNumbers();


const arrayOddIndex = array.filter(index => index % 2)

const arrayOddElement = array.filter(element => element % 2)

const nullElement = array.filter( element => element === 0)

console.log(nullElement.length)

//Task 4

class Book {
    constructor(autor, names, year,publishing ){
        this.autor = autor,
        this.names = names,
        this.year = year,
        this.publishing = publishing
    }
}

class eBook extends Book{
    constructor(autor, names, year,publishing, fileFormat, eNumber){
        super(autor, names, year,publishing),
        this.fileFormat = fileFormat,
        this.eNumber = eNumber
    }

}
