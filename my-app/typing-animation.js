const text = "hello, my name is Sadman";
    let index = 0;

    function typeNext() {
        if (index < text.length) {
            document.getElementById("text").textContent += text[index];
            index++;
            setTimeout(typeNext, 120); // typing speed
        }
    }

    typeNext();