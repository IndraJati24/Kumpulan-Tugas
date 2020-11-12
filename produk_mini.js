// agar update data ketika ada pertambahan bikin function
function showProduct(idx) {
  // akses TABLE
  let table = document.getElementById("produk");
  console.log(table);

  // akses tbody
  let tbody = table.getElementsByTagName("tbody")[0];
  console.log(tbody);

  // looping daftar produk
  let tr = "";
  for (let i = 0; i < dataProduk.length; i++) {
    if (idx === i) {
      tr += `
                    <tr>
                        <td></td>
                        <td>
                            <input id="edit-nama" type="text" value="${dataProduk[i].name}">
                        </td>
                        <td>
                            <input id="edit-img" type="text" value="${dataProduk[i].img}">
                        </td>
                        <td>
                            <input id="edit-harga" type="number" value="${dataProduk[i].harga}">
                        </td>
                        <td>
                            <input id="edit-stock" type="number" value="${dataProduk[i].stock}">
                        </td>
                        <td>
                            <button onclick="OnButtonSave(${i})">SAVE</button>
                            <button onclick="OnButtonCancel()">CANCEL</button>
                            
                        </td>
           
                    </tr>
                `;
    } else {
      tr += `
                   <tr>
                       <td>${i + 1}</td>
                       <td>${dataProduk[i].name}</td>
                       <td>
                           <img src="${dataProduk[i].img}" height="50px"
                       </td>
                       <td>${dataProduk[i].harga}</td>
                       <td>${dataProduk[i].stock}</td>
                       <td>
                           <button onclick="OnButtonDelete(${i})">DELETE</button>
                           <button onclick="OnButtonEdit(${i})">EDIT</button>
                           <button class="add-to-cart" onclick="OnButtonCart(${i})">ADD TO CART</button>
                       </td>
       
                   </tr>`;
    }
    // console.log(dataProduk[i]);
  }
  tbody.innerHTML = tr;
}

showProduct();

function OnButtonAdd(e) {
  console.log("event", e);
  e.preventDefault();
  console.log("add button di klik");

  // get input value
  let form = document.getElementById("produk-baru");
  console.log(form);
  console.log(form["nama"].value);

  // check input value => tidak boleh ada value yang kosong
  // check value dari harga dan stok tidak boleh < 0 atau negatif
  let nama = form["nama"].value;
  let img = form["img"].value;
  let harga = form["harga"].value;
  let stock = form["stock"].value;

  if (nama === "" || img === "" || harga === "" || stock === "") {
    alert("input tidak boleh kosong");
  } else if (harga < 0 || stock < 0) {
    alert(`Nominal tidak boleh kurang dari 0`);
  } else {
    // masukan semua value ke daftar produk dalam bentuk object
    dataProduk.push(
      new Produk(
        dataProduk.length + 1,
        form["nama"].value,
        form["img"].value,
        parseInt(form["harga"].value),
        parseInt(form["stock"].value)
      )
    );
    console.log(dataProduk);

    // tampilkan ulang produk
    showProduct();

    // reset value di form
    form["nama"].value = "";
    form["img"].value = "";
    form["harga"].value = "";
    form["stock"].value = "";
  }
}

//delete produk
// dataProduk.splice(2, 1)
// console.log(dataProduk)

// showProduct()

function OnButtonDelete(index) {
  console.log(`button index ke-${index} di klik`);

  //delete produk

  dataProduk.splice(index, 1);

  showProduct();
}

function OnButtonEdit(index) {
  console.log(`button edit index ke-${index}`);

  //tampilkan produk ulang
  showProduct(index);
}

//save edit produk
function OnButtonSave(index) {
  console.log("button save di klik");

  //get value
  let editNama = document.getElementById("edit-nama").value;
  let editImg = document.getElementById("edit-img").value;
  let editHarga = parseInt(document.getElementById("edit-harga").value);
  let editStock = parseInt(document.getElementById("edit-stock").value);
  console.log(editNama);

  //edit daftar produk
  dataProduk[index].name = editNama;
  dataProduk[index].img = editImg;
  dataProduk[index].harga = editHarga;
  dataProduk[index].stock = editStock;
  console.log(dataProduk);

  //show prduk
  showProduct();
}

function OnButtonCancel() {
  console.log("Button cancel di klik");

  showProduct();
}

//button filter
function OnButtonSort() {
  console.log("button sort di klik");

  //get value dari option
  let select = document.getElementById("sort");
  console.log(select.value);
  //let option = "harga" ==> sort by harga

  //sorting data
  //sorting array yang isinya number
  // if (select.value == "ASC") {
  //   function sortingASC(a, b) {
  //     if (a.harga > b.harga) {
  //       return 1;
  //     }
  //     if (a.harga < b.harga) {
  //       return -1;
  //     }
  //     return 0;
  //   }
  //   dataProduk.sort(sortingASC);
  // } else {
  //   function sortingDSC(a, b) {
  //     if (a.harga > b.harga) {
  //       return -1;
  //     }
  //     if (a.harga < b.harga) {
  //       return 1;
  //     }
  //     return 0;
  //   }
  //   dataProduk.sort(sortingDSC);
  // }

  //function custom cara lain
  function sorting(a, b) {
    if (a.harga > b.harga) {
      return select.value === "ASC" ? 1 : -1;
    }
    if (a.harga < b.harga) {
      return select.value === "ASC" ? -1 : 1;
    }
    return 0;
  }

  dataProduk.sort(sorting);

  showProduct();
}

function OnButtonSearch() {
  console.log("Search");

  //get value input
  let input = document.getElementById("search").value;
  console.log(input);

  //* pakai RegExp
  let reg = new RegExp(`${input}`, "gi");
  console.log(reg);

  //* pakai test RegEx
  //consoe.log(reg.test(dataProduk[0].name))

  //Cara for
  let result = [];
  for (let i = 0; i < dataProduk.length; i++) {
    // if (dataProduk[i].name.toLowerCase() === input.toLowerCase()) {
    //   result.push(dataProduk[i]);
    // }
    //NOTE  pakai regex
    if (reg.test(dataProduk[i].name)) { //* hasilnya true or false
      result.push(dataProduk[i]);
    }
  }
  console.log(result);

  let table = document.getElementById("produk");';'
  console.log(table);

  let tbody = table.getElementsByTagName("tbody")[0];
  console.log(tbody);

  let tr = "";
  for (let i = 0; i < result.length; i++) {
    tr += `<tr>
                <td>${i + 1}</td>
                <td>${result[i].name}</td>
                <td>
                  <img src="${result[i].img}" height="50px"
                </td>
                <td>${result[i].harga}</td>
                <td>${result[i].stock}</td>
                <td>
                  <button onclick="OnButtonDelete(${i})">DELETE</button>
                  <button onclick="OnButtonEdit(${i})">EDIT</button>
                  <button class="add-to-cart" onclick="OnButtonCart(${i})">ADD TO CART</button>
                </td>
     
          </tr>`;
  }

  tbody.innerHTML = tr;
  input.value = "";
}
