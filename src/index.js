// Init class
 import Github from './github';
 import UI from './ui';

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', e => {
  const userText = e.target.value;
  const github = new Github;
  const ui = new UI;

  if (userText !== ''){
    //console.log(userText);
    // Make HTTP call
    github.getUser(userText).then(response => {
      if (response.profile.message == "Not Found"){
        // 
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        //console.log(response.profile);
        ui.showProfile(response.profile);
      }
    })
  } else {
    ui.clearProfile();
  }
})