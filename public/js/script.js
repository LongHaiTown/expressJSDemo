// Danh sách truyện mẫu
const hotTruyen = [
  { title: "ONE PIECE", chapter: "Chapter 999", img: "p11.jpg" },
  { title: "NARUTO", chapter: "Chapter 999", img: "p13.jpg" },
  { title: "Jujutsu Kaisen", chapter: "Chapter 999", img: "p9.jpg" },
  { title: "Thanh Gươm Diệt Quỷ", chapter: "Chapter 999", img: "p12.jpg" },
  { title: "Quản Gia Là Ma Hoàng", chapter: "Chapter 198", img: "p8.jpg" },
  { title: "Bố Tôi Là Đặc Vụ", chapter: "Chapter 999", img: "p10.jpg" },
  { title: "Trọng Sinh Đô Thị Tu Tiên", chapter: "Chapter 999", img: "p1.jpg" }
];

const newTruyen = [
  { title: "DEAD TUBE", chapter: "Chapter 998", img: "p5.jpg" },
  { title: "SOLO LEVELING", chapter: "Chapter 998", img: "p14.jpg" },
  { title: "Long Miêu", chapter: "Chapter 997", img: "p7.jpg" },
  { title: "Kiếm Chủ Đại Hạ", chapter: "Chapter 997", img: "p4.jpg" },
  { title: "Tòa Tháp Bí Ẩn", chapter: "Chapter 997", img: "thapbian.jpg" },
  { title: "Bù Nhìn", chapter: "Chapter 997", img: "p3.jpg" },
  { title: "Đại Tượng Vô Hình", chapter: "Chapter 997", img: "p6.jpg" }
];

function createCard(truyen) {
  return `
    <div class="card">
      <img src="/images/${truyen.img}" alt="${truyen.title}">
      <h3>${truyen.title}</h3>
      <p>${truyen.chapter}</p>
    </div>
  `;
}

const hotTruyenGrid = document.getElementById('hotTruyenGrid');
hotTruyen.forEach(truyen => {
  hotTruyenGrid.innerHTML += createCard(truyen);
});

const newTruyenGrid = document.getElementById('newTruyenGrid');
newTruyen.forEach(truyen => {
  newTruyenGrid.innerHTML += createCard(truyen);
});
