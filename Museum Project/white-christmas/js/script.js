const phrase = "My dear partner, when what's left of you gets around to what's left to be gotten, what's left to be gotten won't be worth getting, whatever it is you've got left.";

const words = phrase.split(" "); /* splits up the words as they fall down and puts a space in between them */

words.forEach((word, i) => {
  const span = document.createElement("span"); 
  span.classList.add("word");
  span.textContent = word;

   /* the section above loops the words over one another and adds an index each time and has the span for each word   */

  // random horizontal placement
  span.style.left = Math.random() * 90 + "vw";

  // random fall speed
  const duration = Math.random() * 3 + 3; // 3–6 seconds
  span.style.animationDuration = duration + "s";

  // staggered delays so words fall one after another
  span.style.animationDelay = i * 0.3 + "s";

  document.body.appendChild(span);
});
