function toggleMenu() {
  try {
    var menuIcon = document.getElementById("menu-icon")
    var closeIcon = document.getElementById("close-icon")

    if (!menuIcon) {
      var menuIsClose =
        closeIcon.getAttribute("src") === "assets/icons/close.png"
      if (menuIsClose) {
        closeIcon.src = "assets/icons/menu.png"
        closeIcon.id = "menu-icon"

        document.querySelector(".container").innerHTML = `

      <main class="main">
        <img src="assets/icons/one.png" alt="one icon" class="top-icon-main" />
        <div class="main-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div class="main-details">
          <span class="detail"
            ><img
              src="assets/icons/profile.svg"
              alt="profile icon"
              class="main-icons"
            />BY VIRGINIE SIBERS</span
          >

          <span class="detail"
            ><img
              src="assets/icons/calendar.png"
              alt="profile icon"
              class="main-icons"
            />08/12/23</span
          >

          <span class="detail"
            ><img
              src="assets/icons/time.png"
              alt="profile icon"
              class="main-icons"
            />2 MINS AGO</span
          >
        </div>
        <button class="main-btn">Read</button>
      </main>

      <aside class="aside">
        <div class="aside-box">
          <img
            src="assets/icons/two.png"
            alt="two icon"
            class="top-icon-side"
          />
          <div id="aside-img2"></div>
          <div class="aside-text">
            <div class="side-text">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s.
            </div>
            <div class="side-details">
              <img src="assets/icons/user.png" class="side-icons" />BY VIRGINIE
              SIBERS
            </div>
            <button class="side-btn">Read</button>
          </div>
        </div>
        <div class="aside-box">
          <img
            src="assets/icons/three.png"
            alt="three icon"
            class="top-icon-side"
          />
          <div id="aside-img3"></div>
          <div class="aside-text">
            <div class="side-text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </div>
            <div class="side-details">
              <img src="assets/icons/user.png" class="side-icons" />BY VIRGINIE
              SIBERS
            </div>
            <button class="side-btn">Read</button>
          </div>
        </div>
        <div class="aside-box">
          <img
            src="assets/icons/four.png"
            alt="four icon"
            class="top-icon-side"
          />
          <div id="aside-img4"></div>
          <div class="aside-text">
            <div class="side-text">
              There are many variations of passages of Lorem Ipsum available.
            </div>
            <div class="side-details">
              <img src="assets/icons/user.png" class="side-icons" />BY VIRGINIE
              SIBERS
            </div>
            <button class="side-btn">Read</button>
          </div>
        </div>
      </aside>
        `
      }
      document.querySelector(".header").style.display = "flex"
      document.body.style.backgroundColor = "#e2e2e2"
    } else if (!closeIcon) {
      var menuIsOpen = menuIcon.getAttribute("src") === "assets/icons/menu.png"
      if (menuIsOpen) {
        menuIcon.src = "assets/icons/close.png"
        menuIcon.id = "close-icon"

        document.querySelector(".container").innerHTML = `
    <div class="menu-wrap">
      <div class="menu">
        <div>
          <div>
            <ul>
              <li class="menu-item"><a href="index.html">Home</a></li>
              <li class="menu-item">News</li>
              <li class="menu-item">Video</li>
              <li class="menu-item">Members</li>
              <li class="menu-item">Become a Member</li>
            </ul>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="menu-details">
          <ul>
            <li>About</li>
            <li>Policies</li>
            <li>Contact</li>
          </ul>
        </div>
        <div class="menu-socials">
          <ul>
            <li><img src="assets/icons/facebook.png"/></li>
            <li><img src="assets/icons/twitter.png"/></li>
            <li><img src="assets/icons/linkedin.png"/></li>
            <li><img src="assets/icons/youtube.png"/></li>
            <li><img src="assets/icons/instagram.png"/></li>
          </ul>
        </div>
      </footer>
    </div>
      `
      }
      document.body.style.backgroundColor = "#3b3b3b"
      document.querySelector(".header").style.display = "none"
    }
  } catch (error) {
    console.error("An error occurred:", error.message)
  }
}
