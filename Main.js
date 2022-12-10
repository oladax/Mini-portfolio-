//grabbing menu button
const Menu = document.getElementById('Menu');
Menu.onclick = () => {
const links = document.getElementById('links');
links.classList.toggle('active')
}

// dark and night mode
const toggle = document.getElementById('toggle')
toggle.onclick = () => {
  const body = document.getElementById('body');
  body.classList.toggle('display')
  toggle.classList.toggle('display')
  //blog background color
  const blog = document.getElementById('blog')
  blog.classList.toggle('display')
  const header = document.getElementById('header')
  header.classList.toggle('display')
  const social = document.getElementById('social-app')
  social.classList.toggle('display')
}

const h3 = document.getElementById('h3');
h3.innerText = 'Why Hacking Is Fantastic!'

//function for sending Email
function Send(){
  const email = document.getElementById('email')
  const name = document.getElementById('name')
  const number = document.getElementById('number')
  const message = document.getElementById('message')
  
  if (email.value == '' || name.value == '' || number.value == '' || message.value == ''){
    alert('Please, none of the fields should be left empty!')}else 
  
  if (email.value.length <= 9 || name.value.length <= 1 || number.value.length <= 9|| message.value.lenth <= 6){
    alert('Please, your details must be accurate!')
  }else{
    alert('Message sent successfully!')
    email.value = ''
    number.value = ''
    name.value = ''
    message.value = ''
  }
}

// function for generating quotes.

function Quote () {
  const blockquote = document.getElementById('blockquote')
  
  
const url = "https://api.kanye.rest"
fetch(url)
.then(response => response.json())
.then(json => {
  console.log(json)
  blockquote.innerText = json.quote;
})
.catch( () => {
  console.log('Oops')
})

  const speech = new SpeechSynthesisUtterance ();
  speech.lang = 'en-GB'
  speech.text = (blockquote.innerText)
  speech.rate = 1
  speech.pitch = 1
  speech.volume = 30
  
  window.speechSynthesis.speak(speech);

} 