document.addEventListener("mousemove", function(e) {
    if (Math.random() > 0.6) return; // 限制星星数量，避免太多
    let star = document.createElement("div");
    star.className = "star";
    star.textContent = "★"; // 使用星星符号
    star.style.left = `${e.clientX}px`;
    star.style.top = `${e.clientY}px`;

    // 让星星有不同大小（8px ~ 20px）
    let size = Math.floor(Math.random() * 12) + 2;
    star.style.fontSize = `${size}px`;

    // 让星星有不同颜色
    let colors = ["#FFD700", "#FF69B4", "#87CEFA", "#ADFF2F", "#FF4500", "#B0E0E6"];
    let glow = colors[Math.floor(Math.random() * colors.length)];
    star.style.color = glow;
    star.style.textShadow = `0 0 6px ${glow}, 0 0 12px ${glow}`;

    // 让星星的消失时间随机（0.8s - 1.5s）
    let duration = (Math.random() * 0.7 + 0.8).toFixed(2);
    star.style.animationDuration = `${duration}s`;

    document.body.appendChild(star);
    setTimeout(() => { star.remove(); }, duration * 1000);
});
