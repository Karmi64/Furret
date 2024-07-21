body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #001a1c;
    margin: 0;
}

.card-container {
    perspective: 1000px;
}

.card {
    width: 300px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: transform 0.1s;
}

.card:hover {
    transform: rotateY(180deg);
}

.card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    color: #fff;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

.card-front {
    background-color: #48f2fe;
}

.card-back {
    background-color: #4caf50;
    transform: rotateY(180deg);
}
