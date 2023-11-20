
let hasAnimatedCodePerson = false;
let hasAnimatedCodeBeruf = false;
let hasAnimatedCodeBildung = false;
let hasAnimatedCodeLinkedin = false;


let titleDelay = 100;
let cursorDelay = 310;
let lineDelay = 1800;
let codeDelay = 10;


function animateText(textSelector, delay) {
    return new Promise((resolve) => {
        const textContainer = document.querySelector(textSelector);
        const text = textContainer.textContent;

        // Typing animation
        textContainer.textContent = '|';
        textContainer.style.visibility = 'visible';
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                textContainer.textContent = textContainer.textContent.slice(0, -1);
                if (i % 2 === 0 && i !== text.length - 1) {
                    setTimeout(() => {
                        textContainer.textContent += '|';
                    }, 0);
                } else if (i % 2 === 1 && i !== text.length - 1) {
                    setTimeout(() => {
                        textContainer.textContent += ' ';
                    }, 0);
                }
                textContainer.textContent += text[i];
                if (i === text.length-1) {
                    resolve();
                }
            }, i * delay);
        }
    });
}



function animateTextCode(textSelector, delay) {
    return new Promise((resolve) => {
        const textContainer = document.querySelector(textSelector);
        const originalHTML = textContainer.innerHTML;
        const text = textContainer.textContent;

        // Typing animation
        textContainer.textContent = '|';
        textContainer.style.visibility = 'visible';
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                textContainer.textContent = textContainer.textContent.slice(0, -1);
                if (i % 2 === 0 && i !== text.length - 1) {
                    setTimeout(() => {
                        textContainer.textContent += '|';
                    }, 0);
                } else if (i % 2 === 1 && i !== text.length - 1) {
                    setTimeout(() => {
                        textContainer.textContent += ' ';
                    }, 0);
                }
                textContainer.textContent += text[i];
                if (i === text.length-1) {
                    textContainer.innerHTML = originalHTML;
                    resolve();
                }
            }, i * delay);
        }
    });
}

function animateCursor(textSelector, delay, iter=4) {
    return new Promise((resolve) => {
        const textContainer = document.querySelector(textSelector);
        const text = textContainer.textContent;

        // Typing animation
        for (let i = 0; i < iter; i++) {
            if (i % 2 === 0) {
                setTimeout(() => {
                    textContainer.textContent += '|';
                }, i * delay);
            } else {
                setTimeout(() => {
                    textContainer.textContent = textContainer.textContent.slice(0, -1);
                }, i * delay);
            }
        }
        resolve();
    });
}

async function animateAll(titleDelay, cursorDelay, lineDelay, codeDelay) {
    await animateCursor('#initial-cursor-title', cursorDelay, iter=8);
    await new Promise(resolve => setTimeout(resolve, lineDelay*1.5));
    await animateText('h1', titleDelay);
    await animateCursor('h1', cursorDelay, iter=6);
    await new Promise(resolve => setTimeout(resolve, lineDelay));
    await animateText('h2', titleDelay/4);
    // await animateCursor('h2', cursorDelay);
    await new Promise(resolve => setTimeout(resolve, 0));
    await animateText('#schwerpunkt', titleDelay/3);
    await animateCursor('#schwerpunkt', cursorDelay, iter=10);
    await new Promise(resolve => setTimeout(resolve, lineDelay*2));
    // await animateTextCode('.code-person', codeDelay/1.1);
    // await new Promise(resolve => setTimeout(resolve, lineDelay*2));
    // await Promise.all([
    //     animateTextCode('.code-beruf', codeDelay),
    //     animateTextCode('.code-import', codeDelay),
    //     animateTextCode('.code-date-ifw', codeDelay),
    //     animateTextCode('.code-ifw', codeDelay),
    //     animateTextCode('.code-date-iag', codeDelay),
    //     animateTextCode('.code-iag', codeDelay),
    //     animateTextCode('.code-date-prak', codeDelay),
    //     animateTextCode('.code-prak', codeDelay),
    //     animateTextCode('.code-date-master', codeDelay),
    //     animateTextCode('.code-bildung', codeDelay),
    //     animateTextCode('.code-master', codeDelay),
    //     animateTextCode('.code-date-bachelor', codeDelay),
    //     animateTextCode('.code-bachelor', codeDelay),
    //     animateTextCode('.code-date-t_kurs', codeDelay),
    //     animateTextCode('.code-t_kurs', codeDelay),
    // ]);
}

animateAll(titleDelay, cursorDelay, lineDelay, codeDelay);







window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const section1 = document.getElementById('main');
    const section2 = document.getElementById('section-person');
    const section3 = document.getElementById('section-beruf');
    // Get more sections if needed

    // Check if the scroll position is within the bounds of a section
    if (window.scrollY >= section1.offsetTop + 200 && window.scrollY < section2.offsetTop) {
        navbar.classList.add('navbar-trans');
    } else if (window.scrollY >= section2.offsetTop - 200) {
        navbar.classList.remove('navbar-trans');
    }

    if (window.scrollY >= section1.offsetTop && !hasAnimatedCodePerson) {
        hasAnimatedCodePerson = true; // Set the flag to true to prevent re-running
        animateTextCode('.code-person', codeDelay / 1.1); // Assuming '10' is your codeDelay value
    }
    if (window.scrollY >= section2.offsetTop && !hasAnimatedCodeBeruf) {
        hasAnimatedCodeBeruf = true; // Set the flag to true to prevent re-running
        animateTextCode('.code-beruf', codeDelay);
        animateTextCode('.code-import', codeDelay);
        animateTextCode('.code-date-ifw', codeDelay);
        animateTextCode('.code-ifw', codeDelay);
        animateTextCode('.code-date-iag', codeDelay);
        animateTextCode('.code-iag', codeDelay);
        animateTextCode('.code-date-prak', codeDelay);
        animateTextCode('.code-prak', codeDelay);
        animateTextCode('.code-date-master', codeDelay);
        animateTextCode('.code-bildung', codeDelay);
        animateTextCode('.code-master', codeDelay);
        animateTextCode('.code-date-bachelor', codeDelay);
        animateTextCode('.code-bachelor', codeDelay);
        animateTextCode('.code-date-t_kurs', codeDelay);
        animateTextCode('.code-t_kurs', codeDelay);
    }
    if (window.scrollY >= section3.offsetTop && !hasAnimatedCodeLinkedin) {
        hasAnimatedCodeLinkedin = true; // Set the flag to true to prevent re-running
        animateTextCode('.code-linkedin', codeDelay*2);
    }
});




// Change color of brackets, parenthesis, numbers, and curly braces
const codeElements = document.querySelectorAll('code');
codeElements.forEach((codeElement) => {
    const text = codeElement.innerHTML;
    const coloredText = text.replace(/(\(|\)|\[|\]|\{|\}|\d+)/g, (match, p1) => {
        if (/\d+/.test(p1)) {
            return '<span style="color: #9EB691;">' + p1 + '</span>';
        } else {
            return '<span style="color: #CDAA08;">' + p1 + '</span>';
        }
    });
    codeElement.innerHTML = coloredText;
});



