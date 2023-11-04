let searchtToken = localStorage.getItem("token");
let autocomplete = [];
let description = [];

  fetch('https://redemptionfm.com/outpatient/get_symptoms', {
		method: 'GET',
		headers: {
			'API-Key': `${searchtToken}`,
		},
  }).then(response => response.json())
	  .then(response => {
		  response.forEach(res => {
			  autocomplete.push(res.symptomName);
			  
          });
          response.forEach(res => {
			  description.push(res.description);
			  
	})
	  }).catch(err => console.error(err));


const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");


inputBox.onkeyup = function () {
	let result = [];
	let input = inputBox.value;
	if (input.length) {
		result = autocomplete.filter((keyword) => {
			return keyword.toLowerCase().includes(input.toLowerCase());
		});
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

const resultBoxs = document.querySelector(".descr");
const inputBoxs = document.getElementById("input-boxs");


inputBoxs.onkeyup = function () {
	let result = [];
	let input = inputBoxs.value;
	if (input.length) {
		result = description.filter((keyword) => {
			return keyword.toLowerCase().includes(input.toLowerCase());
		});
		displayDescr(result);

		if (!result.length) {
			resultBoxs.innerHTML = '';
		}
	}
}
function displayDescr(result) {
	const content = result.map((list) => {
		return "<li onclick=selectInputs(this)>" + list + "</li>"
	});

	resultBoxs.innerHTML = "<ul>"+ content.join('') +"</ul>"
}

function selectInputs(list) {
	inputBoxs.value = list.innerHTML;
	resultBoxs.innerHTML = '';
}



fetch('https://redemptionfm.com/outpatient/get_severity', {
	method: 'GET',
		headers: {
			'API-Key': `${searchtToken}`,
	},
		}).then(response => response.json())
	.then(response => {
		console.log(response);
	  }
	  ).catch(err => console.error(err));