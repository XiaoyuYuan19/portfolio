document.addEventListener("mousemove", function(e) {
    if (Math.random() > 0.4) return; // 限制星星数量，避免太多
    let star = document.createElement("div");
    star.className = "star";
    star.style.left = `${e.clientX}px`;
    star.style.top = `${e.clientY}px`;
    
    // 让星星的颜色变得更梦幻
    let colors = ["rgba(173, 216, 230, 0.8)", "rgba(255, 182, 193, 0.8)", "rgba(144, 238, 144, 0.8)", "rgba(255, 215, 0, 0.8)"];
    let glow = colors[Math.floor(Math.random() * colors.length)];
    star.style.boxShadow = `0 0 8px ${glow}, 0 0 12px ${glow}`;

    document.body.appendChild(star);
    setTimeout(() => { star.remove(); }, 1000);
});
