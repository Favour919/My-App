const form = document.getElementById('Form');
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
    parent.classList.remove("focus");
    parent.classList.add("error");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener( remcl);
});

form.addEventListener('submit', async event => {
    event.preventDefault();
    

  const data = new FormData(form);

  for (const pair of data.entries()) {
    let item = document.getElementById(`${pair[0]}`);
    let parent = item.parentNode.parentNode;
    if (pair[1] == '') {
      parent.classList.add("error");
      return
    } else {
      parent.classList.remove("error");
    }
  }

  if (!matchPassword()) {
    return;
  }

  let payload = {
    username: data.get('username'),
    email: data.get('email'),
    password: data.get('password')
  };

  payload = JSON.stringify(payload);

  try {
    const res = await fetch(
      'https://redemptionfm.com/outpatient/register',
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
      alert.textContent = resData.success + '. Please login';
      alert.classList.add('success');

      window.setTimeout(() => {
        alert.classList.remove('success')
      }, 3000);

      location.href = 'login.html';
    }
  } catch (err) {
    console.log(err);
    
  }
});

function matchPassword() {
  let passwordField = document.getElementById('password');
  let confirmPassword = document.getElementById('confirm');
  if (passwordField.value == confirmPassword.value) {
    confirmPassword.style.backgroundColor = "transparent";
     return true;
  } 
  confirmPassword.style.backgroundColor = "#f0a3a3";
  return false;
}
