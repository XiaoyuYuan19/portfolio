document.addEventListener("mousemove", function(e) {
    if (Math.random() > 0.6) return; // 限制星星数量，避免太多
    let star = document.createElement("div");
    star.className = "star";
    star.textContent = "★"; // 使用星星符号
    star.style.left = `${e.clientX + window.scrollX}px`;
    star.style.top = `${e.clientY + window.scrollY}px`; // 修正：加上 window.scrollY 让星星跟随页面滚动

    // 让星星有不同大小（8px ~ 20px）
    let size = Math.floor(Math.random() * 12) + 0.5;
    star.style.fontSize = `${size}px`;

    // 让夜间模式的星星更符合背景色
    let nightColors = ["rgba(180, 200, 255, 0.9)",  
                       "rgba(160, 190, 255, 0.8)",  
                       "rgba(140, 160, 255, 0.9)",  
                       "rgba(255, 250, 200, 0.9)",  
                       "rgba(230, 230, 250, 0.9)", 
                       "rgba(211, 211, 255, 0.9)", 
                       "rgba(255, 248, 220, 0.9)", 
                       "rgba(200, 230, 255, 0.9)",
                       "rgba(210, 210, 255, 0.8)"];

    let glow = nightColors[Math.floor(Math.random() * nightColors.length)];
    star.style.color = glow;
    star.style.textShadow = `0 0 6px ${glow}, 0 0 12px ${glow}`;

    // 让星星的消失时间随机（0.8s - 1.5s）
    let duration = (Math.random() * 0.7 + 0.8).toFixed(2);
    star.style.animationDuration = `${duration}s`;

    document.body.appendChild(star);
    setTimeout(() => { star.remove(); }, duration * 1000);
});
