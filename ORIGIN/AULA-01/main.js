//open and close the menu when click of icon - hamburguer end X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for( const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}
//when click at the icon hamburguer, closed of menu 
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}
//tranform the header page when give scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight) {
        //scroll is bigger than the height of the header 
        header.classList.add('scroll')
    }else{
        //scrol is smaller than the height of the header
        header.classList.remove('scroll')
    }
})


















