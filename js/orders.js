let searchtToken = localStorage.getItem("token");
 let autocomplete = [];

  fetch('https://redemptionfm.com/outpatient/get_symptoms', {
		method: 'GET',
		headers: {
			'API-Key': `${searchtToken}`,
		},
  }).then(response => response.json())
	  .then(response => 
		  response.forEach(res => {
			  autocomplete.push(res.symptomName);
			  
	})
	  ).catch(err => console.error(err));


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