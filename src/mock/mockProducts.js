const myProducts = [
  {
    id: 1,
    name: "Remera",
    description: "Remera de algodón de alta calidad",
    price: 30000,
    categories: ["Ropa", "Hombre", "Mujer"],
    stock: 10,
    image: "https://example.com/remera.jpg"
  },
  {
    id: 2,
    name: "Pantalón",
    description: "Pantalón de algodón de alta calidad",
    price: 60000,
    categories: ["Ropa", "Hombre", "Mujer"],
    stock: 5,
    image: "https://example.com/pantalon.jpg"
  },
  {
    id: 3,
    name: "Zapatillas",
    description: "Zapatillas deportivas de alta calidad",
    price: 180000,
    categories: ["Calzado", "Hombre", "Mujer"],
    stock: 8,
    image: "https://example.com/zapatillas.jpg"
  },
  {
    id: 4,
    name: "Campera",
    description: "Campera de abrigo de alta calidad",
    price: 120000,
    categories: ["Ropa", "Hombre", "Mujer"],
    stock: 3,
    image: "https://example.com/campera.jpg"
  },
  {
    id: 5,
    name: "Gorra",
    description: "Gorra de algodón de alta calidad",
    price: 15000,
    categories: ["Accesorios", "Hombre", "Mujer"],
    stock: 15,
    image: "https://example.com/gorra.jpg"
  }
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (myProducts.length === 0) {
        reject("No hay productos disponibles");
      }
      resolve(myProducts);
    }, 2000);
  });
};