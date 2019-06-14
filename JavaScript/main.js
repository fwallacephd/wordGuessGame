document.addEventListener("DOMContentLoaded", function() {
  //companions
  document.getElementById("companions").addEventListener("click", function() {
    document.getElementById("companions").style.display = "none";
    document.getElementById("aliens").style.display = "none";
    document.getElementById("doctor").style.display = "none";

    document.getElementById("easy").style.display = "unset";
    document.getElementById("medium").style.display = "unset";
    document.getElementById("hard").style.display = "unset";

    document.getElementById("easy").addEventListener("click", function() {
      document.getElementById("easy").style.display = "none";
      document.getElementById("medium").style.display = "none";
      document.getElementById("hard").style.display = "none";

      const element = document.getElementById("easyComCheck");
      if (element.classList.contains("easyCom")) {
        document.querySelector(".easyCom").style.display = "unset";
      }
    });

    document.getElementById("medium").addEventListener("click", function() {
      document.getElementById("easy").style.display = "none";
      document.getElementById("medium").style.display = "none";
      document.getElementById("hard").style.display = "none";

      const element = document.getElementById("mediumComCheck");
      if (element.classList.contains("mediumCom")) {
        document.querySelector(".mediumCom").style.display = "unset";
      }
    });

    document.getElementById("hard").addEventListener("click", function() {
      document.getElementById("easy").style.display = "none";
      document.getElementById("medium").style.display = "none";
      document.getElementById("hard").style.display = "none";

      const element = document.getElementById("hardComCheck");
      if (element.classList.contains("hardCom")) {
        document.querySelector(".hardCom").style.display = "unset";
      }
    });
  });

  //companion end

  //alien
  document.getElementById("aliens").addEventListener("click", function() {
    document.getElementById("companions").style.display = "none";
    document.getElementById("aliens").style.display = "none";
    document.getElementById("doctor").style.display = "none";

    document.getElementById("easy").style.display = "unset";
    document.getElementById("medium").style.display = "unset";
    document.getElementById("hard").style.display = "unset";

    document.getElementById("easy").addEventListener("click", function() {
      document.getElementById("easy").style.display = "none";
      document.getElementById("medium").style.display = "none";
      document.getElementById("hard").style.display = "none";

      const element = document.getElementById("easyAlienCheck");
      if (element.classList.contains("easyAlien")) {
        document.querySelector(".easyAlien").style.display = "unset";
      }
    });

    document.getElementById("medium").addEventListener("click", function() {
      document.getElementById("easy").style.display = "none";
      document.getElementById("medium").style.display = "none";
      document.getElementById("hard").style.display = "none";

      const element = document.getElementById("mediumAlienCheck");
      if (element.classList.contains("mediumAlien")) {
        document.querySelector(".mediumAlien").style.display = "unset";
      }
    });

    document.getElementById("hard").addEventListener("click", function() {
      document.getElementById("easy").style.display = "none";
      document.getElementById("medium").style.display = "none";
      document.getElementById("hard").style.display = "none";

      const element = document.getElementById("hardAlienCheck");
      if (element.classList.contains("hardAlien")) {
        document.querySelector(".hardAlien").style.display = "unset";
      }
    });
  });
  //alien end

  //doctor
  document.getElementById("doctor").addEventListener("click", function() {
    document.getElementById("companions").style.display = "none";
    document.getElementById("aliens").style.display = "none";
    document.getElementById("doctor").style.display = "none";

    document.getElementById("easy").style.display = "unset";
    document.getElementById("medium").style.display = "unset";
    document.getElementById("hard").style.display = "unset";

    document.getElementById("easy").addEventListener("click", function() {
      document.getElementById("easy").style.display = "none";
      document.getElementById("medium").style.display = "none";
      document.getElementById("hard").style.display = "none";

      const element = document.getElementById("easyDoctorCheck");
      if (element.classList.contains("easyDoctor")) {
        document.querySelector(".easyDoctor").style.display = "unset";
      }
    });

    document.getElementById("medium").addEventListener("click", function() {
      document.getElementById("easy").style.display = "none";
      document.getElementById("medium").style.display = "none";
      document.getElementById("hard").style.display = "none";

      const element = document.getElementById("mediumDoctorCheck");
      if (element.classList.contains("mediumDoctor")) {
        document.querySelector(".mediumDoctor").style.display = "unset";
      }
    });

    document.getElementById("hard").addEventListener("click", function() {
      document.getElementById("easy").style.display = "none";
      document.getElementById("medium").style.display = "none";
      document.getElementById("hard").style.display = "none";

      const element = document.getElementById("hardDoctorCheck");
      if (element.classList.contains("hardDoctor")) {
        document.querySelector(".hardDoctor").style.display = "unset";
      }
    });
  });
  //doctor end
});