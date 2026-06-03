document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const flowerId = urlParams.get('id') || 1; 

    const database = {
        1: { name: "Hoa Hồng Pháp", price: "250.000 ₫", images: ["https://stc.hoatuoihoangnga.com/data/uploads/products/920/hoa-chuc-mung-sinh-nhat-nguoi-yeu-bo-hoa-hong-do-10-bong-mix-la-bac.1.jpg?v=1701668241", "https://hoatuoihoangnga.com/data/uploads/products/1361/bo-hoa-hong-do-10-bong-tang-sinh-nhat-nguoi-yeu.6.jpg", "https://linhflower.com/wp-content/uploads/2025/07/462135205_1208234737550861_2921491338036912604_n.jpg.jpg"], desc: "Hoa hồng đỏ nhập khẩu trực tiếp. Độ tươi lâu từ 5-7 ngày. Kèm theo thiệp chúc mừng, băng rôn (nếu khách hàng yêu cầu có nội dung chúc mừng). Giao hàng miễn phí trong nội thành phố. Thời gian giao hàng từ 1-2 giờ kể từ khi hoàn thiện đơn hàng và phần thanh toán. " },
        2: { name: "Hoa Hướng Dương", price: "150.000 ₫", images: ["https://linhflower.com/wp-content/uploads/2025/08/34e5c817e43727697e26.jpg.jpg", "https://hoatuoiangel.com/upload/elfinder/z6780029815515_c7233759d61cc4df4ebc8253d8c3ad70.jpg", "https://vuonhoatuoi.vn/wp-content/uploads/2023/09/phonto-82-400x400.jpg"], desc: "Biểu tượng của sự rực rỡ và hy vọng. Thích hợp tặng lễ tốt nghiệp. Kèm theo thiệp chúc mừng, băng rôn (nếu khách hàng yêu cầu có nội dung chúc mừng). Giao hàng miễn phí trong nội thành phố. Thời gian giao hàng từ 1-2 giờ kể từ khi hoàn thiện đơn hàng và phần thanh toán." },
        3: { name: "Hoa Tulip Hà Lan", price: "350.000 ₫", images: ["https://product.hstatic.net/200000015764/product/z5198597547556_04afb30b86a0c7b97609910af4d2677c_780ff65486234e39bfefb2a704dfa340_master.jpg", "https://bizweb.dktcdn.net/thumb/1024x1024/100/442/027/products/img-4058-jpg.jpg?v=1723713087120", "https://product.hstatic.net/200000015764/product/z5198597522794_434b821020b15fa64d38ea270a276d53_c9a3ff441c6b46ed8360151435b2411c_master.jpg"], desc: "Hoa Tulip nhập khẩu từ Hà Lan. Thể hiện tình yêu hoàn hảo và chân thành. Kèm theo thiệp chúc mừng, băng rôn (nếu khách hàng yêu cầu có nội dung chúc mừng). Giao hàng miễn phí trong nội thành phố. Thời gian giao hàng từ 1-2 giờ kể từ khi hoàn thiện đơn hàng và phần thanh toán." },
        4: { name: "Cúc Họa Mi", price: "120.000 ₫", images: ["https://flowersight.com/wp-content/uploads/2023/08/Cuc-hoa-mi-hoai-hoa-tuong-trung-cho-tinh-me-cao-ca-min-682x1024.jpg", "https://storage.googleapis.com/cdn_dlhf_vn/public/products/WYP6/WYP60AD006/1713242936_661e03387e967.jpg", "https://flowercorner.b-cdn.net/image/cache/catalog/products/B%C3%B3%20Hoa/bo-cuc-hoa-mi-be-xinh-v2.jpg.webp"], desc: "Mang vẻ đẹp tinh khôi, giản dị nhưng vô cùng cuốn hút." },
        5: { name: "Hoa Lan Hồ Điệp", price: "800.000 ₫", images: ["https://hoatuoi360.vn/uploads/file/Baiviet2025/tai-sao-lan-ho-diep-trang-duoc-nhieu-khach-ua-chuong.jpg", "https://static.chotot.com/storage/chotot-kinhnghiem/nha/2021/04/b2f51786-hoa-lan-ho-diep-2.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66z8F3mE_mjMNijmOT_7ZVFfxnkUrzVSpig&s"], desc: "Sang trọng, quý phái. Rất bền, có thể chưng được hơn 1 tháng." },
        6: { name: "Hoa Ly Ly", price: "200.000 ₫", images: ["https://flowercorner.b-cdn.net/image/cache/catalog/products/B%C3%B3%20Hoa/bo-hoa-ly-little-fancy.jpg.webp", "https://shophoatuoi.saigonhoa.com/wp-content/uploads/2022/12/hoa-de-ban-hoa-lily.jpg", "https://storage.googleapis.com/cdn_dlhf_vn/blog/2016/05/lily-in-vase-e1696320871952.jpg"], desc: "Hương thơm nồng nàn, mang ý nghĩa về sự thanh cao và kiêu hãnh. Kèm theo thiệp chúc mừng, băng rôn (nếu khách hàng yêu cầu có nội dung chúc mừng). Giao hàng miễn phí trong nội thành phố. Thời gian giao hàng từ 1-2 giờ kể từ khi hoàn thiện đơn hàng và phần thanh toán." },
        7: { name: "Hoa Mẫu Đơn", price: "450.000 ₫", images: ["https://www.flowercorner.vn/image/catalog/products/August%202023/bo-hoa-mau-don-dep.jpg", "https://flowercorner.b-cdn.net/image/cache/catalog/products/B%C3%B3%20Hoa/bo-hoa-mau-don-nu-hoa-he-mo.jpg.webp", "https://moonflowerhanoi.com/wp-content/uploads/2021/07/bohoamaudondep2500.jpg"], desc: "Vương giả, lộng lẫy, là vua của các loài hoa mang lại may mắn. Kèm theo thiệp chúc mừng, băng rôn (nếu khách hàng yêu cầu có nội dung chúc mừng). Giao hàng miễn phí trong nội thành phố. Thời gian giao hàng từ 1-2 giờ kể từ khi hoàn thiện đơn hàng và phần thanh toán." },
        8: { name: "Hoa Lavender", price: "300.000 ₫", images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEfGoEVSrtmu1PuEQAMm6ZPpQ4fq42Z1ZYQ&s", "https://flowercorner.b-cdn.net/image/cache/catalog/products/Autumn_2024/gia-dieu-tim.jpg.webp", "https://flowercorner.b-cdn.net/image/cache/catalog/products/Autumn_2024/NEWBOUQUET_082.jpg.webp"], desc: "Hoa oải hương khô thơm dịu, giúp thư giãn tinh thần cực tốt. Kèm theo thiệp chúc mừng, băng rôn (nếu khách hàng yêu cầu có nội dung chúc mừng). Giao hàng miễn phí trong nội thành phố. Thời gian giao hàng từ 1-2 giờ kể từ khi hoàn thiện đơn hàng và phần thanh toán." },
        9: { name: "Hoa Cẩm Chướng", price: "180.000 ₫", images: ["https://hoatuoiangel.com/thumbs/765x699x2/upload/product/z5768444534241d45fd5d9ae7aa5c4507bad6cca1fa740-2888.jpg", "https://flowercorner.b-cdn.net/image/cache/catalog/products/B%C3%B3%20Hoa/bo-hoa-cam-chuong-tinh-lang-man.jpg.webp", "https://bizweb.dktcdn.net/100/487/411/products/z5674633333598-7fa0239261b86a97f352d9218fa72db5-1722653812374.jpg?v=1760432524250"], desc: "Tượng trưng cho tình mẫu tử, tình bạn và sự chân thành. Kèm theo thiệp chúc mừng, băng rôn (nếu khách hàng yêu cầu có nội dung chúc mừng). Giao hàng miễn phí trong nội thành phố. Thời gian giao hàng từ 1-2 giờ kể từ khi hoàn thiện đơn hàng và phần thanh toán." }
    };

    const currentFlower = database[flowerId];

    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");

    const breadcrumb = document.createElement("div");
    breadcrumb.setAttribute("class", "breadcrumb");
    breadcrumb.innerHTML = `<a href="page5.html">Trang chủ</a> > <span>${currentFlower.name}</span>`;
    wrapper.appendChild(breadcrumb);

    const detailContainer = document.createElement("div");
    detailContainer.setAttribute("class", "detail-container");

    const imageBox = document.createElement("div");
    imageBox.setAttribute("class", "detail-image-box");

    let currentImgIndex = 0;
    const mainImg = document.createElement("img");
    mainImg.setAttribute("src", currentFlower.images[currentImgIndex]);
    mainImg.setAttribute("id", "main-product-image");
    imageBox.appendChild(mainImg);

    const btnPrev = document.createElement("button");
    btnPrev.setAttribute("class", "slider-btn prev-btn");
    btnPrev.innerHTML = "&#10094;";
    btnPrev.onclick = function() {
        currentImgIndex = (currentImgIndex > 0) ? currentImgIndex - 1 : currentFlower.images.length - 1;
        mainImg.setAttribute("src", currentFlower.images[currentImgIndex]);
    };
    imageBox.appendChild(btnPrev);

    const btnNext = document.createElement("button");
    btnNext.setAttribute("class", "slider-btn next-btn");
    btnNext.innerHTML = "&#10095;";
    btnNext.onclick = function() {
        currentImgIndex = (currentImgIndex < currentFlower.images.length - 1) ? currentImgIndex + 1 : 0;
        mainImg.setAttribute("src", currentFlower.images[currentImgIndex]);
    };
    imageBox.appendChild(btnNext);
    
    detailContainer.appendChild(imageBox);

    const infoBox = document.createElement("div");
    infoBox.setAttribute("class", "detail-info-box");

    const title = document.createElement("h1");
    title.appendChild(document.createTextNode(currentFlower.name));
    infoBox.appendChild(title);

    const price = document.createElement("div");
    price.setAttribute("class", "detail-price");
    price.appendChild(document.createTextNode(currentFlower.price));
    infoBox.appendChild(price);

    const description = document.createElement("p");
description.setAttribute("class", "detail-desc");
    description.innerHTML = `Mô tả sản phẩm:<br>${currentFlower.desc}`;
    infoBox.appendChild(description);

    const buttonGroup = document.createElement("div");
    buttonGroup.setAttribute("class", "button-group");

    const topButtons = document.createElement("div");
    topButtons.setAttribute("class", "top-buttons");

    const cartButton = document.createElement("button");
    cartButton.setAttribute("class", "btn-cart");
    cartButton.innerHTML = "🛒 Chọn Mua";
    cartButton.onclick = function() { alert(`Đã mua ${currentFlower.name}!`); };
    topButtons.appendChild(cartButton);

    const cartIconBtn = document.createElement("button");
    cartIconBtn.setAttribute("class", "btn-cart-icon");
    cartIconBtn.innerHTML = "📦 Giỏ hàng";
    cartIconBtn.onclick = function() { alert("Đã thêm vào giỏ hàng!"); };
    topButtons.appendChild(cartIconBtn);

    buttonGroup.appendChild(topButtons);

    const reviewButton = document.createElement("button");
    reviewButton.setAttribute("class", "btn-review-small");
    reviewButton.innerHTML = "⭐ Đánh giá sản phẩm";
    reviewButton.onclick = function() { alert("Tính năng đánh giá sẽ sớm ra mắt."); };
    buttonGroup.appendChild(reviewButton);

    infoBox.appendChild(buttonGroup);
    detailContainer.appendChild(infoBox);
    wrapper.appendChild(detailContainer);
    document.body.appendChild(wrapper);
});