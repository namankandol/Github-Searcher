//inantiate github
const Github = new github;
//inantiate ui
const ui = new UI;

// Search Input 
const searchUser = document.getElementById('searchUser');

//Search Input event listener
searchUser.addEventListener('keyup', (e) => {
  //Get Input Text
   const userText = e.target.value;

   if(userText !== ''){
    //make HTTP call
    Github.getUser(userText)
    .then((data) => {
      if(data.profile.message === "Not Found"){
        //Show Alert 
        ui.showAlert('User not found', 'alert alert-danger');
      } else{
        //Show Profile
        ui.showProfile(data.profile);
        ui.showRepo(data.repos);
      }
    })
   } else{
     //Clear Profile
    ui.clearProfile();
   }

});