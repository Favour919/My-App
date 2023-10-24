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

fetch('https://redemptionfm.com/outpatient/get_symptoms', {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`,
		},
	}).then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));