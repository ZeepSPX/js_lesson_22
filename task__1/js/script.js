// Задача 2. Розробити Класи. Подумайте яким має бути спільний клас предок.----------------------------------------

class GameObject {
	constructor(x, y, imageSrc, updateInterval) {
		this.x = x;
		this.y = y;
		this.imageSrc = imageSrc;
		this.updateInterval = updateInterval;
		this.element = null;
	}

	generateElement() {
		const element = document.createElement('img');
		element.src = this.imageSrc;
		element.style.position = 'absolute';
		element.style.left = this.x + 'px';
		element.style.top = this.y + 'px';
		document.body.appendChild(element);
		this.element = element;
	}

	update() {
		// logic for updating the game object
	}
}

class House extends GameObject {
	constructor(x, y, imageSrc, updateInterval) {
		super(x, y, imageSrc, updateInterval);
	}

	update() {
		this.x += Math.random() * 10 - 5;
		this.element.style.left = this.x + 'px';
	}
}

class Dog extends GameObject {
	constructor(x, y, imageSrc, updateInterval) {
		super(x, y, imageSrc, updateInterval);
		this.scale = 1;
	}

	update() {
		this.scale += Math.random() * 0.1 - 0.05;
		this.element.style.transform = `scale(${this.scale})`;
	}
}

class Bird extends GameObject {
	constructor(x, y, imageSrc, updateInterval) {
		super(x, y, imageSrc, updateInterval);
	}

	update() {
		this.x += Math.random() * 20 - 10;
		this.y += Math.random() * 20 - 10;
		this.element.style.left = this.x + 'px';
		this.element.style.top = this.y + 'px';
	}
}

// create game objects
const house = new House(100, 100, 'img/house.png', 1000);
const dog = new Dog(200, 200, 'img/dog.png', 500);
const bird = new Bird(300, 300, 'img/bird.png', 200);

// generate elements
house.generateElement();
dog.generateElement();
bird.generateElement();

// start updating game objects
setInterval(() => {
	house.update();
	dog.update();
	bird.update();
}, 100);

// example of stopping updates after a certain time
setTimeout(() => {
	clearInterval(updateInterval);
}, 10000); // stop updates after 10 seconds