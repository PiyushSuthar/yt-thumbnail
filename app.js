
const app = document.getElementById("app");
function submit(){
  app.innerHTML = null;
  let yturl = document.getElementById("yturl").value;
  let ytu = yturl.substring(yturl.length - 11);
  
  var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://www.googleapis.com/youtube/v3/videos?id='+ytu+'&key=AIzaSyB7GZsWUE3irEoV_yvpW6DEyI9T7O0TSHc&part=snippet,contentDetails,statistics,status', true)

request.onload = function() {
  // Begin accessing JSON data here
  let response = JSON.parse(this.response)
  
  console.log(response.items[0].snippet.title )
  const title = document.createElement("h2");
  title.innerHTML = response.items[0].snippet.title;
  const description = document.createElement("p");
  description.innerHTML = response.items[0].snippet.description.substring(0,300)+"...";
const infocont = document.createElement("div");
  infocont.setAttribute('class',"info")
  const player = document.createElement("iframe")
  let plysrc = "https://www.youtube.com/embed/"+ytu;
  player.setAttribute("src",plysrc);
    player.setAttribute("frameborder","0");
  const embed = document.createElement('div');
  embed.setAttribute("class","embed-container");
  
  app.appendChild(infocont);
  infocont.appendChild(title);
  infocont.appendChild(description);
    infocont.appendChild(embed);
  embed.appendChild(player);
 
}

// Send request
request.send()
  
  
  
  if (document.getElementById("yturl").value.length == 0){
    const error = document.createElement("p");
    error.innerHTML= 'Abey Saale Kuch Likh lomdike!'
 error.setAttribute("class","text");
    app.appendChild(error);
  } else{
    const img = document.createElement("img");
    let imgsrc = "https://img.youtube.com/vi/"+ytu+"/maxresdefault.jpg"
  img.setAttribute("src", imgsrc);
    //const imglink = document.createElement("a");   
     //imglink.setAttribute("href", imgsrc);
    // imglink.setAttribute("download","new.jpg");
     //imglink.innerHTML ="download";


    //app.appendChild(imglink);
  app.appendChild(img);
  }
  

}
