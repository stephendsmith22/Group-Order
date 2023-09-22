import { restaurants } from "../data/restaurants.js";

let restaurantGridHTML = '';
let restaurantGrid = document.querySelector('.restaurant-grid');

function displayGrid(){
  console.log(restaurants);
  restaurants.forEach(restaurant => {
    restaurantGridHTML += `
    <div class="restaurant">
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
    </div>`;
    console.log(restaurantGridHTML);
  });
  restaurantGrid.innerHTML = restaurantGridHTML;
}


displayGrid();