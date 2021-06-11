var btn = document.getElementById('nav-btn')
var hiddenBlock = document.querySelector('.blockHidden')

btn.addEventListener('click' , function () {
    console.log('qwerty');
hiddenBlock.classList.add('blockShown')
})

var closebtn = document.getElementById('closebtn')

closebtn.addEventListener('click' , function () {
    console.log('qwerty');
hiddenBlock.classList.remove('blockShown')
})