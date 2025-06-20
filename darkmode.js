const themes = [
    {
        bg: 'black',
    
    },
    {
        bg: 'white',
       
    }
];

let currentIndex = 0;

function applyTheme() {
    const body = document.body;
    const theme = themes[currentIndex];
    const fg = theme.bg === 'black' ? 'white' : 'black';

    body.style.backgroundColor = theme.bg;
    body.style.color = fg;
    body.style.fontFamily = theme.font;
}

function switchColor() {
    currentIndex = (currentIndex + 1) % themes.length;
    applyTheme();
}

const colorButton = document.getElementById('colorButton');

if (colorButton && fontButton) {
    colorButton.addEventListener('click', switchColor);
} else {
    console.warn('Buttons with IDs "colorButton" .');
}



