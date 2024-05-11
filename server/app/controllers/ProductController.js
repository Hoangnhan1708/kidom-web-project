class ProductController{
    // GET  /
    index(req,res){
        
        res.send([{
            "category": "ĐỒ CHƠI NGOÀI TRỜI",
            "id": "OD001",
            "name": "Bộ lưới và bóng bóng rổ Nerf Sports Nerfoop",
            "price": 250000,
            "brand": "Nerf Sports Nerfoop",
            "imageUrl": ["OD001_thumb.jpg", "OD001b.jpg", "OD001c.jpg"],
            "description": "Với một chiếc vòng có bảng phía sau, Nerfoop cho phép mọi người trải nghiệm niềm vui khi sử dụng. Vòng dễ dàng treo trên cửa để bạn có thể chơi trò chơi ở hầu hết mọi nơi và đi kèm với một quả bóng xốp 10cm dễ cầm, ném và bắt.\nVòng có một tấm ván sau với lưới và móc để dễ dàng lắp đặt trong nhà và ngoài trời. Thiết lập nó để bắn một số vòng! Có cả kiểu dáng màu xanh lam và xanh lá cây để phù hợp với mọi người!\n- Sản phẩm bao gồm: 1 bộ lưới bóng rổ Nerf Nerfoop, 1 quả bóng xốp 10cm, giá đỡ, kẹp kim loại, giá đỡ cửa và hướng dẫn sử dụng.\n- Màu sắc: xanh dương, xanh lá cây\n- Có thể sử dụng cả trong nhà và ngoài trời.\n- Phù hợp cho trẻ em trên 4 tuổi.",
            "star": 2.2,
            "stock": 8722,
            "time": "2024-01-06T12:59:03.742303"
        }])
    }
}

module.exports = new ProductController;