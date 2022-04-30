//HTML Styling for engineer card
const engineerCard = (data) => 
`<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body bg-primary">
  <h5 class="card-title text-white">${data.name}(Engineer)</h5>
  <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID:${data.idNumber}</li>
  <li class="list-group-item">Email:${data.email}</li>
  <li class="list-group-item">Github:${data.gitHubUserName}</li>
</ul>
</div>`;

module.exports = engineerCard //export file into index.js