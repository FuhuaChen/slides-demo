let allButtons = $('#buttons>span')
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        let index = $(x.currentTarget).index()
        let p = index * -300
        $('#images').css({transform: 'translate(' + p + 'px)'})
        n = index
        activeButton(allButtons.eq(n))
    })
}
let n = 0
let size = allButtons.length
allButtons.eq(n % size).trigger('click')
let timerId = setTimer()
$('.window').on('mouseenter', () => {
    window.clearInterval(timerId)
})
$('.window').on('mouseleave', () => {
    timerId = setTimer()
})

function activeButton($button) {
    $button
        .addClass('active')
        .siblings('.active').removeClass('active')
}

function setTimer() {
    return setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
    }, 1500)
}