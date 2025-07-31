const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtns = modal.querySelectorAll(".close");
const modalContent = modal.querySelector(".modal-content");
let modalTimeout; // Kapanma zamanlayıcısı için değişken

openBtn.addEventListener("click", () => {
  modal.classList.add("active");

  // İçeriği aktif yapmak için küçük bir gecikme
  setTimeout(() => {
    modalContent.classList.add("active");
  }, 10);

  // Önceki zamanlayıcı varsa iptal et
  clearTimeout(modalTimeout);

  // Açıldıktan sonra 3 saniye bekleyip otomatik kapat
  modalTimeout = setTimeout(() => {
    modalContent.classList.remove("active");
    setTimeout(() => {
      modal.classList.remove("active");
    }, 400); // modal-content transition süresi
  }, 2500); // 3000 ms = 3 saniye
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    clearTimeout(modalTimeout); // Otomatik kapanmayı durdur
    modalContent.classList.remove("active");
    setTimeout(() => {
      modal.classList.remove("active");
    }, 400); // modal-content transition süresi
  });
});
