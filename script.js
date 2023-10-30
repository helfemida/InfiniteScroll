const container = document.querySelector('.container');
let isLoadingDisplayed = false;

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

function showLoading() {
    const loading = document.createElement('h2');
    loading.textContent = 'The page is loading...';
    container.appendChild(loading);
    setTimeout(() => {
        loading.textContent = "Tumblr 2014"
        loadImages();
    }, 1000);
}

showLoading();

window.addEventListener('scroll', () => {
    while (window.scrollY + window.innerHeight + 100 >= document.documentElement.scrollHeight) {
        loadImages()
    }
    
});
