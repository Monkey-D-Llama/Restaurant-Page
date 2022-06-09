import Style from './style.css';
import pic from './rest.jpeg';

const content = document.querySelector('.content');
const body = document.createElement('div');
const footer = document.createElement('div');

const header = document.createElement('div');
header.classList.add('header');
let div = document.createElement('div');
let span = document.createElement('span');
let img = new Image();
img.src = pic;
img.addEventListener('click', () => makeHome(body));
span.appendChild(img);
div.appendChild(span);
header.appendChild(div);
div = document.createElement('div');
let a = document.createElement('a');
a.innerHTML = 'Menu';
a.addEventListener('click', () => makeMenu(body));
div.appendChild(a);
a = document.createElement('a');
a.innerHTML = 'Contact';
a.addEventListener('click', () => makeContact(body));
div.appendChild(a);
a = document.createElement('a');
a.innerHTML = 'About Us';
a.addEventListener('click', () => makeAbout(body));
div.appendChild(a);
header.appendChild(div);


body.classList.add('body');
makeHome(body);
// div = document.createElement('div');
// let h2 = document.createElement('h2');
// h2.innerHTML = "Liam's Restaurant";
// div.appendChild(h2);
// body.appendChild(div);

// div = document.createElement('div');
// div.classList.add('blurb');
// let h3 = document.createElement('h3');
// h3.innerHTML = 'Down Home Food';
// div.appendChild(h3);
// let p = document.createElement('p');
// p.innerHTML = "here at Liam's Restaurant we want to bring the best possible food made with the best possible ingredients.  All our cheffs are DTF";
// div.appendChild(p);
// body.appendChild(div);

// div = document.createElement('div');
// div.className = 'hours';
// let ul = document.createElement('ul');
// let li = document.createElement('li');
// li.innerHTML = 'Monday-Friday: 9AM - 5PM';
// ul.appendChild(li);
// li = document.createElement('li');
// li.innerHTML = 'Saturday: 8AM - 9PM';
// ul.appendChild(li);
// li = document.createElement('li');
// li.innerHTML = 'Sunday: Closed!';
// ul.appendChild(li);
// div.appendChild(ul);
// body.appendChild(div);

// div = document.createElement('div');
// div.className = 'location';
// a = document.createElement('a');
// a.innerHTML = '1023 Rivers Edge Drive, Colleville Pa, 19426';
// div.appendChild(a);
// body.appendChild(div);




footer.classList.add('footer');
a = document.createElement('a');
a.innerHTML = "@Liam O'Brien";
footer.appendChild(a);
a = document.createElement('a');
a.innerHTML = 'Copyright 2022';
footer.appendChild(a);
a = document.createElement('a');
a.innerHTML = 'ImadeTHIS prod.';
footer.appendChild(a);


content.appendChild(header);
content.appendChild(body);
content.appendChild(footer);





function makeHome(ele){
    ele.innerHTML = '';
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerHTML = "Liam's Restaurant";
    div.appendChild(h2);
    body.appendChild(div);

    div = document.createElement('div');
    div.classList.add('blurb');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Down Home Food';
    div.appendChild(h3);
    let p = document.createElement('p');
    p.innerHTML = "here at Liam's Restaurant we want to bring the best possible food made with the best possible ingredients.  All our cheffs are DTF";
    div.appendChild(p);
    body.appendChild(div);

    div = document.createElement('div');
    div.className = 'hours';
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerHTML = 'Monday-Friday: 9AM - 5PM';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerHTML = 'Saturday: 8AM - 9PM';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerHTML = 'Sunday: Closed!';
    ul.appendChild(li);
    div.appendChild(ul);
    ele.appendChild(div);

    div = document.createElement('div');
    div.className = 'location';
    let a = document.createElement('a');
    a.innerHTML = '1023 Rivers Edge Drive, Colleville Pa, 19426';
    div.appendChild(a);
    ele.appendChild(div);
}
function makeMenu(ele){
    ele.innerHTML = '';
}

function makeContact(ele){
    ele.innerHTML = '';
    let div = document.createElement('div');
    div.classList.add('hours');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Contact us via';
    div.appendChild(h3);
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerHTML = 'Email: mail@llama.com';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerHTML = 'Phone: 8679998212';
    ul.appendChild(li);
    li = document.createElement('li');
    li.innerHTML = 'Psychic: burn 3 slim jims in a triangle';
    ul.appendChild(li);
    div.appendChild(ul);
    ele.appendChild(div);
}

function makeAbout(ele){
    ele.innerHTML = '';
}