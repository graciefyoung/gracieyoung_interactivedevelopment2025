document.addEventListener("DOMContentLoaded", () => {  // this runs the code onces the full html part of the coding is ran on the website
  const boxes = document.querySelectorAll(".box");  //this searches for all the box descriptions

  boxes.forEach(box => {  //this runs the code for each box the code finds 

    box.addEventListener("click", () => { //when the box is clicked a function happens 
      // Closes any currently open slide words
      document.querySelectorAll(".slide-word.show").forEach(el => //this line and the one below states that when clicked first remove the word before and then show the new one for the clicked box
        el.classList.remove("show")
      );

      // Open the one inside this box
      const slideWord = box.querySelector(".slide-word");
      if (slideWord) slideWord.classList.add("show");
    });

   
  });
});
