const buttonYes = document.querySelector('.button-yes');
const buttonNo = document.querySelector('.button-no');
const title = document.getElementById('titleChange')
const imageGif = document.getElementById('gifRotate')
const buttonsWrapper = document.getElementById('buttonWrapper')

var rect = buttonNo.getBoundingClientRect();
maxTop = Math.round(window.innerHeight - rect.top - buttonNo.offsetHeight);
maxLeft = Math.round(window.innerWidth - rect.left - buttonNo.offsetWidth);
minTop = Math.round(-rect.top);
minLeft = Math.round(-rect.left);

buttonNo.addEventListener('mouseover', () => {
    buttonNo.style.top = Math.floor((Math.random() * (maxTop - minTop + 1)) + minTop) + "px";
    buttonNo.style.left = Math.floor((Math.random() * (maxLeft - minLeft + 1)) + minLeft) + "px";
})

buttonYes.addEventListener('click', () => {
    buttonsWrapper.remove();
    document.title = "урааа!!!";
    title.innerHTML = "урааа, спасибо!"
    imageGif.src = "assets/img/myaowl-shy.gif"
})