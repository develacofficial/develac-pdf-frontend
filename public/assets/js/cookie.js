document.addEventListener("DOMContentLoaded", function(){

  if(localStorage.getItem("cookieConsent")){
    return;
  }

  const banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.innerHTML = `
    <div class="cookie-text">
      We use cookies and privacy-friendly analytics to improve your experience.
      By continuing, you agree to our
      <a href="/pages/privacy.html" style="color:var(--accent); text-decoration:none;">Privacy Policy</a>.
    </div>
    <div class="cookie-actions">
      <button class="cookie-btn cookie-decline">Decline</button>
      <button class="cookie-btn cookie-accept">Accept</button>
    </div>
  `;

  document.body.appendChild(banner);

  banner.querySelector(".cookie-accept").onclick = function(){
    localStorage.setItem("cookieConsent", "accepted");
    banner.remove();
  };

  banner.querySelector(".cookie-decline").onclick = function(){
    localStorage.setItem("cookieConsent", "declined");
    banner.remove();
  };

});
