const form = document.getElementById('Form');

form.addEventListener('submit', async event => {
    event.preventDefault();
    

  const data = new FormData(form);

  console.log(Array.from(data));

//   try {
//     const res = await fetch(
//       'https://redemptionfm.com/outpatient/register',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'

//         },
        
//         body: data,
//       },
//     );

//     const resData = await res.json();

//     console.log(resData);
//   } catch (err) {
//     console.log(err.message);
//   }
});