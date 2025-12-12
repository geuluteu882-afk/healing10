document.addEventListener("DOMContentLoaded", () => {
  // ▶ PLAY 클릭 시 콘솔에 기록 (기능은 유지되고, 페이지는 그대로 동작)
  const links = document.querySelectorAll(".youtube-link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      console.log("Opening YouTube link:", link.href);
    });
  });

  // footer 아래에 자동으로 연도 표시 한 줄 추가
  const footer = document.querySelector(".footer");
  if (footer) {
    const p = document.createElement("p");
    p.textContent = `© ${new Date().getFullYear()} Healing Song Project`;
    footer.appendChild(p);
  }
});
