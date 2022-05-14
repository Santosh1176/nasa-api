const getContent = function () {
  const dateSet = document.querySelector(".date").value;
  console.log(dateSet);
  const url = `https://api.nasa.gov/planetary/apod?api_key=O4yhTfBNn559Od9pdCuRMMmv3xlSdWqZF8UBmUfA&date=${dateSet}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.media_type);

      if (data.media_type === "image") {
        document.querySelector(".image").src = data.hdurl;
        document.querySelector(".video").src = "";
      } else if (data.media_type === "video") {
        document.querySelector(".image").src = "";
        document.querySelector(".video").src = data.url;
        document.getElementsByClassName("video").style.width = "50%";
        document.getElementsByClassName("video").style.heigh = "500px";
      }
      document.querySelector(".text").innerHTML = data.explanation;
    });
};
document.querySelector(".btn").addEventListener("click", getContent);
