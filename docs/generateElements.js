export function createElements(item) {
    let div = document.createElement("div");
    div.classList.add("gif__wrapper");
    let img = document.createElement("img");
    img.classList.add("gif");
    img.src = item.images.fixed_width.url;
    img.alt = 'generated gif';
    let main = document.querySelector('.main');
    main.appendChild(div);
    div.appendChild(img);
}