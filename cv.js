'use strict'

let isChanged = false

function changeColor() {
    const container = document.getElementById('container')
    if (isChanged) {
        container.style.background = '#fff'
        container.style.color = '#333'
    } else {
        container.style.background = '#131313'
        container.style.color = '#fff'
    }
    isChanged = !isChanged
    
}

function changerdepage() {
    window.location.reload()
}
