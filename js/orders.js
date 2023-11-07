let searchtToken = localStorage.getItem("token");
let autocomplete = [];
let description = [];
let carts = []
let symptom;

  fetch('https://redemptionfm.com/outpatient/get_symptoms', {
		method: 'GET',
		headers: {
			'API-Key': `${searchtToken}`,
		},
  }).then(response => response.json())
	  .then(response => {
		  response.forEach(res => {
			   symptom = { id: res.symptomID, name: res.symptomName };
				carts.push(symptom)
			  autocomplete.push(res.symptomName);
			  
          });
          response.forEach(res => {
			  description.push(res.description);
			  
	})
	  }).catch(err => console.error(err));

console.log(carts);
const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("search");


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
const inputBoxs = document.getElementById("descr");


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
cart = [];
let level;
fetch('https://redemptionfm.com/outpatient/get_severity', {
	method: 'GET',
		headers: {
			'API-Key': `${searchtToken}`,
	},
		}).then(response => response.json())
	.then(response => {
		response.forEach(res => {
			let severity = { id: res.severityLevel, name: res.severityName };
			cart.push(severity)
			const option = document.createElement('option');
				const optionContent = `
        		<option>${severity.name}</option>
     			`;
				option.innerHTML = optionContent;
			document.querySelector('select').appendChild(option);
			
			
	})
	}).catch(err => console.error(err));
	  
	  
const symptomForm = document.getElementById('symptom-form');

symptomForm.addEventListener('submit', async event => {
	event.preventDefault();
    

	const data = new FormData(symptomForm);
	for (const pair of data.entries()) {
		let item = document.getElementById(`${pair[0]}`);

    
    if (pair[1] == '') {
      item.classList.add("error");
      return
    } else {
      item.classList.remove("error");
    }
	}
	let selected = document.querySelector('select').value;
				cart.forEach(item => {
				if (item.name == selected) {
					 level = item.id;
				   }
				})
	let level2
	let symptom = inputBox.value;
				carts.forEach(item => {
				if (item.name == symptom) {
					 level2 = item.id;
				   }
				})
	let patientId = localStorage.getItem("patientID");
	let userId = localStorage.getItem("userID");
	
	let payload = {
		patientID: userId,
        symptomID: level2,
        severityLevel: level,
        notesComments: data.get('descr')

	};
	payload = JSON.stringify(payload);
    
  try {
      const res = await fetch(
       'https://redemptionfm.com/outpatient/add_assessment',
       {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'API-Key': `${searchtToken}`,
         },
        
         body: payload,
       },
	  );
	  const resData = await res.json();

     let alert = document.querySelector('.alert');
     if (resData.error) {
       alert.textContent = resData.error;
       alert.classList.add('error');

       window.setTimeout(() => {
         alert.classList.remove('error')
       }, 3000);
     } else if (resData.success) {
       alert.textContent = resData.success;
       alert.classList.add('success');

       window.setTimeout(() => {
         alert.classList.remove('success')
       }, 3000);
       
       window.location.href = 'dashboard.html';
      
     }
   } catch (err) {
     console.log(err);
    
   }
});