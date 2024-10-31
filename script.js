document.getElementById('ani').addEventListener('click', function() {
    const boxes = [
        document.getElementById('box1'),
        document.getElementById('box2'),
        document.getElementById('box3'),
        document.getElementById('box4')
    ];

    boxes.forEach((box, index) => {
        
        box.style.visibility = 'visible';

        
        let translateX = 0;
        let translateY = 0;

        switch (index) {
            case 0: 
                translateX = -400;
                break;
            case 1:
                translateX = 300;
                break;
            case 2: 
                translateY = -200;
                break;
            case 3: 
                translateY = 200;
                break;
        }

        
        anime({
            targets: box,
            translateX: translateX,
            translateY: translateY,
            duration: 2000,
            easing: 'easeInOutQuad',
            scale:[0,1]
        });
    });
});

// --------------------------------itrobutton---------------------------------------------------
const introButton = document.querySelector('.intro-button');

    introButton.addEventListener('click', () => {
        anime({
            targets: '.intro-button',
            translateX:85,
            duration: 1000,
            easing: 'easeInOutQuad',
            complete: () => {
                anime({
                    targets: '.intro-button',
                    scale:[0],
                    duration: 1000,
                    easing: 'easeInOutQuad',
                    complete: () => {
                        anime({
                            targets: '.intro-button',
                            translateX: 0,
                            duration: 2000,
                            scale:[1],
                            easing: 'easeInOutQuad',
                            
                        });
                    }
                });
            }
        });
    });



// const cardDetailsButton = document.querySelector('.card-details-button');

// cardDetailsButton.addEventListener('click',()=>{
//     anime({
//         targets:'.card-details-button',
//         rotate:'2turn',
//         duration:2000,
//         easing: 'easeInOutQuad',
//         complete:() => {
//             anime({
//                 targets:'.card-details-button',
//                 scale:[0],
//                 duration:1000,
//                 easing: 'easeInOutQuad',
//                 complete:() => {
//                     anime({
//                         targets:'.card-details-button',
//                         scale:[1],
//                         duration:1000,
//                         easing: 'easeInOutQuad',
//                     })
//                 }
//             })
//         }

//     });
// })

// ---------------------------------------chnagethetheme-------------------------------------


const changeTheme = document.getElementById('changetheme');
        const bodyColor = document.querySelector('body');
        
        const themes = [
            { background: 'white', text: 'black' }, 
            { background: 'red', text: 'white' },     // Theme 1
            { background: 'blue', text: 'yellow' },   // Theme 2
            { background: 'green', text: 'black' },   // Theme 3
            { background: 'yellow', text: 'purple' }   // Theme 4
        ];

        let currentThemeIndex = 0;

        changeTheme.addEventListener('click', () => {
            currentThemeIndex = (currentThemeIndex + 1) % themes.length;
            bodyColor.style.background = themes[currentThemeIndex].background;
            bodyColor.style.color = themes[currentThemeIndex].text;
        });

// ---------------------------------------gradentthetheme-------------------------------------

const themeButton = document.getElementById('themeChange');
const bodyElement = document.querySelector('body');

const theme = [
    { 
        background: 'linear-gradient(to right, white, lightgray)', 
        text: 'black', 
        font: 'Arial, sans-serif' 
    }, 
    { 
        background: 'linear-gradient(to right, red, darkred)', 
        text: 'white', 
        font: 'Courier New, monospace' 
    },     
    { 
        background: 'linear-gradient(to right, blue, lightblue)', 
        text: 'yellow', 
        font: 'Georgia, serif' 
    },   
    { 
        background: 'linear-gradient(to right, green, lightgreen)', 
        text: 'black', 
        font: 'Times New Roman, serif' 
    },   
    { 
        background: 'linear-gradient(to right, yellow, orange)', 
        text: 'purple', 
        font: 'Verdana, sans-serif' 
    }   
];

let currentThemeIndexs = 0;

themeButton.addEventListener('click', () => {
    currentThemeIndexs = (currentThemeIndexs + 1) % theme.length;

    setTimeout(() => {
        bodyElement.style.background = theme[currentThemeIndexs].background;
        bodyElement.style.color = theme[currentThemeIndexs].text;
        bodyElement.style.fontFamily = theme[currentThemeIndexs].font; 
    }, 4000); 
});
