// Orders.forEach(order => {
//     const tr = document.createElement('tr');
//     const trContent = `
//         <td>${order.productName}</td>
//         <td>${order.paymentStatus}</td>
//         <td class="${order.status === 'Severe' ? 'danger' : order.status === 'Moderate' ? 'warning' : 'primary'}">${order.status}</td>
//         <td class="primary">Details</td>
//     `;
//     tr.innerHTML = trContent;
//     document.querySelector('table tbody').appendChild(tr);
// });

let autocomplete = [
	'john',
	'good',
	'paul'
]

let token = localStorage.getItem("token");

fetch('https://redemptionfm.com/outpatient/get_symptoms', {
		method: 'GET',
		headers: {
			'API-Key': `${token}`,
		},
	}).then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
	let result = [];
	let input = inputBox.value;
	if (input.length) {
		result = autocomplete.filter((keyword) => {
			return keyword.toLowerCase().includes(input.toLowerCase());
		});
		console.log(result);
		display(result);

		if (!result.length) {
			resultBox.innerHTML = '';
		}
	}
}

function display(result) {
	const content = result.map((list) => {
		return "<li onclick=selectInput(this)>" + list + "</li>"
	});

	resultBox.innerHTML = "<ul>"+ content.join('') +"</ul>"
}

function selectInput(list) {
	inputBox.value = list.innerHTML;
	resultBox.innerHTML = '';
}

