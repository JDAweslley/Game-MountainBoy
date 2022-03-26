const boy = document.querySelector('.boy');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event){
    if(event.keyCode === 32) {
        if(!isJumping)
      jump();
    }
}

function jump() {
   isJumping = true;

   let upInterval = setInterval(() => {
       if(position >= 150){  
           clearInterval(upInterval); 
 
           //going down
         let downInterval = setInterval(() => {
            if(position <= 0) {
                clearInterval(downInterval);
                isJumping = false;
            } else {
               position -= 20;
               boy.style.bottom = position + 'px';
            }
           }, 20);
       } else {
           //going up
       position += 20;
       boy.style.bottom = position + 'px';
    }
  }, 20);
}

function createMountain() {
    const mountain = document.createElement('div');
    let mountainPosition = 1000;
    let randomTime = Math.random() * 6000;

    mountain.classList.add('mountain');
    mountain.style.left = 1000 + 'px';
    background.appendChild(mountain);

    let leftInterval = setInterval(() => {
        if (mountainPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(mountain);
        } else if(mountainPosition > 0 &&  mountainPosition < 60 && position < 60){

            //Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Game Over</h1>'
        } else {
            mountainPosition -= 10;
            mountain.style.left = mountainPosition + 'px';
        }
    }, 20);

    setTimeout(createMountain, randomTime);
}

createMountain();
document.addEventListener('keyup', handleKeyUp);