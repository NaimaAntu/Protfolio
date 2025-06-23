function append(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function calculate() {
    try {
      const result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch {
      document.getElementById("display").value = "Error";
    }
  }
  

  function toggleNav() {
    var nav = document.getElementById("navDropdown");
    nav.style.display = (nav.style.display === "block") ? "none" : "block";
  }

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector('.button-link').addEventListener('click', () => {
  console.log("Check my projects clicked");
});
