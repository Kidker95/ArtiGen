const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

function clearCanvas() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

// Mondrian-inspired painting
function mondrian() {
    clearCanvas();
    const colors = ["#FF0000", "#0000FF", "#FFFF00", "#FFFFFF", "#000000"];
    const numShapes = 20;

    if (Math.random() > 0.5) drawGrid();

    for (let i = 0; i < numShapes; i++) {
        const x = Math.random() * (myCanvas.width - 20) + 10;
        const y = Math.random() * (myCanvas.height - 20) + 10;
        const width = Math.random() * (myCanvas.width / 3) + myCanvas.width / 20;
        const height = Math.random() * (myCanvas.height / 3) + myCanvas.height / 20;
        const color = colors[Math.floor(Math.random() * colors.length)];

        ctx.beginPath();
        ctx.fillStyle = color;

        if (Math.random() > 0.5) {
            ctx.fillRect(x, y, width, height);
        } else {
            ctx.arc(x, y, width / 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

function drawGrid() {
    const lineWidth = Math.random() * 10 + 2;
    const numLines = Math.floor(Math.random() * 10) + 5;

    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }

    for (let i = 0; i < numLines; i++) {
        const x = Math.random() * myCanvas.width;
        drawLine(x, 0, x, myCanvas.height);
    }
    for (let i = 0; i < numLines; i++) {
        const y = Math.random() * myCanvas.height;
        drawLine(0, y, myCanvas.width, y);
    }
}

// Agam-inspired painting
function randomAgam() {
    clearCanvas();
    const colorPalettes = [
        ['#ff4c4c', '#4cff4c', '#4c4cff', '#ffff4c', '#ff4cff', '#4cffff'],
        ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4'],
        ['#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff'],
        ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
        ['#e377c2', '#7f7f7f', '#bcbd22', '#17becf', '#b0e0e6', '#ff6347'],
        ['#ff9999', '#66b2ff', '#99ff99', '#ffcc99', '#ff99cc', '#c0c0c0']
    ];
    const colors = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    drawVerticalStripes(colors);

    const patternChoice = Math.random();
    if (patternChoice > 0.66) {
        drawCheckerboard(colors);
    } else if (patternChoice > 0.33) {
        drawLinePattern(colors);
    } else {
        drawCombinedPattern(colors);
    }

    drawRandomShapes(colors);
}

function drawVerticalStripes(colors) {
    const stripeWidth = 20;
    for (let x = 0; x < myCanvas.width; x += stripeWidth) {
        ctx.beginPath();
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillRect(x, 0, stripeWidth, myCanvas.height);
        ctx.closePath();
    }
}

function drawCheckerboard(colors) {
    const squareSize = 50;
    for (let x = 0; x < myCanvas.width; x += squareSize) {
        for (let y = 0; y < myCanvas.height; y += squareSize) {
            ctx.beginPath();
            ctx.fillStyle = (x / squareSize + y / squareSize) % 2 === 0 ? '#FFFFFF' : colors[Math.floor(Math.random() * colors.length)];
            ctx.fillRect(x, y, squareSize, squareSize);
            ctx.closePath();
        }
    }
}

function drawLinePattern(colors) {
    const lineSpacing = 30;
    ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.lineWidth = 2;

    for (let x = 0; x < myCanvas.width; x += lineSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, myCanvas.height);
        ctx.stroke();
    }

    for (let y = 0; y < myCanvas.height; y += lineSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(myCanvas.width, y);
        ctx.stroke();
    }
}

function drawCombinedPattern(colors) {
    drawCheckerboard(colors);
    drawLinePattern(colors);
}

function drawRandomShapes(colors) {
    const numShapes = 20;
    const maxSize = 100;

    for (let i = 0; i < numShapes; i++) {
        const x = Math.random() * myCanvas.width;
        const y = Math.random() * myCanvas.height;
        const size = Math.random() * maxSize;
        const color = colors[Math.floor(Math.random() * colors.length)];

        ctx.beginPath();
        ctx.fillStyle = color;
        if (Math.random() > 0.5) {
            ctx.fillRect(x, y, size, size);
        } else {
            ctx.arc(x, y, size / 2, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.closePath();
    }
}


function drawVerticalStripes(colors) {
    const stripeWidth = 20;
    for (let x = 0; x < myCanvas.width; x += stripeWidth) {
        ctx.beginPath();
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillRect(x, 0, stripeWidth, myCanvas.height);
        ctx.closePath();
    }
}





function drawVerticalStripes(colors) {
    const stripeWidth = 20;
    for (let x = 0; x < myCanvas.width; x += stripeWidth) {
        ctx.beginPath();
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillRect(x, 0, stripeWidth, myCanvas.height);
        ctx.closePath();
    }
}



// Pollock-inspired painting
function randomPollock() {
    clearCanvas();
    const colorPalettes = [
        ['#3B3B3B', '#D3D3D3', '#FF5733', '#FFC300', '#DAF7A6', '#C70039', '#900C3F', '#581845'],
        ['#8B4513', '#FFD700', '#DC143C', '#228B22', '#483D8B', '#FF4500', '#DA70D6', '#00CED1'],
        ['#000000', '#FFFFFF', '#FF6347', '#40E0D0', '#EE82EE', '#FFD700', '#ADFF2F', '#1E90FF']
    ];
    const colors = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];

    function getRandomColor() { return colors[Math.floor(Math.random() * colors.length)]; }
    function getRandomLineWidth() { return Math.random() * 5 + 1; }
    function getRandomPosition() { return { x: Math.random() * myCanvas.width, y: Math.random() * myCanvas.height }; }

    function splatter() {
        for (let i = 0; i < 1000; i++) {
            const startPos = getRandomPosition();
            const endPos = getRandomPosition();
            const color = getRandomColor();
            const lineWidth = getRandomLineWidth();
            ctx.beginPath();
            ctx.moveTo(startPos.x, startPos.y);
            ctx.lineTo(endPos.x, endPos.y);
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
        }
    }

    function drip() {
        for (let i = 0; i < 50; i++) {
            const startPos = getRandomPosition();
            const color = getRandomColor();
            const lineWidth = getRandomLineWidth();
            ctx.beginPath();
            ctx.arc(startPos.x, startPos.y, lineWidth * 2, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
        }
    }

    splatter();
    drip();
}


// Malevich-inspired painting
function randomMalevich() {
    clearCanvas();
    const colors = ['#FF0000', '#0000FF', '#FFFF00', '#FFA500', '#000000', '#FFFFFF', '#32CD32', '#800080', '#8B4513', '#FFD700'];
    const numShapes = 20;

    // Draw shapes
    for (let i = 0; i < numShapes; i++) {
        const x = Math.random() * (myCanvas.width - 20) + 10;
        const y = Math.random() * (myCanvas.height - 20) + 10;
        const size = Math.random() * 100 + 20;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * Math.PI * 2;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.fillStyle = color;
        if (Math.random() > 0.5) {
            ctx.fillRect(-size / 2, -size / 2, size, size);
        } else {
            ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    // Draw random lines
    const numLines = Math.floor(Math.random() * 10) + 5;
    for (let i = 0; i < numLines; i++) {
        const x1 = Math.random() * myCanvas.width;
        const y1 = Math.random() * myCanvas.height;
        const x2 = Math.random() * myCanvas.width;
        const y2 = Math.random() * myCanvas.height;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const lineWidth = Math.random() * 5 + 1;
        const lineStyle = Math.random() > 0.5 ? 'dashed' : 'solid';

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.setLineDash(lineStyle === 'dashed' ? [10, 5] : []);
        ctx.stroke();
    }
}

function saveCanvas() {
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = myCanvas.toDataURL();
    link.click();
}

