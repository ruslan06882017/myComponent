const form = document.getElementById('form');

form.onsubmit = e => {
    e.preventDefault();
    
/*     const data = new FormData(form);
    data.append("name", form.name);
    data.append("email", form.email);    
    console.log(data.values); */

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function(){
        if (this.status == 200){
            const result = JSON.parse(this.response);
            console.log(result);
        }
        
    }
    xhr.send();
     

}

// form.addEventListener("submit", handleFormSend);

// // Form send data
// function handleFormSend(e){
//     e.preventDefault();
    
//     const data = new FormData(form);
    
    
//     console.log(data);
// }