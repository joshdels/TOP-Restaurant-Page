import restaurantImage from "./burger-steak.jpg";

export const home = () => {
  const context = document.createElement("div");
  const image = document.createElement("img");
  
  context.innerHTML = `
  <h1>My Small Restaurant</h1>
  <p>Welcome to my humble small restuarant</p>
  `;
  
  image.src = restaurantImage;

  context.appendChild(image);

  return context;
};
