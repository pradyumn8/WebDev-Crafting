document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector("textarea");
    const characterCount = document.querySelector('#characterCount');
    const wordsCount = document.querySelector('#wordCount');
    const sentenceCount = document.querySelector('#sentenceCount');

    input.addEventListener('input', function(){
        const text = input.value.trim();

        // character count
        characterCount.textContent = text.length;

            // Words count
            const words = text.split(/\s+/).filter(word => word.length > 0);
            wordsCount.textContent = words.length;

            // Sentence count
            const sentences = text.split(/[.!?]+/).filter(sentence => sentence.length > 0);
            sentenceCount.textContent = sentences.length;

    });
});