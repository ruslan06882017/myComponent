document.getElementById('submit').addEventListener('click', getData);


  //let result = document.getElementById('info');
function getData(e){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
  xhr.onprogress = function() {
    alert('Loading, please wait....');
  }


  xhr.onload = function(){
    alert('Loaded');
    if (this.status == 200){
      const data = JSON.parse(this.responseText);
      const div = document.getElementById('info');
      let result = '';
      data.forEach(item => {
        result += `
          <ul>
            <li> ${item.userId} </li>
            <li> ${item.id} </li>
            <li> ${item.title} </li>
            <li> ${item.body} </li>
          </ul>
          <hr>`;

        div.innerHTML = result;
      });

    }
  }
 
  xhr.send();
  e.preventDefault();
};