function ani() {
  if (mediaQuery.matches) {
    const paper = anime({
      targets: ".letter",
      durations: 1000,
      height: 500,
      width: 350,
      translateY: -250,
    });

    const buttonDissapear = anime({
      targets: ".btn",
      opacity: -1,
      duration: 20000,
    });

    const lidMove = anime({
      targets: ".lid",
      opacity: -1,
      duration: 20000,
    });

    const envelopeMove = anime({
      targets: ".envelope",
      opacity: -1,
      duration: 20000,
    });

    const backgroundDissapear = anime({
      targets: ".background",
      opacity: -1,
      duration: 20000,
    });

    const flowerMove = anime({
      targets: ".flowerss",
      translateY: 90,
      duration: 500,
      delay: 1300,
    });

    document.querySelector(".flowerss").addEventListener("click", function () {
      const text =
          "Chúc mừng sinh nhật người chị đáng yêu dễ thương quá trời của tui nhaaa! Cảm ơn chị và đã mang đến cho em niềm vui trong cuộc sống này (cũng không hẳn tại chị toàn bơ em =v), nhân ngày hôm nay em chúc chị luôn xinh tươi, yêu đời và thành công trong cuộc sống. Nếu ai hỏi em món quà đắt giá nhất mà em có thể tặng cho chị là gì thì em xin trả lời rằng: món quà đó là em :P. Dưới đây là những món quà tinh thần cho chị!!! =)))) iu chị lắm @@ ♡ ♡"; // Replace with your desired text
      const typewriterText = document.querySelector(".letter #typewriterText");
      let i = 0;

      const typewriterInterval = setInterval(function () {
        typewriterText.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
          clearInterval(typewriterInterval);
        }
      }, 40); // Adjust the delay between each character
    });
  } else {
    const paper = anime({
      targets: ".letter",
      durations: 1000,
      scale: 3.7,
    });

    const buttonDissapear = anime({
      targets: ".btn",
      opacity: -1,
      duration: 20000,
    });

    const lidMove = anime({
      targets: ".lid",
      opacity: -1,
      duration: 20000,
    });

    const envelopeMove = anime({
      targets: ".envelope",
      opacity: -1,
      duration: 20000,
    });

    const backgroundDissapear = anime({
      targets: ".background",
      opacity: -1,
      duration: 20000,
    });

    const flowerMove = anime({
      targets: ".flowerss",
      translateY: 90,
      duration: 500,
      delay: 1300,
    });

    document.querySelector(".flowerss").addEventListener("click", function () {
      const text =
          "Chúc mừng sinh nhật người chị đáng yêu dễ thương quá trời của tui nhaaa! Cảm ơn chị và đã mang đến cho em niềm vui trong cuộc sống này (cũng không hẳn tại chị toàn bơ em =v), nhân ngày hôm nay em chúc chị luôn xinh tươi, yêu đời và thành công trong cuộc sống. Nếu ai hỏi em món quà đắt giá nhất mà em có thể tặng cho chị là gì thì em xin trả lời rằng: món quà đó là em :P. Dưới đây là những món quà tinh thần cho chị!!! =)))) iu chị lắm @@ ♡ ♡"; // Replace with your desired text
      const typewriterText = document.querySelector(".letter #typewriterText");
      let i = 0;

      const typewriterInterval = setInterval(function () {
        typewriterText.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
          clearInterval(typewriterInterval);
        }
      }, 40); // Adjust the delay between each character
    });
  }
}

function hideButton() {
  if (mediaQuery.matches) {
    anime({
      targets: ".flowerss",
      translateY: -500,
      duration: 1000,
    });

    anime({
      targets: ".gift-tab",
      opacity: 1,
      delay: 17000,
      duration: 2000,
    });

    const heartButtonMove = anime({
      targets: ".heart-tab",
      opacity: 1,
      delay: 16800,
      duration: 2000,
    });

    anime({
      targets: ".flower-tab",
      opacity: 1,
      delay: 16900,
      duration: 2000,
    });
  } else {
    anime({
      targets: ".flowerss",
      translateY: -500,
      duration: 1000,
    });

    anime({
      targets: ".gift-tab",
      translateX: -200,
      delay: 16900,
    });

    const heartButtonMove = anime({
      targets: ".heart-tab",
      translateX: 200,
      delay: 16800,
    });

    anime({
      targets: ".flower-tab",
      translateY: -260,
      delay: 17000,
    });
  }
}

