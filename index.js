

const faqArr = ["Что такое Кухня на районе?", "Минимальной суммы заказа правда нет?", "А сколько стоит доставка?", "Почему наборы стоят по-разному?", "Куда писать, если есть вопросы или комментарии по заказу?", "В каком графике вы работаете?", "Почему стоит заказывать Кухню?", "Вы доставляете только наборы готовой еды?", "Ваши наборы еды диетические?", "Эти наборы всегда есть в наличии?", "Где вы берете продукты?"];

const faq_place = document.querySelector('.faq_team');

function renderFaq() {
    let html = '';
    faqArr.forEach((el) => {
        html += `
<div class="accordion">
    <div class="accordion_text">${el}</div>
    <p class="panel">Кухня на районе — это приложение,  в котором вы можете заказать вкусную и горячую еду с бесплатной доставкой за полчаса и без минимальной суммы заказа. Мы сами все готовим и доставляем нашими райдерами на 34 кухнях в разных районах Москвы. Заказ можно оплатить только онлайн с помощью Apple Pay, Google Pay или банковской картой.</p>
</div>
`
    });
    faq_place.innerHTML = html;
}
renderFaq()


const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.querySelector('.panel');
        if (panel.classList){
            panel.classList.toggle('panel_open')
        }
    });
}

// const next = document.querySelectorAll('.next');
// const prev = document.querySelectorAll('.prev');
// const img492 = document.querySelector('.img_card492');
// const img742 = document.querySelector('.img_card742');
// const img492index = 0;
// const img742index = 0;
// console.log(prev)


const arrImg = [
    './src/04.jpg',
    './src/01.jpg',
];

const buildSlider = (imgClass, imgSrc, images) => {
    let index = 0;
    images.forEach((src, key) => {
        if (imgSrc === src) {
            index = key;
        }
    });

    const slider = {
        images: [...images],
        currentImageIndex: index,
        img: document.querySelector(imgClass),
        next: function() {
            const maxIndex = this.images.length - 1;
            this.currentImageIndex = this.currentImageIndex === maxIndex
                ? 0
                : this.currentImageIndex + 1;
            this.img.src = this.images[this.currentImageIndex];
        },
        prev: function() {
            const maxIndex = this.images.length - 1;
            this.currentImageIndex = this.currentImageIndex === 0
                ? maxIndex
                : this.currentImageIndex - 1;
            this.img.src = this.images[this.currentImageIndex];
        },
    }

    slider.img.parentNode.querySelector('.prev').addEventListener('click', () => {
        slider.prev();
    })

    slider.img.addEventListener('click', () => {
        slider.next();
    })

    slider.img.parentNode.querySelector('.next').addEventListener('click', () => {
        slider.next();
    })

    slider.img.src = imgSrc;

    return slider;
};

buildSlider('.img_card492', './src/01.jpg', arrImg);
buildSlider('.img_card742', './src/04.jpg', arrImg);



