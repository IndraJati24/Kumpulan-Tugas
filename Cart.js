//add to cart

function OnButtonCart(index) {
  console.log(`cart index ke-${index}`);
  console.log(dataProduk[index].name);

  //cek data sudah ada belum,,

  console.log("data yang mau dimasukkan", dataProduk[index].name);
  console.log("data yang mau dimasukkan", dataProduk[index].stock);

  let produk = { ...dataProduk[index] };

  let cartIndex; //variable yang dgunakan untuk menampung index

  //cari data produk yang sama di user

  for (let i = 0; i < dataCart.length; i++) {
    if (dataCart[i].name === produk.name) {
      cartIndex = i;
    }
  }

  //check stok produk yang di add
  if (dataProduk[index].stock === 0) {
    alert("produk habis");
  } else {
    //add produk ke cart

    if (cartIndex !== undefined) {
      dataCart[cartIndex].quantity += 1;
    } else {
      dataCart.push(
        new ProdukCart(
          dataCart.length + 1,
          dataProduk[index].name,
          dataProduk[index].img,
          dataProduk[index].harga,
          1
        )
      );
    }
    dataProduk[index].stock -= 1;
  }

  //enable cetak Receipt
  let button = document.getElementById("cetak");
  if (button.disabled === true) {
    button.disabled = false;
  }
  //tampilkan dataCart
  showProduct();
  showCart();
}

//function tampilkan cart
function showCart() {
  let tableCart = document.getElementById("cart");
  console.log(tableCart);

  let tbody = tableCart.getElementsByTagName("tbody")[0];
  console.log(tbody);

  //tambahkan baris baru di table CART
  let tr = "";
  for (let i = 0; i < dataCart.length; i++) {
    tr += `<tr>
            <td>${i + 1}</td>      
            <td>${dataCart[i].name}</td>
            <td>
                <img src="${dataCart[i].img}" height="50px"            
            </td>      
            <td>${dataCart[i].harga}</td>      
            <td>${dataCart[i].quantity}</td>      
            <td>${dataCart[i].total()}</td> 
            <td>
            <button class="delete-cart" onclick="OnButtonDeleteCart(${i})">DELETE</button>
            </td>     
      </tr>`;
  }
  tbody.innerHTML = tr;
}

//function delete data chart
function OnButtonDeleteCart(index) {
  console.log(`Button ke ${index} di klik`);

  //cari index dari editNama dengan arrow function
  let idxProduk = dataProduk.findIndex(
    (item) => item.name === dataCart[index].name
  );

  if (dataCart[index].quantity === 1) {
    dataCart.splice(index, 1);
  } else {
    dataCart[index].quantity -= 1;
  }

  dataProduk[idxProduk].stock += 1;

  //disable button receipt disable jika kosong
  let button = document.getElementById("cetak");
  if (dataCart.length == 0) {
    button.disabled = true;
  }
  showProduct();
  showCart();
}

