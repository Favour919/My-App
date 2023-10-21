const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

const form = document.getElementById('Form');

form.addEventListener('submit', async event => {
    event.preventDefault();
    

  const data = new FormData(form);

  for (const pair of data.entries()) {
    let item = document.getElementById(`${pair[0]}`);
    if (pair[1] == '') {
      item.style.backgroundColor = "#f0a3a3";
      return
    } else {
      item.style.backgroundColor = "transparent";
    }
  }
  let payload = {
    username: data.get('username'),
    password: data.get('password')
  };

  payload = JSON.stringify(payload);

  try {
    const res = await fetch(
      'https://redemptionfm.com/outpatient/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        
        body: payload,
      },
    );

    const resData = await res.json();

    console.log(resData);
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
