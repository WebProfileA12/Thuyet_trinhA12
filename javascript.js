let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  // Ẩn tất cả
  slides.forEach(slide => {
    slide.classList.remove("active");
    slide.querySelectorAll("p, img").forEach(el => {
      el.classList.remove("show-text", "show-image");
    });
  });

  const activeSlide = slides[index];
  activeSlide.classList.add("active");

  const intro = activeSlide.querySelector(".intro");
  const mainText = activeSlide.querySelectorAll("p:not(.intro)");
  const image = activeSlide.querySelector("img");

  // Hiện intro trước
  setTimeout(() => intro.classList.add("show-text"), 200);

  // Sau đó hiện nội dung text
  setTimeout(() => mainText.forEach(p => p.classList.add("show-text")), 800);

  // Ảnh hiện sau cùng
  setTimeout(() => image.classList.add("show-image"), 1500);
}

document.body.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

showSlide(current);