//Create Database
let dataProduk = [
    {
      id: 1,
      name: "Iphone 12",
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-r1.jpg",
      harga: 23000000,
      stock: 12,
    },
    {
      id: 2,
      name: "Samsung Note 20",
      img:
        "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-note20-1.jpg",
      harga: 22500000,
      stock: 20,
    },
    {
      id: 3,
      name: "Google Pixel 5",
      img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-5-5g-1.jpg",
      harga: 8500000,
      stock: 5,
    },
    {
      id: 4,
      name: "One Plus 8T",
      img: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8t-1.jpg",
      harga: 6750000,
      stock: 5,
    },
  ];
  
  let dataCart = [];
  
  // bikin class data produk
  class Produk {
    constructor(id, name, img, harga, stock) {
      (this.id = id),
        (this.name = name),
        (this.img = img),
        (this.harga = harga),
        (this.stock = stock);
    }
  }
  
  class ProdukCart {
    constructor(id, name, img, harga, quantity, total) {
      (this.id = id),
        (this.name = name),
        (this.img = img),
        (this.harga = harga),
        (this.quantity = quantity);
    }
    total = function () {
      return this.quantity * this.harga;
    };
  }
  