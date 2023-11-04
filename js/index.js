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


let token = localStorage.getItem("token");
let userId = localStorage.getItem("userID");

let url = 'https://redemptionfm.com/outpatient/get_patient?userID=' + userId
fetch(url, {
	method: 'GET',
		headers: {
			'API-Key': `${token}`,
	},
		}).then(response => response.json())
	.then(response => {
		document.querySelector('#height').textContent = response.height + 'cm';
		document.querySelector('#weight').textContent = response.weight + 'kg';
		document.querySelector('#gender').textContent = response.gender;
		document.querySelector('.username').textContent = response.username.charAt(0).toUpperCase() + response.username.slice(1);
		document.querySelector('.email').textContent = response.email;
		document.querySelector('#username').textContent = 'Hi ' + response.username.charAt(0).toUpperCase() + response.username.slice(1);
	  }
	  ).catch(err => console.error(err));