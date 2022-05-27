window.score = 0;
window.color = "red";

window.onload = function() {
  loadcolors();
  
  var colors = ["red", "blue", "yellow", "purple", "white", "lightgreen", "grey", "black", "orange", "green", "pink", "cyan"];
  
  colors.forEach(color => {
    document.getElementById("colors").innerHTML += `
      <div id="choice${color}" class="color">
        ${color}
      </div>
    `
  })
  
  colors.forEach(color => {
    document.getElementById("choice"+color).onclick = function() {
      if (color == window.randomcolor) {
        //console.log("passed");
        loadcolors();
        window.score = window.score + 1;
        addscore();
      }
      else {
        //console.log("wrong");
        addbestscore();
        window.score = 0;
        addscore();
        
        document.getElementById("container").innerHTML = `
            <h1 style="color: red;">GameOver :(</h1>
            <button id="retry" style="background: red; color: white; margin-bottom: 35px; font-weight: bolder; font-size: 18px; width: 200px; height: 40px; border-radius: 15px; border: none;">Retry</button>
        `
        document.getElementById("retry").onclick = function() {
          window.location.reload();
        }
      }
    }
  })
  
}

function loadcolors() {
  window.randomcolor = "";
  var getbestscore = localStorage.getItem("best-score");
  if (getbestscore) {
    document.getElementById("bestscore").innerText = "Best Score: " + getbestscore;
  }
  
  var colors = ["red", "blue", "yellow", "purple", "white", "lightgreen", "grey", "black", "orange", "green", "pink", "cyan"];
  
  var randomcolor = Math.floor(Math.random() * colors.length);
  var randomtext = Math.floor(Math.random() * colors.length);
  //console.log(random, colors[random]);
  //console.log(colors[randomcolor]);
  var randomcolor = colors[randomcolor];
  var randomtext = colors[randomtext];
  
  window.randomcolor = randomcolor;
  
  document.getElementById("color-text").innerText = randomtext;
  document.getElementById("color-text").style.color = randomcolor;
}

function addscore() {
  document.getElementById("score").innerText = window.score;
}

function addbestscore() {
  var getbestscore = localStorage.getItem("best-score");
  if (getbestscore) {
    if (window.score > getbestscore) {
        localStorage.setItem("best-score", window.score);
    }
  }
  else {
    localStorage.setItem("best-score", window.score);
  }
}