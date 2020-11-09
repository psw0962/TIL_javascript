const vertical = document.querySelector('.vertical');
const horozontal = document.querySelector('.horozontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalWidth = targetRect.width / 2;
    const targetHalHeight = targetRect.height / 2;

    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        vertical.style.transform = `translateX(${x}px)`;
        horozontal.style.transform = `translateY(${y}px)`;
        target.style.transform = `translate(${x-targetHalWidth}px, ${y-targetHalHeight}px)`;
        tag.style.transform = `translate(${x}px, ${y}px)`;
        tag.innerHTML = `${x}px, ${y}px`;
    });
});