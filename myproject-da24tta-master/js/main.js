document.addEventListener("DOMContentLoaded", function() {
    const flowers = [
        { id: 1, name: "Hoa Hồng Pháp", price: "250.000 ₫", img: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=500" },
        { id: 2, name: "Hoa Hướng Dương", price: "150.000 ₫", img: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=500" },
        { id: 3, name: "Hoa Tulip Hà Lan", price: "350.000 ₫", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinyP-E1cd4ePg918tq50mWBddDNRAKT5q4Q&s" },
        { id: 4, name: "Cúc Họa Mi", price: "120.000 ₫", img: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=500" },
        { id: 5, name: "Hoa Lan Hồ Điệp", price: "800.000 ₫", img: "https://flowersight.com/wp-content/uploads/2020/03/lan-h%E1%BB%93-%C4%91i%E1%BB%87p-e1584030166650.jpg" },
        { id: 6, name: "Hoa Ly Ly", price: "200.000 ₫", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcmukxmwMfW1W5KEGairNQES-8Sdkq1sPNGA&s" },
        { id: 7, name: "Hoa Mẫu Đơn", price: "450.000 ₫", img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/442/027/products/img-8750-jpg.jpg?v=1714979700053" },
        { id: 8, name: "Hoa Lavender", price: "300.000 ₫", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEfGoEVSrtmu1PuEQAMm6ZPpQ4fq42Z1ZYQ&s" },
        { id: 9, name: "Hoa Cẩm Chướng", price: "180.000 ₫", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLCVNCSryaW8ngeKAt2OO0aMXngKoP5Xtuw&s" }
    ];

    const productGrid = document.createElement("div");
    productGrid.setAttribute("class", "product-grid");

    flowers.forEach(flower => {
        const item = document.createElement("div");
        item.setAttribute("class", "product-item");

        const imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "product-image");
        const img = document.createElement("img");
        img.setAttribute("src", flower.img);
        imgDiv.appendChild(img);
        item.appendChild(imgDiv);

        const infoDiv = document.createElement("div");
        infoDiv.setAttribute("class", "product-info");

        const name = document.createElement("p");
        name.setAttribute("class", "name");
        name.appendChild(document.createTextNode(flower.name));
        infoDiv.appendChild(name);

        const price = document.createElement("p");
        price.setAttribute("class", "price");
        price.appendChild(document.createTextNode(flower.price));
        infoDiv.appendChild(price);

        const btnDetail = document.createElement("a");
        btnDetail.setAttribute("class", "btn-detail");
        btnDetail.setAttribute("href", `detailspage.html?id=${flower.id}`); 
        btnDetail.appendChild(document.createTextNode("Xem chi tiết"));
        infoDiv.appendChild(btnDetail);

        item.appendChild(infoDiv);
        productGrid.appendChild(item);
    });

    document.body.appendChild(productGrid);
});