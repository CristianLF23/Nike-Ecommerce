const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 800,
    desc: "O brilho perdura no Nike Air Force 1 '07, o tênis original do basquete que dá um toque de inovação naquilo que você conhece bem: sobreposições costuradas e duráveis, acabamentos simples e a quantidade perfeita de brilho para fazer você se destacar.",
    colors: [
      {
        code: "black",
        img: "./assets/images/air.png",
      },
      {
        code: "darkblue",
        img: "./assets/images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: 1000,
    desc: "Entregue-se ao conforto do Air Jordan 1 Zoom Air Comfort. Aperfeiçoado para tornar mais usável um dos tênis mais icônicos da história, ele combina couro de grão integral na parte de cima com um forro aconchegante e amortecimento ágil.",
    colors: [
      {
        code: "lightgray",
        img: "./assets/images/jordan.png",
      },
      {
        code: "green",
        img: "./assets/images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 900,
    desc: "Em 1973 nascia um dos calçados mais icônicos criados pela Nike, originário do basquete, é recriado em uma edição luxuosa com materiais que proporcionam um estilo incrível e um conforto notável.",
    colors: [
      {
        code: "lightgray",
        img: "./assets/images/blazer.png",
      },
      {
        code: "green",
        img: "./assets/images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 900,
    desc: "Fizemos escolhas de design únicas que, em comparação com métodos tradicionais, reduzem o desperdício: Swoosh bordado, sobreposições eficientes e entressola em espuma Crater.",
    colors: [
      {
        code: "black",
        img: "./assets/images/crater.png",
      },
      {
        code: "lightgray",
        img: "./assets/images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 650,
    desc: "A coleção Nike Move to Zero é um passo fundamental para a jornada da Nike em direção a zero emissão de carbono e zero desperdício para ajudar a proteger o futuro do esporte. Cada um dos Space Hippies é composto de uma porcentagem significativa de material reciclado.",
    colors: [
      {
        code: "gray",
        img: "./assets/images/hippie.png",
      },
      {
        code: "black",
        img: "./assets/images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelector(".productDesc");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //mudar o slider
    wrapper.style.transform = `translateX( ${-100 * index}vw)`;

    //mudar o produto escolhido
    choosenProduct = products[index];

    //mudar o texto do currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductDesc.textContent = choosenProduct.desc;
    currentProductPrice.textContent = "R$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //cores disponíveis
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
close.addEventListener("click", () => {
  payment.style.display = "none";
});
