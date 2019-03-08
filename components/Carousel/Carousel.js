class Carousel {
    constructor(carousel){
    // 1. You will need to grab a reference to the carousel, and in it grab the left and right buttons        
    this.carousel = carousel;
    this.leftBtn = this.carousel.querySelectorAll(".left-button");
    this.rightBtn = this.carousel.querySelectorAll(".right-button");
    // 2. You will need to grab a reference to all of the images
    this.imgList = this.carousel.querySelectorAll(".img");
    // 3. Create a current index

    // 4. Those buttons are gonna need some click handlers.
    this.leftBtn.addEventListener("click", () => this.cycleLeft());
    this.rightBtn.addEventListener("click", () => this.cycleRight());
    }

    cycleLeft() {
        const images = document.querySelectorAll('img');
        images.forEach( link => {
          link.classList.remove('img')
        });
        this.element.classList.add('img');
      }
      
      cycleRight() {

      }
}

let carousel = document.querySelector(`.carousel`);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/