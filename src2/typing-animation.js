const text = "Welcome to my portfolio.";
    let index = 0;

    function typeNext() {
        if (index < text.length) {
            document.getElementById("text").textContent += text[index];
            index++;
            setTimeout(typeNext, 120); // typing speed
        }
    }

    typeNext();