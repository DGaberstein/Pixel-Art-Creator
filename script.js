document.addEventListener('DOMContentLoaded', () => {
    const registerScreen = document.getElementById('register-screen');
    const loginScreen = document.getElementById('login-screen');
    const artCreator = document.getElementById('art-creator');
    const menuButton = document.getElementById('menu-button');
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    // Show the register screen initially
    if (registerScreen) {
        registerScreen.classList.add('active');
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle registration logic here
            // On success, show the login screen
            registerScreen.classList.remove('active');
            loginScreen.classList.add('active');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle login logic here
            // On success, show the art creator screen
            loginScreen.classList.remove('active');
            artCreator.classList.add('active');
        });
    }

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            sideMenuOpened = !sideMenuOpened;
        });
    }

    overlay.addEventListener('click', () => {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
        sideMenuOpened = false;
    });

    const sideMenuLinks = sideMenu.querySelectorAll('a');
    let sideMenuOpened = false;

    sideMenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (!sideMenuOpened) {
                e.preventDefault();
                alert('Please open the side menu first!');
            } else {
                sideMenu.classList.remove('active');
                overlay.classList.remove('active');
                sideMenuOpened = false;
            }
        });
    });

    const pixelSizeSelect = document.getElementById('pixel-size');
    const colorPicker = document.getElementById('color-picker');
    const canvas = document.getElementById('pixel-canvas');
    const clearCanvasButton = document.getElementById('clear-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;

    let currentColor = colorPicker ? colorPicker.value : '#000000';

    if (pixelSizeSelect) {
        pixelSizeSelect.addEventListener('change', () => {
            const pixelSize = parseInt(pixelSizeSelect.value);
            initializeCanvas(pixelSize);
        });
    }

    if (colorPicker) {
        colorPicker.addEventListener('input', (e) => {
            currentColor = e.target.value;
        });
    }

    if (clearCanvasButton) {
        clearCanvasButton.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawGrid(parseInt(pixelSizeSelect.value));
        });
    }

    function initializeCanvas(pixelSize) {
        const canvasSize = 512; // Fixed canvas size
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        drawGrid(pixelSize);
    }

    function drawGrid(pixelSize) {
        const canvasSize = canvas.width;
        ctx.clearRect(0, 0, canvasSize, canvasSize);
        ctx.strokeStyle = '#ccc';

        for (let x = 0; x < canvasSize; x += pixelSize) {
            for (let y = 0; y < canvasSize; y += pixelSize) {
                ctx.strokeRect(x, y, pixelSize, pixelSize);
            }
        }
    }

    if (canvas) {
        canvas.addEventListener('mousedown', (e) => {
            const pixelSize = parseInt(pixelSizeSelect.value);
            const rect = canvas.getBoundingClientRect();
            const x = Math.floor((e.clientX - rect.left) / pixelSize) * pixelSize;
            const y = Math.floor((e.clientY - rect.top) / pixelSize) * pixelSize;
            ctx.fillStyle = currentColor;
            ctx.fillRect(x, y, pixelSize, pixelSize);
        });
    }

    // Initialize the canvas with the default pixel size
    if (pixelSizeSelect) {
        initializeCanvas(parseInt(pixelSizeSelect.value));
    }
});

function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}
