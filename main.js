console.log("hello");


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


 const generateHTML = (data) => {
   console.log(data);
   const name = data.name;
   const org_url = data.organizations_url;
   console.log(data.repos_url);
   const avatar_url = data.avatar_url;
   console.log(avatar_url);
   fetch(avatar_url);
   const public_data = data.public_repos;
   console.log(org_url);
  }



fetch(`${BASE_URL}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  })
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => generateHTML(data));
})();


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
