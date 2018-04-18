let allButtons = $('#buttons>span')
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        let index = $(x.currentTarget).index()
        let p = index * -200
        $('#images').css({transform: 'translate(' + p + 'px)'})
        n = index
        allButtons.eq(n)
            .addClass('active')
            .siblings('.active').removeClass('active')
    })
}
let n = 0
let size = allButtons.length
allButtons.eq(n % size).trigger('click')
    .addClass('active')
    .siblings('.active').removeClass('active')
let timerId = setInterval(()=>{
    n += 1
allButtons.eq(n % size).trigger('click')
    .addClass('active')
    .siblings('.active').removeClass('active')
},1500)
$('.window').on('mouseenter',()=>{window.clearInterval(timerId)})
$('.window').on('mouseleave',()=>{
    timerId = setInterval(()=>{
        n += 1
    allButtons.eq(n % size).trigger('click')
    .addClass('active')
    .siblings('.active').removeClass('active')
},1500)})