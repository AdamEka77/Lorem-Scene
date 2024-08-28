document
  .getElementById("search-item")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchAndRedirect();
    }
  });

function searchAndRedirect() {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  window.location.href = `search-results.html?query=${encodeURIComponent(
    searchbox
  )}`;
}

const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  // Mengambil ID pusat utama yang ingin dijadikan search query
  const storeitems = document.getElementById("update-terbaru");
  // Mengambil ID objek yang ingin ditampilkan
  const product = document.querySelectorAll(".product");
  // Mengambil sumber kata kunci untuk search query nya
  const pname = storeitems.getElementsByTagName("h2");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