window.addEventListener("load", function () {
  setTimeout(function () {
    const loadingBackground = document.querySelector(".loading-background");
    anime({
      targets: ".loading-background",
      opacity: [0, 1],
      duration: 4000, // Animation duration in milliseconds (4000 milliseconds = 4 seconds)
      easing: "easeOutQuad", // Slowly disappear using quadratic easing function
    });
    loadingBackground.style.display = "none";
  }, 4500); // Delay time in milliseconds (2000 milliseconds = 2 seconds)
});

let musicPlayer = document.querySelector(".music-container");
let togglePlayer = document.querySelector(".toggle-player");

let trackInfo = document.querySelector(".track-info");
let trackName = document.querySelector(".trackname");
let trackArtist = document.querySelector(".trackartist");
let trackNav = document.querySelector(".track-nav");

let playPauseBtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector(".next-track");
let prevBtn = document.querySelector(".prev-track");

let trackIndex = 0;
let isPlaying = false;
let isHidden = true;

let currentTrack = document.createElement("audio");
let soundBars = document.querySelector(".sound-bars");

togglePlayer.addEventListener("click", function () {
  isHidden = !isHidden;
  if (isHidden) {
    musicPlayer.classList.remove("hide");
    togglePlayer.innerHTML = '<img class="w-[98%]" src="icons/close.svg">';
    trackInfo.style.transitionDelay = "0.4s";
    trackNav.style.transitionDelay = "0.4s";
  } else {
    musicPlayer.classList.add("hide");
    togglePlayer.innerHTML = '<img class="w-full" src="icons/plus.svg">';
    trackInfo.style.transitionDelay = "0s";
    trackNav.style.transitionDelay = "0s";
  }
});

let soundBarsLottie = bodymovin.loadAnimation({
  container: soundBars,
  renderer: "svg",
  loop: true,
  autoPLay: false,
  path: "https://lottie.host/9ec12a7e-e429-453a-9f22-a2af1dcb4dca/2zeuy4rwtP.json",
});

let trackList = [
  {
    name: "Only",
    artist: "Lee Hi",
    path: "./music/only.mp3",
  },
  {
    name: "Day & Night",
    artist: "Jung Seung Hwan",
    path: "./music/day and night.mp3",
  },
  {
    name: "Love of my Life",
    artist: "Reyne",
    path: "./music/love of my life.mp3",
  },
  {
    name: "The Only One",
    artist: "Reyne",
    path: "./music/the only one.mp3",
  },
];

// EVENT LISTENERS
playPauseBtn.addEventListener("click", playPauseTrack);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

function loadTrack(trackIndex) {
  currentTrack.src = trackList[trackIndex].path;
  trackName.textContent = trackList[trackIndex].name;
  trackArtist.textContent = trackList[trackIndex].artist;
  currentTrack.addEventListener("ended", nextTrack);
  currentTrack.load();
}

loadTrack(trackIndex);

function playPauseTrack() {
  if (isPlaying == false) {
    playTrack();
  } else {
    pauseTrack();
  }
}

function playTrack() {
  currentTrack.play();
  isPlaying = true;
  playPauseBtn.innerHTML = '<img class="w-8" src="icons/pause.svg">';
  soundBarsLottie.play();
}

function pauseTrack() {
  currentTrack.pause();
  isPlaying = false;
  playPauseBtn.innerHTML = '<img class="w-8" src="icons/play.svg">';
  soundBarsLottie.stop();
}

function nextTrack() {
  if (trackIndex < trackList.length - 1) {
    trackIndex += 1;
    loadTrack(trackIndex);
    playTrack();
  } else {
    trackIndex = 0;
    loadTrack(trackIndex);
    playTrack();
  }
}

function prevTrack() {
  if (trackIndex > 0) {
    trackIndex -= 1;
    loadTrack(trackIndex);
    playTrack();
  } else {
    trackIndex = trackList.length - 1;
    loadTrack(trackIndex);
    playTrack();
  }
}

