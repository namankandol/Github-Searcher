class UI{
  constructor(){
    this.Profile = document.getElementById('profile');
  }
   
  //Show Profile


  showProfile(user) {
    this.Profile.innerHTML = `
    <div class = "card card-body mb-3">
      <div class = "row">
        <div class = "col-md-3">
          <img class = "img-fluid mb-2" src="${user.avatar_url}">
          <a href = ${user.html_url} target = "_blank" class = "btn btn-primary btn-block mb-5">View Profile</a>
        </div>
        <div class = "col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Members Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  // Show Repos


  showRepo(repos) {
    let output = '';

    repos.forEach(function(repo){
      output += `
      <div class = "card card-body mb-2" >
        <div class = "row">
          <div class = "col-md-6">
            <a href = "${repo.html_url}" target = "_blank">${repo.name}</a>
          </div>
          <div class = "col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
      `
    })

    document.getElementById('repos').innerHTML = output;
  } 

  // Clear Profile 


  clearProfile() {
    this.Profile.innerHTML = '';
  }

  // Show Alert 


  showAlert(message, className) {

    // clear alert 
    this.clearAlert();
    // create element 
    const div = document.createElement('div');
    // add a class
    div.className = className;
    // add a text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.searchContainer');
    // get search 
    const search = document.querySelector('.search');
    // insert alert 
    container.insertBefore(div, search);
    // timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);

     

  }


    // Clear Alert
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    } else {
      
    }
  }



}

