const container = document.querySelector('.container');

function loadImages(numImages = 30) {
    let rand = Math.floor(Math.random() * 100);
    for (let i = rand; i < numImages + rand; i++) {
        const img = document.createElement('img');
        img.src = `https://picsum.photos/300/300?random=${i}`;

        img.style.margin = '5px'; 
        img.style.border = '1px solid #000';
        container.appendChild(img);
    }
}

loadImages();

window.addEventListener('scroll', () => {
    while (window.scrollY + window.innerHeight + 100 >= document.documentElement.scrollHeight) {
        loadImages();
    }
});
