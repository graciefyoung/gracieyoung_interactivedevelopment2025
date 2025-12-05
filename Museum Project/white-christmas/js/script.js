const phrase = "My dear partner, when what's left of you gets around to what's left to be gotten, what's left to be gotten won't be worth getting, whatever it is you've got left.";

$(".bounce") .on ("click", function() {
const words = phrase.split(" "); // split phrase into words

$.each(words, function(i, word) {
    // create span with class "word" and set text
    const $span = $("<span>").addClass("word").text(word);

    // random horizontal placement
    $span.css("left", Math.random() * 80 + 5 + "vw");

    // random fall speed
    const duration = Math.random() * 3 + 3; // 3–6 seconds
    $span.css("animation-duration", duration + "s");

    // staggered delay
    $span.css("animation-delay", i * 0.3 + "s");

    // append to body
    $("body").append($span);
});
});
