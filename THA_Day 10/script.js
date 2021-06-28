const cards = document.querySelectorAll('.memory-card');
let hasFlipped = false;
let firstCard,secondCard;
let lockBoard=false;
function flipcard()
{
    if(lockBoard)return;
    if(this ==firstCard)return;
  this.classList.toggle('flip');
  if(!hasFlipped)
  {
      hasFlipped=true;
      firstCard=this;

      return;
  }
  else
  {
      hasFlipped =false;
      secondCard=this;
     /*console.log(firstCard.dataset.framework);
     console.log(secondCard.dataset.framework);*/
    checkForMatch();
       
    }
}
function checkForMatch()
{
    let isMatch = firstCard.dataset.framework == 
    secondCard.dataset.framework;
    isMatch ? disablecards(): unflipcards(); 
    if (firstCard.dataset.framework == secondCard.dataset.framework)
    {
      disablecards();   
    }
    else
    { 
       unflipcards();
       }
}
function disablecards()
{
    firstCard.removeEventListener('click',flipcard);
    secondCard.removeEventListener('click',flipcard);

    resetBoard();
}
function unflipcards()
{
    lockBoard = true;
    setTimeout(()=>
    {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
},1500);
}

function resetBoard()
{
    [hasFlippedCard,lockBoard] = [false,false];
    [firstCard,secondCard]=[null,null];
}

(function shuffle() {
    cards.forEach(card => {let randomPos = Math.floor(Math.random()*12);
        card.style.order=randomPos;
    });
})();
cards.forEach(card => card.addEventListener('click',flipcard));
