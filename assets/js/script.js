// すべての .cursor-box 要素を取得
document.querySelectorAll('.cursor-box').forEach(box => {
    let rippleInterval = null;
    let mouseX = 0;
    let mouseY = 0;
  
    // マウスの位置を更新
    box.addEventListener('mousemove', (e) => {
      const rect = box.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });
  
    // マウスが入ったら定期的に波紋を生成
    box.addEventListener('mouseenter', () => {
      rippleInterval = setInterval(() => {
        createRipple(box, mouseX, mouseY);
      }, 1000); // ここで1秒ごとに波紋を生成（必要に応じて調整）
    });
  
    // マウスが離れたら波紋生成を停止
    box.addEventListener('mouseleave', () => {
      clearInterval(rippleInterval);
    });
  });
  
  // 波紋エフェクトを生成する関数
  function createRipple(target, x, y) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    target.appendChild(ripple);
    
    // CSSアニメーションが終わった後、要素を削除
    setTimeout(() => {
      ripple.remove();
    }, 1000); // CSSのアニメーション時間に合わせる
  }
  
