//How do I hide the questions so that they only show up when you are ready to guess.
//How do I write a conditional that uses both the category and  difficulty to display the right questonn. 

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("companions").addEventListener("click",  function() {
    document.getElementById("companions").style.display = "none";
    document.getElementById("aliens").style.display = "none";
    document.getElementById("doctor").style.display = "none";

    document.getElementById("easy").style.display = "unset";
    document.getElementById("medium").style.display = "unset";
    document.getElementById("hard").style.display = "unset";

  })

  document.getElementById("aliens").addEventListener("click",  function() {
    document.getElementById("companions").style.display = "none";
    document.getElementById("aliens").style.display = "none";
    document.getElementById("doctor").style.display = "none";

    document.getElementById("easy").style.display = "unset";
    document.getElementById("medium").style.display = "unset";
    document.getElementById("hard").style.display = "unset";
  })

  document.getElementById("doctor").addEventListener("click",  function() {
    document.getElementById("companions").style.display = "none";
    document.getElementById("aliens").style.display = "none";
    document.getElementById("doctor").style.display = "none";

    document.getElementById("easy").style.display = "unset";
    document.getElementById("medium").style.display = "unset";
    document.getElementById("hard").style.display = "unset";
  })

  document.getElementById("easy").addEventListener("click",  function() {
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";

    document.querySelector(".easyCom").style.display = "unset";
  })

  document.getElementById("medium").addEventListener("click",  function() {
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";

    document.querySelector(".mediumCom").style.display = "unset";
  })

  document.getElementById("hard").addEventListener("click",  function() {
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";

    document.querySelector(".hardCom").style.display = "unset";
  })
});




    



