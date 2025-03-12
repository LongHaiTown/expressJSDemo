exports.home = (req, res) => {
    res.render('home', { title: "Trang Chủ" });
};

exports.about = (req, res) => {
    res.render('about', { title: "Giới Thiệu" });
};

exports.contact = (req, res) => {
    res.render('contact', { title: "Liên Hệ" });
};
