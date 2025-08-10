const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");
console.log("Buscando elemento con id 'card-container'");
const carList = document.getElementById("card-container");
console.log("carList:", carList);
// Función para obtener productos
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const products = await response.json();

    // Ocultar mensaje de carga
    loadingEl.style.display = "none";

    // Mostrar productos en la lista
    products.forEach((product) => {
      const div = document.createElement("div");
      div.className = "card"
      const img = document.createElement("img");
      img.className = "card__img"
      img.src= product.image;
      const h2 = document.createElement("h2");
      h2.className = "card__title"
      h2.textContent = product.title;
      const p1 = document.createElement("p");
      p1.className = "card__description"
      p1.textContent = product.description;
      const p2 = document.createElement("p");
      p2.className = "card__price"
      p2.textContent = product.price;
      const button = document.createElement("button");
      button.className = "card__button"
      button.textContent = "Add to Cart"

      carList.appendChild(div);
      carList.appendChild(img);
      carList.appendChild(h2);
      carList.appendChild(p1);
      carList.appendChild(p2);
      carList.appendChild(button);
    });

  } catch (error) {
    loadingEl.style.display = "none";
    errorEl.textContent = `Error: ${error.message}`;
  }
}

// Llamar a la función al cargar la página
fetchProducts();
