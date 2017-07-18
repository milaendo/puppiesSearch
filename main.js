let main= document.querySelector(".contain")
let search = document.querySelector("#mySearch")
let url= "http://www.recipepuppy.com/api?q="

search.addEventListener('keyup', function(e){
  console.log('typing')
  let term = search.value

  fetch(url + term)
    // Data is fetched and we get a promise.
    .then(
      // The promise returns a response from the server.
      function(response) {
        // We process the response accordingly.
        if (response.status !== 200) {
          console.log(response.status)
          return
        }
        response.json().then(function(data) {
            let htmlstr = ''
            data.results.forEach(function(data){
              htmlstr += `
                <div class="row">
                 <a href="${data.href}">
                  <img src="${data.thumbnail}">
                  <span>${data.title}</span>
                  </a>

                </div>
              `
              
          
             })  
            main.innerHTML=htmlstr
      })
      }
    )

})
  //search for any food related term and you can return a list of results to them.
  //event handler for input box so when searched you can add ?q to url

  //display all the results that are returned
  //when item is searched it should be displayed in the empty div
  //function with array of food returns htmlstrn formatted per div 
  //look to customer dash

  //event listener with type key down and call back event handler is the actual call back 