function heartSide() {
  if (mediaQuery.matches) {
    heartBeat();
    anime({
      targets: ".wrapper",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".flower-tab",
      opacity: 0,
      translateY: 100,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".background",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".music-container",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".heart-tab",
      opacity: 0,
      translateY: 100,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".gift-tab",
      opacity: 0,
      translateY: 100,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".black-background",
      opacity: 1,
      duration: 2000,
      easing: "easeInOutQuad",
    })

    anime({
      targets: ".remove",
      translateY: 200,
      duration: 2000,
      delay: 5000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".animated-heart",
      opacity: 1,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    document.getElementById("pinkboard").style.zIndex = "1";
  } else {
    const heartSide = anime({
      targets: ".wrapper",
      translateX: 1500,
      duration: 4000,
    });

    anime({
      targets: ".flower-tab",
      translateY: 500,
      duration: 2500,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".background",
      translateX: 1500,
      duration: 4000,
    });

    anime({
      targets: ".music-container",
      translateX: -500,
      duration: 4000,
    });

    anime({
      targets: ".heart-tab",
      translateX: -1000,
      duration: 4000,
    });

    anime({
      targets: ".gift-tab",
      translateX: 1500,
      duration: 4000,
    });

    heartBeat();

    anime({
      targets: ".black-background",
      translateY: "1500",
      duration: 2000,
      easing: "easeInOutQuad",
    });

    document.getElementById("black-background").style.zIndex = "-1";
    document.getElementById("pinkboard").style.zIndex = "1";

    anime({
      targets: ".remove",
      translateY: 180,
      duration: 2000,
      delay: 5000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".animated-heart",
      opacity: 1,
      duration: 2000,
      delay: 1500,
    });
  }
}

function heartBeat() {
  /*
     * Settings
     */
  var settings = {
    particles: {
      length: 500, // maximum amount of particles
      duration: 2, // particle duration in sec
      velocity: 50, // particle velocity in pixels/sec
      effect: -0.5, // play with this for a nice effect
      size: 15, // particle size in pixels
    },
  };

  /*
   * RequestAnimationFrame polyfill by Erik Möller
   */
  (function () {
    var b = 0;
    var c = ["ms", "moz", "webkit", "o"];
    for (var a = 0; a < c.length && !window.requestAnimationFrame; ++a) {
      window.requestAnimationFrame = window[c[a] + "RequestAnimationFrame"];
      window.cancelAnimationFrame =
          window[c[a] + "CancelAnimationFrame"] ||
          window[c[a] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (h, e) {
        var d = new Date().getTime();
        var f = Math.max(0, 16 - (d - b));
        var g = window.setTimeout(function () {
          h(d + f);
        }, f);
        b = d + f;
        return g;
      };
    }
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function (d) {
        clearTimeout(d);
      };
    }
  })();

  /*
   * Point class
   */
  var Point = (function () {
    function Point(x, y) {
      this.x = typeof x !== "undefined" ? x : 0;
      this.y = typeof y !== "undefined" ? y : 0;
    }

    Point.prototype.clone = function () {
      return new Point(this.x, this.y);
    };
    Point.prototype.length = function (length) {
      if (typeof length == "undefined")
        return Math.sqrt(this.x * this.x + this.y * this.y);
      this.normalize();
      this.x *= length;
      this.y *= length;
      return this;
    };
    Point.prototype.normalize = function () {
      var length = this.length();
      this.x /= length;
      this.y /= length;
      return this;
    };
    return Point;
  })();

  /*
   * Particle class
   */
  var Particle = (function () {
    function Particle() {
      this.position = new Point();
      this.velocity = new Point();
      this.acceleration = new Point();
      this.age = 0;
    }

    Particle.prototype.initialize = function (x, y, dx, dy) {
      this.position.x = x;
      this.position.y = y;
      this.velocity.x = dx;
      this.velocity.y = dy;
      this.acceleration.x = dx * settings.particles.effect;
      this.acceleration.y = dy * settings.particles.effect;
      this.age = 0;
    };
    Particle.prototype.update = function (deltaTime) {
      this.position.x += this.velocity.x * deltaTime;
      this.position.y += this.velocity.y * deltaTime;
      this.velocity.x += this.acceleration.x * deltaTime;
      this.velocity.y += this.acceleration.y * deltaTime;
      this.age += deltaTime;
    };
    Particle.prototype.draw = function (context, image) {
      function ease(t) {
        return --t * t * t + 1;
      }

      var size = image.width * ease(this.age / settings.particles.duration);
      context.globalAlpha = 1 - this.age / settings.particles.duration;
      context.drawImage(
          image,
          this.position.x - size / 2,
          this.position.y - size / 2,
          size,
          size
      );
    };
    return Particle;
  })();

  /*
   * ParticlePool class
   */
  var ParticlePool = (function () {
    var particles,
        firstActive = 0,
        firstFree = 0,
        duration = settings.particles.duration;

    function ParticlePool(length) {
      // create and populate particle pool
      particles = new Array(length);
      for (var i = 0; i < particles.length; i++) particles[i] = new Particle();
    }

    ParticlePool.prototype.add = function (x, y, dx, dy) {
      particles[firstFree].initialize(x, y, dx, dy);

      // handle circular queue
      firstFree++;
      if (firstFree == particles.length) firstFree = 0;
      if (firstActive == firstFree) firstActive++;
      if (firstActive == particles.length) firstActive = 0;
    };
    ParticlePool.prototype.update = function (deltaTime) {
      var i;

      // update active particles
      if (firstActive < firstFree) {
        for (i = firstActive; i < firstFree; i++)
          particles[i].update(deltaTime);
      }
      if (firstFree < firstActive) {
        for (i = firstActive; i < particles.length; i++)
          particles[i].update(deltaTime);
        for (i = 0; i < firstFree; i++) particles[i].update(deltaTime);
      }

      // remove inactive particles
      while (
          particles[firstActive].age >= duration &&
          firstActive != firstFree
          ) {
        firstActive++;
        if (firstActive == particles.length) firstActive = 0;
      }
    };
    ParticlePool.prototype.draw = function (context, image) {
      // draw active particles
      if (firstActive < firstFree) {
        for (i = firstActive; i < firstFree; i++)
          particles[i].draw(context, image);
      }
      if (firstFree < firstActive) {
        for (i = firstActive; i < particles.length; i++)
          particles[i].draw(context, image);
        for (i = 0; i < firstFree; i++) particles[i].draw(context, image);
      }
    };
    return ParticlePool;
  })();

  /*
   * Putting it all together
   */
  (function (canvas) {
    var context = canvas.getContext("2d"),
        particles = new ParticlePool(settings.particles.length),
        particleRate = settings.particles.length / settings.particles.duration, // particles/sec
        time;

    // get point on heart with -PI <= t <= PI
    function pointOnHeart(t) {
      return new Point(
          160 * Math.pow(Math.sin(t), 3),
          130 * Math.cos(t) -
          50 * Math.cos(2 * t) -
          20 * Math.cos(3 * t) -
          10 * Math.cos(4 * t) +
          25
      );
    }

    // creating the particle image using a dummy canvas
    var image = (function () {
      var canvas = document.createElement("canvas"),
          context = canvas.getContext("2d");
      canvas.width = settings.particles.size;
      canvas.height = settings.particles.size;

      // helper function to create the path
      function to(t) {
        var point = pointOnHeart(t);
        point.x =
            settings.particles.size / 2 +
            (point.x * settings.particles.size) / 350;
        point.y =
            settings.particles.size / 2 -
            (point.y * settings.particles.size) / 350;
        return point;
      }

      // create the path
      context.beginPath();
      var t = -Math.PI;
      var point = to(t);
      context.moveTo(point.x, point.y);
      while (t < Math.PI) {
        t += 0.01; // baby steps!
        point = to(t);
        context.lineTo(point.x, point.y);
      }
      context.closePath();
      // create the fill
      context.fillStyle = "#ea80b0";
      context.fill();
      // create the image
      var image = new Image();
      image.src = canvas.toDataURL();
      return image;
    })();

    // render that thing!
    function render() {
      // next animation frame
      requestAnimationFrame(render);

      // update time
      var newTime = new Date().getTime() / 1000,
          deltaTime = newTime - (time || newTime);
      time = newTime;

      // clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // create new particles
      var amount = particleRate * deltaTime;
      for (var i = 0; i < amount; i++) {
        var pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
        var dir = pos.clone().length(settings.particles.velocity);
        particles.add(
            canvas.width / 2 + pos.x,
            canvas.height / 2 - pos.y,
            dir.x,
            -dir.y
        );
      }

      // update and draw particles
      particles.update(deltaTime);
      particles.draw(context, image);
    }

    // handle (re-)sizing of the canvas
    function onResize() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }

    window.onresize = onResize;

    // delay rendering bootstrap
    setTimeout(function () {
      onResize();
      render();
    }, 1500);
  })(document.getElementById("pinkboard"));
}

function giftSide() {
  if (mediaQuery.matches) {
    anime({
      targets: ".wrapper",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".flower-tab",
      opacity: 0,
      translateY: 100,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".background",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".music-container",
      opacity: 0,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".heart-tab",
      opacity: 0,
      translateY: 100,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".gift-tab",
      opacity: 0,
      translateY: 100,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".gift-background",
      opacity: 1,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".gift-container",
      opacity: 1,
      delay: 1000,
      duration: 2000,
      easing: "easeInOutQuad",
      zIndex: 2,
    });

    anime({
      targets: ".remove",
      translateY: 200,
      duration: 2000,
      delay: 5000,
      easing: "easeInOutQuad",
    });

    document.getElementById("gift-background").style.zIndex = "-5";
    document.getElementById("gift-container").style.zIndex = "1";
  } else {

    anime({
      targets: ".wrapper",
      translateX: -1500,
      duration: 4000,
    });

    anime({
      targets: ".background",
      translateX: -1500,
      duration: 4000,
    });

    anime({
      targets: ".music-container",
      translateX: -500,
      duration: 4000,
    });

    anime({
      targets: ".heart-tab",
      translateX: -1000,
      duration: 4000,
    });

    anime({
      targets: ".gift-tab",
      translateX: 1500,
      duration: 4000,
    });

    anime({
      targets: ".remove",
      translateY: 180,
      duration: 2000,
      delay: 5000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".gift-background",
      translateY: "1500",
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".gift-container",
      opacity: 1,
      delay: 1000,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".flower-tab",
      translateY: 500,
      duration: 2500,
      easing: "easeInOutQuad",
    });

    document.getElementById("gift-background").style.zIndex = "-5";
    document.getElementById("gift-container").style.zIndex = "1";
  }
}

const click = document.querySelector(".click");
const giftBox = document.querySelector(".gift-box");
const Shadow = document.querySelector(".shadow");
const giftContainer = document.querySelector(".gift-container");
const giftText = document.querySelector(".gift-text");
click.addEventListener("click", () => {
  if (click.className === "click") {
    click.classList.add("active");
    giftBox.classList.add("active");
    Shadow.classList.add("active");
    giftContainer.classList.add("active");
    giftText.classList.add("active");
    giftText.classList.remove("active2");
  } else {
    click.classList.remove("active");
    giftBox.classList.remove("active");
    Shadow.classList.remove("active");
    giftContainer.classList.remove("active");
    giftText.classList.add("active2");
    giftText.classList.remove("active");
  }
});

function removeHeartAndGift() {

  if (mediaQuery.matches) {
    anime({
      targets: ".remove",
      translateY: -500,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".black-background",
      opacity: 0,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".gift-background",
      opacity: 0,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".gift-container",
      opacity: -1,
      duration: 2000,
      easing: "easeInOutQuad",
      zIndex: -2
    });

    anime({
      targets: ".animated-heart",
      opacity: -1,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    const heartSide = anime({
      targets: ".wrapper",
      opacity: 1,
      duration: 2000,
      easing: "easeInOutQuad",
      zIndex: 2,
    });

    anime({
      targets: ".background",
      opacity: 1,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".music-container",
      opacity: 1,
      duration: 2000,
      easing: "easeInOutQuad",
      zIndex: 2,
    });

    anime({
      targets: ".heart-tab",
      opacity: 1,
      translateY: 0,
      duration: 2000,
      easing: "easeInOutQuad",
      zIndex: 2,
    });

    anime({
      targets: ".gift-tab",
      opacity: 1,
      translateY: 0,
      duration: 2000,
      easing: "easeInOutQuad",
      zIndex: 2,
    });

    anime({
      targets: ".flower-tab",
      opacity: 1,
      translateY: 0,
      duration: 2000,
      easing: "easeInOutQuad",
      zIndex: 2,
    });

    document.getElementById("black-background").style.zIndex = "-1";
    document.getElementById("pinkboard").style.zIndex = "-10";
  }
   else {

    anime({
      targets: ".remove",
      translateY: -500,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".black-background",
      translateY: -1500,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".gift-background",
      translateY: -1500,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".gift-container",
      opacity: -1,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".animated-heart",
      opacity: -1,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    const heartSide = anime({
      targets: ".wrapper",
      translateX: 0,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".background",
      translateX: 0,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".music-container",
      translateX: 0,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".heart-tab",
      translateX: 200,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".gift-tab",
      translateX: -200,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".flower-tab",
      translateY: -260,
      duration: 2000,
      easing: "easeInOutQuad",
    });

    document.getElementById("black-background").style.zIndex = "-1";
    document.getElementById("pinkboard").style.zIndex = "-10";
  }
}

function hideLoadingBackground() {
  document.querySelector(".loading-background").style.opacity = "0"
}

setTimeout(hideLoadingBackground, 4600);

var mediaQuery = window.matchMedia("(max-width: 450px)");
