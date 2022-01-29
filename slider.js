class Slider {
    constructor(images, index = 0){
        this.images = images,
        this.currentIndex = index }
    
    set images (value){
        return this._images = value;
    }
    get images (){
        return this._images
    }
    get index(){
        return this._currentIndex
    }
    set currentIndex(v){

        if(typeof v != 'number'){
            throw new TypeError('Slider index must be number')
        }
        
        this._currentIndex = v;
    }
    get currentSlide(){
        return this.images[this.currentIndex]
    }

    get next(){
        return (this.currentIndex + 1) % this.images.length;
    }
    get prev(){
        return (this.currentIndex - 1 + this.images.length) % (this.images.length)
    }
}