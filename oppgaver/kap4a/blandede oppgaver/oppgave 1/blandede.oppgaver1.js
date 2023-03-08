const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const container = document.getElementById('container');

for (let i = 0; i < colors.length; i++) {
	const div = document.createElement('div');
	div.id = colors[i];
	div.textContent = colors[i];
	container.appendChild(div);
}
