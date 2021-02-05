
(function() {

 'use strict';


const BASE_URL = 'https://api.github.com/users/StevenSchwengel';

   // const generateHTML2 = (data) => {
   //   console.log(data);
   //   console.log(data.name);
   //   console.log(data.organizations_url);
   //   var repo_url = data.repos_url;
   //   console.log ("repo_url", repo_url);
   //   console.log(data.repos_url);
   //   console.log(data.avatar_url);
   //   console.log(data.public_repos);
   //   // console.log(data);
   // }


 // const generateHTML = (data) => {
 //   console.log(data);
 //   const name = data.name;
 //   const org_url = data.organizations_url;
 //   console.log(data.repos_url);
 //   const avatar_url = data.avatar_url;
 //   console.log(avatar_url);
 //   const public_data = data.public_repos;
 //   console.log(org_url);
 //  }


  const generateHTML = (data) => {
    console.log('data', data);
    // const name = data.name;

    const source = document.getElementById("name").innerHTML;
    const template = Handlebars.compile(source);
    const context = data.name;
    const html = template(context);

    document.querySelector('.container').innerHTML = html;

// just added this.. }
}



fetch(`${BASE_URL}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }

// original
  // })
   .then(response => response.json())
   .then(data => generateHTML(data));



   const generateUser = (data) => {
     // console.log('data', data);
     // const name = data.name;
     const source = document.getElementById("user-name").innerHTML;
     const template = Handlebars.compile(source);
     const context = data.name;
     const html = template(context);

     document.querySelector('.user').innerHTML = html;
 }
 fetch(`${BASE_URL}`)
 .then(response => response.json())
 .then(data => generateUser(data));






 )()};

// fetch("https://api.github.com/users/StevenSchwengel/repos", {
// fetch(`${BASE_URL}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`
//     }
//   })
//     .then(response => response.json())
//     // .then(data => console.log(data));
//     .then(data => generateHTML2(data));
// })();

// const fullName = data.name;
// console.log(fullName);
