document.addEventListener('DOMContentLoaded', () => {
    const registerScreen = document.getElementById('register-screen');
    const loginScreen = document.getElementById('login-screen');
    const artCreator = document.getElementById('art-creator');
    const menuButton = document.getElementById('menu-button');
    const sideMenu = document.getElementById('side-menu');

    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    // Show the register screen initially
    registerScreen.classList.add('active');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle registration logic here
        // On success, show the login screen
        registerScreen.classList.remove('active');
        loginScreen.classList.add('active');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle login logic here
        // On success, show the art creator screen
        loginScreen.classList.remove('active');
        artCreator.classList.add('active');
    });

    menuButton.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !menuButton.contains(e.target)) {
            sideMenu.classList.remove('active');
        }
    });

    const pixelSizeSelect = document.getElementById('pixel-size');
    const colorPicker = document.getElementById('color-picker');
    const canvas = document.getElementById('pixel-canvas');
    const clearCanvasButton = document.getElementById('clear-canvas');
    const ctx = canvas.getContext('2d');

    let currentColor = colorPicker.value;
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    pixelSizeSelect.addEventListener('change', () => {
        const pixelSize = parseInt(pixelSizeSelect.value);
        initializeCanvas(pixelSize);
    });

    colorPicker.addEventListener('input', (e) => {
        currentColor = e.target.value;
    });

    clearCanvasButton.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid(parseInt(pixelSizeSelect.value));
    });

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

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        const pixelSize = parseInt(pixelSizeSelect.value);
        const rect = canvas.getBoundingClientRect();
        [lastX, lastY] = [Math.floor((e.clientX - rect.left) / pixelSize) * pixelSize, Math.floor((e.clientY - rect.top) / pixelSize) * pixelSize];
        ctx.fillStyle = currentColor;
        ctx.fillRect(lastX, lastY, pixelSize, pixelSize);
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        const pixelSize = parseInt(pixelSizeSelect.value);
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / pixelSize) * pixelSize;
        const y = Math.floor((e.clientY - rect.top) / pixelSize) * pixelSize;
        if (x !== lastX || y !== lastY) {
            ctx.fillStyle = currentColor;
            ctx.fillRect(x, y, pixelSize, pixelSize);
            [lastX, lastY] = [x, y];
        }
    });

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    canvas.addEventListener('mouseout', () => {
        isDrawing = false;
    });

    // Initialize the canvas with the default pixel size
    initializeCanvas(parseInt(pixelSizeSelect.value));
});

function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}
