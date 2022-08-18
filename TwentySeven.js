// DOM = Document Object Model 
// Any Element can target by id or class-name or tag-name

document.getElementsByTagName('h1')
HTMLCollection(2) [h1.vcard-names., h1.Box-title]
document.getElementsByTagName('h1')[0]
<h1 class=​"vcard-names ">​<span class=​"p-name vcard-fullname d-block overflow-hidden" itemprop=​"name">​
        Aakash 
      ​</span>​<span class=​"p-nickname vcard-username d-block" itemprop=​"additionalName">​
        Aakashdeveloper
      ​</span>​</h1>​
document.getElementsByTagName('h1')[0].innerText
"Aakash
Aakashdeveloper"
document.getElementsByTagName('h1')[0].innerText="Thirupathi a Developer"
"Thirupathi a Developer"
document.getElementsByTagName('h1')[0].innerText
"Thirupathi a Developer"

document.getElementsByTagName('h1')[0].style.color="red"
"red"
document.getElementsByTagName('h1')[0].style.visibility="hidden"
"hidden"
document.getElementsByClassName('scroll')
HTMLCollection(4) [a.scroll, a.scroll, a.scroll, a.scroll]0: a.scroll1: a.scroll2: a.scroll3: a.scrolllength: 4__proto__: HTMLCollection
document.getElementsByClassName('scroll')[0].innerText="Tech"
"Tech"
