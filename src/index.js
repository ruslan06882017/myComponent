import easyHTTP from './components/easyHTTP'

/* const http = new easyHTTP();
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
  if (err){
    console.log(err);
  } else {
    console.log(posts);
  }
});  */

const http = new easyHTTP();
const data = {
  title: 'Custom title',
  body: 'Here the long text 2020'
}
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, posts){
  if (err){
    console.log(err);
  } else {
    console.log(posts);
  }
}); 