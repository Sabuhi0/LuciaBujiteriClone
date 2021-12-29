const close = document.querySelector('.fa-bars')
const open = document.querySelector('.fa-times')
const miniNav = document.querySelector('.mini-nav')

open.addEventListener('click', function() {
    open.classList.add('none')
    miniNav.classList.toggle('none')
    close.classList.remove('none')
})
close.addEventListener('click', function() {
    close.classList.add('none')
    miniNav.classList.toggle('none')
    open.classList.remove('none')
})

miniNav.addEventListener('click', function() {
    miniNav.classList.add('none')
    open.classList.add('none')
    close.classList.remove('none')
})

// Dropdown
const test = document.querySelector('.test')
const dropdown = document.querySelector('.dropdown')

test.onclick = function() {
    if (dropdown.classList.contains("active")) {
        dropdown.classList.remove("active")
    } else {
        dropdown.classList.add("active")
    }
}