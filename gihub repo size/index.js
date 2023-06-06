const repoOwner = document.getElementById("name");
const repoName = document.getElementById("repoName");
const submitBtn = document.getElementById("btn");
const resultBox = document.getElementById("resultBox");
let result = document.getElementById("result");
let linkToRepo = document.getElementById("link");
let nameOfOwner = "";
let nameOfRepo = "";

repoOwner.addEventListener("input", (e) => {
  nameOfOwner = e.target.value;
});

repoName.addEventListener("input", (e) => {
  nameOfRepo = e.target.value;
});

function submitApi() {
  submitBtn.addEventListener("click", (e) => {
    const owner = nameOfOwner;
    const repo = nameOfRepo;

    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((response) => response.json())
      .then((data) => {
        const size = data.size;

        let megabytes = size / 1024;
        let newMb = Math.round(megabytes) + " " + "MB";
        if (megabytes > 1) {
          newMb = Math.round(megabytes) + " " + "MB";
        } else {
          newMb = size + " " + "KB";
        }
        let res = `The Size of ${repo} Repository is ${newMb}`;
        resultBox.innerHTML = `
        <h3 class="cc">${res}</h3>`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    resultBox.style.display = "block";
  });
}
submitApi();

document.getElementById("downloadBtn").addEventListener("click", function () {
  var owner = "your-username";
  var repo = "your-repo";
  var branch = "master";

  var downloadUrl =
    "https://github.com/" + owner + "/" + repo + "/archive/" + branch + ".zip";
  window.location.href = downloadUrl;
});
