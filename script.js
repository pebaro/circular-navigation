const menu1Toggle = document.querySelector('.toggle--1')
const menu1 = document.querySelector('.menu__1')
const menu1Items = document.querySelectorAll('.menu__1--item')

menu1Toggle.addEventListener('click', () => {
	menu1.classList.toggle('active')
	menu1Toggle.classList.toggle('active')
})

function activeLinks1 () {
	menu1Items.forEach(item => {
		item.classList.remove('active')
		this.classList.add('active')
	})
}

menu1Items.forEach(item => item.addEventListener('click', activeLinks1))


const menu2Toggle = document.querySelector('.toggle--2')
const menu2 = document.querySelector('.menu__2')
const menu2Items = document.querySelectorAll('.menu__2--item')

menu2Toggle.addEventListener('click', () => {
	menu2.classList.toggle('active')
	menu2Toggle.classList.toggle('active')
})

function activeLinks2 () {
	menu2Items.forEach(item => {
		item.classList.remove('active')
		this.classList.add('active')
	})
}

menu2Items.forEach(item => item.addEventListener('click', activeLinks2))
