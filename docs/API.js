

export  function searchGif(name) {
   var url = new URL("https://giphy.p.rapidapi.com/v1/gifs/search?"),
    params = {q: name, api_key: "dc6zaTOxFJmzC", limit:10}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key])) 
   
   fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "giphy.p.rapidapi.com",
		"x-rapidapi-key": "960ac423d5msh23b29e69f91468ep17179bjsnb6ecc11ef77f"
	}
})
.then(response => {
    console.log(response);
    return response;
})
.catch(err => {
	console.log(err);
});
  }
  
