


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
	  
let symptomUrl = 'https://redemptionfm.com/outpatient/get_user_symptoms?userID=' + userId;
fetch(symptomUrl, {
	method: 'GET',
		headers: {
			'API-Key': `${token}`,
	},
		}).then(response => response.json())
	.then(response => {
		response.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.symptomName}</td>
        <td>${order.description}</td>
        <td>${order.numOfTimesTracked}</td>
        <td>${order.lastDateTracked}</td>
        <td class="${order.averageSeverityLevel === 'Severe' ? 'danger' : order.averageSeverityLevel === 'Moderate' ? 'warning' : 'primary'}">${order.averageSeverityLevel}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});
	  }
).catch(err => console.error(err));

let logout = document.querySelector('#logout');
logout.addEventListener('click', function () {
	localStorage.removeItem("token");
	localStorage.removeItem("userID");
	localStorage.removeItem("patientID");
	window.location.href = "login.html";

 })