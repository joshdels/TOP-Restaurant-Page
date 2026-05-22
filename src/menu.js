export const menu = () => {
  const context = document.createElement("div");
  context.innerHTML = `
    <h1>Menu</h1>
    
    <div class="menu-container">    
      <div class="card">
        <h3>Alacarte Steak</h3>
        <p>This is the most demand alacarte</p>
      </div>

      <div class="card">
        <h3>Fried Steak</h3>
        <p>This is the second demand alacarte</p>
      </div>

      <div class="card">
        <h3>BBQ Steak</h3>
        <p>This is the special demand alacarte</p>
      </div> 
    </div>

  `;
  return context;
};
