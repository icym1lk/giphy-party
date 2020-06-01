const key = '87vYCiVX8upUHIsCkd88EhIv2CPsm0MD';

async function getSearch(val) {
   let results = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${val}`);
   let numResults = results.data.data.length;
   let randNum = Math.floor(Math.random() * numResults);
   let newGif = results.data.data[randNum].images.original.url;
   postGif(newGif);
};

$("form").on("submit", async function(e) {
   e.preventDefault();

   $searchVal = $("#searchText").val();
   getSearch($searchVal);
   $("#searchText").val("");
});   

function postGif(val) {
   let container = document.querySelector(".gif-container")
   let gif = document.createElement("img");
   gif.src = val;
   gif.classList.add("gif");
   container.append(gif);
};

$("#removeButton").on("click", function() {
   $images = $(".gif");
   $images.remove();
});

