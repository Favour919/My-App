

const profileForm = document.getElementById('Form');
profileForm.addEventListener('submit', async event => {
    event.preventDefault();
    

    const data = new FormData(profileForm);


  for (const pair of data.entries()) {
      let item = document.getElementById(`${pair[0]}`);
    
    if (pair[1] == '') {
      item.classList.add("error");
      return
    } else {
      item.classList.remove("error");
    }
    }
    let userId = localStorage.getItem("userID");
    let payload = {
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        dateOfBirth: data.get('dateOfBirth'),
        gender: data.get('gender'),
        address: data.get('address'),
        phoneNumber: data.get('phoneNumber'),
        height: data.get('height'),
        weight: data.get('weight'),
        emergencyContactName: data.get('emergencyContactName'),
        emergencyContactPhone: data.get('emergencyContactPhone'),
        userID: userId
    };
  
    payload = JSON.stringify(payload);
    let token = localStorage.getItem("token");
    
    

  try {
      const res = await fetch(
       'https://redemptionfm.com/outpatient/add_patient',
       {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'API-Key': `${token}`,
         },
        
         body: payload,
       },
      );
      console.log(payload);

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
