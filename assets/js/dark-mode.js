document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("dark-mode-toggle");
    if (!toggle) return; // 避免按钮不存在时报错

    toggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        // 存储用户选择，防止刷新后重置
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // 页面加载时检查用户之前的选择
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
});
