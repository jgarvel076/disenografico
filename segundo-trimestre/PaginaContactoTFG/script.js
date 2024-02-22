let originalFont = true;

function toggleFont() {
    const body = document.querySelector('body');
    console.log(body.style.fontFamily)
    if (originalFont) {
        body.style.fontFamily = "Inter";
    } else {
        body.style.fontFamily = "OpenDislexic, sans-serif";
    }
    originalFont = !originalFont;
}