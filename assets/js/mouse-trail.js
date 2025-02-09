document.addEventListener("mousemove", function(e) {
    if (Math.random() > 0.6) return; // 限制星星数量，避免太多
    let star = document.createElement("div");
    star.className = "star";
    star.textContent = "★"; // 使用星星符号
    star.style.left = `${e.clientX}px`;
    star.style.top = `${e.clientY}px`;

    // 判断是否是夜间模式
    let isDarkMode = document.body.classList.contains("dark-mode");

    // 适配不同模式的颜色
    let dayColors = ["rgba(200, 200, 255, 0.8)", "rgba(190, 190, 255, 0.7)", "rgba(180, 180, 250, 0.7)"];
    let nightColors = ["rgba(255, 255, 255, 0.9)", "rgba(230, 230, 255, 0.8)", "rgba(220, 220, 250, 0.8)"];
    let colors = isDarkMode ? nightColors : dayColors;
    
    let glow = colors[Math.floor(Math.random() * colors.length)];
    star.style.color = glow;
    star.style.textShadow = `0 0 6px ${glow}, 0 0 12px rgba(255, 255, 255, 0.7)`;
    
    // 让星星有不同大小（8px ~ 20px）
    let size = Math.floor(Math.random() * 12) + 0.5;
    star.style.fontSize = `${size}px`;

    // 让星星有“低饱和度的亮色”
    let colors = ["rgba(255, 255, 255, 0.9)", "rgba(230, 230, 255, 0.8)", "rgba(220, 220, 250, 0.8)"];
    let glow = colors[Math.floor(Math.random() * colors.length)];
    star.style.color = glow;
    star.style.textShadow = `0 0 6px ${glow}, 0 0 12px rgba(255, 255, 255, 0.7)`;

    // 让星星的消失时间随机（0.8s - 1.5s）
    let duration = (Math.random() * 0.7 + 0.8).toFixed(2);
    star.style.animationDuration = `${duration}s`;

    document.body.appendChild(star);
    setTimeout(() => { star.remove(); }, duration * 1000);
});
