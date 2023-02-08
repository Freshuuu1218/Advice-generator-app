const id = document.querySelector('#id');
const advice = document.querySelector('#advice');
const dice = document.querySelector('.dice');

dice.addEventListener('click',()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data=>randomAdvice(data))
})

function randomAdvice(data){
    const apiId = data.slip.id;
    const apiAdvice = data.slip.advice;
    id.innerHTML = `ADVICE # ${apiId}`;
    advice.innerHTML = `&ldquo;${apiAdvice}&rdquo;`;
}

