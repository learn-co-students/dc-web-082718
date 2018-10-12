document.addEventListener('DOMContentLoaded', function(){
	fetchAnimals()
})

function fetchAnimals(){
	fetch('https://animal-farm-api.herokuapp.com/animals')
	.then(response => response.json())
	.then(data => {
		animalArray = data
		//do something with data
		data.forEach(animal => {
			render(animal)
		})
	})
}

function render(animal){
	// debugger
	let li = document.createElement('li')
	li.innerText = animal.name
	let imgDiv = document.createElement('img')
	imgDiv.src = animal.img
	document.querySelector('.container').appendChild(li)
	document.querySelector('.container').appendChild(imgDiv)
}
