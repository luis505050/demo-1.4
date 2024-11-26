document.getElementById("arrowButton").addEventListener("click", function () {
    const targetDiv = document.getElementById("content-media-video");
    targetDiv.scrollIntoView({ behavior: "smooth" });
  });
  
  // Detectar el scroll para aplicar animaciones
  window.addEventListener("scroll", function () {
    const targetDiv = document.getElementById("targetDiv");
    const rect = targetDiv.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
  
    if (isInView) {
      targetDiv.classList.add("visible");
    } else {
      targetDiv.classList.remove("visible");
    }
  });
  