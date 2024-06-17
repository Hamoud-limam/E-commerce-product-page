
  const num = document.getElementById("countBtn");
  let count = 0;
  
  
  function increase() {
    count++;
    num.textContent = count;
    
  }
  function decraseBtn() {
    if (count > 0) {
      count--;
      num.textContent = count;
    }
  
  };
  

let i=0;
let cart =  document.getElementById('cart');
function Addcart(){
  if (i==0){
    cart.style.display='block';
    i++;
  }
  else if (i==1){
    cart.style.display='none';
    i--;
  }
  
}
function addProduct() {
  let qual = document.getElementById('qual');
  let res = document.getElementById('res');
  let notificationBubble = document.getElementById('notification-bubble');
    let button1= document.getElementById('button1');
  let product = document.getElementById('product');
  let myh4 = document.getElementById('myh4');
    if(count>0){
      qual.textContent=count;
      res.textContent=`$  ${count*125}`;
      notificationBubble.style.display='block';
      notificationBubble.textContent=count;
      myh4.style.display='none';
      product.style.display='flex';
      button1.style.display='block';
}
  else{
    
    qual.textContent=0;
    res.textContent=0;
      notificationBubble.style.display='none';
        myh4.style.display = 'block';
        product.style.display = 'none';
      button1.style.display='none';
  }
  
let del = document.getElementById('delete');
del.onclick = function () {

    qual.textContent=0;
    res.textContent=0;
      notificationBubble.style.display='none';
        myh4.style.display = 'block';
        product.style.display = 'none';
      button1.style.display='none';
}
}
let firstWash = document.getElementById('wach1');
let secondWash = document.getElementById('wach2');
let thirdWash = document.getElementById('wach3');
let forthWash = document.getElementById('wach4');
let thirdContain = document.getElementById('contain3');
let firstImg = document.getElementById('img1');
let secondImg = document.getElementById('img2');
let thirdImg = document.getElementById('img3');
let forthImg = document.getElementById('img4');

let firstsWash = document.getElementById('wach11');
let secondsWash = document.getElementById('wach22');
let thirdsWash = document.getElementById('wach33');
let forthsWash = document.getElementById('wach44');
let close = document.getElementById('close');
let x = 0;
close.onclick = function() {
  thirdContain.style.display = 'none';
}
firstWash.onclick = function() {
  thirdContain.style.display = 'flex';
  firstImg.style.display = 'block';
  secondImg.style.display = 'none';
  thirdImg.style.display = 'none';
  forthImg.style.display = 'none';
  x=1;
}
secondWash.onclick = function() {
  thirdContain.style.display = 'flex';
  firstImg.style.display = 'none';
  secondImg.style.display = 'block';
  thirdImg.style.display = 'none';
  forthImg.style.display = 'none';
  x=2;
}
thirdWash.onclick = function() {
  thirdContain.style.display = 'flex';
  firstImg.style.display = 'none';
  secondImg.style.display = 'none';
  thirdImg.style.display = 'block';
  forthImg.style.display = 'none';
  x=3;
}

forthWash.onclick = function() {
  thirdContain.style.display = 'flex';
  firstImg.style.display = 'none';
  secondImg.style.display = 'none';
  thirdImg.style.display = 'none';
  forthImg.style.display = 'block';
  x=4;
}
firstsWash.onclick = function() {
  thirdContain.style.display = 'flex';
  firstImg.style.display = 'block';
  secondImg.style.display = 'none';
  thirdImg.style.display = 'none';
  forthImg.style.display = 'none';
  x=1;
}
secondsWash.onclick = function() {
  thirdContain.style.display = 'flex';
  firstImg.style.display = 'none';
  secondImg.style.display = 'block';
  thirdImg.style.display = 'none';
  forthImg.style.display = 'none';
  x=2;
}
thirdsWash.onclick = function() {
  thirdContain.style.display = 'flex';
  firstImg.style.display = 'none';
  secondImg.style.display = 'none';
  thirdImg.style.display = 'block';
  forthImg.style.display = 'none';
  x=3;
}

forthsWash.onclick = function() {
  thirdContain.style.display = 'flex';
  firstImg.style.display = 'none';
  secondImg.style.display = 'none';
  thirdImg.style.display = 'none';
  forthImg.style.display = 'block';
  x=4;
  
}

let firstBtn = document.getElementById('but1');
let srcondBtn = document.getElementById('but2');

srcondBtn.onclick= function(){
  if( x==1){
    firstImg.style.display = 'none';
    secondImg.style.display = 'block';
    x=2;
  }
  else if (x==2){
    secondImg.style.display = 'none';
    thirdImg.style.display = 'block';
    x=3;
      
    }
  else  if (x==3){
    thirdImg.style.display = 'none';
    forthImg.style.display = 'block';
    x=4;
    }
  else {
    forthImg.style.display = 'none';
    firstImg.style.display = 'block';
    x=1;
    }
  
}
firstBtn.onclick= function(){
  if( x==1){
    firstImg.style.display = 'none';
    forthImg.style.display = 'block';
    x=4;
  }
  else if (x==4){
    forthImg.style.display = 'none';
    thirdImg.style.display = 'block';
    x=3;
      
    }
  else  if (x==3){
    thirdImg.style.display = 'none';
    secondImg.style.display = 'block';
    x=2;
    }
  else {
    secondImg.style.display = 'none';
    firstImg.style.display = 'block';
    x=1;
    }
  
}

    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
      if (!menuOpen) {
        navLinks.classList.add('nav-active');
        menuBtn.classList.add('open');
        menuOpen = true;
      } else {
        navLinks.classList.remove('nav-active');
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
    });