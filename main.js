const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productOrderDetail = document.querySelector(".product-order-detail");

const asideProductDetail = document.querySelector(".product-detail");
const closeAsideProductDetail = document.querySelector(".product-detail-close");

const cardsContainerProducts = document.querySelector(".cards-container");

let mobileMenuIsClose = false;
let shoppingCartIsOpen = false;
let currentOpen = null;
const availableProducts = [
  {
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Bike",
    price: 120,
  },
];

// Eventos

navEmail.addEventListener("click", () => {
  desktopMenu.classList.toggle("inactive");
});

// productCard.addEventListener("click", () => {
//   desktopMenu.classList.toggle("inactive");
// });

closeAsideProductDetail.addEventListener("click", () => {
  handleCurrentView(asideProductDetail);
});

burgerMenu.addEventListener("click", () => {
  //   if (productOrderDetail) {
  //     productOrderDetail.classList.add("inactive");
  //   }
  //   mobileMenuIsClose = mobileMenu.classList.contains("inactive");
  //   mobileMenu.classList.toggle("inactive");
  handleCurrentView(mobileMenu);
});

shoppingCart.addEventListener("click", () => {
  //   if (mobileMenuIsClose) {
  //     mobileMenu.classList.add("inactive");
  //   }
  //   shoppingCartIsOpen = !productOrderDetail.classList.contains("inactive");
  //   productOrderDetail.classList.toggle("inactive");
  handleCurrentView(productOrderDetail);
});

//   Funciones

function handleCurrentView(elem) {
  if (!elem) return;
  if (!!currentOpen) {
    if (currentOpen != elem) currentOpen.classList.add("inactive");
  }
  elem.classList.toggle("inactive");
  currentOpen = elem;
}

function CE(elem, attr = null, append = null) {
  const doc = document.createElement(elem);

  if (typeof attr === "string") {
    doc.innerText = attr;
  } else {
    for (const key in attr) {
      if (Object.hasOwnProperty.call(attr, key)) {
        const element = attr[key];
        doc.setAttribute(key, element);
      }
    }
  }

  if (!!append) doc.append(...append);

  return doc;
}

function renderProducts() {
  for (let index = 0; index < 10; index++) {
    cardsContainerProducts.appendChild(
      createProductCart(index, availableProducts[0])
    );
  }
}

renderProducts();

function createProductCart(id, product) {
  const img = CE("img", { src: product.image });
  img.addEventListener("click", () => {
    if (asideProductDetail.classList.contains("inactive")) {
      handleCurrentView(asideProductDetail);
    }
  });
  return CE("div", { class: "product-card", id: id }, [
    img,
    CE("div", { class: "product-info" }, [
      CE("div", null, [CE("p", `$ ${product.price}`), CE("p", product.name)]),
      CE("figure", null, [CE("img", { src: "./icons/bt_add_to_cart.svg" })]),
    ]),
  ]);
}
