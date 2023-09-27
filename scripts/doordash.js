import { restaurants } from "../data/restaurants.js";

let restaurantGridHTML = '';
const restaurantGrid = document.querySelector('.restaurant-grid');


function displayGrid(){
  restaurants.forEach(restaurant => {
    restaurantGridHTML += `
    <a href="order.html">
      <div class="restaurant" data-restaurant-name="${restaurant.name}">
        <img
          class="restaurant-image"
          src="${restaurant.image}"
        />
        <div class="contents">
          <div class="info">
            <div class="restaurant-name">${restaurant.name}</div>
            <div class="delivery-info">
              ${restaurant.distance} mi &#183; ${restaurant.wait} min &#183; $${restaurant.fee} delivery fee
            </div>
            <div class="rating-info">
              <p class="rating">${restaurant.rating.stars}</p>
              <img class="star-icon" src="images/star-icon.png"/>
              <p class="ratings-count">(${restaurant.rating.ratings}+)</p>
            </div>
          </div>
          <div class="favorite">
            <img class="heart-icon" src="images/heart-outline.svg" alt="" />
          </div>
        </div>
      </div>
    </a>`;
  });
  restaurantGrid.innerHTML = restaurantGridHTML;
}

function toggleDelivery(){

}

function togglePickup(){

}

displayGrid();
//look for which restaurant is clicked
restaurantGrid.addEventListener('click', function(event) {
  let buttonElement = event.target;
  //when we click a restaurant, we need to get the restaurant name and store it
  const parent = buttonElement.closest('.restaurant');
  const restaurantName = parent.getAttribute("data-restaurant-name");
  localStorage.setItem("current_restaurant", restaurantName);
});