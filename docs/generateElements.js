export function createElements(item) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let main = document.querySelector('.main');
    div.classList.add("gif__wrapper");
    img.classList.add("gif");
    img.src = item.images.fixed_width.url;
    img.alt = 'generated gif';
    main.appendChild(div);
    div.appendChild(img);
}