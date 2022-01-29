
const image = document.querySelector('.slide')

const [prevButton, nextButton] = document.querySelectorAll('btn')


const imgDataBase = [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
]

const slider = new Slider(imgDataBase);

function updateView(){
    image.setAttribute('src', slider.currentSlide);
}

updateView()

const createSliderHandles = (direction) => () => {

    return () => {
        slider.currentIndex = slider[direction === 'next' ? 'next' : 'prev']();
        updateView()
    }
   
}

 prevButton.addEventListener('click',createSliderHandles('prev'))

 nextButton.addEventListener('click', createSliderHandles('next'))




