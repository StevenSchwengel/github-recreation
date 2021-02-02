console.log("hello");


(function() {

 'use strict';


const BASE_URL = 'https://api.github.com/users/StevenSchwengel';



//    const generateHTML = (data) => {
//      console.log('data', data);
//      const source = document.getElementById("rover-image-template").innerHTML;
//      const template = Handlebars.compile(source);
//      const context = data;
//      const html = template(context);
//
//      document.querySelector('.container').innerHTML = html;
// }

    //
    // const source = document.getElementbyID("rover-image-template").innerHTML;
    // const template = Handlebars

   //
   // fetch(`${BASE_URL}/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${earthDate}&api_key=${API_KEY}`)
   //  .then(response => response.json())
   //  .then(data => generateHTML(data));

 const generateHTML = (data) => {
   console.log(data);
   console.log(data.name);
   console.log(data.organizations_url);
   console.log(data.repos_url);
   console.log(data.avatar_url);
   console.log(data.public_repos);
   // console.log(data);
 }


  // const generateHTML2 = (data) => {
  //   console.log(data);
  // }



 fetch(`${BASE_URL}/repos`,) {
     headers: {
       Authorization: `token ${GITHUB_TOKEN}`
     }
   })
     .then(response => response.json())
     // .then(data => console.log(data));
     .then(data => generateHTML2(data));
 })();



fetch(`${BASE_URL}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  })
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => generateHTML(data));
})();


// const fullName = data.name;
// console.log(fullName);
