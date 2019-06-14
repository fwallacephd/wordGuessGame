document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("companions").addEventListener("click",  function() {
    document.getElementById("companions").style.display = "none";
    document.getElementById("aliens").style.display = "none";
    document.getElementById("doctor").style.display = "none";
    
    document.getElementsByClassName("easy").style.display = 'none';

    document.getElementById("easy").style.display = "unset";
    document.getElementById("medium").style.display = "unset";
    document.getElementById("hard").style.display = "unset";
  })
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("aliens").addEventListener("click",  function() {
    document.getElementById("companions").style.display = "none";
    document.getElementById("aliens").style.display = "none";
    document.getElementById("doctor").style.display = "none";

    document.getElementById("easy").style.display = "unset";
    document.getElementById("medium").style.display = "unset";
    document.getElementById("hard").style.display = "unset";
  })
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("doctor").addEventListener("click",  function() {
    document.getElementById("companions").style.display = "none";
    document.getElementById("aliens").style.display = "none";
    document.getElementById("doctor").style.display = "none";

    document.getElementById("easy").style.display = "unset";
    document.getElementById("medium").style.display = "unset";
    document.getElementById("hard").style.display = "unset";
  })
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("easy").addEventListener("click",  function() {
    document.getElementById("easy>").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";

    document.getElementById("easy").style.display = "unset";
    document.getElementById("medium").style.display = "unset";
    document.getElementById("hard").style.display = "unset";

    document.getElementById("companions").style.display = "none";
    document.getElementById("aliens").style.display = "none";
    document.getElementById("doctor").style.display = "none";
  })
});

companionsEasy
    



