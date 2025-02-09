document.addEventListener("mousemove", function(e) {
    if (Math.random() > 0.5) return; // 限制星星数量，避免太多
    let star = document.createElement("div");
    star.className = "star";
    star.style.left = `${e.clientX}px`;
    star.style.top = `${e.clientY}px`;
    document.body.appendChild(star);
    setTimeout(() => { star.remove(); }, 800);
});
