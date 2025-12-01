document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach(box => {
    box.addEventListener("click", () => {
      // Close any currently open slide words
      document.querySelectorAll(".slide-word.show").forEach(el => 
        el.classList.remove("show")
      );

      // Open the one inside this box
      const slideWord = box.querySelector(".slide-word");
      if (slideWord) slideWord.classList.add("show");
    });

    // Optional: allow keyboard "Enter" to trigger
    box.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        box.click();
      }
    });
  });
});
