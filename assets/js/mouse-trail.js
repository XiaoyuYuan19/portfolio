document.addEventListener("mousemove", function(e) {
    if (Math.random() > 0.5) return; // 限制星星数量，避免太密集

    let star = document.createElement("div");
    star.className = "star";

    // 设置星星位置
    star.style.left = `${e.clientX}px`;
    star.style.top = `${e.clientY}px`;

    // 让星星有不同大小
    let size = Math.random() * 10 + 5; // 随机大小 5px - 15px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // 让星星有不同颜色
    let colors = ["#FFD700", "#FF69B4", "#87CEFA", "#ADFF2F", "#FF4500", "#BA55D3"];
    let glow = colors[Math.floor(Math.random() * colors.length)];
    star.style.color = glow;
    star.style.textShadow = `0 0 6px ${glow}, 0 0 12px ${glow}`;

    // 让星星随机持续 800ms - 1500ms
    let duration = Math.random() * 700 + 800; 
    setTimeout(() => { star.remove(); }, duration);

    document.body.appendChild(star);
});
