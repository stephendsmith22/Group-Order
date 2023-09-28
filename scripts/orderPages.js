import { restaurants } from "../data/restaurants.js";

const menuContainer = document.querySelector(".menu");
const carousel = document.querySelector('.menu-item-carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById("next");
let menuTranslate = 0;

let topSectionHTML = '', menuHTML = '';
const restaurantName = localStorage.getItem("current_restaurant");
const curIndex = restaurants.findIndex(rName => rName.name === restaurantName);
const curRestaurant = restaurants[curIndex];

displayTitlePage();
displayMenuCarousel();

prevButton.addEventListener('click', () => {
  if(true){
    menuTranslate += carousel.clientWidth / 6;
    carousel.style.transform = "translateX(" + menuTranslate + "px" + ")";
  }
});

nextButton.addEventListener('click', () => {
  menuTranslate -= carousel.clientWidth / 6;
  carousel.style.transform = "translateX(" + menuTranslate + "px" + ")";
});

function displayTitlePage(){
    topSectionHTML += `
    <div class="top-section">
          <div class="title">
            <img
              class="restaurant-background"
              src="${curRestaurant.background_image}"
              alt=""
            />
            <img
              class="logo"
              src="${curRestaurant.logo_image}"
              alt=""
            />
          </div>
        </div>
        <p class="restaurant-name">${curRestaurant.name}</p>
        <div class="restaurant-info">
          <div class="info">
            <div class="top-info">
              <p>Chicken. Sides. Desserts. &hairsp; &#8226; &hairsp; ${curRestaurant.rating.stars}</p>
              <img class="star-icon" src="images/star-icon.png" alt="" />
              <p>
                ${curRestaurant.rating.ratings}+ ratings &hairsp; &#8226; &hairsp; ${curRestaurant.distance}mi &hairsp; &#8226;
                &hairsp; $$
              </p>
            </div>
            <p>
              <span id="open-text">Open now</span> &hairsp; &#8226; &hairsp;
              Closes at 9:30 PM
            </p>
            <div class="pricing-container">
              <p>Pricing & Fees</p>
              <img src="images/info-icon.png" alt="" />
            </div>
          </div>
          <div class="more-info-container">
            <button>
              <img src="images/info-icon.png" alt="" />
              <p>More Info</p>
            </button>
          </div>
        </div>
        <div class="bottom-container">
          <div class="delivery-container">
            <div class="delivery-fee-container">
              <h1 id="delivery-fee">$${curRestaurant.fee / 100}</h1>
              <p>delivery fee</p>
            </div>
            <div class="line"></div>
            <div class="delivery-time-container">
              <h1 id="delivery-time">${curRestaurant.wait} min</h1>
              <p>delivery time</p>
            </div>
          </div>
          <div class="save-and-group-container">
            <button id="save-button">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="styles__StyledInlineSvg-sc-12l8vvi-0 djCUZq"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.67185 3.72612C2.26019 4.16627 2 4.81146 2 5.59673C2 6.48133 2.41645 7.37438 3.393 8.48977C4.37843 9.61529 5.80774 10.8289 7.63138 12.3738L7.63285 12.375L8.00246 12.6894L8.36781 12.381C8.36816 12.3807 8.36851 12.3804 8.36885 12.3801C10.1922 10.8321 11.6213 9.61719 12.6068 8.49084C13.5835 7.37444 14 6.48135 14 5.59673C14 4.81146 13.7398 4.16627 13.3281 3.72612C12.9241 3.2941 12.3198 3 11.5 3C10.8274 3 10.382 3.26132 9.98697 3.64942C9.77672 3.856 9.58674 4.09375 9.3841 4.36076C9.35273 4.4021 9.32008 4.44553 9.28635 4.49038C9.12118 4.71003 8.93037 4.96376 8.73904 5.17366C8.54956 5.38154 8.28128 5.5 8 5.5C7.71872 5.5 7.45044 5.38154 7.26096 5.17366C7.06963 4.96376 6.87883 4.71003 6.71366 4.49039C6.67993 4.44554 6.64727 4.40211 6.6159 4.36076C6.41326 4.09375 6.22328 3.856 6.01303 3.64942C5.61803 3.26132 5.17257 3 4.5 3C3.6802 3 3.07591 3.2941 2.67185 3.72612ZM1.21115 2.35998C2.01809 1.49718 3.1638 1 4.5 1C5.82743 1 6.75047 1.57015 7.41472 2.22279C7.6365 2.44069 7.83077 2.66879 8 2.88167C8.16923 2.66879 8.3635 2.44069 8.58528 2.22279C9.24953 1.57015 10.1726 1 11.5 1C12.8362 1 13.9819 1.49718 14.7889 2.35998C15.5882 3.21465 16 4.36783 16 5.59673C16 7.18405 15.2265 8.53401 14.112 9.80779C13.0224 11.0531 11.4886 12.3552 9.73966 13.8399L9.66219 13.9057L9.65999 13.9075L8.64499 14.7642C8.27139 15.0795 7.72457 15.0785 7.35215 14.7618L6.33862 13.8998L6.27811 13.8485C4.52187 12.3608 2.98153 11.0559 1.88825 9.80723C0.77355 8.53406 0 7.18407 0 5.59673C0 4.36783 0.411805 3.21465 1.21115 2.35998Z"
                  fill="#191919"
                ></path>
              </svg>
              <p>Save</p>
            </button>
            <button id="group-order-button">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="styles__StyledInlineSvg-sc-12l8vvi-0 jFpckg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5 12C19.9853 12 22 9.98528 22 7.5C22 5.01472 19.9853 3 17.5 3C17.3772 3 17.2555 3.00492 17.1352 3.01457C17.9906 4.11519 18.5 5.49811 18.5 7C18.5 8.92607 17.6623 10.6565 16.3313 11.8467C16.704 11.9467 17.0958 12 17.5 12Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 7C17 9.76142 14.7614 12 12 12C9.23857 12 7 9.76142 7 7C7 4.23857 9.23857 2 12 2C14.7614 2 17 4.23857 17 7ZM12 10C13.6569 10 15 8.65685 15 7C15 5.34314 13.6569 4 12 4C10.3431 4 9 5.34314 9 7C9 8.65685 10.3431 10 12 10Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 21C19.1046 21 20 20.1046 20 19C20 17.8634 19.5207 16.6943 18.85 15.8C17.6447 14.193 15.488 13 12 13C8.51201 13 6.35524 14.193 5.15 15.8C4.47924 16.6943 4 17.8634 4 19C4 20.1046 4.89543 21 6 21H18ZM18 19C18 19 18 18 17.25 17C16.5 16 15 15 12 15C9 15 7.5 16 6.75 17C6 18 6 19 6 19H18Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M24 18C24 19.1046 23.1046 20 22 20H21.3551C21.4494 19.6831 21.5 19.3475 21.5 19C21.5 18.4338 21.4231 18.0114 21.3018 17.5261C21.183 17.0512 20.988 16.4778 20.6664 15.8711C20.498 15.5534 20.295 15.2266 20.05 14.9C19.5132 14.1843 18.8436 13.5558 18.0369 13.0402C20.3706 13.2277 21.9419 14.0562 22.9114 15.2196C23.4375 15.8509 23.6978 16.5008 23.8489 16.996C24 17.4911 24 18 24 18Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M4.5 9.5C4.5 8.94771 4.05228 8.5 3.5 8.5C2.94771 8.5 2.5 8.94771 2.5 9.5V11H1C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H2.5V14.5C2.5 15.0523 2.94771 15.5 3.5 15.5C4.05228 15.5 4.5 15.0523 4.5 14.5V13H6C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11H4.5V9.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>Group Order</p>
            </button>
          </div>
        </div>`;
    document.querySelector(".restaurant-contents").innerHTML = topSectionHTML;
}

function displayMenuCarousel(){
    curRestaurant.menu_items.forEach(item => {
        menuHTML += `
        <div class="menu-item">
            <div class="menu-image-container">
              <img src="${item.image}" alt="" />
              <button id="add-button">Add</button>
            </div>
            <p class="item-name">${item.name}</p>
            <p class="item-price">$${(item.price / 100).toFixed(2)}</p>
          </div>`;
    });
    document.querySelector(".menu-item-carousel").innerHTML = menuHTML;
}
