const projects = [
	{
		name: 'Mnen API',
		url: '#',
	}
];

const list = document.getElementById('list');

projects.forEach(({ name, url }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="${url}">
		<img src="/images/${name}/project.jpg" alt="${name}" />
		<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>

		<div class="links-container">
			<a href="${url}" class="red">
				<i class="fas fa-eye"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}
