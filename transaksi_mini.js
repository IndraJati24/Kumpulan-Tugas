//function cetak
function OnButtonCetak() {
  console.log("Cetak");

  let receipt = document.getElementById("receipt");
  console.log(receipt);

  //cetak receipt
  let output = "Receipt : <br>";
  let total = 0;
  for (let i = 0; i < dataCart.length; i++) {
    output += `${i + 1}. ${dataCart[i].name} x ${
      dataCart[i].quantity
    } = ${dataCart[i].total()} <br>`;
    total += dataCart[i].total();
  }

  output += `<br> Total belanja : Rp ${total},00`;

  //tampilan
  receipt.innerHTML = output;

  let btnDelete = document.body.getElementsByClassName("delete-cart");
  for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].disabled = true;
  }

  let btnAddCart = document.body.getElementsByClassName("add-to-cart");
  for (let item of btnAddCart) {
    item.disabled = true;
  }
  let uang = document.getElementById("uang");
  let checkout = document.getElementById("chekout");
  uang.hidden = false;
  checkout.hidden = false;
}

//check out
function OnButtonChekOut() {
  console.log("button checkout");

  //akses value infput
  let uang = document.getElementById("uang");
  let uangDariClient = parseInt(uang.value);

  //cari Total
  let total = 0;
  for (let item of dataCart) {
    total += item.total();
  }

  let kembalian = uangDariClient - total;

  //bandingkan total dengan pembayaran

  if (uangDariClient < total) {
    alert("Uang tidak cukup");
  } else if (isNaN(uangDariClient)) {
    alert("Masukkan jumlah uaang yang mau dibayarkan");
  } else if (kembalian > 0) {
    alert(`Terima kasih sudah belanja \n uang kembalian : Rp ${kembalian},00`);
    reset()
  } else {
    alert("Terimakasih sudah berbelanja");
    reset()
  }

  //reset input
  uang.value = "";
}

//function reset
function reset() {
  //reset dataCart
  dataCart = [];
  //resert button
  let btnDelete = document.body.getElementsByClassName("delete-cart");
  for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].disabled = false;
  }

  let btnAddCart = document.body.getElementsByClassName("add-to-cart");
  for (let item of btnAddCart) {
    item.disabled = false;
  }

  let button = document.getElementById("cetak");
  button.disabled = false;

  //hapus receipt

  let receipt = document.getElementById("receipt");
  receipt.textContent = "Receipt :";

  uang.hidden = true;
  let checkout = document.getElementById("chekout");
  checkout.hidden = true;

  //tampilkan lagi
  showProduct();
  showCart();
}
