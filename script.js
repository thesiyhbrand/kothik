// ----------Scramble------------
$(document).ready(function () {
  // ELEMENTS
  var $body = $("body");
  var $container = $(".container");
  var $scramble = $(".scramble");
  var $input = $(".input");
  var $notice = $(".notice");
  var $buttons = $(".button");
  var $options = $(".options-box");

  // OTHER GLOBALS
  var optionsOpen = false;

  // DEMO SCRAMBLE
  $scramble.scramble(3000, 20, "alphabet", true);

  // HELPERS
  var toBoolean = function (input) {
    return input === "true" ? true : false;
  };

  var scrambleDemo = function () {
    input = $input.val() === "" ? "Text deScrambler" : $input.val();
    duration = Number($(".duration").eq(0).val());
    interval = Number($(".interval").eq(0).val());
    uppercase = toBoolean($("input[name=uppercase]:checked").val());
    characterSet = $("input[name=character-set]:checked").val();
    $scramble.text(input);
    $scramble.scramble(duration, interval, characterSet, uppercase);
  };

  // LISTENERS
  // button click (scramble or options)
  $buttons.on("click", function () {
    // SCRAMBLE button
    if ($(this).attr("value") === "scramble") {
      scrambleDemo();
      // OPTIONS button
    } else if ($(this).attr("value") === "options") {
      if (!optionsOpen) {
        $options.animate({
          top: "-90px",
        });
      } else {
        $options.animate({
          top: "-400px",
        });
      }
      optionsOpen = !optionsOpen;
    }
  });

  // enter keydown
  $input.on("keydown", function (e) {
    if (e.keyCode === 13) {
      $notice.fadeOut(500, function () {
        $notice.text("");
      });
      scrambleDemo();
    } else {
      if ($input.val().length > 18) {
        $notice.text("Just press enter, already.");
        $notice.fadeIn();
      }
    }
  });
});

// ----------scrambleEnd--------------

// ---loader up -----
var tl = gsap.timeline();
tl.to(".Loading", {
  opacity: 0,
  delay: 2.5,
})
  .to(".loader", {
    // y: "-100%",
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
  })
  .to(
    ".loader",
    {
      y: "-100%",
      // opacity:0,
      duration: 1,
      // ease: "Expo.easeInOut"
    },
    "up"
  )
  .to(
    "#v0",
    {
      // height: "0%",
      opacity: 0,
      // duration: -1,
      delay: -2,
      // ease: "Expo.easeInOut"
    },
    "up"
  )
  .to(
    ".svgwaala",
    {
      opacity: 1,
      // duration:0.1,
      delay: -1.7,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    "#dotted",
    {
      opacity: 1,
      // duration:0.1,
      delay: -1.8,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    "#donut",
    {
      opacity: 1,
      scale: 2,
      delay: -1.4,
      ease: "Expo.easeInOut",
      rotationY: "+=15",
      duration: 3,
      rotationX: "+=15",
      rotationZ: "+=15",
    },
    "up"
  )

  .from(
    "#kothik-k, #kothik-o, #kothik-t, #kothik-h, #kothik-k2, #kothik-i",
    {
      opacity: 0,
      duration: 1,
      scale: 0,
      top: "40%",
      left: "47%",
    },
    "up"
  )

  .from(
    "#shape-1,#hotel, #table, #scooter",
    {
      opacity: 0,
      duration: 1,
      // delay:0
      // scale:0,
      // top:"40%",
      // left:"47%"
    },
    "u"
  );

// document.querySelector("#explore")
// .addEventListener("click", function(){
//     document.querySelectorAll("#kothik-k, #kothik-o, #kothik-t, #kothik-h, #kothik-k2, #kothik-i").style.top = "100%"
//     // document.querySelector(".svgwaala").style.marginTop = "-51%"
//     // document.querySelector("#chainn").style.color = "rgb(177, 177, 177)"
// })

var tl2 = gsap.timeline();

document.querySelectorAll("#explore").forEach(function (elem) {
  elem.addEventListener("click", function () {
    // document.querySelector("#kothik-k").style.left = "-10%";
    // document.querySelector("#vwclr").style.display = "initial";
    // document.querySelector("#vw").style.display = "initial";
    // document.querySelector("#vwclr").style.mixBlendMode = "difference";
    // document.querySelector("#main").style.backgroundColor = dets.target.dataset.color;
    // document.querySelectorAll(".insidebottom h3, .insidebottom p").forEach(function (val) {
    //     val.style.color = "white";
    // });
    tl2
      .to(
        "#kothik-k",
        {
          left: "-15%",
          top: "-15%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-o",
        {
          // left:"-15%",
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-t",
        {
          left: "115%",
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-h",
        {
          left: "115%",
          top: "110%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-i",
        {
          left: "35%",
          top: "120%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-k2",
        {
          left: "-15%",
          top: "80%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to("#donut", {
        // scale:2,
        width: "80vw",
        top: "-10%",
        // left:"10%",
        rotate: "360deg",
        ease: "ease.out",
        duration: 1,
        opacity: 0,
        delay: "-1",
      })
      .to(
        "#table",
        {
          left: "15%",
          top: "120%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#scooter",
        {
          left: "75%",
          top: "120%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#hotel",
        {
          left: "115%",
          top: "30%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#shape-1",
        {
          left: "75%",
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          opacity: 0,
          duration: 1,
        },
        "sw"
      )
      .to(
        "#dotted",
        {
          opacity: 0,
        },
        "sw"
      )
      .to(".svgwaala", {
        // y:"-100%",
        // transform: "skew(50deg)",
        opacity: 0,
      })
      // .to("#main", {
      //   marginTop:"-51.5%",
      //   // transform: "skew(50deg)",
      //   // opacity: 0,
      // })
  });
});

// first-txt animation --------------------

// const scroller = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// })


function dom(){
  const canvas = document.querySelector("#home>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `https://i.postimg.cc/MZjz0cKp/pexels-tima-miroshnichenko-7033923-000.jpg
  https://i.postimg.cc/kX3qTnBF/pexels-tima-miroshnichenko-7033923-001.jpg
  https://i.postimg.cc/zGq510wy/pexels-tima-miroshnichenko-7033923-002.jpg
  https://i.postimg.cc/3x9hrm9n/pexels-tima-miroshnichenko-7033923-003.jpg
  https://i.postimg.cc/nLzJXrPZ/pexels-tima-miroshnichenko-7033923-004.jpg
  https://i.postimg.cc/8PRD3qv8/pexels-tima-miroshnichenko-7033923-005.jpg
  https://i.postimg.cc/FKBQ3vMS/pexels-tima-miroshnichenko-7033923-006.jpg
  https://i.postimg.cc/XqMS1877/pexels-tima-miroshnichenko-7033923-007.jpg
  https://i.postimg.cc/JnHCQg82/pexels-tima-miroshnichenko-7033923-008.jpg
  https://i.postimg.cc/FFcQd2Df/pexels-tima-miroshnichenko-7033923-009.jpg
  https://i.postimg.cc/KjnX6MR7/pexels-tima-miroshnichenko-7033923-010.jpg
  https://i.postimg.cc/15Q1pJjv/pexels-tima-miroshnichenko-7033923-011.jpg
  https://i.postimg.cc/zXFZpTm8/pexels-tima-miroshnichenko-7033923-012.jpg
  https://i.postimg.cc/T328shGm/pexels-tima-miroshnichenko-7033923-013.jpg
  https://i.postimg.cc/253szJ1S/pexels-tima-miroshnichenko-7033923-014.jpg
  https://i.postimg.cc/Ls7rhTPB/pexels-tima-miroshnichenko-7033923-015.jpg
  https://i.postimg.cc/L8ydFR6W/pexels-tima-miroshnichenko-7033923-016.jpg
  https://i.postimg.cc/NMHZXH7h/pexels-tima-miroshnichenko-7033923-017.jpg
  https://i.postimg.cc/KjhwD8J1/pexels-tima-miroshnichenko-7033923-018.jpg
  https://i.postimg.cc/Hn0KZ1hB/pexels-tima-miroshnichenko-7033923-019.jpg
  https://i.postimg.cc/MZ1hK1pV/pexels-tima-miroshnichenko-7033923-020.jpg
  https://i.postimg.cc/SNqHXjn5/pexels-tima-miroshnichenko-7033923-021.jpg
  https://i.postimg.cc/3JBV27pw/pexels-tima-miroshnichenko-7033923-022.jpg
  https://i.postimg.cc/4xxM5MbQ/pexels-tima-miroshnichenko-7033923-023.jpg
  https://i.postimg.cc/sgHL0cTd/pexels-tima-miroshnichenko-7033923-024.jpg
  https://i.postimg.cc/jjW1V71W/pexels-tima-miroshnichenko-7033923-025.jpg
  https://i.postimg.cc/5tZRftcs/pexels-tima-miroshnichenko-7033923-026.jpg
  https://i.postimg.cc/KzBsjyxx/pexels-tima-miroshnichenko-7033923-027.jpg
  https://i.postimg.cc/SR41ztx8/pexels-tima-miroshnichenko-7033923-028.jpg
  https://i.postimg.cc/SRGTL7nP/pexels-tima-miroshnichenko-7033923-029.jpg
  https://i.postimg.cc/J732WmpQ/pexels-tima-miroshnichenko-7033923-030.jpg
  https://i.postimg.cc/BQqwSyyf/pexels-tima-miroshnichenko-7033923-031.jpg
  https://i.postimg.cc/rFQZKjX0/pexels-tima-miroshnichenko-7033923-032.jpg
  https://i.postimg.cc/mgkXM9Bd/pexels-tima-miroshnichenko-7033923-033.jpg
  https://i.postimg.cc/vZKPvmmG/pexels-tima-miroshnichenko-7033923-034.jpg
  https://i.postimg.cc/jjJM3rWP/pexels-tima-miroshnichenko-7033923-035.jpg
  https://i.postimg.cc/hjWpH3xw/pexels-tima-miroshnichenko-7033923-036.jpg
  https://i.postimg.cc/fLcBZjfb/pexels-tima-miroshnichenko-7033923-037.jpg
  https://i.postimg.cc/RhvG06gL/pexels-tima-miroshnichenko-7033923-038.jpg
  https://i.postimg.cc/fWvBrCb2/pexels-tima-miroshnichenko-7033923-039.jpg
  https://i.postimg.cc/j2vcnx90/pexels-tima-miroshnichenko-7033923-040.jpg
  https://i.postimg.cc/fTTBndtw/pexels-tima-miroshnichenko-7033923-041.jpg
  https://i.postimg.cc/bNCLzvk1/pexels-tima-miroshnichenko-7033923-042.jpg
  https://i.postimg.cc/DwS6mKPH/pexels-tima-miroshnichenko-7033923-043.jpg
  https://i.postimg.cc/SxHrMtZs/pexels-tima-miroshnichenko-7033923-044.jpg
  https://i.postimg.cc/rpW9CCb9/pexels-tima-miroshnichenko-7033923-045.jpg
  https://i.postimg.cc/Jn5cS7RD/pexels-tima-miroshnichenko-7033923-046.jpg
  https://i.postimg.cc/FzFgvtKP/pexels-tima-miroshnichenko-7033923-047.jpg
  https://i.postimg.cc/MHs0KsMz/pexels-tima-miroshnichenko-7033923-048.jpg
  https://i.postimg.cc/3r9FBwLz/pexels-tima-miroshnichenko-7033923-049.jpg
  https://i.postimg.cc/X7JcD0mq/pexels-tima-miroshnichenko-7033923-050.jpg
  https://i.postimg.cc/5NR5hRW3/pexels-tima-miroshnichenko-7033923-051.jpg
  https://i.postimg.cc/0yKGP08q/pexels-tima-miroshnichenko-7033923-052.jpg
  https://i.postimg.cc/bvXxJSJS/pexels-tima-miroshnichenko-7033923-053.jpg
  https://i.postimg.cc/Pqmm8fp3/pexels-tima-miroshnichenko-7033923-054.jpg
  https://i.postimg.cc/Kzxt7XtZ/pexels-tima-miroshnichenko-7033923-055.jpg
  https://i.postimg.cc/Tw0gCkcn/pexels-tima-miroshnichenko-7033923-056.jpg
  https://i.postimg.cc/8cCW3hy9/pexels-tima-miroshnichenko-7033923-057.jpg
  https://i.postimg.cc/qqZndzSR/pexels-tima-miroshnichenko-7033923-058.jpg
  https://i.postimg.cc/wxWDNGMp/pexels-tima-miroshnichenko-7033923-059.jpg
  https://i.postimg.cc/hPfT11Q7/pexels-tima-miroshnichenko-7033923-060.jpg
  https://i.postimg.cc/7Yd7sJSt/pexels-tima-miroshnichenko-7033923-061.jpg
  https://i.postimg.cc/6pZZD60W/pexels-tima-miroshnichenko-7033923-062.jpg
  https://i.postimg.cc/cJN3Zq9Q/pexels-tima-miroshnichenko-7033923-063.jpg
  https://i.postimg.cc/wBcmjWZn/pexels-tima-miroshnichenko-7033923-064.jpg
  https://i.postimg.cc/TwdWLVX1/pexels-tima-miroshnichenko-7033923-065.jpg
  https://i.postimg.cc/Y9dL1vp3/pexels-tima-miroshnichenko-7033923-066.jpg
  https://i.postimg.cc/Hnjc3TnC/pexels-tima-miroshnichenko-7033923-067.jpg
  https://i.postimg.cc/8c3F0xff/pexels-tima-miroshnichenko-7033923-068.jpg
  https://i.postimg.cc/CM6f5nrM/pexels-tima-miroshnichenko-7033923-069.jpg
  https://i.postimg.cc/gkCXqFPf/pexels-tima-miroshnichenko-7033923-070.jpg
  https://i.postimg.cc/8PJf6kxR/pexels-tima-miroshnichenko-7033923-071.jpg
  https://i.postimg.cc/fbZVpcyC/pexels-tima-miroshnichenko-7033923-072.jpg
  https://i.postimg.cc/vmz4s46s/pexels-tima-miroshnichenko-7033923-073.jpg
  https://i.postimg.cc/Px5Prdm8/pexels-tima-miroshnichenko-7033923-074.jpg  
  https://i.postimg.cc/jjN5W8kx/video-again-026.jpg
  https://i.postimg.cc/NjZFjhDC/video-again-027.jpg
  https://i.postimg.cc/Y9HSQ1J1/video-again-028.jpg
  https://i.postimg.cc/mDygjPsK/video-again-029.jpg
  https://i.postimg.cc/BbZQVJZb/video-again-030.jpg
  https://i.postimg.cc/Y28SmL8W/video-again-031.jpg
  https://i.postimg.cc/br6NX4dT/video-again-032.jpg
  https://i.postimg.cc/Wb31mpff/video-again-033.jpg
  https://i.postimg.cc/9FnFL36X/video-again-034.jpg
  https://i.postimg.cc/MpfZ4Pw7/video-again-035.jpg
  https://i.postimg.cc/W38srxmv/video-again-036.jpg
  https://i.postimg.cc/vTmbvXX6/video-again-037.jpg
  https://i.postimg.cc/rp6yL1yv/video-again-038.jpg
  https://i.postimg.cc/7LgHP5fb/video-again-039.jpg
  https://i.postimg.cc/cH0svdnh/video-again-040.jpg
  https://i.postimg.cc/1XYP76Y7/video-again-041.jpg
  https://i.postimg.cc/bNsqDCs7/video-again-042.jpg
  https://i.postimg.cc/zX68nChV/video-again-043.jpg
  https://i.postimg.cc/qvK0QNcQ/video-again-044.jpg
  https://i.postimg.cc/k5dCH7fC/video-again-045.jpg
  https://i.postimg.cc/g0qpF1TZ/video-again-046.jpg
  https://i.postimg.cc/xCf20gwF/video-again-047.jpg
  https://i.postimg.cc/C1cVdkYM/video-again-048.jpg
  https://i.postimg.cc/zvMZFNV9/video-again-049.jpg
  https://i.postimg.cc/xjF22vtt/video-again-050.jpg
  https://i.postimg.cc/SN2pNnPq/video-again-051.jpg
  https://i.postimg.cc/28sNqzpW/video-again-052.jpg
  https://i.postimg.cc/7ZS80pDW/video-again-053.jpg
  https://i.postimg.cc/SKq0rDxN/video-again-054.jpg
  https://i.postimg.cc/431DFVYv/video-again-055.jpg
  https://i.postimg.cc/Qtx2LC72/video-again-056.jpg
  https://i.postimg.cc/tTSL9btY/video-again-057.jpg
  https://i.postimg.cc/7h5j6RmX/video-again-058.jpg
  https://i.postimg.cc/BbRk1Cz3/video-again-059.jpg
  https://i.postimg.cc/G3fZNcmf/video-again-060.jpg
  https://i.postimg.cc/Pr8BnBL5/video-again-061.jpg
  https://i.postimg.cc/6pJFWYRL/video-again-062.jpg
  https://i.postimg.cc/pLf4pzJN/video-again-063.jpg
  https://i.postimg.cc/pdP78rsm/video-again-064.jpg
  https://i.postimg.cc/d0nf9Ff4/video-again-065.jpg
  https://i.postimg.cc/sXXN68dy/video-again-066.jpg
  https://i.postimg.cc/B6Vwdg4F/video-again-067.jpg
  https://i.postimg.cc/QCKnsTdy/video-again-068.jpg
  https://i.postimg.cc/w3K4BjtT/video-again-069.jpg
  https://i.postimg.cc/PfLtNVLB/video-again-070.jpg
  https://i.postimg.cc/ryvq4Gxz/video-again-071.jpg
  https://i.postimg.cc/kXKqvVvs/video-again-072.jpg
  https://i.postimg.cc/kgC91njm/video-again-073.jpg
  https://i.postimg.cc/rw9T7vbt/video-again-074.jpg
  https://i.postimg.cc/g0kppgFt/video-again-075.jpg
  https://i.postimg.cc/Zq7S56Jb/video-again-076.jpg
  https://i.postimg.cc/tTsHZ7gh/video-again-077.jpg
  https://i.postimg.cc/wvnYhHtn/video-again-078.jpg
  https://i.postimg.cc/mkMfjqCk/video-again-079.jpg
  https://i.postimg.cc/wxsp9tZz/video-again-080.jpg
  https://i.postimg.cc/VLQcvfPC/video-again-081.jpg
  https://i.postimg.cc/tC3GVK9m/video-again-082.jpg
  https://i.postimg.cc/HkTD06xW/video-again-083.jpg
  https://i.postimg.cc/x1gr6LJv/video-again-084.jpg
  https://i.postimg.cc/k550zDKk/video-again-085.jpg
  https://i.postimg.cc/HLPqgHtj/video-again-086.jpg
  https://i.postimg.cc/sXQtf8nm/video-again-087.jpg
  https://i.postimg.cc/26sg1wMD/video-again-088.jpg
  https://i.postimg.cc/bYnKK7SN/video-again-089.jpg
  https://i.postimg.cc/nct6Z3qK/video-again-090.jpg
  https://i.postimg.cc/DydRz1c9/video-again-091.jpg
  https://i.postimg.cc/CxhXndPz/video-again-092.jpg
  https://i.postimg.cc/rwfb1c3g/video-again-093.jpg
  https://i.postimg.cc/Gp9fzV1R/video-again-094.jpg
  https://i.postimg.cc/xd74Z50z/video-again-095.jpg
  https://i.postimg.cc/1tqj1FtY/video-again-096.jpg
  https://i.postimg.cc/d3cSs0ZQ/video-again-097.jpg
  https://i.postimg.cc/3NjfdH2X/video-again-098.jpg
  https://i.postimg.cc/NGRzNRZK/video-again-099.jpg
  https://i.postimg.cc/RV9b2NzX/video-again-100.jpg
  https://i.postimg.cc/pXZ1vRWx/video-again-101.jpg
  https://i.postimg.cc/kggYXzGS/video-again-102.jpg
  https://i.postimg.cc/vZ2q1hxN/video-again-103.jpg
  https://i.postimg.cc/cJKDf3Q4/video-again-104.jpg
  https://i.postimg.cc/Bvdmpvg5/video-again-105.jpg
  https://i.postimg.cc/h4828c7x/video-again-106.jpg
  https://i.postimg.cc/ZKVjgHH5/video-again-107.jpg
  https://i.postimg.cc/XYqx051c/video-again-108.jpg
  https://i.postimg.cc/RFwq6Ph1/video-again-155.jpg
  https://i.postimg.cc/HnHnQQ8q/video-again-156.jpg
  https://i.postimg.cc/qvgRXBgv/video-again-157.jpg
  https://i.postimg.cc/XYhv2Myc/video-again-158.jpg
  https://i.postimg.cc/zfgG6dCm/video-again-159.jpg
  https://i.postimg.cc/DZ3wTq6S/video-again-160.jpg
  https://i.postimg.cc/d1RttLN4/video-again-161.jpg
  https://i.postimg.cc/7hmH0jkz/video-again-162.jpg
  https://i.postimg.cc/VsRLx0CN/video-again-163.jpg
  https://i.postimg.cc/yY8Ys6my/video-again-164.jpg
  https://i.postimg.cc/W1DNq9fD/video-again-165.jpg
  https://i.postimg.cc/Dwt2rqtx/video-again-166.jpg
  https://i.postimg.cc/0QvP395m/video-again-167.jpg
  https://i.postimg.cc/VNnzDJwm/video-again-168.jpg
  https://i.postimg.cc/QtqhZvVz/video-again-169.jpg
  https://i.postimg.cc/Y0n7hg6f/video-again-170.jpg
  https://i.postimg.cc/8ktNK82J/video-again-171.jpg
  https://i.postimg.cc/rsFcVgrw/video-again-172.jpg
  https://i.postimg.cc/J40mS68T/video-again-173.jpg
  https://i.postimg.cc/4N0ZG6NX/video-again-174.jpg
  https://i.postimg.cc/3xDhxkdm/video-again-175.jpg
  https://i.postimg.cc/QMG39jTP/video-again-176.jpg
  https://i.postimg.cc/25Qfngd5/video-again-177.jpg
  https://i.postimg.cc/qRpHwQQx/video-again-178.jpg
  https://i.postimg.cc/ZRjtM3Mt/video-again-179.jpg
  https://i.postimg.cc/XqJSSJRZ/video-again-180.jpg
  https://i.postimg.cc/yxbqVKKL/video-again-181.jpg
  https://i.postimg.cc/158hv802/video-again-182.jpg
  https://i.postimg.cc/fW2Q7cdY/video-again-183.jpg
  https://i.postimg.cc/HsFGRTBx/video-again-184.jpg
  https://i.postimg.cc/mgMxGK5S/video-again-185.jpg
  https://i.postimg.cc/cJNp1XqG/video-again-186.jpg
  https://i.postimg.cc/L4ZpH69r/20230221-2357541-000.jpg
https://i.postimg.cc/GhFny7sK/20230221-2357541-001.jpg
https://i.postimg.cc/T1nFn1h1/20230221-2357541-002.jpg
https://i.postimg.cc/25XsDgPk/20230221-2357541-003.jpg
https://i.postimg.cc/ydgwYvHF/20230221-2357541-004.jpg
https://i.postimg.cc/1zzkby77/20230221-2357541-005.jpg
https://i.postimg.cc/Dw7kdrrT/20230221-2357541-006.jpg
https://i.postimg.cc/C139Zkh9/20230221-2357541-007.jpg
https://i.postimg.cc/pLkN0mCn/20230221-2357541-008.jpg
https://i.postimg.cc/dtKzw2Sy/20230221-2357541-009.jpg
https://i.postimg.cc/6pMSrD6r/20230221-2357541-010.jpg
https://i.postimg.cc/5NqD0XZk/20230221-2357541-011.jpg
https://i.postimg.cc/jSxmJsTq/20230221-2357541-012.jpg
https://i.postimg.cc/ry4vBngT/20230221-2357541-013.jpg
https://i.postimg.cc/PqN722NB/20230221-2357541-014.jpg
https://i.postimg.cc/0QwBqjYn/20230221-2357541-015.jpg
https://i.postimg.cc/8C303M6s/20230221-2357541-016.jpg
https://i.postimg.cc/Hn1PWm3g/20230221-2357541-017.jpg
https://i.postimg.cc/8cdXjYnr/20230221-2357541-018.jpg
https://i.postimg.cc/Nf4PtWH3/20230221-2357541-019.jpg
https://i.postimg.cc/pVK6G9XX/20230221-2357541-020.jpg
https://i.postimg.cc/httZtp8f/20230221-2357541-021.jpg
https://i.postimg.cc/BQswdqX5/20230221-2357541-022.jpg
https://i.postimg.cc/nhSRjBTT/20230221-2357541-023.jpg
https://i.postimg.cc/3wyLgNch/20230221-2357541-024.jpg
https://i.postimg.cc/tgLBDbKx/20230221-2357541-025.jpg
https://i.postimg.cc/DZLBMDhY/20230221-2357541-026.jpg
https://i.postimg.cc/Vs9K93DJ/20230221-2357541-027.jpg
https://i.postimg.cc/Bb3M9gQZ/20230221-2357541-028.jpg
https://i.postimg.cc/9FWJLJnJ/20230221-2357541-029.jpg
https://i.postimg.cc/3NZ9KvdX/20230221-2357541-030.jpg
https://i.postimg.cc/RVXGywr9/20230221-2357541-031.jpg
https://i.postimg.cc/6pqzXTwZ/20230221-2357541-032.jpg
https://i.postimg.cc/V6QFnRt9/20230221-2357541-033.jpg
https://i.postimg.cc/qRsxL3cP/20230221-2357541-034.jpg
https://i.postimg.cc/5tF3XGXN/20230221-2357541-035.jpg
https://i.postimg.cc/dVf6tvtx/20230221-2357541-036.jpg
https://i.postimg.cc/gj4q9bT4/20230221-2357541-037.jpg
https://i.postimg.cc/D07dYwB8/20230221-2357541-038.jpg
https://i.postimg.cc/BZCCP2nD/20230221-2357541-039.jpg
https://i.postimg.cc/nccG4MXW/20230221-2357541-040.jpg
https://i.postimg.cc/RZW1Y8QQ/20230221-2357541-041.jpg
https://i.postimg.cc/QdvgZbfL/20230221-2357541-042.jpg
https://i.postimg.cc/zBrnVfm0/20230221-2357541-043.jpg
https://i.postimg.cc/DzsrvXNS/20230221-2357541-044.jpg
https://i.postimg.cc/76nS7ywD/20230221-2357541-045.jpg
https://i.postimg.cc/2yjh7XSW/20230221-2357541-046.jpg
https://i.postimg.cc/MHsRPbnF/20230221-2357541-047.jpg
https://i.postimg.cc/NGb1jYdk/20230221-2357541-048.jpg
https://i.postimg.cc/zXBTLMMZ/20230221-2357541-049.jpg
https://i.postimg.cc/s2FWN22s/20230221-2357541-050.jpg
https://i.postimg.cc/dVZd6Cw5/20230221-2357541-051.jpg
https://i.postimg.cc/Y9MWtygP/20230221-2357541-052.jpg
https://i.postimg.cc/mDjFkNyg/20230221-2357541-053.jpg
https://i.postimg.cc/X7zd9LSZ/20230221-2357541-054.jpg
https://i.postimg.cc/jjzf0rWN/20230221-2357541-055.jpg
https://i.postimg.cc/Y0SLWGdf/20230221-2357541-056.jpg
https://i.postimg.cc/ZKCyYNBJ/20230221-2357541-057.jpg
https://i.postimg.cc/T2kDX0Pk/20230221-2357541-058.jpg
https://i.postimg.cc/DyH4SzLL/20230221-2357541-059.jpg
https://i.postimg.cc/0Nq6CHtN/20230221-2357541-060.jpg
https://i.postimg.cc/GpJ4gJNx/20230221-2357541-061.jpg
https://i.postimg.cc/jSfwPr49/20230221-2357541-062.jpg
https://i.postimg.cc/Twdpz5vM/20230221-2357541-063.jpg
https://i.postimg.cc/vB0cb8G1/20230221-2357541-064.jpg
https://i.postimg.cc/8css58CZ/20230221-2357541-065.jpg
https://i.postimg.cc/yx5x3fgs/20230221-2357541-066.jpg
https://i.postimg.cc/8P2s10gb/20230221-2357541-067.jpg
https://i.postimg.cc/FFn76KP8/20230221-2357541-068.jpg
https://i.postimg.cc/8CD5vf5J/20230221-2357541-069.jpg
https://i.postimg.cc/DzgzPfJC/20230221-2357541-070.jpg
https://i.postimg.cc/hPzfRq6j/20230221-2357541-071.jpg
https://i.postimg.cc/VkXv5WYP/20230221-2357541-072.jpg
https://i.postimg.cc/MTppPk1z/20230221-2357541-073.jpg
https://i.postimg.cc/TwNYBkcg/20230221-2357541-074.jpg
https://i.postimg.cc/PJLrHm6c/20230221-2357541-075.jpg
https://i.postimg.cc/Kjdc8RwY/20230221-2357541-076.jpg
https://i.postimg.cc/9XSQpn0j/20230221-2357541-077.jpg
https://i.postimg.cc/YqWqyzLL/20230221-2357541-078.jpg
https://i.postimg.cc/3xQJM02S/20230221-2357541-079.jpg
https://i.postimg.cc/rwGyqyJ8/20230221-2357541-080.jpg
https://i.postimg.cc/1z9mXxCD/20230221-2357541-081.jpg
https://i.postimg.cc/252zBHMM/20230221-2357541-082.jpg
https://i.postimg.cc/vBTG7rdB/20230221-2357541-083.jpg
https://i.postimg.cc/rstc3qs2/20230221-2357541-084.jpg
https://i.postimg.cc/j51tMDsh/20230221-2357541-085.jpg
https://i.postimg.cc/14hPZbVn/20230221-2357541-086.jpg
https://i.postimg.cc/pV9FR8nR/20230221-2357541-087.jpg
https://i.postimg.cc/qB9CRR8n/20230221-2357541-088.jpg
https://i.postimg.cc/Nfm2rc4n/20230221-2357541-089.jpg
https://i.postimg.cc/g2pXVTt2/20230221-2357541-090.jpg
https://i.postimg.cc/g2KwNH1q/20230221-2357541-091.jpg
https://i.postimg.cc/q7MNYCTf/20230221-2357541-092.jpg
https://i.postimg.cc/7Ls5yYH5/20230221-2357541-093.jpg
https://i.postimg.cc/Kz1RcSjJ/20230221-2357541-094.jpg
https://i.postimg.cc/50Dj67F1/20230221-2357541-095.jpg
https://i.postimg.cc/T1m1mVrb/20230221-2357541-096.jpg
https://i.postimg.cc/sfZvtrt2/20230221-2357541-097.jpg
https://i.postimg.cc/J4NtzQ7V/20230221-2357541-098.jpg
https://i.postimg.cc/pXbpvSHJ/20230221-2357541-099.jpg
https://i.postimg.cc/Gmbt8s9B/20230221-2357541-100.jpg
https://i.postimg.cc/3wRw95XY/20230221-2357541-101.jpg
https://i.postimg.cc/4xwdzNhW/20230221-2357541-102.jpg
https://i.postimg.cc/nLPhPR27/20230221-2357541-103.jpg
https://i.postimg.cc/zBHGZC2Q/20230221-2357541-104.jpg
https://i.postimg.cc/prNX2mgL/20230221-2357541-105.jpg
https://i.postimg.cc/dQdV59yk/20230221-2357541-106.jpg
https://i.postimg.cc/6qd6T9XL/20230221-2357541-107.jpg
https://i.postimg.cc/Gm33hwSG/20230221-2357541-108.jpg
https://i.postimg.cc/KvDv2vQm/20230221-2357541-109.jpg
https://i.postimg.cc/Kv2vwgP9/20230221-2357541-110.jpg
https://i.postimg.cc/CxvhRPWt/20230221-2357541-111.jpg
https://i.postimg.cc/PqPtYbHq/20230221-2357541-112.jpg
https://i.postimg.cc/DzH7gWfP/20230221-2357541-113.jpg
https://i.postimg.cc/W3ZTf2hL/20230221-2357541-114.jpg
https://i.postimg.cc/Y0wk5JW4/20230221-2357541-115.jpg
https://i.postimg.cc/X744Q6Wm/20230221-2357541-116.jpg
https://i.postimg.cc/j2QKtZHM/20230221-2357541-117.jpg
https://i.postimg.cc/CMjwGL3b/20230221-2357541-118.jpg
https://i.postimg.cc/7Y9DRtY6/20230221-2357541-119.jpg
https://i.postimg.cc/JzhmC3GQ/20230221-2357541-120.jpg
https://i.postimg.cc/dVSFs7Cc/20230221-2357541-121.jpg
https://i.postimg.cc/PqpjPtbp/20230221-2357541-122.jpg
https://i.postimg.cc/25sfWPTH/20230221-2357541-123.jpg
https://i.postimg.cc/tTFGN2M9/20230221-2357541-124.jpg
https://i.postimg.cc/Rh95sKkK/20230221-2357541-125.jpg
https://i.postimg.cc/05dq6XSf/20230221-2357541-126.jpg
https://i.postimg.cc/L5TdrhS7/20230221-2357541-127.jpg
https://i.postimg.cc/gkzb3yqP/20230221-2357541-128.jpg
https://i.postimg.cc/hP2WsJpQ/20230221-2357541-129.jpg
https://i.postimg.cc/NjLhzgzJ/20230221-2357541-130.jpg
https://i.postimg.cc/Mp4kkCkW/20230221-2357541-131.jpg
https://i.postimg.cc/D05DxDd3/20230221-2357541-132.jpg
https://i.postimg.cc/Xqnmc35g/20230221-2357541-133.jpg
https://i.postimg.cc/ZRt1n6K2/20230221-2357541-134.jpg
https://i.postimg.cc/ydm2ZWDd/20230221-2357541-135.jpg
https://i.postimg.cc/6QGkBMwC/20230221-2357541-136.jpg
https://i.postimg.cc/MKKgn6q6/20230221-2357541-137.jpg
https://i.postimg.cc/FsW8cMHj/20230221-2357541-138.jpg
https://i.postimg.cc/YCvVxdvT/20230221-2357541-139.jpg
https://i.postimg.cc/VNMVx5BR/20230221-2357541-140.jpg
https://i.postimg.cc/cHSb0ZFN/20230221-2357541-141.jpg
https://i.postimg.cc/8zxYXLWc/20230221-2357541-142.jpg
https://i.postimg.cc/Hx9PLKN8/20230221-2357541-143.jpg
https://i.postimg.cc/7hPtJ9vs/20230221-2357541-144.jpg
https://i.postimg.cc/Vv7GqtmY/20230221-2357541-145.jpg
https://i.postimg.cc/sfKNdkSt/20230221-2357541-146.jpg
https://i.postimg.cc/SNstygfj/20230221-2357541-147.jpg
https://i.postimg.cc/PrRVN1Sy/20230221-2357541-148.jpg
https://i.postimg.cc/fRS2dkFN/20230221-2357541-149.jpg
https://i.postimg.cc/fbx8HpDq/20230221-2357541-150.jpg
https://i.postimg.cc/SK0ZfkFz/20230221-2357541-151.jpg
https://i.postimg.cc/4dsBjP3f/20230221-2357541-152.jpg
https://i.postimg.cc/C17m08Zj/20230221-2357541-153.jpg
https://i.postimg.cc/BbvNnvDR/20230221-2357541-154.jpg
https://i.postimg.cc/rsYj0LNs/20230221-2357541-155.jpg
https://i.postimg.cc/zDd0PnYN/20230221-2357541-156.jpg
https://i.postimg.cc/m2t8xtTH/20230221-2357541-157.jpg
https://i.postimg.cc/wBdVs2LX/20230221-2357541-158.jpg
https://i.postimg.cc/152MyszY/20230221-2357541-159.jpg
https://i.postimg.cc/rw4jm30y/20230221-2357541-160.jpg
https://i.postimg.cc/3wCZjGFP/20230221-2357541-161.jpg
https://i.postimg.cc/G2LxXpM9/20230221-2357541-162.jpg
https://i.postimg.cc/Gt9J15nC/20230221-2357541-163.jpg
https://i.postimg.cc/85ZB9V34/20230221-2357541-164.jpg
https://i.postimg.cc/kGZNMv7t/20230221-2357541-165.jpg
https://i.postimg.cc/Y2yzxMQq/20230221-2357541-166.jpg
https://i.postimg.cc/L6YBCwVk/20230221-2357541-167.jpg
  `;
  return data.split("\n")[index];
}

const frameCount = 358;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:1.8,
      pin:true,
      trigger:"#home",
      // start:"bottom 100%",
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:.1,
      trigger:"#home",
      start:"bottom 100%",
      // markers:true,
      // end:"bottom 120%"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home",
  pin:true,
  start:"bottom 100%",
  
})

}

dom()


function dom2(){
  const canvas = document.querySelector("#home2>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `https://i.postimg.cc/15yqBbjT/Pexels-Videos-1793155-000.jpg
  https://i.postimg.cc/g2TLYj2F/Pexels-Videos-1793155-001.jpg
  https://i.postimg.cc/YSLGj7v4/Pexels-Videos-1793155-002.jpg
  https://i.postimg.cc/B6W8KzFm/Pexels-Videos-1793155-003.jpg
  https://i.postimg.cc/L64JLLqF/Pexels-Videos-1793155-004.jpg
  https://i.postimg.cc/zDFLy0Gk/Pexels-Videos-1793155-005.jpg
  https://i.postimg.cc/x8ncsbtH/Pexels-Videos-1793155-006.jpg
  https://i.postimg.cc/RFcWQTQ4/Pexels-Videos-1793155-007.jpg
  https://i.postimg.cc/fyCk1TrP/Pexels-Videos-1793155-008.jpg
  https://i.postimg.cc/Vkd5HwB7/Pexels-Videos-1793155-009.jpg
  https://i.postimg.cc/132Xkdvy/Pexels-Videos-1793155-010.jpg
  https://i.postimg.cc/1tczN3sz/Pexels-Videos-1793155-011.jpg
  https://i.postimg.cc/0NSjPC4D/Pexels-Videos-1793155-012.jpg
  https://i.postimg.cc/NMwMMHhV/Pexels-Videos-1793155-013.jpg
  https://i.postimg.cc/rsVwG2wN/Pexels-Videos-1793155-014.jpg
  https://i.postimg.cc/NFdfpCyq/Pexels-Videos-1793155-015.jpg
  https://i.postimg.cc/ZYHRbnw7/Pexels-Videos-1793155-016.jpg
  https://i.postimg.cc/15zzfST9/Pexels-Videos-1793155-017.jpg
  https://i.postimg.cc/jdkSf90y/Pexels-Videos-1793155-018.jpg
  https://i.postimg.cc/13n5rHs2/Pexels-Videos-1793155-019.jpg
  https://i.postimg.cc/pdKWgL9B/Pexels-Videos-1793155-020.jpg
  https://i.postimg.cc/RF9S9xKx/Pexels-Videos-1793155-021.jpg
  https://i.postimg.cc/PJ5dpbS6/Pexels-Videos-1793155-022.jpg
  https://i.postimg.cc/zBjJG2Fb/Pexels-Videos-1793155-023.jpg
  https://i.postimg.cc/qqD48tYp/Pexels-Videos-1793155-024.jpg
  https://i.postimg.cc/tRBq0fg8/Pexels-Videos-1793155-025.jpg
  https://i.postimg.cc/283zCwby/Pexels-Videos-1793155-026.jpg
  https://i.postimg.cc/CLtw5qkN/Pexels-Videos-1793155-027.jpg
  https://i.postimg.cc/nhDpDh1t/Pexels-Videos-1793155-028.jpg
  https://i.postimg.cc/25dY09Jc/Pexels-Videos-1793155-029.jpg
  https://i.postimg.cc/1z1Pc1WV/Pexels-Videos-1793155-030.jpg
  https://i.postimg.cc/B6q0kcfq/Pexels-Videos-1793155-031.jpg
  https://i.postimg.cc/JnPLLDRj/Pexels-Videos-1793155-032.jpg
  https://i.postimg.cc/d33Kts0p/Pexels-Videos-1793155-033.jpg
  https://i.postimg.cc/PJ7nCgpx/Pexels-Videos-1793155-034.jpg
  https://i.postimg.cc/qMtdPvSC/Pexels-Videos-1793155-035.jpg
  https://i.postimg.cc/02LqPq1X/Pexels-Videos-1793155-036.jpg
  https://i.postimg.cc/k5C3RF4x/Pexels-Videos-1793155-037.jpg
  https://i.postimg.cc/pLzMd12W/Pexels-Videos-1793155-038.jpg
  https://i.postimg.cc/pdBNfhh3/Pexels-Videos-1793155-039.jpg
  https://i.postimg.cc/B6ZrMS2b/Pexels-Videos-1793155-040.jpg
  https://i.postimg.cc/j58G1phX/Pexels-Videos-1793155-041.jpg
  https://i.postimg.cc/rsKv2fnL/Pexels-Videos-1793155-042.jpg
  https://i.postimg.cc/2jKs7fyj/Pexels-Videos-1793155-043.jpg
  https://i.postimg.cc/T1FBdnF5/Pexels-Videos-1793155-044.jpg
  https://i.postimg.cc/TY5ZkH5V/Pexels-Videos-1793155-045.jpg
  https://i.postimg.cc/YCcTTfQJ/Pexels-Videos-1793155-046.jpg
  https://i.postimg.cc/bwQ4PDTd/Pexels-Videos-1793155-047.jpg
  https://i.postimg.cc/q74SvJbw/Pexels-Videos-1793155-048.jpg
  https://i.postimg.cc/GpKNBW6C/Pexels-Videos-1793155-049.jpg
  https://i.postimg.cc/qR7F2mdC/Pexels-Videos-1793155-050.jpg
  https://i.postimg.cc/XqGDzpqj/Pexels-Videos-1793155-051.jpg
  https://i.postimg.cc/sX0NmpVH/Pexels-Videos-1793155-052.jpg
  https://i.postimg.cc/8c2nQNfh/Pexels-Videos-1793155-053.jpg
  https://i.postimg.cc/xTH9kd5V/Pexels-Videos-1793155-054.jpg
  https://i.postimg.cc/fW1wTdxv/Pexels-Videos-1793155-055.jpg
  https://i.postimg.cc/XNrjbLyJ/Pexels-Videos-1793155-056.jpg
  https://i.postimg.cc/6pfw01FH/Pexels-Videos-1793155-057.jpg
  https://i.postimg.cc/DzfhYPT7/Pexels-Videos-1793155-058.jpg
  https://i.postimg.cc/MGswkf6V/Pexels-Videos-1793155-059.jpg
  https://i.postimg.cc/0Qbs95j3/Pexels-Videos-1793155-060.jpg
  https://i.postimg.cc/rs42thSN/Pexels-Videos-1793155-061.jpg
  https://i.postimg.cc/50TMycFt/Pexels-Videos-1793155-062.jpg
  https://i.postimg.cc/ZYvSgq1v/Pexels-Videos-1793155-063.jpg
  https://i.postimg.cc/DyVTKTTj/Pexels-Videos-1793155-064.jpg
  https://i.postimg.cc/X7w0jzNV/Pexels-Videos-1793155-065.jpg
  https://i.postimg.cc/7ZwrfnbS/Pexels-Videos-1793155-066.jpg
  https://i.postimg.cc/fRCnXS0p/Pexels-Videos-1793155-067.jpg
  https://i.postimg.cc/N00hxG6M/Pexels-Videos-1793155-068.jpg
  https://i.postimg.cc/G2ZZrkZ8/Pexels-Videos-1793155-069.jpg
  https://i.postimg.cc/Dzp9pV6c/Pexels-Videos-1793155-070.jpg
  https://i.postimg.cc/HnXFLrgS/Pexels-Videos-1793155-071.jpg
  https://i.postimg.cc/ydJwwfrC/Pexels-Videos-1793155-072.jpg
  https://i.postimg.cc/9FHvnYds/Pexels-Videos-1793155-073.jpg
  https://i.postimg.cc/rFGvXRgs/Pexels-Videos-1793155-074.jpg
  https://i.postimg.cc/4xJjJ4F5/Pexels-Videos-1793155-075.jpg
  https://i.postimg.cc/DwBHmV9K/Pexels-Videos-1793155-076.jpg
  https://i.postimg.cc/hGvwdynQ/Pexels-Videos-1793155-077.jpg
  https://i.postimg.cc/9MqnxDrW/Pexels-Videos-1793155-078.jpg
  https://i.postimg.cc/s2LL9Yf6/Pexels-Videos-1793155-079.jpg
  https://i.postimg.cc/J0VdSRkj/Pexels-Videos-1793155-080.jpg
  https://i.postimg.cc/GtFSC6FV/Pexels-Videos-1793155-081.jpg
  https://i.postimg.cc/v8fKfxJh/Pexels-Videos-1793155-082.jpg
  https://i.postimg.cc/wTzGVTHp/Pexels-Videos-1793155-083.jpg
  https://i.postimg.cc/VLFHHQLb/Pexels-Videos-1793155-084.jpg
  https://i.postimg.cc/9QFg68rg/Pexels-Videos-1793155-085.jpg
  https://i.postimg.cc/y8QpsmR1/Pexels-Videos-1793155-086.jpg
  https://i.postimg.cc/DzRCb75R/Pexels-Videos-1793155-087.jpg
  https://i.postimg.cc/fbV2LV7x/Pexels-Videos-1793155-088.jpg
  https://i.postimg.cc/fLX8c1ry/Pexels-Videos-1793155-089.jpg
  https://i.postimg.cc/Fz4DDGMZ/Pexels-Videos-1793155-090.jpg
  https://i.postimg.cc/cCBTjwZN/Pexels-Videos-1793155-091.jpg
  https://i.postimg.cc/h4LCfWm3/Pexels-Videos-1793155-092.jpg
  https://i.postimg.cc/TYTtb7q2/Pexels-Videos-1793155-093.jpg
  https://i.postimg.cc/65zYfrYr/Pexels-Videos-1793155-094.jpg
  https://i.postimg.cc/W13SWdHQ/Pexels-Videos-1793155-095.jpg
  https://i.postimg.cc/Gm5KZc09/Pexels-Videos-1793155-096.jpg
  https://i.postimg.cc/ZqvHm1ZH/Pexels-Videos-1793155-097.jpg
  https://i.postimg.cc/4dC5xBxg/Pexels-Videos-1793155-098.jpg
  https://i.postimg.cc/W3M7FgdJ/Pexels-Videos-1793155-099.jpg
  https://i.postimg.cc/brp9QrnV/Pexels-Videos-1793155-100.jpg
  https://i.postimg.cc/0jndZvdk/Pexels-Videos-1793155-101.jpg
  https://i.postimg.cc/wxQV95KC/Pexels-Videos-1793155-102.jpg
  https://i.postimg.cc/tCrNxX4D/Pexels-Videos-1793155-103.jpg
  https://i.postimg.cc/5N9myHb6/Pexels-Videos-1793155-104.jpg
  https://i.postimg.cc/CxzHCWZ0/Pexels-Videos-1793155-105.jpg
  https://i.postimg.cc/DwHQxBsX/Pexels-Videos-1793155-106.jpg
  https://i.postimg.cc/63NrXqM6/Pexels-Videos-1793155-107.jpg
  https://i.postimg.cc/0NSYFDdH/Pexels-Videos-1793155-108.jpg
  https://i.postimg.cc/PxzmrH7W/Pexels-Videos-1793155-109.jpg
  https://i.postimg.cc/90myDS3v/Pexels-Videos-1793155-110.jpg
  https://i.postimg.cc/5ysLL3bj/Pexels-Videos-1793155-111.jpg
  https://i.postimg.cc/05npT8Dx/Pexels-Videos-1793155-112.jpg
  https://i.postimg.cc/QxncM0fy/Pexels-Videos-1793155-113.jpg
  https://i.postimg.cc/Qd91K1Px/Pexels-Videos-1793155-114.jpg
  https://i.postimg.cc/bw7bxdc0/Pexels-Videos-1793155-115.jpg
  https://i.postimg.cc/d1vyfX0L/Pexels-Videos-1793155-116.jpg
  https://i.postimg.cc/pdKjqxRw/Pexels-Videos-1793155-117.jpg
  https://i.postimg.cc/Kjp3R8DM/Pexels-Videos-1793155-118.jpg
  https://i.postimg.cc/nrhQFDBx/Pexels-Videos-1793155-119.jpg
  https://i.postimg.cc/rmJr2Jdg/Pexels-Videos-1793155-120.jpg
  https://i.postimg.cc/L4x1yxF8/Pexels-Videos-1793155-121.jpg
  https://i.postimg.cc/3JWDz23C/Pexels-Videos-1793155-122.jpg
  https://i.postimg.cc/VLTbw56y/Pexels-Videos-1793155-123.jpg
  https://i.postimg.cc/NjH2jY9K/Pexels-Videos-1793155-124.jpg
  https://i.postimg.cc/0N1M63Dc/Pexels-Videos-1793155-125.jpg
  https://i.postimg.cc/KY7KtN5F/Pexels-Videos-1793155-126.jpg
  https://i.postimg.cc/NMgKDHNX/Pexels-Videos-1793155-127.jpg
  https://i.postimg.cc/xCtc4174/Pexels-Videos-1793155-128.jpg
  https://i.postimg.cc/7hhf8yrY/Pexels-Videos-1793155-129.jpg
  https://i.postimg.cc/sxL1303P/Pexels-Videos-1793155-130.jpg
  https://i.postimg.cc/DfpSQm1W/Pexels-Videos-1793155-131.jpg
  https://i.postimg.cc/15gfvPKv/Pexels-Videos-1793155-132.jpg
  https://i.postimg.cc/X7TXhhH4/Pexels-Videos-1793155-133.jpg
  https://i.postimg.cc/qvygdLSn/Pexels-Videos-1793155-134.jpg
  https://i.postimg.cc/hGnv4mRY/Pexels-Videos-1793155-135.jpg
  https://i.postimg.cc/g0KJx0Y2/Pexels-Videos-1793155-136.jpg
  https://i.postimg.cc/Jn4hZWnc/Pexels-Videos-1793155-137.jpg
  https://i.postimg.cc/3RSxZb0M/Pexels-Videos-1793155-138.jpg
  https://i.postimg.cc/fyVTqjYV/Pexels-Videos-1793155-139.jpg
  https://i.postimg.cc/HnFWqctB/Pexels-Videos-1793155-140.jpg
  https://i.postimg.cc/nVWLjgtB/Pexels-Videos-1793155-141.jpg
  https://i.postimg.cc/FsJHjp9q/Pexels-Videos-1793155-142.jpg
  https://i.postimg.cc/wj8TFNMB/Pexels-Videos-1793155-143.jpg
  https://i.postimg.cc/RZ7CY0JL/Pexels-Videos-1793155-144.jpg
  https://i.postimg.cc/ZqjbTDc9/Pexels-Videos-1793155-145.jpg
  https://i.postimg.cc/KYmchynS/Pexels-Videos-1793155-146.jpg
  https://i.postimg.cc/8551sBKZ/Pexels-Videos-1793155-147.jpg
  https://i.postimg.cc/63mBZ2Ft/Pexels-Videos-1793155-148.jpg
  https://i.postimg.cc/Hn8d9WC5/Pexels-Videos-1793155-149.jpg
  https://i.postimg.cc/BtWsYWqz/Pexels-Videos-1793155-150.jpg
  https://i.postimg.cc/gcxZTvzy/Pexels-Videos-1793155-151.jpg
  https://i.postimg.cc/7Pj28fhF/Pexels-Videos-1793155-152.jpg
  https://i.postimg.cc/7Y7TxwTf/Pexels-Videos-1793155-153.jpg
  https://i.postimg.cc/Hkg8nRQ3/Pexels-Videos-1793155-154.jpg
  https://i.postimg.cc/x13Jz55Q/Pexels-Videos-1793155-155.jpg
  https://i.postimg.cc/1zRgcF7q/Pexels-Videos-1793155-156.jpg
  https://i.postimg.cc/GpM4Mp6S/Pexels-Videos-1793155-157.jpg
  https://i.postimg.cc/TwppB662/Pexels-Videos-1793155-158.jpg
  https://i.postimg.cc/cH2rSbxR/Pexels-Videos-1793155-159.jpg
  https://i.postimg.cc/T1bhYJ1Z/Pexels-Videos-1793155-160.jpg
  https://i.postimg.cc/PfvC4Ty2/Pexels-Videos-1793155-161.jpg
  https://i.postimg.cc/sDFvHq0y/Pexels-Videos-1793155-162.jpg
  https://i.postimg.cc/Dw60ZZfy/Pexels-Videos-1793155-163.jpg
  https://i.postimg.cc/mgBhBMs5/Pexels-Videos-1793155-164.jpg
  https://i.postimg.cc/KYYzg247/Pexels-Videos-1793155-165.jpg
  https://i.postimg.cc/Kzk8JDPR/Pexels-Videos-1793155-166.jpg
  https://i.postimg.cc/s202YNZk/Pexels-Videos-1793155-167.jpg
  https://i.postimg.cc/HxqsK8z3/Pexels-Videos-1793155-168.jpg
  https://i.postimg.cc/hvVPq43n/Pexels-Videos-1793155-169.jpg
  https://i.postimg.cc/sfW2WKfL/Pexels-Videos-1793155-170.jpg
  https://i.postimg.cc/DyKwPs8w/Pexels-Videos-1793155-171.jpg
  https://i.postimg.cc/ncYcRzDY/Pexels-Videos-1793155-172.jpg
  https://i.postimg.cc/7ZHPpk1v/Pexels-Videos-1793155-173.jpg
  https://i.postimg.cc/P5SfHRKC/Pexels-Videos-1793155-174.jpg
  https://i.postimg.cc/8Cspzmnt/Pexels-Videos-1793155-175.jpg
  https://i.postimg.cc/0N38MKTx/Pexels-Videos-1793155-176.jpg
  https://i.postimg.cc/B6KJxQ3F/Pexels-Videos-1793155-177.jpg
  https://i.postimg.cc/NFvBbqGz/Pexels-Videos-1793155-178.jpg
  https://i.postimg.cc/T1jG47pY/Pexels-Videos-1793155-179.jpg
  https://i.postimg.cc/zDTJvB0Z/Pexels-Videos-1793155-180.jpg
  https://i.postimg.cc/pXxPFH69/Pexels-Videos-1793155-181.jpg
  `;
  return data.split("\n")[index];
}

const frameCount = 181;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:2,
      // pin:true,
      trigger:"#home2>canvas",
      start:"top 0%",
      end:"bottom -20%",
      ease: "none"
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home2 canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:3,
      trigger:"#home2",
      start:"bottom 0%",
      // markers:true,
      // end:"bottom 120%"
      ease:"none"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home2",
  pin:true,
  start:"bottom 100%",

  
})

}

dom2()


function dom3(){
  const canvas = document.querySelector("#home3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `https://i.postimg.cc/yY1ZF4Mp/Dining-Table-3-D-Walkthrough-1080-P-HD-000.jpg
  https://i.postimg.cc/DfgWfpSr/Dining-Table-3-D-Walkthrough-1080-P-HD-023.jpg
  https://i.postimg.cc/8CM52Z8r/Dining-Table-3-D-Walkthrough-1080-P-HD-024.jpg
  https://i.postimg.cc/nh6rS6WJ/Dining-Table-3-D-Walkthrough-1080-P-HD-025.jpg
  https://i.postimg.cc/d1901DVs/Dining-Table-3-D-Walkthrough-1080-P-HD-026.jpg
  https://i.postimg.cc/rFHwzBMr/Dining-Table-3-D-Walkthrough-1080-P-HD-027.jpg
  https://i.postimg.cc/FKyrW1cy/Dining-Table-3-D-Walkthrough-1080-P-HD-028.jpg
  https://i.postimg.cc/sxNsQWdr/Dining-Table-3-D-Walkthrough-1080-P-HD-029.jpg
  https://i.postimg.cc/9FsccyYP/Dining-Table-3-D-Walkthrough-1080-P-HD-030.jpg
  https://i.postimg.cc/VNWw9pQ4/Dining-Table-3-D-Walkthrough-1080-P-HD-031.jpg
  https://i.postimg.cc/bJYhmgqP/Dining-Table-3-D-Walkthrough-1080-P-HD-032.jpg
  https://i.postimg.cc/Kz9ywTYM/Dining-Table-3-D-Walkthrough-1080-P-HD-033.jpg
  https://i.postimg.cc/vTcdsm1S/Dining-Table-3-D-Walkthrough-1080-P-HD-034.jpg
  https://i.postimg.cc/mZ5sS7Jx/Dining-Table-3-D-Walkthrough-1080-P-HD-035.jpg
  https://i.postimg.cc/9Q3H6CcJ/Dining-Table-3-D-Walkthrough-1080-P-HD-036.jpg
  https://i.postimg.cc/8zhgD95D/Dining-Table-3-D-Walkthrough-1080-P-HD-037.jpg
  https://i.postimg.cc/s2sd2mQW/Dining-Table-3-D-Walkthrough-1080-P-HD-038.jpg
  https://i.postimg.cc/TP085bg4/Dining-Table-3-D-Walkthrough-1080-P-HD-039.jpg
  https://i.postimg.cc/MTpC7GYK/Dining-Table-3-D-Walkthrough-1080-P-HD-040.jpg
  https://i.postimg.cc/ydpwvzfh/Dining-Table-3-D-Walkthrough-1080-P-HD-041.jpg
  https://i.postimg.cc/j2WB1k9p/Dining-Table-3-D-Walkthrough-1080-P-HD-042.jpg
  https://i.postimg.cc/Zn1XzxzC/Dining-Table-3-D-Walkthrough-1080-P-HD-043.jpg
  https://i.postimg.cc/xj7wmnNn/Dining-Table-3-D-Walkthrough-1080-P-HD-044.jpg
  https://i.postimg.cc/7ZrjB9NR/Dining-Table-3-D-Walkthrough-1080-P-HD-045.jpg
  https://i.postimg.cc/nhKgNmRh/Dining-Table-3-D-Walkthrough-1080-P-HD-046.jpg
  https://i.postimg.cc/ZqT2mq2F/Dining-Table-3-D-Walkthrough-1080-P-HD-047.jpg
  https://i.postimg.cc/BvMyn0GW/Dining-Table-3-D-Walkthrough-1080-P-HD-048.jpg
  https://i.postimg.cc/76hRCWx5/Dining-Table-3-D-Walkthrough-1080-P-HD-049.jpg
  https://i.postimg.cc/MTLF1mTd/Dining-Table-3-D-Walkthrough-1080-P-HD-050.jpg
  https://i.postimg.cc/yxSrj33B/Dining-Table-3-D-Walkthrough-1080-P-HD-051.jpg
  https://i.postimg.cc/QVGYyNc7/Dining-Table-3-D-Walkthrough-1080-P-HD-052.jpg
  https://i.postimg.cc/wxy6ZWhx/Dining-Table-3-D-Walkthrough-1080-P-HD-053.jpg
  https://i.postimg.cc/J7f1LbqN/Dining-Table-3-D-Walkthrough-1080-P-HD-054.jpg
  https://i.postimg.cc/65CB5yjD/Dining-Table-3-D-Walkthrough-1080-P-HD-055.jpg
  https://i.postimg.cc/sgysBsb1/Dining-Table-3-D-Walkthrough-1080-P-HD-056.jpg
  https://i.postimg.cc/0yfxDhqn/Dining-Table-3-D-Walkthrough-1080-P-HD-057.jpg
  https://i.postimg.cc/1z3SHMmQ/Dining-Table-3-D-Walkthrough-1080-P-HD-058.jpg
  https://i.postimg.cc/cJkS5YC8/Dining-Table-3-D-Walkthrough-1080-P-HD-059.jpg
  https://i.postimg.cc/d17YM1ZN/Dining-Table-3-D-Walkthrough-1080-P-HD-060.jpg
  https://i.postimg.cc/9MvjchGm/Dining-Table-3-D-Walkthrough-1080-P-HD-061.jpg
  https://i.postimg.cc/6qnx3m0d/Dining-Table-3-D-Walkthrough-1080-P-HD-062.jpg
  https://i.postimg.cc/HWygBrgV/Dining-Table-3-D-Walkthrough-1080-P-HD-063.jpg
  https://i.postimg.cc/8PgV3Tpw/Dining-Table-3-D-Walkthrough-1080-P-HD-064.jpg
  https://i.postimg.cc/ncKtfNMx/Dining-Table-3-D-Walkthrough-1080-P-HD-065.jpg
  https://i.postimg.cc/FHD57cjn/Dining-Table-3-D-Walkthrough-1080-P-HD-066.jpg
  https://i.postimg.cc/7Lhv769P/Dining-Table-3-D-Walkthrough-1080-P-HD-067.jpg
  https://i.postimg.cc/B6PdYVRd/Dining-Table-3-D-Walkthrough-1080-P-HD-068.jpg
  https://i.postimg.cc/zDWsT4Ch/Dining-Table-3-D-Walkthrough-1080-P-HD-069.jpg
  https://i.postimg.cc/fyx1Z0zC/Dining-Table-3-D-Walkthrough-1080-P-HD-070.jpg
  https://i.postimg.cc/kXmkswsp/Dining-Table-3-D-Walkthrough-1080-P-HD-071.jpg
  https://i.postimg.cc/NfkZzTPf/Dining-Table-3-D-Walkthrough-1080-P-HD-072.jpg
  https://i.postimg.cc/P5f0sxBb/Dining-Table-3-D-Walkthrough-1080-P-HD-073.jpg
  https://i.postimg.cc/hG6Yd0hM/Dining-Table-3-D-Walkthrough-1080-P-HD-074.jpg
  https://i.postimg.cc/4dcSbh9G/Dining-Table-3-D-Walkthrough-1080-P-HD-075.jpg
  https://i.postimg.cc/Wz6YxL8f/Dining-Table-3-D-Walkthrough-1080-P-HD-076.jpg
  https://i.postimg.cc/qM45yqMf/Dining-Table-3-D-Walkthrough-1080-P-HD-077.jpg
  https://i.postimg.cc/8P4nHGj7/Dining-Table-3-D-Walkthrough-1080-P-HD-078.jpg
  https://i.postimg.cc/Nj0CCnHp/Dining-Table-3-D-Walkthrough-1080-P-HD-079.jpg
  https://i.postimg.cc/wjbfCk5H/Dining-Table-3-D-Walkthrough-1080-P-HD-080.jpg
  https://i.postimg.cc/LsYC2ZvP/Dining-Table-3-D-Walkthrough-1080-P-HD-081.jpg
  https://i.postimg.cc/xdwsCTF4/Dining-Table-3-D-Walkthrough-1080-P-HD-082.jpg
  https://i.postimg.cc/pTKsnbwX/Dining-Table-3-D-Walkthrough-1080-P-HD-083.jpg
  https://i.postimg.cc/KjFJPpb7/Dining-Table-3-D-Walkthrough-1080-P-HD-084.jpg
  https://i.postimg.cc/hvrMp84k/Dining-Table-3-D-Walkthrough-1080-P-HD-085.jpg
  https://i.postimg.cc/nVYdFxK3/Dining-Table-3-D-Walkthrough-1080-P-HD-086.jpg
  https://i.postimg.cc/m2Lmhn8B/Dining-Table-3-D-Walkthrough-1080-P-HD-087.jpg
  https://i.postimg.cc/Hs6BMth5/Dining-Table-3-D-Walkthrough-1080-P-HD-088.jpg
  https://i.postimg.cc/XYhLHY3Y/Dining-Table-3-D-Walkthrough-1080-P-HD-089.jpg
  https://i.postimg.cc/DzXgt3yd/Dining-Table-3-D-Walkthrough-1080-P-HD-090.jpg
  https://i.postimg.cc/j5YXT3DV/Dining-Table-3-D-Walkthrough-1080-P-HD-091.jpg
  https://i.postimg.cc/Jn3Qz3Xs/Dining-Table-3-D-Walkthrough-1080-P-HD-092.jpg
  https://i.postimg.cc/MHdbyWdx/Dining-Table-3-D-Walkthrough-1080-P-HD-093.jpg
  https://i.postimg.cc/J015Dy3P/Dining-Table-3-D-Walkthrough-1080-P-HD-094.jpg
  https://i.postimg.cc/ZYcckcZg/Dining-Table-3-D-Walkthrough-1080-P-HD-095.jpg
  https://i.postimg.cc/vHZvGVZm/Dining-Table-3-D-Walkthrough-1080-P-HD-096.jpg
  https://i.postimg.cc/yYpyx8Dy/Dining-Table-3-D-Walkthrough-1080-P-HD-097.jpg
  https://i.postimg.cc/vZ1LVw9F/Dining-Table-3-D-Walkthrough-1080-P-HD-098.jpg
  https://i.postimg.cc/DwtQQpdW/Dining-Table-3-D-Walkthrough-1080-P-HD-099.jpg
  https://i.postimg.cc/KzbnwKWx/Dining-Table-3-D-Walkthrough-1080-P-HD-100.jpg
  https://i.postimg.cc/7PmgtZnr/Dining-Table-3-D-Walkthrough-1080-P-HD-101.jpg
  https://i.postimg.cc/fbmc87B8/Dining-Table-3-D-Walkthrough-1080-P-HD-102.jpg
  https://i.postimg.cc/brN1Y785/Dining-Table-3-D-Walkthrough-1080-P-HD-103.jpg
  https://i.postimg.cc/NFJmKdjj/Dining-Table-3-D-Walkthrough-1080-P-HD-104.jpg
  https://i.postimg.cc/Dy0193xJ/Dining-Table-3-D-Walkthrough-1080-P-HD-105.jpg
  https://i.postimg.cc/HsNbHvNS/Dining-Table-3-D-Walkthrough-1080-P-HD-106.jpg
  https://i.postimg.cc/RZnK0Q5v/Dining-Table-3-D-Walkthrough-1080-P-HD-107.jpg
  https://i.postimg.cc/HLD58cdX/Dining-Table-3-D-Walkthrough-1080-P-HD-108.jpg
  https://i.postimg.cc/6QrZrWpS/Dining-Table-3-D-Walkthrough-1080-P-HD-109.jpg
  https://i.postimg.cc/RFvHGk30/Dining-Table-3-D-Walkthrough-1080-P-HD-110.jpg
  https://i.postimg.cc/rmgtHfWN/Dining-Table-3-D-Walkthrough-1080-P-HD-111.jpg
  https://i.postimg.cc/PJRvXNSL/Dining-Table-3-D-Walkthrough-1080-P-HD-112.jpg
  https://i.postimg.cc/9X87tNcW/Dining-Table-3-D-Walkthrough-1080-P-HD-113.jpg
  https://i.postimg.cc/FsYJPgK0/Dining-Table-3-D-Walkthrough-1080-P-HD-114.jpg
  https://i.postimg.cc/4NjHj7Kq/Dining-Table-3-D-Walkthrough-1080-P-HD-115.jpg
  https://i.postimg.cc/dVdZFsr1/Dining-Table-3-D-Walkthrough-1080-P-HD-116.jpg
  https://i.postimg.cc/9fY44LxH/Dining-Table-3-D-Walkthrough-1080-P-HD-117.jpg
  https://i.postimg.cc/509X88GY/Dining-Table-3-D-Walkthrough-1080-P-HD-118.jpg
  https://i.postimg.cc/NMN5D5qN/Dining-Table-3-D-Walkthrough-1080-P-HD-119.jpg
  https://i.postimg.cc/pr4yN4dz/Dining-Table-3-D-Walkthrough-1080-P-HD-120.jpg
  https://i.postimg.cc/Dy48QvCg/Dining-Table-3-D-Walkthrough-1080-P-HD-121.jpg
  https://i.postimg.cc/PqTJkmd3/Dining-Table-3-D-Walkthrough-1080-P-HD-122.jpg
  https://i.postimg.cc/tgkTRYTX/Dining-Table-3-D-Walkthrough-1080-P-HD-123.jpg
  https://i.postimg.cc/k4552q6W/Dining-Table-3-D-Walkthrough-1080-P-HD-124.jpg
  https://i.postimg.cc/26XSvMhM/Dining-Table-3-D-Walkthrough-1080-P-HD-125.jpg
  https://i.postimg.cc/L5Y6VDVX/Dining-Table-3-D-Walkthrough-1080-P-HD-126.jpg
  https://i.postimg.cc/nryVSmd1/Dining-Table-3-D-Walkthrough-1080-P-HD-127.jpg
  https://i.postimg.cc/xjhddr0b/Dining-Table-3-D-Walkthrough-1080-P-HD-128.jpg
  https://i.postimg.cc/MKBpMsT3/Dining-Table-3-D-Walkthrough-1080-P-HD-129.jpg
  https://i.postimg.cc/kgdXxxRJ/Dining-Table-3-D-Walkthrough-1080-P-HD-130.jpg
  https://i.postimg.cc/jSQqvLyz/Dining-Table-3-D-Walkthrough-1080-P-HD-131.jpg
  https://i.postimg.cc/Lsx9KwC5/Dining-Table-3-D-Walkthrough-1080-P-HD-132.jpg
  https://i.postimg.cc/sX1VVmqc/Dining-Table-3-D-Walkthrough-1080-P-HD-133.jpg
  https://i.postimg.cc/gJ5GrRPP/Dining-Table-3-D-Walkthrough-1080-P-HD-134.jpg
  https://i.postimg.cc/prFRjT25/Dining-Table-3-D-Walkthrough-1080-P-HD-135.jpg
  https://i.postimg.cc/7brDnk6s/Dining-Table-3-D-Walkthrough-1080-P-HD-136.jpg
  https://i.postimg.cc/pVwn6557/Dining-Table-3-D-Walkthrough-1080-P-HD-137.jpg
  https://i.postimg.cc/MK1j2ZyG/Dining-Table-3-D-Walkthrough-1080-P-HD-138.jpg
  https://i.postimg.cc/fRZSw4Kf/Dining-Table-3-D-Walkthrough-1080-P-HD-139.jpg
  https://i.postimg.cc/pLZhr0cb/Dining-Table-3-D-Walkthrough-1080-P-HD-140.jpg
  https://i.postimg.cc/SKxXMWHX/Dining-Table-3-D-Walkthrough-1080-P-HD-141.jpg
  https://i.postimg.cc/hGZXbXq2/Dining-Table-3-D-Walkthrough-1080-P-HD-142.jpg
  https://i.postimg.cc/cHV62PCY/Dining-Table-3-D-Walkthrough-1080-P-HD-143.jpg
  https://i.postimg.cc/yxcWHn3G/Dining-Table-3-D-Walkthrough-1080-P-HD-144.jpg
  https://i.postimg.cc/2jZ1hj9x/Dining-Table-3-D-Walkthrough-1080-P-HD-145.jpg
  https://i.postimg.cc/TYvp98Zv/Dining-Table-3-D-Walkthrough-1080-P-HD-146.jpg
  https://i.postimg.cc/L6khQCpY/Dining-Table-3-D-Walkthrough-1080-P-HD-147.jpg
  https://i.postimg.cc/GmctWFLM/Dining-Table-3-D-Walkthrough-1080-P-HD-148.jpg
  https://i.postimg.cc/bw3rpZdq/Dining-Table-3-D-Walkthrough-1080-P-HD-149.jpg
  https://i.postimg.cc/25y66CBh/Dining-Table-3-D-Walkthrough-1080-P-HD-150.jpg
  https://i.postimg.cc/Y9mC68RS/Dining-Table-3-D-Walkthrough-1080-P-HD-151.jpg
  https://i.postimg.cc/rsXFQWZN/Dining-Table-3-D-Walkthrough-1080-P-HD-152.jpg
  https://i.postimg.cc/x8vj7CWD/Dining-Table-3-D-Walkthrough-1080-P-HD-153.jpg
  https://i.postimg.cc/ryxpznzn/Dining-Table-3-D-Walkthrough-1080-P-HD-154.jpg
  https://i.postimg.cc/28YSWQZz/Dining-Table-3-D-Walkthrough-1080-P-HD-155.jpg
  https://i.postimg.cc/NfxfkK6R/Dining-Table-3-D-Walkthrough-1080-P-HD-156.jpg
  https://i.postimg.cc/7ZYPsq9d/Dining-Table-3-D-Walkthrough-1080-P-HD-157.jpg
  https://i.postimg.cc/5tX4JpZm/Dining-Table-3-D-Walkthrough-1080-P-HD-158.jpg
  https://i.postimg.cc/Gp6cmGRn/Dining-Table-3-D-Walkthrough-1080-P-HD-159.jpg
  https://i.postimg.cc/qRnphqBh/Dining-Table-3-D-Walkthrough-1080-P-HD-160.jpg
  https://i.postimg.cc/0jsPpvrt/Dining-Table-3-D-Walkthrough-1080-P-HD-161.jpg
  https://i.postimg.cc/gcVYGxB1/Dining-Table-3-D-Walkthrough-1080-P-HD-162.jpg
  https://i.postimg.cc/htjg8pPq/Dining-Table-3-D-Walkthrough-1080-P-HD-163.jpg
  https://i.postimg.cc/25LDMyZc/Dining-Table-3-D-Walkthrough-1080-P-HD-164.jpg
  https://i.postimg.cc/Ss0hh4Ly/Dining-Table-3-D-Walkthrough-1080-P-HD-165.jpg
  https://i.postimg.cc/cHQN1zTf/Dining-Table-3-D-Walkthrough-1080-P-HD-166.jpg
  https://i.postimg.cc/J0MCsQdv/Dining-Table-3-D-Walkthrough-1080-P-HD-167.jpg
  https://i.postimg.cc/1RrZLL8Q/Dining-Table-3-D-Walkthrough-1080-P-HD-168.jpg
  https://i.postimg.cc/8PkVDtvr/Dining-Table-3-D-Walkthrough-1080-P-HD-169.jpg
  https://i.postimg.cc/TYkvPgjN/Dining-Table-3-D-Walkthrough-1080-P-HD-170.jpg
  https://i.postimg.cc/zG6mCNcn/Dining-Table-3-D-Walkthrough-1080-P-HD-171.jpg
  https://i.postimg.cc/vBwpKzMT/Dining-Table-3-D-Walkthrough-1080-P-HD-172.jpg
  https://i.postimg.cc/wv5SYmTV/Dining-Table-3-D-Walkthrough-1080-P-HD-173.jpg
  https://i.postimg.cc/nrHNFhXt/Dining-Table-3-D-Walkthrough-1080-P-HD-174.jpg
  https://i.postimg.cc/mk8JtW91/Dining-Table-3-D-Walkthrough-1080-P-HD-175.jpg
  https://i.postimg.cc/9XpvxZkX/Dining-Table-3-D-Walkthrough-1080-P-HD-176.jpg
  https://i.postimg.cc/zXG443mC/Dining-Table-3-D-Walkthrough-1080-P-HD-177.jpg
  https://i.postimg.cc/02XhvxxL/Dining-Table-3-D-Walkthrough-1080-P-HD-178.jpg
  https://i.postimg.cc/8zF9P3zs/Dining-Table-3-D-Walkthrough-1080-P-HD-179.jpg
  https://i.postimg.cc/zBNc7GSR/Dining-Table-3-D-Walkthrough-1080-P-HD-180.jpg
  https://i.postimg.cc/XvdP9CFb/Dining-Table-3-D-Walkthrough-1080-P-HD-181.jpg
  https://i.postimg.cc/XYThZ8rL/Dining-Table-3-D-Walkthrough-1080-P-HD-182.jpg
  https://i.postimg.cc/fTFXzfsC/Dining-Table-3-D-Walkthrough-1080-P-HD-183.jpg
  https://i.postimg.cc/0ywSbK2s/Dining-Table-3-D-Walkthrough-1080-P-HD-184.jpg
  https://i.postimg.cc/mrWHMZtF/Dining-Table-3-D-Walkthrough-1080-P-HD-185.jpg
  https://i.postimg.cc/xdGbPrzp/Dining-Table-3-D-Walkthrough-1080-P-HD-186.jpg
  https://i.postimg.cc/262bP4T4/Dining-Table-3-D-Walkthrough-1080-P-HD-187.jpg
  https://i.postimg.cc/hjSQyC8D/Dining-Table-3-D-Walkthrough-1080-P-HD-188.jpg
  https://i.postimg.cc/QCC9sHnv/Dining-Table-3-D-Walkthrough-1080-P-HD-189.jpg
  https://i.postimg.cc/nrWsLpyr/Dining-Table-3-D-Walkthrough-1080-P-HD-190.jpg
  https://i.postimg.cc/CMrn7sR0/Dining-Table-3-D-Walkthrough-1080-P-HD-191.jpg
  https://i.postimg.cc/vH1gNxnV/Dining-Table-3-D-Walkthrough-1080-P-HD-192.jpg
  https://i.postimg.cc/rwxd86Qy/Dining-Table-3-D-Walkthrough-1080-P-HD-193.jpg
  https://i.postimg.cc/qM9hVBcZ/Dining-Table-3-D-Walkthrough-1080-P-HD-194.jpg
  https://i.postimg.cc/tgbsJrM3/Dining-Table-3-D-Walkthrough-1080-P-HD-195.jpg
  https://i.postimg.cc/KY5RMn6d/Dining-Table-3-D-Walkthrough-1080-P-HD-196.jpg
  https://i.postimg.cc/sXD19My1/Dining-Table-3-D-Walkthrough-1080-P-HD-197.jpg
  https://i.postimg.cc/W3Wz9sb8/Dining-Table-3-D-Walkthrough-1080-P-HD-198.jpg
  https://i.postimg.cc/8c759x7S/Dining-Table-3-D-Walkthrough-1080-P-HD-199.jpg
  https://i.postimg.cc/4yjdgwch/Dining-Table-3-D-Walkthrough-1080-P-HD-200.jpg
  https://i.postimg.cc/dQfDrQft/Dining-Table-3-D-Walkthrough-1080-P-HD-201.jpg
  https://i.postimg.cc/4Nhy5kCv/Dining-Table-3-D-Walkthrough-1080-P-HD-202.jpg
  https://i.postimg.cc/wj8v4fHC/Dining-Table-3-D-Walkthrough-1080-P-HD-203.jpg
  https://i.postimg.cc/52BthB26/Dining-Table-3-D-Walkthrough-1080-P-HD-204.jpg
  https://i.postimg.cc/1zyzs88M/Dining-Table-3-D-Walkthrough-1080-P-HD-205.jpg
  https://i.postimg.cc/nLThzn7x/Dining-Table-3-D-Walkthrough-1080-P-HD-206.jpg
  https://i.postimg.cc/d11tZgmy/Dining-Table-3-D-Walkthrough-1080-P-HD-207.jpg
  https://i.postimg.cc/76WP3XmQ/Dining-Table-3-D-Walkthrough-1080-P-HD-208.jpg
  https://i.postimg.cc/Vv0fDMhs/Dining-Table-3-D-Walkthrough-1080-P-HD-209.jpg
  https://i.postimg.cc/c6qsjCqR/Dining-Table-3-D-Walkthrough-1080-P-HD-210.jpg
  https://i.postimg.cc/FFY3265z/Dining-Table-3-D-Walkthrough-1080-P-HD-211.jpg
  https://i.postimg.cc/NGZmYxB4/Dining-Table-3-D-Walkthrough-1080-P-HD-212.jpg
  https://i.postimg.cc/gkRR060P/Dining-Table-3-D-Walkthrough-1080-P-HD-213.jpg
  https://i.postimg.cc/zGrhHXLH/Dining-Table-3-D-Walkthrough-1080-P-HD-214.jpg
  https://i.postimg.cc/1zRNMCr9/Dining-Table-3-D-Walkthrough-1080-P-HD-215.jpg
  https://i.postimg.cc/Xv2BPfs9/Dining-Table-3-D-Walkthrough-1080-P-HD-216.jpg
  https://i.postimg.cc/SsJYbnP3/Dining-Table-3-D-Walkthrough-1080-P-HD-217.jpg
  https://i.postimg.cc/gJQXzYFJ/Dining-Table-3-D-Walkthrough-1080-P-HD-218.jpg
  https://i.postimg.cc/8cvFsqNb/Dining-Table-3-D-Walkthrough-1080-P-HD-219.jpg
  https://i.postimg.cc/dtMkgtjN/Dining-Table-3-D-Walkthrough-1080-P-HD-220.jpg
  https://i.postimg.cc/Vs007bnb/Dining-Table-3-D-Walkthrough-1080-P-HD-221.jpg
  https://i.postimg.cc/ZKrBmtfb/Dining-Table-3-D-Walkthrough-1080-P-HD-222.jpg
  https://i.postimg.cc/0yP62W3p/Dining-Table-3-D-Walkthrough-1080-P-HD-223.jpg
  https://i.postimg.cc/7Z95C18j/Dining-Table-3-D-Walkthrough-1080-P-HD-224.jpg
  https://i.postimg.cc/XvDXLVv8/Dining-Table-3-D-Walkthrough-1080-P-HD-225.jpg
  https://i.postimg.cc/qRhqZ9hd/Dining-Table-3-D-Walkthrough-1080-P-HD-226.jpg
  https://i.postimg.cc/Twz18Cg5/Dining-Table-3-D-Walkthrough-1080-P-HD-227.jpg
  https://i.postimg.cc/D01Z7LPj/Dining-Table-3-D-Walkthrough-1080-P-HD-228.jpg
  https://i.postimg.cc/XN5XK66f/Dining-Table-3-D-Walkthrough-1080-P-HD-229.jpg
  https://i.postimg.cc/dtK34NJz/Dining-Table-3-D-Walkthrough-1080-P-HD-230.jpg
  https://i.postimg.cc/MKbT40TX/Dining-Table-3-D-Walkthrough-1080-P-HD-231.jpg
  https://i.postimg.cc/8zp5VFJ4/Dining-Table-3-D-Walkthrough-1080-P-HD-232.jpg
  https://i.postimg.cc/rwfpy85k/Dining-Table-3-D-Walkthrough-1080-P-HD-233.jpg
  https://i.postimg.cc/9fzQrvBq/Dining-Table-3-D-Walkthrough-1080-P-HD-234.jpg
  https://i.postimg.cc/mDHZSCJL/Dining-Table-3-D-Walkthrough-1080-P-HD-235.jpg
  https://i.postimg.cc/MG4KRds3/Dining-Table-3-D-Walkthrough-1080-P-HD-236.jpg
  https://i.postimg.cc/QCZ8YVZp/Dining-Table-3-D-Walkthrough-1080-P-HD-237.jpg
  https://i.postimg.cc/Rh1Mk9v2/Dining-Table-3-D-Walkthrough-1080-P-HD-238.jpg
  https://i.postimg.cc/ry5F0G5g/Dining-Table-3-D-Walkthrough-1080-P-HD-239.jpg
  https://i.postimg.cc/RVRSGMsH/Dining-Table-3-D-Walkthrough-1080-P-HD-240.jpg
  https://i.postimg.cc/85MDvDfs/Dining-Table-3-D-Walkthrough-1080-P-HD-241.jpg
  https://i.postimg.cc/hGJKSVSL/Dining-Table-3-D-Walkthrough-1080-P-HD-242.jpg
  https://i.postimg.cc/bvKpddJK/Dining-Table-3-D-Walkthrough-1080-P-HD-243.jpg
  https://i.postimg.cc/brPPHM1g/Dining-Table-3-D-Walkthrough-1080-P-HD-244.jpg
  https://i.postimg.cc/QCq36bb3/Dining-Table-3-D-Walkthrough-1080-P-HD-245.jpg
  https://i.postimg.cc/tRdpCqHM/Dining-Table-3-D-Walkthrough-1080-P-HD-246.jpg
  https://i.postimg.cc/Fs9mYMrs/Dining-Table-3-D-Walkthrough-1080-P-HD-247.jpg
  https://i.postimg.cc/RVXmKgh1/Dining-Table-3-D-Walkthrough-1080-P-HD-248.jpg
  https://i.postimg.cc/YC0H3QL5/Dining-Table-3-D-Walkthrough-1080-P-HD-249.jpg
  https://i.postimg.cc/52rMkjw6/Dining-Table-3-D-Walkthrough-1080-P-HD-250.jpg
  https://i.postimg.cc/vm6dRMzX/Dining-Table-3-D-Walkthrough-1080-P-HD-251.jpg
  https://i.postimg.cc/V6qQ6R2C/Dining-Table-3-D-Walkthrough-1080-P-HD-252.jpg
  https://i.postimg.cc/XJS64h1W/Dining-Table-3-D-Walkthrough-1080-P-HD-253.jpg
  https://i.postimg.cc/cCdq83N5/Dining-Table-3-D-Walkthrough-1080-P-HD-254.jpg
  https://i.postimg.cc/1XBk0zmR/Dining-Table-3-D-Walkthrough-1080-P-HD-255.jpg
  https://i.postimg.cc/Dfc33xrV/Dining-Table-3-D-Walkthrough-1080-P-HD-256.jpg
  https://i.postimg.cc/9MtKVfqP/Dining-Table-3-D-Walkthrough-1080-P-HD-257.jpg
  https://i.postimg.cc/90mSfjG6/Dining-Table-3-D-Walkthrough-1080-P-HD-258.jpg
  https://i.postimg.cc/T3pzmGZG/Dining-Table-3-D-Walkthrough-1080-P-HD-259.jpg
  https://i.postimg.cc/28cpV392/Dining-Table-3-D-Walkthrough-1080-P-HD-260.jpg
  https://i.postimg.cc/fRp6fpNd/Dining-Table-3-D-Walkthrough-1080-P-HD-261.jpg
  https://i.postimg.cc/9f9s8bmn/Dining-Table-3-D-Walkthrough-1080-P-HD-262.jpg
  https://i.postimg.cc/RhgY6bdN/Dining-Table-3-D-Walkthrough-1080-P-HD-263.jpg
  https://i.postimg.cc/xj5h4cQn/Dining-Table-3-D-Walkthrough-1080-P-HD-264.jpg
  https://i.postimg.cc/HsLRDdW5/Dining-Table-3-D-Walkthrough-1080-P-HD-265.jpg
  https://i.postimg.cc/BQwyJktz/Dining-Table-3-D-Walkthrough-1080-P-HD-266.jpg
  https://i.postimg.cc/9QRk0b7Q/Dining-Table-3-D-Walkthrough-1080-P-HD-267.jpg
  https://i.postimg.cc/sgkNhWY9/Dining-Table-3-D-Walkthrough-1080-P-HD-268.jpg
  https://i.postimg.cc/5t8kqtpc/Dining-Table-3-D-Walkthrough-1080-P-HD-269.jpg
  https://i.postimg.cc/vBM2PdS4/Dining-Table-3-D-Walkthrough-1080-P-HD-270.jpg
  https://i.postimg.cc/k4c1zhkf/Dining-Table-3-D-Walkthrough-1080-P-HD-271.jpg
  https://i.postimg.cc/tJ4SjNby/Dining-Table-3-D-Walkthrough-1080-P-HD-272.jpg
  https://i.postimg.cc/yxpfY36R/Dining-Table-3-D-Walkthrough-1080-P-HD-273.jpg
  https://i.postimg.cc/jqM3hm6j/Dining-Table-3-D-Walkthrough-1080-P-HD-274.jpg
  https://i.postimg.cc/Gh97gKzx/Dining-Table-3-D-Walkthrough-1080-P-HD-275.jpg
  https://i.postimg.cc/YqVX5FsK/Dining-Table-3-D-Walkthrough-1080-P-HD-276.jpg
  https://i.postimg.cc/bwt6pv7G/Dining-Table-3-D-Walkthrough-1080-P-HD-277.jpg
  https://i.postimg.cc/hGR2jBn2/Dining-Table-3-D-Walkthrough-1080-P-HD-278.jpg
  https://i.postimg.cc/SKLDYvNk/Dining-Table-3-D-Walkthrough-1080-P-HD-279.jpg
  https://i.postimg.cc/tTXD3NYP/Dining-Table-3-D-Walkthrough-1080-P-HD-280.jpg
  https://i.postimg.cc/pTqCq5FS/Dining-Table-3-D-Walkthrough-1080-P-HD-281.jpg
  https://i.postimg.cc/gjjD5cy2/Dining-Table-3-D-Walkthrough-1080-P-HD-282.jpg
  https://i.postimg.cc/Dfp5GsFJ/Dining-Table-3-D-Walkthrough-1080-P-HD-283.jpg
  https://i.postimg.cc/ZnQchkjF/Dining-Table-3-D-Walkthrough-1080-P-HD-284.jpg
  https://i.postimg.cc/rFvJnkDq/Dining-Table-3-D-Walkthrough-1080-P-HD-285.jpg
  https://i.postimg.cc/bNGg9JN6/Dining-Table-3-D-Walkthrough-1080-P-HD-286.jpg
  https://i.postimg.cc/rwx97P4x/Dining-Table-3-D-Walkthrough-1080-P-HD-287.jpg
  https://i.postimg.cc/YS7x7zNV/Dining-Table-3-D-Walkthrough-1080-P-HD-288.jpg
  https://i.postimg.cc/pdBJL5qd/Dining-Table-3-D-Walkthrough-1080-P-HD-289.jpg
  https://i.postimg.cc/LX6BY4b3/Dining-Table-3-D-Walkthrough-1080-P-HD-290.jpg
  https://i.postimg.cc/sX6PpdFd/Dining-Table-3-D-Walkthrough-1080-P-HD-291.jpg
  https://i.postimg.cc/T1KV07Gy/Dining-Table-3-D-Walkthrough-1080-P-HD-292.jpg
  https://i.postimg.cc/vTCWNrH0/Dining-Table-3-D-Walkthrough-1080-P-HD-293.jpg
  https://i.postimg.cc/QNzkC3kc/Dining-Table-3-D-Walkthrough-1080-P-HD-294.jpg
  https://i.postimg.cc/tCVdVM2w/Dining-Table-3-D-Walkthrough-1080-P-HD-295.jpg
  https://i.postimg.cc/GmwFPxf2/Dining-Table-3-D-Walkthrough-1080-P-HD-296.jpg
  https://i.postimg.cc/YC61dmcx/Dining-Table-3-D-Walkthrough-1080-P-HD-297.jpg
  https://i.postimg.cc/rpq53FM2/Dining-Table-3-D-Walkthrough-1080-P-HD-298.jpg
  https://i.postimg.cc/HL3bgDkc/Dining-Table-3-D-Walkthrough-1080-P-HD-299.jpg
  
  `;
  return data.split("\n")[index];
}

const frameCount = 277;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:2,
      // pin:true,
      trigger:"#home3>canvas",
      start:"top 50%",
      end:"bottom -20%",
      ease: "none"
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home2 canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:3,
      trigger:"#home3",
      start:"bottom 0%",
      // markers:true,
      // end:"bottom 120%"
      ease:"none"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home3",
  pin:true,
  start:"bottom 100%",

  
})

}

dom3()

function dom4(){
  const canvas = document.querySelector("#home4>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `https://i.postimg.cc/yY1ZF4Mp/Dining-Table-3-D-Walkthrough-1080-P-HD-000.jpg
  https://i.postimg.cc/N0fkL7Fz/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-010.jpg
  https://i.postimg.cc/TP7qbLWY/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-011.jpg
  https://i.postimg.cc/k42NvJxN/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-012.jpg
  https://i.postimg.cc/QxGgcrV5/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-013.jpg
  https://i.postimg.cc/HW74JLWd/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-014.jpg
  https://i.postimg.cc/mkMQKmpt/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-015.jpg
  https://i.postimg.cc/Hsww2P7N/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-016.jpg
  https://i.postimg.cc/gJ1VMCDC/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-017.jpg
  https://i.postimg.cc/QdjpnkQd/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-018.jpg
  https://i.postimg.cc/Z5jrkBHF/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-019.jpg
  https://i.postimg.cc/JhnjRrdw/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-020.jpg
  https://i.postimg.cc/xd4MCwWX/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-021.jpg
  https://i.postimg.cc/k4R8tjmf/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-022.jpg
  https://i.postimg.cc/wMKN5hxH/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-023.jpg
  https://i.postimg.cc/BbxKmXtF/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-024.jpg
  https://i.postimg.cc/8kWMpnwC/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-025.jpg
  https://i.postimg.cc/Fs4c7gnV/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-026.jpg
  https://i.postimg.cc/MKmBRMC2/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-027.jpg
  https://i.postimg.cc/sgfhJfzB/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-028.jpg
  https://i.postimg.cc/2SHB9pj0/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-029.jpg
  https://i.postimg.cc/QMHKR6Hh/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-030.jpg
  https://i.postimg.cc/mrJ1RQHM/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-031.jpg
  https://i.postimg.cc/RFt60N7Y/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-032.jpg
  https://i.postimg.cc/KjyK3xQ8/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-033.jpg
  https://i.postimg.cc/8cB7h9nB/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-034.jpg
  https://i.postimg.cc/gcvLFLkX/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-035.jpg
  https://i.postimg.cc/kXq6nMBj/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-036.jpg
  https://i.postimg.cc/m2jchx9T/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-037.jpg
  https://i.postimg.cc/RZ0WHP1K/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-038.jpg
  https://i.postimg.cc/CKBdvzQK/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-039.jpg
  https://i.postimg.cc/mg6tNQVq/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-040.jpg
  https://i.postimg.cc/R0kh24kL/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-041.jpg
  https://i.postimg.cc/26nyDgmR/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-042.jpg
  https://i.postimg.cc/cCZH4T4K/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-043.jpg
  https://i.postimg.cc/fyKb3XJ8/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-044.jpg
  https://i.postimg.cc/ZYFnDkV6/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-045.jpg
  https://i.postimg.cc/L69Xcybw/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-046.jpg
  https://i.postimg.cc/BQm64TW6/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-047.jpg
  https://i.postimg.cc/pLydTmxB/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-048.jpg
  https://i.postimg.cc/7ZcZTqZr/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-049.jpg
  https://i.postimg.cc/nLDc4NXj/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-050.jpg
  https://i.postimg.cc/ydC6vnRf/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-051.jpg
  https://i.postimg.cc/5054Gvqf/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-052.jpg
  https://i.postimg.cc/5yx4M0nL/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-053.jpg
  https://i.postimg.cc/vT3Q8sNj/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-054.jpg
  https://i.postimg.cc/BQnSYj8G/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-055.jpg
  https://i.postimg.cc/XN8NkfY8/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-056.jpg
  https://i.postimg.cc/BQ7qdJDP/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-057.jpg
  https://i.postimg.cc/kgVnCLF1/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-058.jpg
  https://i.postimg.cc/NjWQjbdg/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-059.jpg
  https://i.postimg.cc/q7y4hnF2/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-060.jpg
  https://i.postimg.cc/hjng9vF6/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-061.jpg
  https://i.postimg.cc/vBvyXybB/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-062.jpg
  https://i.postimg.cc/nrRJb1sf/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-063.jpg
  https://i.postimg.cc/BbQ0VznC/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-064.jpg
  https://i.postimg.cc/dQ4vyJ5N/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-065.jpg
  https://i.postimg.cc/NfFt8ZVs/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-066.jpg
  https://i.postimg.cc/GhfCXqwk/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-067.jpg
  https://i.postimg.cc/9QqjKZCs/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-068.jpg
  https://i.postimg.cc/xdDS28d8/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-069.jpg
  https://i.postimg.cc/MTtkVYmf/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-070.jpg
  https://i.postimg.cc/KzmS1WBy/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-071.jpg
  https://i.postimg.cc/bvxfNPGT/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-072.jpg
  https://i.postimg.cc/0jNTfJVW/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-073.jpg
  https://i.postimg.cc/D0YtYyD2/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-074.jpg
  https://i.postimg.cc/v8qFm3mp/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-075.jpg
  https://i.postimg.cc/HsrG8Xcj/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-076.jpg
  https://i.postimg.cc/fTpGcymC/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-077.jpg
  https://i.postimg.cc/fRd6BsvN/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-078.jpg
  https://i.postimg.cc/8CVxYYyr/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-079.jpg
  https://i.postimg.cc/pdY3MB7c/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-080.jpg
  https://i.postimg.cc/bJyWytfy/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-081.jpg
  https://i.postimg.cc/vB0jcZGW/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-082.jpg
  https://i.postimg.cc/gjr7Rb01/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-083.jpg
  https://i.postimg.cc/HnKh9vcn/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-084.jpg
  https://i.postimg.cc/28FgLYr9/hotel2-000.jpg
https://i.postimg.cc/9QLS1B4G/hotel2-001.jpg
https://i.postimg.cc/CKd22fD9/hotel2-002.jpg
https://i.postimg.cc/0N34120j/hotel2-003.jpg
https://i.postimg.cc/0ykFp4Nk/hotel2-004.jpg
https://i.postimg.cc/B6KVS9mg/hotel2-005.jpg
https://i.postimg.cc/7hrQbscy/hotel2-006.jpg
https://i.postimg.cc/KctHCbkc/hotel2-007.jpg
https://i.postimg.cc/kGNYSN3R/hotel2-008.jpg
https://i.postimg.cc/YqksHPY6/hotel2-009.jpg
https://i.postimg.cc/RVRbVTLj/hotel2-010.jpg
https://i.postimg.cc/XYY1Zy2X/hotel2-011.jpg
https://i.postimg.cc/YCDnQqVR/hotel2-012.jpg
https://i.postimg.cc/3wyL1QQT/hotel2-013.jpg
https://i.postimg.cc/KvvDQhtH/hotel3-000.jpg
https://i.postimg.cc/VLGBVZRL/hotel3-001.jpg
https://i.postimg.cc/7Zj1xCdF/hotel3-002.jpg
https://i.postimg.cc/g2xqFySy/hotel3-003.jpg
https://i.postimg.cc/0NmYrkqb/hotel3-004.jpg
https://i.postimg.cc/W3w065zV/hotel3-005.jpg
https://i.postimg.cc/G2CkyWcz/hotel3-006.jpg
https://i.postimg.cc/6q6nHC4v/hotel3-007.jpg
https://i.postimg.cc/Y0XgTjQy/hotel3-008.jpg
https://i.postimg.cc/gkJ38qW9/hotel3-009.jpg
https://i.postimg.cc/bNBkTDyZ/hotel3-010.jpg
https://i.postimg.cc/8zfWnpct/hotel3-011.jpg
https://i.postimg.cc/8C8v22rD/hotel3-012.jpg
https://i.postimg.cc/d16TTDNt/hotel3-013.jpg
https://i.postimg.cc/XJ4CJ98z/hotel3-014.jpg
https://i.postimg.cc/KYnTx0nT/hotel3-015.jpg
https://i.postimg.cc/sx2GPybP/hotel3-016.jpg
https://i.postimg.cc/90NRJKj6/hotel3-017.jpg
https://i.postimg.cc/4489f7hW/hotel3-018.jpg
https://i.postimg.cc/kXBtBJQq/hotel3-019.jpg
https://i.postimg.cc/X7mB5RLF/hotel3-020.jpg
https://i.postimg.cc/9Q9RYLgk/hotel3-021.jpg
https://i.postimg.cc/mrGcX70g/hotel3-022.jpg
https://i.postimg.cc/5tqXZ6Vq/hotel3-023.jpg
https://i.postimg.cc/DZvSFnfV/hotel3-024.jpg
https://i.postimg.cc/cC66gh8X/hotel3-025.jpg
https://i.postimg.cc/T1S1rbVG/hotel3-026.jpg
https://i.postimg.cc/PfFCGgBc/hotel3-027.jpg
https://i.postimg.cc/QdcCTHHG/hotel3-028.jpg
https://i.postimg.cc/8P2schkm/hotel3-029.jpg
https://i.postimg.cc/kX6B7jC5/hotel3-030.jpg
https://i.postimg.cc/vmMBLbV1/hotel3-031.jpg
https://i.postimg.cc/HL2L6Rw6/hotel3-032.jpg
https://i.postimg.cc/MTppN5tq/hotel3-033.jpg
https://i.postimg.cc/zB2GrhPW/hotel3-034.jpg
https://i.postimg.cc/6q755QDP/hotel3-035.jpg
https://i.postimg.cc/vTp81syZ/hotel3-036.jpg
https://i.postimg.cc/jq9S3zfY/hotel3-037.jpg
https://i.postimg.cc/WbkbBhmF/hotel3-038.jpg
https://i.postimg.cc/JzC4MMKT/hotel3-039.jpg
https://i.postimg.cc/8zdkC90T/hotel3-040.jpg
https://i.postimg.cc/QMX8Km21/hotel3-041.jpg
https://i.postimg.cc/pdq2f8v7/hotel3-042.jpg
https://i.postimg.cc/Tw1TCwYP/hotel3-043.jpg
https://i.postimg.cc/QCWhZy7G/hotel3-044.jpg
https://i.postimg.cc/grFdzHyw/hotel3-045.jpg
https://i.postimg.cc/T2yDP2qG/hotel3-046.jpg
https://i.postimg.cc/pVgn5Nqj/hotel3-047.jpg
https://i.postimg.cc/4NVHz8SS/hotel3-048.jpg
https://i.postimg.cc/mg4zVYx2/hotel3-049.jpg
https://i.postimg.cc/QdqBzFsg/hotel3-050.jpg
https://i.postimg.cc/jjdWYRdp/hotel3-051.jpg
https://i.postimg.cc/LXJnhvPv/hotel3-052.jpg
https://i.postimg.cc/j2N245Z7/hotel3-053.jpg
https://i.postimg.cc/mZFPsXBg/hotel3-054.jpg
https://i.postimg.cc/m2ft2YgN/hotel3-055.jpg
https://i.postimg.cc/WbGtDdDR/hotel3-056.jpg
https://i.postimg.cc/VkzvXzMJ/hotel3-057.jpg
https://i.postimg.cc/6pz30FLY/hotel3-058.jpg
https://i.postimg.cc/s2X20KTy/hotel3-059.jpg
https://i.postimg.cc/vmNmR9Kn/hotel3-060.jpg
https://i.postimg.cc/1tV3yXxj/hotel3-061.jpg
https://i.postimg.cc/SR0NR4kN/hotel3-062.jpg
https://i.postimg.cc/mkQZFng3/hotel3-063.jpg
https://i.postimg.cc/VsMkTJWS/hotel3-064.jpg
https://i.postimg.cc/15Q3Zyvv/hotel3-065.jpg
https://i.postimg.cc/fTfTz1FD/hotel3-066.jpg
https://i.postimg.cc/RZPSfK4Y/hotel3-067.jpg
https://i.postimg.cc/d0pJNF7m/hotel3-068.jpg
https://i.postimg.cc/mgZZt8fM/hotel3-069.jpg
https://i.postimg.cc/CKzF45Kx/hotel3-070.jpg
https://i.postimg.cc/cCTjj79y/hotel4-000.jpg
https://i.postimg.cc/ncRgGk9q/hotel4-001.jpg
https://i.postimg.cc/htNYHtrj/hotel4-002.jpg
https://i.postimg.cc/4xYML9pq/hotel4-003.jpg
https://i.postimg.cc/rpWHc2n9/hotel4-004.jpg
https://i.postimg.cc/QC64S8Cj/hotel4-005.jpg
https://i.postimg.cc/4dQF7bT7/hotel4-006.jpg
https://i.postimg.cc/1tQj37b1/hotel4-007.jpg
https://i.postimg.cc/RhCpc6MP/hotel4-008.jpg
https://i.postimg.cc/xjg49RRB/hotel4-009.jpg
https://i.postimg.cc/Gh2Stygt/hotel4-010.jpg
https://i.postimg.cc/cJQF2MC9/hotel4-011.jpg
https://i.postimg.cc/7YWt2ZjV/hotel4-012.jpg
https://i.postimg.cc/bwSCHjhj/hotel4-013.jpg
https://i.postimg.cc/vmRP0SYx/hotel4-014.jpg
https://i.postimg.cc/hjc2Bz7S/hotel4-015.jpg
https://i.postimg.cc/Pxy2rXm1/hotel4-016.jpg
https://i.postimg.cc/Gtpz4WQV/hotel4-017.jpg
https://i.postimg.cc/Wzf8g5Y3/hotel4-018.jpg
https://i.postimg.cc/kMjf05Mm/hotel4-019.jpg
https://i.postimg.cc/gkQ40B6t/hotel4-020.jpg
https://i.postimg.cc/5N6nbMjF/hotel4-021.jpg
https://i.postimg.cc/Xv08fGLw/hotel4-022.jpg
https://i.postimg.cc/BnFpPcTS/hotel4-023.jpg
https://i.postimg.cc/cJMcXxkP/hotel4-024.jpg
https://i.postimg.cc/XJjkPRTq/hotel4-025.jpg
https://i.postimg.cc/sXT4Cnrc/hotel4-026.jpg
https://i.postimg.cc/qqgXJ8Bd/hotel4-027.jpg
https://i.postimg.cc/qqYczzg6/hotel4-028.jpg
https://i.postimg.cc/Y2yzXy82/hotel4-029.jpg
https://i.postimg.cc/Fsdgwgny/hotel4-030.jpg
https://i.postimg.cc/9QyPQX2z/hotel4-031.jpg
https://i.postimg.cc/GhWJR8ZZ/hotel4-032.jpg
https://i.postimg.cc/1zPGnxRB/hotel4-033.jpg
https://i.postimg.cc/yNPF0fkH/hotel4-034.jpg
https://i.postimg.cc/3Rx21gvD/hotel4-035.jpg
https://i.postimg.cc/3RfmcdXf/hotel4-036.jpg
https://i.postimg.cc/8cFMQNwp/hotel4-037.jpg
https://i.postimg.cc/vTp9GkSW/hotel4-038.jpg
https://i.postimg.cc/y650h3Yk/hotel4-039.jpg
https://i.postimg.cc/Wbkg5phS/hotel4-040.jpg
https://i.postimg.cc/mgWMJx94/hotel4-041.jpg
https://i.postimg.cc/3xjpHLjv/hotel4-042.jpg
https://i.postimg.cc/tg2xsYMR/hotel4-043.jpg
https://i.postimg.cc/7LxzPgXQ/hotel4-044.jpg
https://i.postimg.cc/C15fkS3G/hotel4-045.jpg
https://i.postimg.cc/fLPSv1s6/hotel4-046.jpg
https://i.postimg.cc/1XNn7M54/hotel4-047.jpg
https://i.postimg.cc/z3ZLsWV7/hotel4-048.jpg
https://i.postimg.cc/fW38hNVS/hotel4-049.jpg
https://i.postimg.cc/3rPn8cGS/hotel4-050.jpg
https://images.unsplash.com/photo-1549875648-357fef68fec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80
  `;
  return data.split("\n")[index];
}

const frameCount = 222;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:2,
      // pin:true,
      trigger:"#home4>canvas",
      start:"top 0%",
      end:"bottom -20%",
      ease: "none"
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home4 canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:3,
      trigger:"#home4",
      start:"bottom 0%",
      // markers:true,
      // end:"bottom 120%"
      ease:"none"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home4",
  pin:true,
  start:"bottom 100%",

  
})

}

dom4()

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".txt-home",
    // markers: true,
    start: "50% 50%",
    end: "121% 50%",
    scrub: 1,
    // duration: 3,
    pin:true
  },
});
tl5
.from(    
  ".modern",
  {
    x:"600",
  duration: 1,
    opacity: "0",
  },
)
  .from(
    "#h-one",
    {
      y:"100",
    duration: 1,
      opacity: "0",
    },
  )
  .from(
    "#h-two",
    {
    duration: 1,
    y:"100",
      opacity: "0",
    },
  )
  .from(
    "#h-three",
    {
    duration: 1,
    y:"100",
      opacity: "0",
    },
  )

  var tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#main2",
      // markers: true,
      start: "top 80%",
      end: "10% 50%",
      scrub: 1,
      // duration: 3,
      // pin:true
    },
  });
  tl6
  .from(    
    "#home",
    {
      opacity: "0",
    },
  )

  // var tl7 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#page1",
  //     markers: true,
  //     start: "-25% 50%",
  //     end: "0% 50%",
  //     scrub: 1,
  //     // duration: 3,
  //     pin:true
  //   },
  // });
  // tl7
  // .to(    
  //   "#page1",
  //   {
  //     marginTop:"-50%",
  //   duration: 1,
  //     opacity: "0",
  //   },
  // )

function example(){
  window.location.href="again.html"
}


async function init () {
  const node = document.querySelector("#type-text")
  
  await sleep(1500)
  node.innerText = ""
  await node.type(' ')
  
  while (true) {
    await node.type('Brother!')
    await sleep(1200)
    await node.delete('Brother!')
    await node.type('Eat!')
    await sleep(1200)
    await node.delete('Eat!')
    await node.type('Healthy!')
    await sleep(1200)
    await node.delete('Healthy!')
    await node.type('Food!')
    await sleep(1200)
    await node.delete('Healthy!')
  }
}


// Source code 🚩

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval () {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }
  
  async type (text) {
    for (let character of text) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }
  
  async delete (text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length -1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })


init()

document.querySelector(".gallery-div")
.addEventListener("click", function(){
  document.querySelector("#hover-slideshow").style.top = "400%"
  // document.querySelector("#chainn").style.color = "rgb(177, 177, 177)"
  // document.querySelector("#chainn").style.cursor = "pointer"
})

document.querySelector("#btnsm")
.addEventListener("click", function(){
  document.querySelector("#hover-slideshow").style.top = "-200%"
  // document.querySelector("#chainn").style.color = "rgb(177, 177, 177)"
  // document.querySelector("#chainn").style.cursor = "pointer"
})



window.addEventListener("mousemove", function(chahcha){
  document.querySelector("#slidephoto").style.top=`${chahcha.clientY}px`
  document.querySelector("#slidephoto").style.left=`${chahcha.clientX}px`
  document.querySelector("#slidephoto").style.transform =`translate(${-chahcha.clientX*0.20}px, ${-chahcha.clientY*0.45}px)`
});

document.querySelector("#chainn")
.addEventListener("mousemove", function(){
  document.querySelector("#slidephotos").style.marginTop = "0%"
  document.querySelector("#chainn").style.color = "rgb(177, 177, 177)"
  document.querySelector("#chainn").style.cursor = "pointer"
})

document.querySelector("#chainn")
.addEventListener("mouseleave", function(){
  document.querySelector("#chainn").style.color = "initial"
})

document.querySelector("#aty")
.addEventListener("mousemove", function(){
  document.querySelector("#slidephotos").style.marginTop = "-120%"
  document.querySelector("#aty").style.color = "rgb(177, 177, 177)"
  document.querySelector("#aty").style.cursor = "pointer"
})

document.querySelector("#aty")
.addEventListener("mouseleave", function(){
  document.querySelector("#aty").style.color = "initial"
})

document.querySelector("#mic")
.addEventListener("mousemove", function(){
  document.querySelector("#slidephotos").style.marginTop = "-240%"
  document.querySelector("#mic").style.color = "rgb(177, 177, 177)"
  document.querySelector("#mic").style.cursor = "pointer"

})

document.querySelector("#mic")
.addEventListener("mouseleave", function(){
  document.querySelector("#mic").style.color = "initial"
})

document.querySelector("#tapso")
.addEventListener("mousemove", function(){
  document.querySelector("#slidephotos").style.marginTop = "-360%"
  document.querySelector("#tapso").style.color = "rgb(177, 177, 177)"
  document.querySelector("#tapso").style.cursor = "pointer"
})

document.querySelector("#tapso")
.addEventListener("mouseleave", function(){
  document.querySelector("#tapso").style.color = "initial"
})

document.querySelector("#eff")
.addEventListener("mousemove", function(){
  document.querySelector("#slidephoto").style.display = "initial"
  document.querySelector("#slidephoto").style.opacity = 1
})

document.querySelector("#eff")
.addEventListener("mouseleave", function(){
  document.querySelector("#slidephoto").style.display = "none"
  document.querySelector("#slidephoto").style.opacity = 0
})


document.querySelector("#btnsm")
.addEventListener("mousemove", function(){
  document.querySelector("#btnsm").style.backgroundColor = "rgb(255,160,115)"
  document.querySelector("#btnsm").style.cursor = "pointer"
  document.querySelector("#btnsm h1").style.color = "white"
})

document.querySelector("#btnsm")
.addEventListener("mouseleave", function(){
  document.querySelector("#btnsm").style.backgroundColor = "initial"
  document.querySelector("#btnsm h1").style.color = "rgb(95, 95, 95)"

})

document.querySelector("#cntr-nav .ri-menu-line")
.addEventListener("click", function(){
  document.querySelector(".upar-menu").style.top = "0%"
  document.querySelector(".upar-menu .ri-close-fill").style.display = "initial"
  document.querySelector("#cntr-nav .ri-menu-line").style.display = "none"
  // document.querySelector("#chainn").style.cursor = "pointer"
})

document.querySelector(".upar-menu .ri-close-fill")
.addEventListener("click", function(){
  document.querySelector(".upar-menu").style.top = "-100%"
  document.querySelector(".upar-menu .ri-close-fill").style.display = "none"
  document.querySelector("#cntr-nav .ri-menu-line").style.display = "initial"
  // document.querySelector("#chainn").style.cursor = "pointer"
})

document.querySelector("#lft-nav .ri-menu-line")
.addEventListener("click", function(){
  document.querySelector(".upar-menu").style.top = "0%"
  document.querySelector("#lft-nav .ri-close-fill").style.display = "initial"
  document.querySelector("#lft-nav .ri-menu-line").style.display = "none"
  // document.querySelector("#chainn").style.cursor = "pointer"
})

document.querySelector("#lft-nav .ri-close-fill")
.addEventListener("click", function(){
  document.querySelector(".upar-menu").style.top = "-100%"
  document.querySelector("#lft-nav .ri-close-fill").style.display = "none"
  document.querySelector("#lft-nav .ri-menu-line").style.display = "initial"
  // document.querySelector("#chainn").style.cursor = "pointer"
})

document.querySelector("#abhishek")
.addEventListener("mousemove", function(){
  document.querySelector("#slider-upar-wala").style.marginTop = "0%"
  document.querySelector("#abhishek").style.cursor = "pointer"
})
document.querySelector("#amarjeet")
.addEventListener("mousemove", function(){
  document.querySelector("#slider-upar-wala").style.marginTop = "-50vh"
  document.querySelector("#amarjeet").style.cursor = "pointer"
})
document.querySelector("#rk")
.addEventListener("mousemove", function(){
  document.querySelector("#slider-upar-wala").style.marginTop = "-100vh"
  document.querySelector("#rk").style.cursor = "pointer"
})
document.querySelector("#ak")
.addEventListener("mousemove", function(){
  document.querySelector("#slider-upar-wala").style.marginTop = "-150vh"
  document.querySelector("#ak").style.cursor = "pointer"
})


var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2 canvas",
    // markers: true,
    start: "100% 50%",
    end: "150% 100%",
    scrub: 1,
    // duration: 3,
    pin:true
  },
});
tl6
.to(    
  ".home2-page",
  {
    y:"-1090",
  duration: 1,
    // opacity: "0",
  },
)

var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#home2-again",
    // markers: true,
    start: "-100% 50%",
    end: "0% 100%",
    scrub: 1,
    // duration: 3,
    // pin:true
  },
});
tl6
.to(    
  "#home2-again .m-div",
  {
    // backgroundColor: "#fff",
  duration: 1,
   width: 0,
  },
)




var tl7 = gsap.timeline();
tl7.from(".main-abhishek", {
 opacity:"0",
  ease: "expo.inout",
  duration: 1,
  // delay: 2.5,
},'anim3')
tl7.from(".front-page-img", {
  opacity:"0",
   ease: "expo.inout",
   duration: 1,
   // delay: 2.5,
 },'anim3')
.from("#line-effect-3", {
  opacity:"0",
   ease: "expo.inout",
   duration: 1,
   // delay: 2.5,
 },'anim3')
.from("#line-effect-1", {
  height:"0%",
  ease: "expo.inout",
  duration: 2,
  // delay: 2.5,
},'anim1')
  .from("#line-effect-2", {
    height:"0%",
  ease: "expo.inout",
  duration: 1,
  },'anim2')
  .from(".img-one", {
    height:"0%",
  ease: "expo.inout",
  duration: 1,
  },'anim1')
  .from(".mandit", {
    width:"0%",
    opacity: 0,
  ease: "expo.inout",
  duration: 1,
  },'anim1')
  .from(".mandit-2", {
    height:"0%",
    opacity: 0,
  ease: "expo.inout",
  duration: 1,
  },'anim1')
  .from(".main-txt-front", {
    // height:"0%",
    opacity: 0,
  ease: "expo.inout",
  delay:-0.5,
  duration: 1,
  },'anim2')
  .from("#circle", {
    // height:"0%",
    opacity: 0,
  ease: "expo.inout",
  duration: 2,
  },'anim2')
  .from("#nav", {
    // height:"0%",
    top: -50,
    opacity: 0,
  ease: "expo.inout",
  duration: 1,
  },'anim2')

  var line = gsap.timeline({
    scrollTrigger: {
      trigger: "#home2 canvas",
      // markers: true,
      start: "0% 50%",
      end: "150% 100%",
      scrub: 3,
      // duration: 3,
      // pin:true
    },
  });
line
  .from(    
    "#line-effect-4",
    {
    height: "0vh",
    }, 'timeline-one'
  )

  var line2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#home3 canvas",
      // markers: true,
      start: "0% 50%",
      end: "150% 100%",
      scrub: 3,
      // duration: 3,
      // pin:true
    },
  });
line2
  .from(    
    "#line-effect-5",
    {
    height: "0%",
    }, 'timeline-one'
  )


var tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: "#one",
    // markers: true,
    start: "0% 50%",
    end: "100% 100%",
    scrub: 3,
    // duration: 3,
    // pin:true
  },
});
tl8
.to(    
  "#rght-timeline-img",
  {
    // backgroundColor: "#fff",
  duration: 1,
  y:-100,
  }, 'timeline-one'
)
.to(    
  ".white-div",
  {
    // backgroundColor: "#fff",
  duration: 1,
  y:-60,
  },'timeline-one'
)
.to(    
  "#back-div-img",
  {
    // backgroundColor: "#fff",
  duration: 1,
  y:-20,
  },'timeline-one'
)


var tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".m-div1 ",
    // markers: true,
    start: "0% 50%",
    end: "150% 100%",
    scrub: 3,
    // pin:true
  },
});
tl9
.to(    
  ".m-square-inner",
  {
  y:-30,
  duration: 3,
  }, 'timeline-two'
)
.to(    
  ".another2 p",
  {
  y:-100,
  opacity:1,
  duration: 1,
  },'timeline-two'
)


var tl10 = gsap.timeline({
  scrollTrigger: {
    trigger: "#home3 canvas",
    // markers: true,
    start: "100% 50%",
    end: "150% 100%",
    scrub: 3,
    // pin:true
  },
});
tl10
// .to(    
//   ".another",
//   {
//   left:"50%",
//   duration: 4,
//   opacity:1,
//   },
// )
.to(    
  " .h-wala",
  {
    delay:5,
  y:-100,
  duration: 2,
  opacity:1,
  },
)
.to(    
  "#newsletter",
  {
    delay:7,
  y:-100,
  duration: 2,
  opacity:1,
  },
)




var tl11 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hotel-upper",
    // markers: true,
    start: "50% 50%",
    end: "100% 100%",
    scrub: 3,
    // pin:true
  },
});
tl11
.from(    
  ".hotel-upper-txt",
  {
  y:300,
  duration: 4,
  opacity:0,
  },
)




function domfooter(){
  const canvas = document.querySelector("#home-footer>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `https://i.postimg.cc/MZjz0cKp/pexels-tima-miroshnichenko-7033923-000.jpg
  https://i.postimg.cc/kX3qTnBF/pexels-tima-miroshnichenko-7033923-001.jpg
  https://i.postimg.cc/zGq510wy/pexels-tima-miroshnichenko-7033923-002.jpg
  https://i.postimg.cc/3x9hrm9n/pexels-tima-miroshnichenko-7033923-003.jpg
  https://i.postimg.cc/nLzJXrPZ/pexels-tima-miroshnichenko-7033923-004.jpg
  https://i.postimg.cc/8PRD3qv8/pexels-tima-miroshnichenko-7033923-005.jpg
  https://i.postimg.cc/FKBQ3vMS/pexels-tima-miroshnichenko-7033923-006.jpg
  https://i.postimg.cc/XqMS1877/pexels-tima-miroshnichenko-7033923-007.jpg
  https://i.postimg.cc/JnHCQg82/pexels-tima-miroshnichenko-7033923-008.jpg
  https://i.postimg.cc/FFcQd2Df/pexels-tima-miroshnichenko-7033923-009.jpg
  https://i.postimg.cc/KjnX6MR7/pexels-tima-miroshnichenko-7033923-010.jpg
  https://i.postimg.cc/15Q1pJjv/pexels-tima-miroshnichenko-7033923-011.jpg
  https://i.postimg.cc/zXFZpTm8/pexels-tima-miroshnichenko-7033923-012.jpg
  https://i.postimg.cc/T328shGm/pexels-tima-miroshnichenko-7033923-013.jpg
  https://i.postimg.cc/253szJ1S/pexels-tima-miroshnichenko-7033923-014.jpg
  https://i.postimg.cc/Ls7rhTPB/pexels-tima-miroshnichenko-7033923-015.jpg
  https://i.postimg.cc/L8ydFR6W/pexels-tima-miroshnichenko-7033923-016.jpg
  https://i.postimg.cc/NMHZXH7h/pexels-tima-miroshnichenko-7033923-017.jpg
  https://i.postimg.cc/KjhwD8J1/pexels-tima-miroshnichenko-7033923-018.jpg
  https://i.postimg.cc/Hn0KZ1hB/pexels-tima-miroshnichenko-7033923-019.jpg
  https://i.postimg.cc/MZ1hK1pV/pexels-tima-miroshnichenko-7033923-020.jpg
  https://i.postimg.cc/SNqHXjn5/pexels-tima-miroshnichenko-7033923-021.jpg
  https://i.postimg.cc/3JBV27pw/pexels-tima-miroshnichenko-7033923-022.jpg
  https://i.postimg.cc/4xxM5MbQ/pexels-tima-miroshnichenko-7033923-023.jpg
  https://i.postimg.cc/sgHL0cTd/pexels-tima-miroshnichenko-7033923-024.jpg
  https://i.postimg.cc/jjW1V71W/pexels-tima-miroshnichenko-7033923-025.jpg
  https://i.postimg.cc/5tZRftcs/pexels-tima-miroshnichenko-7033923-026.jpg
  https://i.postimg.cc/KzBsjyxx/pexels-tima-miroshnichenko-7033923-027.jpg
  https://i.postimg.cc/SR41ztx8/pexels-tima-miroshnichenko-7033923-028.jpg
  https://i.postimg.cc/SRGTL7nP/pexels-tima-miroshnichenko-7033923-029.jpg
  https://i.postimg.cc/J732WmpQ/pexels-tima-miroshnichenko-7033923-030.jpg
  https://i.postimg.cc/BQqwSyyf/pexels-tima-miroshnichenko-7033923-031.jpg
  https://i.postimg.cc/rFQZKjX0/pexels-tima-miroshnichenko-7033923-032.jpg
  https://i.postimg.cc/mgkXM9Bd/pexels-tima-miroshnichenko-7033923-033.jpg
  https://i.postimg.cc/vZKPvmmG/pexels-tima-miroshnichenko-7033923-034.jpg
  https://i.postimg.cc/jjJM3rWP/pexels-tima-miroshnichenko-7033923-035.jpg
  https://i.postimg.cc/hjWpH3xw/pexels-tima-miroshnichenko-7033923-036.jpg
  https://i.postimg.cc/fLcBZjfb/pexels-tima-miroshnichenko-7033923-037.jpg
  https://i.postimg.cc/RhvG06gL/pexels-tima-miroshnichenko-7033923-038.jpg
  https://i.postimg.cc/fWvBrCb2/pexels-tima-miroshnichenko-7033923-039.jpg
  https://i.postimg.cc/j2vcnx90/pexels-tima-miroshnichenko-7033923-040.jpg
  https://i.postimg.cc/fTTBndtw/pexels-tima-miroshnichenko-7033923-041.jpg
  https://i.postimg.cc/bNCLzvk1/pexels-tima-miroshnichenko-7033923-042.jpg
  https://i.postimg.cc/DwS6mKPH/pexels-tima-miroshnichenko-7033923-043.jpg
  https://i.postimg.cc/SxHrMtZs/pexels-tima-miroshnichenko-7033923-044.jpg
  https://i.postimg.cc/rpW9CCb9/pexels-tima-miroshnichenko-7033923-045.jpg
  https://i.postimg.cc/Jn5cS7RD/pexels-tima-miroshnichenko-7033923-046.jpg
  https://i.postimg.cc/FzFgvtKP/pexels-tima-miroshnichenko-7033923-047.jpg
  https://i.postimg.cc/MHs0KsMz/pexels-tima-miroshnichenko-7033923-048.jpg
  https://i.postimg.cc/3r9FBwLz/pexels-tima-miroshnichenko-7033923-049.jpg
  https://i.postimg.cc/X7JcD0mq/pexels-tima-miroshnichenko-7033923-050.jpg
  https://i.postimg.cc/5NR5hRW3/pexels-tima-miroshnichenko-7033923-051.jpg
  https://i.postimg.cc/0yKGP08q/pexels-tima-miroshnichenko-7033923-052.jpg
  https://i.postimg.cc/bvXxJSJS/pexels-tima-miroshnichenko-7033923-053.jpg
  https://i.postimg.cc/Pqmm8fp3/pexels-tima-miroshnichenko-7033923-054.jpg
  https://i.postimg.cc/Kzxt7XtZ/pexels-tima-miroshnichenko-7033923-055.jpg
  https://i.postimg.cc/Tw0gCkcn/pexels-tima-miroshnichenko-7033923-056.jpg
  https://i.postimg.cc/8cCW3hy9/pexels-tima-miroshnichenko-7033923-057.jpg
  https://i.postimg.cc/qqZndzSR/pexels-tima-miroshnichenko-7033923-058.jpg
  https://i.postimg.cc/wxWDNGMp/pexels-tima-miroshnichenko-7033923-059.jpg
  https://i.postimg.cc/hPfT11Q7/pexels-tima-miroshnichenko-7033923-060.jpg
  https://i.postimg.cc/7Yd7sJSt/pexels-tima-miroshnichenko-7033923-061.jpg
  https://i.postimg.cc/6pZZD60W/pexels-tima-miroshnichenko-7033923-062.jpg
  https://i.postimg.cc/cJN3Zq9Q/pexels-tima-miroshnichenko-7033923-063.jpg
  https://i.postimg.cc/wBcmjWZn/pexels-tima-miroshnichenko-7033923-064.jpg
  https://i.postimg.cc/TwdWLVX1/pexels-tima-miroshnichenko-7033923-065.jpg
  https://i.postimg.cc/Y9dL1vp3/pexels-tima-miroshnichenko-7033923-066.jpg
  https://i.postimg.cc/Hnjc3TnC/pexels-tima-miroshnichenko-7033923-067.jpg
  https://i.postimg.cc/8c3F0xff/pexels-tima-miroshnichenko-7033923-068.jpg
  https://i.postimg.cc/CM6f5nrM/pexels-tima-miroshnichenko-7033923-069.jpg
  https://i.postimg.cc/gkCXqFPf/pexels-tima-miroshnichenko-7033923-070.jpg
  https://i.postimg.cc/8PJf6kxR/pexels-tima-miroshnichenko-7033923-071.jpg
  https://i.postimg.cc/fbZVpcyC/pexels-tima-miroshnichenko-7033923-072.jpg
  https://i.postimg.cc/vmz4s46s/pexels-tima-miroshnichenko-7033923-073.jpg
  https://i.postimg.cc/Px5Prdm8/pexels-tima-miroshnichenko-7033923-074.jpg  
  https://i.postimg.cc/jjN5W8kx/video-again-026.jpg
  https://i.postimg.cc/NjZFjhDC/video-again-027.jpg
  https://i.postimg.cc/Y9HSQ1J1/video-again-028.jpg
  https://i.postimg.cc/mDygjPsK/video-again-029.jpg
  https://i.postimg.cc/BbZQVJZb/video-again-030.jpg
  https://i.postimg.cc/Y28SmL8W/video-again-031.jpg
  https://i.postimg.cc/br6NX4dT/video-again-032.jpg
  https://i.postimg.cc/Wb31mpff/video-again-033.jpg
  https://i.postimg.cc/9FnFL36X/video-again-034.jpg
  https://i.postimg.cc/MpfZ4Pw7/video-again-035.jpg
  https://i.postimg.cc/W38srxmv/video-again-036.jpg
  https://i.postimg.cc/vTmbvXX6/video-again-037.jpg
  https://i.postimg.cc/rp6yL1yv/video-again-038.jpg
  https://i.postimg.cc/7LgHP5fb/video-again-039.jpg
  https://i.postimg.cc/cH0svdnh/video-again-040.jpg
  https://i.postimg.cc/1XYP76Y7/video-again-041.jpg
  https://i.postimg.cc/bNsqDCs7/video-again-042.jpg
  https://i.postimg.cc/zX68nChV/video-again-043.jpg
  https://i.postimg.cc/qvK0QNcQ/video-again-044.jpg
  https://i.postimg.cc/k5dCH7fC/video-again-045.jpg
  https://i.postimg.cc/g0qpF1TZ/video-again-046.jpg
  https://i.postimg.cc/xCf20gwF/video-again-047.jpg
  https://i.postimg.cc/C1cVdkYM/video-again-048.jpg
  https://i.postimg.cc/zvMZFNV9/video-again-049.jpg
  https://i.postimg.cc/xjF22vtt/video-again-050.jpg
  https://i.postimg.cc/SN2pNnPq/video-again-051.jpg
  https://i.postimg.cc/28sNqzpW/video-again-052.jpg
  https://i.postimg.cc/7ZS80pDW/video-again-053.jpg
  https://i.postimg.cc/SKq0rDxN/video-again-054.jpg
  https://i.postimg.cc/431DFVYv/video-again-055.jpg
  https://i.postimg.cc/Qtx2LC72/video-again-056.jpg
  https://i.postimg.cc/tTSL9btY/video-again-057.jpg
  https://i.postimg.cc/7h5j6RmX/video-again-058.jpg
  https://i.postimg.cc/BbRk1Cz3/video-again-059.jpg
  https://i.postimg.cc/G3fZNcmf/video-again-060.jpg
  https://i.postimg.cc/Pr8BnBL5/video-again-061.jpg
  https://i.postimg.cc/6pJFWYRL/video-again-062.jpg
  https://i.postimg.cc/pLf4pzJN/video-again-063.jpg
  https://i.postimg.cc/pdP78rsm/video-again-064.jpg
  https://i.postimg.cc/d0nf9Ff4/video-again-065.jpg
  https://i.postimg.cc/sXXN68dy/video-again-066.jpg
  https://i.postimg.cc/B6Vwdg4F/video-again-067.jpg
  https://i.postimg.cc/QCKnsTdy/video-again-068.jpg
  https://i.postimg.cc/w3K4BjtT/video-again-069.jpg
  https://i.postimg.cc/PfLtNVLB/video-again-070.jpg
  https://i.postimg.cc/ryvq4Gxz/video-again-071.jpg
  https://i.postimg.cc/kXKqvVvs/video-again-072.jpg
  https://i.postimg.cc/kgC91njm/video-again-073.jpg
  https://i.postimg.cc/rw9T7vbt/video-again-074.jpg
  https://i.postimg.cc/g0kppgFt/video-again-075.jpg
  https://i.postimg.cc/Zq7S56Jb/video-again-076.jpg
  https://i.postimg.cc/tTsHZ7gh/video-again-077.jpg
  https://i.postimg.cc/wvnYhHtn/video-again-078.jpg
  https://i.postimg.cc/mkMfjqCk/video-again-079.jpg
  https://i.postimg.cc/wxsp9tZz/video-again-080.jpg
  https://i.postimg.cc/VLQcvfPC/video-again-081.jpg
  https://i.postimg.cc/tC3GVK9m/video-again-082.jpg
  https://i.postimg.cc/HkTD06xW/video-again-083.jpg
  https://i.postimg.cc/x1gr6LJv/video-again-084.jpg
  https://i.postimg.cc/k550zDKk/video-again-085.jpg
  https://i.postimg.cc/HLPqgHtj/video-again-086.jpg
  https://i.postimg.cc/sXQtf8nm/video-again-087.jpg
  https://i.postimg.cc/26sg1wMD/video-again-088.jpg
  https://i.postimg.cc/bYnKK7SN/video-again-089.jpg
  https://i.postimg.cc/nct6Z3qK/video-again-090.jpg
  https://i.postimg.cc/DydRz1c9/video-again-091.jpg
  https://i.postimg.cc/CxhXndPz/video-again-092.jpg
  https://i.postimg.cc/rwfb1c3g/video-again-093.jpg
  https://i.postimg.cc/Gp9fzV1R/video-again-094.jpg
  https://i.postimg.cc/xd74Z50z/video-again-095.jpg
  https://i.postimg.cc/1tqj1FtY/video-again-096.jpg
  https://i.postimg.cc/d3cSs0ZQ/video-again-097.jpg
  https://i.postimg.cc/3NjfdH2X/video-again-098.jpg
  https://i.postimg.cc/NGRzNRZK/video-again-099.jpg
  https://i.postimg.cc/RV9b2NzX/video-again-100.jpg
  https://i.postimg.cc/pXZ1vRWx/video-again-101.jpg
  https://i.postimg.cc/kggYXzGS/video-again-102.jpg
  https://i.postimg.cc/vZ2q1hxN/video-again-103.jpg
  https://i.postimg.cc/cJKDf3Q4/video-again-104.jpg
  https://i.postimg.cc/Bvdmpvg5/video-again-105.jpg
  https://i.postimg.cc/h4828c7x/video-again-106.jpg
  https://i.postimg.cc/ZKVjgHH5/video-again-107.jpg
  https://i.postimg.cc/XYqx051c/video-again-108.jpg
  https://i.postimg.cc/RFwq6Ph1/video-again-155.jpg
  https://i.postimg.cc/HnHnQQ8q/video-again-156.jpg
  https://i.postimg.cc/qvgRXBgv/video-again-157.jpg
  https://i.postimg.cc/XYhv2Myc/video-again-158.jpg
  https://i.postimg.cc/zfgG6dCm/video-again-159.jpg
  https://i.postimg.cc/DZ3wTq6S/video-again-160.jpg
  https://i.postimg.cc/d1RttLN4/video-again-161.jpg
  https://i.postimg.cc/7hmH0jkz/video-again-162.jpg
  https://i.postimg.cc/VsRLx0CN/video-again-163.jpg
  https://i.postimg.cc/yY8Ys6my/video-again-164.jpg
  https://i.postimg.cc/W1DNq9fD/video-again-165.jpg
  https://i.postimg.cc/Dwt2rqtx/video-again-166.jpg
  https://i.postimg.cc/0QvP395m/video-again-167.jpg
  https://i.postimg.cc/VNnzDJwm/video-again-168.jpg
  https://i.postimg.cc/QtqhZvVz/video-again-169.jpg
  https://i.postimg.cc/Y0n7hg6f/video-again-170.jpg
  https://i.postimg.cc/8ktNK82J/video-again-171.jpg
  https://i.postimg.cc/rsFcVgrw/video-again-172.jpg
  https://i.postimg.cc/J40mS68T/video-again-173.jpg
  https://i.postimg.cc/4N0ZG6NX/video-again-174.jpg
  https://i.postimg.cc/3xDhxkdm/video-again-175.jpg
  https://i.postimg.cc/QMG39jTP/video-again-176.jpg
  https://i.postimg.cc/25Qfngd5/video-again-177.jpg
  https://i.postimg.cc/qRpHwQQx/video-again-178.jpg
  https://i.postimg.cc/ZRjtM3Mt/video-again-179.jpg
  https://i.postimg.cc/XqJSSJRZ/video-again-180.jpg
  https://i.postimg.cc/yxbqVKKL/video-again-181.jpg
  https://i.postimg.cc/158hv802/video-again-182.jpg
  https://i.postimg.cc/fW2Q7cdY/video-again-183.jpg
  https://i.postimg.cc/HsFGRTBx/video-again-184.jpg
  https://i.postimg.cc/mgMxGK5S/video-again-185.jpg
  https://i.postimg.cc/cJNp1XqG/video-again-186.jpg
  https://i.postimg.cc/L4ZpH69r/20230221-2357541-000.jpg
https://i.postimg.cc/GhFny7sK/20230221-2357541-001.jpg
https://i.postimg.cc/T1nFn1h1/20230221-2357541-002.jpg
https://i.postimg.cc/25XsDgPk/20230221-2357541-003.jpg
https://i.postimg.cc/ydgwYvHF/20230221-2357541-004.jpg
https://i.postimg.cc/1zzkby77/20230221-2357541-005.jpg
https://i.postimg.cc/Dw7kdrrT/20230221-2357541-006.jpg
https://i.postimg.cc/C139Zkh9/20230221-2357541-007.jpg
https://i.postimg.cc/pLkN0mCn/20230221-2357541-008.jpg
https://i.postimg.cc/dtKzw2Sy/20230221-2357541-009.jpg
https://i.postimg.cc/6pMSrD6r/20230221-2357541-010.jpg
https://i.postimg.cc/5NqD0XZk/20230221-2357541-011.jpg
https://i.postimg.cc/jSxmJsTq/20230221-2357541-012.jpg
https://i.postimg.cc/ry4vBngT/20230221-2357541-013.jpg
https://i.postimg.cc/PqN722NB/20230221-2357541-014.jpg
https://i.postimg.cc/0QwBqjYn/20230221-2357541-015.jpg
https://i.postimg.cc/8C303M6s/20230221-2357541-016.jpg
https://i.postimg.cc/Hn1PWm3g/20230221-2357541-017.jpg
https://i.postimg.cc/8cdXjYnr/20230221-2357541-018.jpg
https://i.postimg.cc/Nf4PtWH3/20230221-2357541-019.jpg
https://i.postimg.cc/pVK6G9XX/20230221-2357541-020.jpg
https://i.postimg.cc/httZtp8f/20230221-2357541-021.jpg
https://i.postimg.cc/BQswdqX5/20230221-2357541-022.jpg
https://i.postimg.cc/nhSRjBTT/20230221-2357541-023.jpg
https://i.postimg.cc/3wyLgNch/20230221-2357541-024.jpg
https://i.postimg.cc/tgLBDbKx/20230221-2357541-025.jpg
https://i.postimg.cc/DZLBMDhY/20230221-2357541-026.jpg
https://i.postimg.cc/Vs9K93DJ/20230221-2357541-027.jpg
https://i.postimg.cc/Bb3M9gQZ/20230221-2357541-028.jpg
https://i.postimg.cc/9FWJLJnJ/20230221-2357541-029.jpg
https://i.postimg.cc/3NZ9KvdX/20230221-2357541-030.jpg
https://i.postimg.cc/RVXGywr9/20230221-2357541-031.jpg
https://i.postimg.cc/6pqzXTwZ/20230221-2357541-032.jpg
https://i.postimg.cc/V6QFnRt9/20230221-2357541-033.jpg
https://i.postimg.cc/qRsxL3cP/20230221-2357541-034.jpg
https://i.postimg.cc/5tF3XGXN/20230221-2357541-035.jpg
https://i.postimg.cc/dVf6tvtx/20230221-2357541-036.jpg
https://i.postimg.cc/gj4q9bT4/20230221-2357541-037.jpg
https://i.postimg.cc/D07dYwB8/20230221-2357541-038.jpg
https://i.postimg.cc/BZCCP2nD/20230221-2357541-039.jpg
https://i.postimg.cc/nccG4MXW/20230221-2357541-040.jpg
https://i.postimg.cc/RZW1Y8QQ/20230221-2357541-041.jpg
https://i.postimg.cc/QdvgZbfL/20230221-2357541-042.jpg
https://i.postimg.cc/zBrnVfm0/20230221-2357541-043.jpg
https://i.postimg.cc/DzsrvXNS/20230221-2357541-044.jpg
https://i.postimg.cc/76nS7ywD/20230221-2357541-045.jpg
https://i.postimg.cc/2yjh7XSW/20230221-2357541-046.jpg
https://i.postimg.cc/MHsRPbnF/20230221-2357541-047.jpg
https://i.postimg.cc/NGb1jYdk/20230221-2357541-048.jpg
https://i.postimg.cc/zXBTLMMZ/20230221-2357541-049.jpg
https://i.postimg.cc/s2FWN22s/20230221-2357541-050.jpg
https://i.postimg.cc/dVZd6Cw5/20230221-2357541-051.jpg
https://i.postimg.cc/Y9MWtygP/20230221-2357541-052.jpg
https://i.postimg.cc/mDjFkNyg/20230221-2357541-053.jpg
https://i.postimg.cc/X7zd9LSZ/20230221-2357541-054.jpg
https://i.postimg.cc/jjzf0rWN/20230221-2357541-055.jpg
https://i.postimg.cc/Y0SLWGdf/20230221-2357541-056.jpg
https://i.postimg.cc/ZKCyYNBJ/20230221-2357541-057.jpg
https://i.postimg.cc/T2kDX0Pk/20230221-2357541-058.jpg
https://i.postimg.cc/DyH4SzLL/20230221-2357541-059.jpg
https://i.postimg.cc/0Nq6CHtN/20230221-2357541-060.jpg
https://i.postimg.cc/GpJ4gJNx/20230221-2357541-061.jpg
https://i.postimg.cc/jSfwPr49/20230221-2357541-062.jpg
https://i.postimg.cc/Twdpz5vM/20230221-2357541-063.jpg
https://i.postimg.cc/vB0cb8G1/20230221-2357541-064.jpg
https://i.postimg.cc/8css58CZ/20230221-2357541-065.jpg
https://i.postimg.cc/yx5x3fgs/20230221-2357541-066.jpg
https://i.postimg.cc/8P2s10gb/20230221-2357541-067.jpg
https://i.postimg.cc/FFn76KP8/20230221-2357541-068.jpg
https://i.postimg.cc/8CD5vf5J/20230221-2357541-069.jpg
https://i.postimg.cc/DzgzPfJC/20230221-2357541-070.jpg
https://i.postimg.cc/hPzfRq6j/20230221-2357541-071.jpg
https://i.postimg.cc/VkXv5WYP/20230221-2357541-072.jpg
https://i.postimg.cc/MTppPk1z/20230221-2357541-073.jpg
https://i.postimg.cc/TwNYBkcg/20230221-2357541-074.jpg
https://i.postimg.cc/PJLrHm6c/20230221-2357541-075.jpg
https://i.postimg.cc/Kjdc8RwY/20230221-2357541-076.jpg
https://i.postimg.cc/9XSQpn0j/20230221-2357541-077.jpg
https://i.postimg.cc/YqWqyzLL/20230221-2357541-078.jpg
https://i.postimg.cc/3xQJM02S/20230221-2357541-079.jpg
https://i.postimg.cc/rwGyqyJ8/20230221-2357541-080.jpg
https://i.postimg.cc/1z9mXxCD/20230221-2357541-081.jpg
https://i.postimg.cc/252zBHMM/20230221-2357541-082.jpg
https://i.postimg.cc/vBTG7rdB/20230221-2357541-083.jpg
https://i.postimg.cc/rstc3qs2/20230221-2357541-084.jpg
https://i.postimg.cc/j51tMDsh/20230221-2357541-085.jpg
https://i.postimg.cc/14hPZbVn/20230221-2357541-086.jpg
https://i.postimg.cc/pV9FR8nR/20230221-2357541-087.jpg
https://i.postimg.cc/qB9CRR8n/20230221-2357541-088.jpg
https://i.postimg.cc/Nfm2rc4n/20230221-2357541-089.jpg
https://i.postimg.cc/g2pXVTt2/20230221-2357541-090.jpg
https://i.postimg.cc/g2KwNH1q/20230221-2357541-091.jpg
https://i.postimg.cc/q7MNYCTf/20230221-2357541-092.jpg
https://i.postimg.cc/7Ls5yYH5/20230221-2357541-093.jpg
https://i.postimg.cc/Kz1RcSjJ/20230221-2357541-094.jpg
https://i.postimg.cc/50Dj67F1/20230221-2357541-095.jpg
https://i.postimg.cc/T1m1mVrb/20230221-2357541-096.jpg
https://i.postimg.cc/sfZvtrt2/20230221-2357541-097.jpg
https://i.postimg.cc/J4NtzQ7V/20230221-2357541-098.jpg
https://i.postimg.cc/pXbpvSHJ/20230221-2357541-099.jpg
https://i.postimg.cc/Gmbt8s9B/20230221-2357541-100.jpg
https://i.postimg.cc/3wRw95XY/20230221-2357541-101.jpg
https://i.postimg.cc/4xwdzNhW/20230221-2357541-102.jpg
https://i.postimg.cc/nLPhPR27/20230221-2357541-103.jpg
https://i.postimg.cc/zBHGZC2Q/20230221-2357541-104.jpg
https://i.postimg.cc/prNX2mgL/20230221-2357541-105.jpg
https://i.postimg.cc/dQdV59yk/20230221-2357541-106.jpg
https://i.postimg.cc/6qd6T9XL/20230221-2357541-107.jpg
https://i.postimg.cc/Gm33hwSG/20230221-2357541-108.jpg
https://i.postimg.cc/KvDv2vQm/20230221-2357541-109.jpg
https://i.postimg.cc/Kv2vwgP9/20230221-2357541-110.jpg
https://i.postimg.cc/CxvhRPWt/20230221-2357541-111.jpg
https://i.postimg.cc/PqPtYbHq/20230221-2357541-112.jpg
https://i.postimg.cc/DzH7gWfP/20230221-2357541-113.jpg
https://i.postimg.cc/W3ZTf2hL/20230221-2357541-114.jpg
https://i.postimg.cc/Y0wk5JW4/20230221-2357541-115.jpg
https://i.postimg.cc/X744Q6Wm/20230221-2357541-116.jpg
https://i.postimg.cc/j2QKtZHM/20230221-2357541-117.jpg
https://i.postimg.cc/CMjwGL3b/20230221-2357541-118.jpg
https://i.postimg.cc/7Y9DRtY6/20230221-2357541-119.jpg
https://i.postimg.cc/JzhmC3GQ/20230221-2357541-120.jpg
https://i.postimg.cc/dVSFs7Cc/20230221-2357541-121.jpg
https://i.postimg.cc/PqpjPtbp/20230221-2357541-122.jpg
https://i.postimg.cc/25sfWPTH/20230221-2357541-123.jpg
https://i.postimg.cc/tTFGN2M9/20230221-2357541-124.jpg
https://i.postimg.cc/Rh95sKkK/20230221-2357541-125.jpg
https://i.postimg.cc/05dq6XSf/20230221-2357541-126.jpg
https://i.postimg.cc/L5TdrhS7/20230221-2357541-127.jpg
https://i.postimg.cc/gkzb3yqP/20230221-2357541-128.jpg
https://i.postimg.cc/hP2WsJpQ/20230221-2357541-129.jpg
https://i.postimg.cc/NjLhzgzJ/20230221-2357541-130.jpg
https://i.postimg.cc/Mp4kkCkW/20230221-2357541-131.jpg
https://i.postimg.cc/D05DxDd3/20230221-2357541-132.jpg
https://i.postimg.cc/Xqnmc35g/20230221-2357541-133.jpg
https://i.postimg.cc/ZRt1n6K2/20230221-2357541-134.jpg
https://i.postimg.cc/ydm2ZWDd/20230221-2357541-135.jpg
https://i.postimg.cc/6QGkBMwC/20230221-2357541-136.jpg
https://i.postimg.cc/MKKgn6q6/20230221-2357541-137.jpg
https://i.postimg.cc/FsW8cMHj/20230221-2357541-138.jpg
https://i.postimg.cc/YCvVxdvT/20230221-2357541-139.jpg
https://i.postimg.cc/VNMVx5BR/20230221-2357541-140.jpg
https://i.postimg.cc/cHSb0ZFN/20230221-2357541-141.jpg
https://i.postimg.cc/8zxYXLWc/20230221-2357541-142.jpg
https://i.postimg.cc/Hx9PLKN8/20230221-2357541-143.jpg
https://i.postimg.cc/7hPtJ9vs/20230221-2357541-144.jpg
https://i.postimg.cc/Vv7GqtmY/20230221-2357541-145.jpg
https://i.postimg.cc/sfKNdkSt/20230221-2357541-146.jpg
https://i.postimg.cc/SNstygfj/20230221-2357541-147.jpg
https://i.postimg.cc/PrRVN1Sy/20230221-2357541-148.jpg
https://i.postimg.cc/fRS2dkFN/20230221-2357541-149.jpg
https://i.postimg.cc/fbx8HpDq/20230221-2357541-150.jpg
https://i.postimg.cc/SK0ZfkFz/20230221-2357541-151.jpg
https://i.postimg.cc/4dsBjP3f/20230221-2357541-152.jpg
https://i.postimg.cc/C17m08Zj/20230221-2357541-153.jpg
https://i.postimg.cc/BbvNnvDR/20230221-2357541-154.jpg
https://i.postimg.cc/rsYj0LNs/20230221-2357541-155.jpg
https://i.postimg.cc/zDd0PnYN/20230221-2357541-156.jpg
https://i.postimg.cc/m2t8xtTH/20230221-2357541-157.jpg
https://i.postimg.cc/wBdVs2LX/20230221-2357541-158.jpg
https://i.postimg.cc/152MyszY/20230221-2357541-159.jpg
https://i.postimg.cc/rw4jm30y/20230221-2357541-160.jpg
https://i.postimg.cc/3wCZjGFP/20230221-2357541-161.jpg
https://i.postimg.cc/G2LxXpM9/20230221-2357541-162.jpg
https://i.postimg.cc/Gt9J15nC/20230221-2357541-163.jpg
https://i.postimg.cc/85ZB9V34/20230221-2357541-164.jpg
https://i.postimg.cc/kGZNMv7t/20230221-2357541-165.jpg
https://i.postimg.cc/Y2yzxMQq/20230221-2357541-166.jpg
https://i.postimg.cc/L6YBCwVk/20230221-2357541-167.jpg
  `;
  return data.split("\n")[index];
}

const frameCount = 358;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:1.8,
      pin:true,
      trigger:"#home-footer",
      // start:"bottom 100%",
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home-footer canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:.1,
      trigger:"#home-footer",
      start:"bottom 100%",
      // markers:true,
      // end:"bottom 120%"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home-footer",
  pin:true,
  start:"bottom 100%",
  
})

}

domfooter()


function dom2footer(){
  const canvas = document.querySelector("#home2-footer>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `https://i.postimg.cc/15yqBbjT/Pexels-Videos-1793155-000.jpg
  https://i.postimg.cc/g2TLYj2F/Pexels-Videos-1793155-001.jpg
  https://i.postimg.cc/YSLGj7v4/Pexels-Videos-1793155-002.jpg
  https://i.postimg.cc/B6W8KzFm/Pexels-Videos-1793155-003.jpg
  https://i.postimg.cc/L64JLLqF/Pexels-Videos-1793155-004.jpg
  https://i.postimg.cc/zDFLy0Gk/Pexels-Videos-1793155-005.jpg
  https://i.postimg.cc/x8ncsbtH/Pexels-Videos-1793155-006.jpg
  https://i.postimg.cc/RFcWQTQ4/Pexels-Videos-1793155-007.jpg
  https://i.postimg.cc/fyCk1TrP/Pexels-Videos-1793155-008.jpg
  https://i.postimg.cc/Vkd5HwB7/Pexels-Videos-1793155-009.jpg
  https://i.postimg.cc/132Xkdvy/Pexels-Videos-1793155-010.jpg
  https://i.postimg.cc/1tczN3sz/Pexels-Videos-1793155-011.jpg
  https://i.postimg.cc/0NSjPC4D/Pexels-Videos-1793155-012.jpg
  https://i.postimg.cc/NMwMMHhV/Pexels-Videos-1793155-013.jpg
  https://i.postimg.cc/rsVwG2wN/Pexels-Videos-1793155-014.jpg
  https://i.postimg.cc/NFdfpCyq/Pexels-Videos-1793155-015.jpg
  https://i.postimg.cc/ZYHRbnw7/Pexels-Videos-1793155-016.jpg
  https://i.postimg.cc/15zzfST9/Pexels-Videos-1793155-017.jpg
  https://i.postimg.cc/jdkSf90y/Pexels-Videos-1793155-018.jpg
  https://i.postimg.cc/13n5rHs2/Pexels-Videos-1793155-019.jpg
  https://i.postimg.cc/pdKWgL9B/Pexels-Videos-1793155-020.jpg
  https://i.postimg.cc/RF9S9xKx/Pexels-Videos-1793155-021.jpg
  https://i.postimg.cc/PJ5dpbS6/Pexels-Videos-1793155-022.jpg
  https://i.postimg.cc/zBjJG2Fb/Pexels-Videos-1793155-023.jpg
  https://i.postimg.cc/qqD48tYp/Pexels-Videos-1793155-024.jpg
  https://i.postimg.cc/tRBq0fg8/Pexels-Videos-1793155-025.jpg
  https://i.postimg.cc/283zCwby/Pexels-Videos-1793155-026.jpg
  https://i.postimg.cc/CLtw5qkN/Pexels-Videos-1793155-027.jpg
  https://i.postimg.cc/nhDpDh1t/Pexels-Videos-1793155-028.jpg
  https://i.postimg.cc/25dY09Jc/Pexels-Videos-1793155-029.jpg
  https://i.postimg.cc/1z1Pc1WV/Pexels-Videos-1793155-030.jpg
  https://i.postimg.cc/B6q0kcfq/Pexels-Videos-1793155-031.jpg
  https://i.postimg.cc/JnPLLDRj/Pexels-Videos-1793155-032.jpg
  https://i.postimg.cc/d33Kts0p/Pexels-Videos-1793155-033.jpg
  https://i.postimg.cc/PJ7nCgpx/Pexels-Videos-1793155-034.jpg
  https://i.postimg.cc/qMtdPvSC/Pexels-Videos-1793155-035.jpg
  https://i.postimg.cc/02LqPq1X/Pexels-Videos-1793155-036.jpg
  https://i.postimg.cc/k5C3RF4x/Pexels-Videos-1793155-037.jpg
  https://i.postimg.cc/pLzMd12W/Pexels-Videos-1793155-038.jpg
  https://i.postimg.cc/pdBNfhh3/Pexels-Videos-1793155-039.jpg
  https://i.postimg.cc/B6ZrMS2b/Pexels-Videos-1793155-040.jpg
  https://i.postimg.cc/j58G1phX/Pexels-Videos-1793155-041.jpg
  https://i.postimg.cc/rsKv2fnL/Pexels-Videos-1793155-042.jpg
  https://i.postimg.cc/2jKs7fyj/Pexels-Videos-1793155-043.jpg
  https://i.postimg.cc/T1FBdnF5/Pexels-Videos-1793155-044.jpg
  https://i.postimg.cc/TY5ZkH5V/Pexels-Videos-1793155-045.jpg
  https://i.postimg.cc/YCcTTfQJ/Pexels-Videos-1793155-046.jpg
  https://i.postimg.cc/bwQ4PDTd/Pexels-Videos-1793155-047.jpg
  https://i.postimg.cc/q74SvJbw/Pexels-Videos-1793155-048.jpg
  https://i.postimg.cc/GpKNBW6C/Pexels-Videos-1793155-049.jpg
  https://i.postimg.cc/qR7F2mdC/Pexels-Videos-1793155-050.jpg
  https://i.postimg.cc/XqGDzpqj/Pexels-Videos-1793155-051.jpg
  https://i.postimg.cc/sX0NmpVH/Pexels-Videos-1793155-052.jpg
  https://i.postimg.cc/8c2nQNfh/Pexels-Videos-1793155-053.jpg
  https://i.postimg.cc/xTH9kd5V/Pexels-Videos-1793155-054.jpg
  https://i.postimg.cc/fW1wTdxv/Pexels-Videos-1793155-055.jpg
  https://i.postimg.cc/XNrjbLyJ/Pexels-Videos-1793155-056.jpg
  https://i.postimg.cc/6pfw01FH/Pexels-Videos-1793155-057.jpg
  https://i.postimg.cc/DzfhYPT7/Pexels-Videos-1793155-058.jpg
  https://i.postimg.cc/MGswkf6V/Pexels-Videos-1793155-059.jpg
  https://i.postimg.cc/0Qbs95j3/Pexels-Videos-1793155-060.jpg
  https://i.postimg.cc/rs42thSN/Pexels-Videos-1793155-061.jpg
  https://i.postimg.cc/50TMycFt/Pexels-Videos-1793155-062.jpg
  https://i.postimg.cc/ZYvSgq1v/Pexels-Videos-1793155-063.jpg
  https://i.postimg.cc/DyVTKTTj/Pexels-Videos-1793155-064.jpg
  https://i.postimg.cc/X7w0jzNV/Pexels-Videos-1793155-065.jpg
  https://i.postimg.cc/7ZwrfnbS/Pexels-Videos-1793155-066.jpg
  https://i.postimg.cc/fRCnXS0p/Pexels-Videos-1793155-067.jpg
  https://i.postimg.cc/N00hxG6M/Pexels-Videos-1793155-068.jpg
  https://i.postimg.cc/G2ZZrkZ8/Pexels-Videos-1793155-069.jpg
  https://i.postimg.cc/Dzp9pV6c/Pexels-Videos-1793155-070.jpg
  https://i.postimg.cc/HnXFLrgS/Pexels-Videos-1793155-071.jpg
  https://i.postimg.cc/ydJwwfrC/Pexels-Videos-1793155-072.jpg
  https://i.postimg.cc/9FHvnYds/Pexels-Videos-1793155-073.jpg
  https://i.postimg.cc/rFGvXRgs/Pexels-Videos-1793155-074.jpg
  https://i.postimg.cc/4xJjJ4F5/Pexels-Videos-1793155-075.jpg
  https://i.postimg.cc/DwBHmV9K/Pexels-Videos-1793155-076.jpg
  https://i.postimg.cc/hGvwdynQ/Pexels-Videos-1793155-077.jpg
  https://i.postimg.cc/9MqnxDrW/Pexels-Videos-1793155-078.jpg
  https://i.postimg.cc/s2LL9Yf6/Pexels-Videos-1793155-079.jpg
  https://i.postimg.cc/J0VdSRkj/Pexels-Videos-1793155-080.jpg
  https://i.postimg.cc/GtFSC6FV/Pexels-Videos-1793155-081.jpg
  https://i.postimg.cc/v8fKfxJh/Pexels-Videos-1793155-082.jpg
  https://i.postimg.cc/wTzGVTHp/Pexels-Videos-1793155-083.jpg
  https://i.postimg.cc/VLFHHQLb/Pexels-Videos-1793155-084.jpg
  https://i.postimg.cc/9QFg68rg/Pexels-Videos-1793155-085.jpg
  https://i.postimg.cc/y8QpsmR1/Pexels-Videos-1793155-086.jpg
  https://i.postimg.cc/DzRCb75R/Pexels-Videos-1793155-087.jpg
  https://i.postimg.cc/fbV2LV7x/Pexels-Videos-1793155-088.jpg
  https://i.postimg.cc/fLX8c1ry/Pexels-Videos-1793155-089.jpg
  https://i.postimg.cc/Fz4DDGMZ/Pexels-Videos-1793155-090.jpg
  https://i.postimg.cc/cCBTjwZN/Pexels-Videos-1793155-091.jpg
  https://i.postimg.cc/h4LCfWm3/Pexels-Videos-1793155-092.jpg
  https://i.postimg.cc/TYTtb7q2/Pexels-Videos-1793155-093.jpg
  https://i.postimg.cc/65zYfrYr/Pexels-Videos-1793155-094.jpg
  https://i.postimg.cc/W13SWdHQ/Pexels-Videos-1793155-095.jpg
  https://i.postimg.cc/Gm5KZc09/Pexels-Videos-1793155-096.jpg
  https://i.postimg.cc/ZqvHm1ZH/Pexels-Videos-1793155-097.jpg
  https://i.postimg.cc/4dC5xBxg/Pexels-Videos-1793155-098.jpg
  https://i.postimg.cc/W3M7FgdJ/Pexels-Videos-1793155-099.jpg
  https://i.postimg.cc/brp9QrnV/Pexels-Videos-1793155-100.jpg
  https://i.postimg.cc/0jndZvdk/Pexels-Videos-1793155-101.jpg
  https://i.postimg.cc/wxQV95KC/Pexels-Videos-1793155-102.jpg
  https://i.postimg.cc/tCrNxX4D/Pexels-Videos-1793155-103.jpg
  https://i.postimg.cc/5N9myHb6/Pexels-Videos-1793155-104.jpg
  https://i.postimg.cc/CxzHCWZ0/Pexels-Videos-1793155-105.jpg
  https://i.postimg.cc/DwHQxBsX/Pexels-Videos-1793155-106.jpg
  https://i.postimg.cc/63NrXqM6/Pexels-Videos-1793155-107.jpg
  https://i.postimg.cc/0NSYFDdH/Pexels-Videos-1793155-108.jpg
  https://i.postimg.cc/PxzmrH7W/Pexels-Videos-1793155-109.jpg
  https://i.postimg.cc/90myDS3v/Pexels-Videos-1793155-110.jpg
  https://i.postimg.cc/5ysLL3bj/Pexels-Videos-1793155-111.jpg
  https://i.postimg.cc/05npT8Dx/Pexels-Videos-1793155-112.jpg
  https://i.postimg.cc/QxncM0fy/Pexels-Videos-1793155-113.jpg
  https://i.postimg.cc/Qd91K1Px/Pexels-Videos-1793155-114.jpg
  https://i.postimg.cc/bw7bxdc0/Pexels-Videos-1793155-115.jpg
  https://i.postimg.cc/d1vyfX0L/Pexels-Videos-1793155-116.jpg
  https://i.postimg.cc/pdKjqxRw/Pexels-Videos-1793155-117.jpg
  https://i.postimg.cc/Kjp3R8DM/Pexels-Videos-1793155-118.jpg
  https://i.postimg.cc/nrhQFDBx/Pexels-Videos-1793155-119.jpg
  https://i.postimg.cc/rmJr2Jdg/Pexels-Videos-1793155-120.jpg
  https://i.postimg.cc/L4x1yxF8/Pexels-Videos-1793155-121.jpg
  https://i.postimg.cc/3JWDz23C/Pexels-Videos-1793155-122.jpg
  https://i.postimg.cc/VLTbw56y/Pexels-Videos-1793155-123.jpg
  https://i.postimg.cc/NjH2jY9K/Pexels-Videos-1793155-124.jpg
  https://i.postimg.cc/0N1M63Dc/Pexels-Videos-1793155-125.jpg
  https://i.postimg.cc/KY7KtN5F/Pexels-Videos-1793155-126.jpg
  https://i.postimg.cc/NMgKDHNX/Pexels-Videos-1793155-127.jpg
  https://i.postimg.cc/xCtc4174/Pexels-Videos-1793155-128.jpg
  https://i.postimg.cc/7hhf8yrY/Pexels-Videos-1793155-129.jpg
  https://i.postimg.cc/sxL1303P/Pexels-Videos-1793155-130.jpg
  https://i.postimg.cc/DfpSQm1W/Pexels-Videos-1793155-131.jpg
  https://i.postimg.cc/15gfvPKv/Pexels-Videos-1793155-132.jpg
  https://i.postimg.cc/X7TXhhH4/Pexels-Videos-1793155-133.jpg
  https://i.postimg.cc/qvygdLSn/Pexels-Videos-1793155-134.jpg
  https://i.postimg.cc/hGnv4mRY/Pexels-Videos-1793155-135.jpg
  https://i.postimg.cc/g0KJx0Y2/Pexels-Videos-1793155-136.jpg
  https://i.postimg.cc/Jn4hZWnc/Pexels-Videos-1793155-137.jpg
  https://i.postimg.cc/3RSxZb0M/Pexels-Videos-1793155-138.jpg
  https://i.postimg.cc/fyVTqjYV/Pexels-Videos-1793155-139.jpg
  https://i.postimg.cc/HnFWqctB/Pexels-Videos-1793155-140.jpg
  https://i.postimg.cc/nVWLjgtB/Pexels-Videos-1793155-141.jpg
  https://i.postimg.cc/FsJHjp9q/Pexels-Videos-1793155-142.jpg
  https://i.postimg.cc/wj8TFNMB/Pexels-Videos-1793155-143.jpg
  https://i.postimg.cc/RZ7CY0JL/Pexels-Videos-1793155-144.jpg
  https://i.postimg.cc/ZqjbTDc9/Pexels-Videos-1793155-145.jpg
  https://i.postimg.cc/KYmchynS/Pexels-Videos-1793155-146.jpg
  https://i.postimg.cc/8551sBKZ/Pexels-Videos-1793155-147.jpg
  https://i.postimg.cc/63mBZ2Ft/Pexels-Videos-1793155-148.jpg
  https://i.postimg.cc/Hn8d9WC5/Pexels-Videos-1793155-149.jpg
  https://i.postimg.cc/BtWsYWqz/Pexels-Videos-1793155-150.jpg
  https://i.postimg.cc/gcxZTvzy/Pexels-Videos-1793155-151.jpg
  https://i.postimg.cc/7Pj28fhF/Pexels-Videos-1793155-152.jpg
  https://i.postimg.cc/7Y7TxwTf/Pexels-Videos-1793155-153.jpg
  https://i.postimg.cc/Hkg8nRQ3/Pexels-Videos-1793155-154.jpg
  https://i.postimg.cc/x13Jz55Q/Pexels-Videos-1793155-155.jpg
  https://i.postimg.cc/1zRgcF7q/Pexels-Videos-1793155-156.jpg
  https://i.postimg.cc/GpM4Mp6S/Pexels-Videos-1793155-157.jpg
  https://i.postimg.cc/TwppB662/Pexels-Videos-1793155-158.jpg
  https://i.postimg.cc/cH2rSbxR/Pexels-Videos-1793155-159.jpg
  https://i.postimg.cc/T1bhYJ1Z/Pexels-Videos-1793155-160.jpg
  https://i.postimg.cc/PfvC4Ty2/Pexels-Videos-1793155-161.jpg
  https://i.postimg.cc/sDFvHq0y/Pexels-Videos-1793155-162.jpg
  https://i.postimg.cc/Dw60ZZfy/Pexels-Videos-1793155-163.jpg
  https://i.postimg.cc/mgBhBMs5/Pexels-Videos-1793155-164.jpg
  https://i.postimg.cc/KYYzg247/Pexels-Videos-1793155-165.jpg
  https://i.postimg.cc/Kzk8JDPR/Pexels-Videos-1793155-166.jpg
  https://i.postimg.cc/s202YNZk/Pexels-Videos-1793155-167.jpg
  https://i.postimg.cc/HxqsK8z3/Pexels-Videos-1793155-168.jpg
  https://i.postimg.cc/hvVPq43n/Pexels-Videos-1793155-169.jpg
  https://i.postimg.cc/sfW2WKfL/Pexels-Videos-1793155-170.jpg
  https://i.postimg.cc/DyKwPs8w/Pexels-Videos-1793155-171.jpg
  https://i.postimg.cc/ncYcRzDY/Pexels-Videos-1793155-172.jpg
  https://i.postimg.cc/7ZHPpk1v/Pexels-Videos-1793155-173.jpg
  https://i.postimg.cc/P5SfHRKC/Pexels-Videos-1793155-174.jpg
  https://i.postimg.cc/8Cspzmnt/Pexels-Videos-1793155-175.jpg
  https://i.postimg.cc/0N38MKTx/Pexels-Videos-1793155-176.jpg
  https://i.postimg.cc/B6KJxQ3F/Pexels-Videos-1793155-177.jpg
  https://i.postimg.cc/NFvBbqGz/Pexels-Videos-1793155-178.jpg
  https://i.postimg.cc/T1jG47pY/Pexels-Videos-1793155-179.jpg
  https://i.postimg.cc/zDTJvB0Z/Pexels-Videos-1793155-180.jpg
  https://i.postimg.cc/pXxPFH69/Pexels-Videos-1793155-181.jpg
  `;
  return data.split("\n")[index];
}

const frameCount = 181;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:2,
      // pin:true,
      trigger:"#home2-footer>canvas",
      start:"-50% 0%",
      end:"bottom -20%",
      ease: "none"
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home2-footer canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:3,
      trigger:"#home2-footer",
      start:"-50% 0%",
      // markers:true,
      // end:"bottom 120%"
      ease:"none"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home2-footer",
  pin:true,
  start:"400% 100%",

  
})

}

dom2footer()


function dom3footer(){
  const canvas = document.querySelector("#home3-footer>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `https://i.postimg.cc/yY1ZF4Mp/Dining-Table-3-D-Walkthrough-1080-P-HD-000.jpg
  https://i.postimg.cc/DfgWfpSr/Dining-Table-3-D-Walkthrough-1080-P-HD-023.jpg
  https://i.postimg.cc/8CM52Z8r/Dining-Table-3-D-Walkthrough-1080-P-HD-024.jpg
  https://i.postimg.cc/nh6rS6WJ/Dining-Table-3-D-Walkthrough-1080-P-HD-025.jpg
  https://i.postimg.cc/d1901DVs/Dining-Table-3-D-Walkthrough-1080-P-HD-026.jpg
  https://i.postimg.cc/rFHwzBMr/Dining-Table-3-D-Walkthrough-1080-P-HD-027.jpg
  https://i.postimg.cc/FKyrW1cy/Dining-Table-3-D-Walkthrough-1080-P-HD-028.jpg
  https://i.postimg.cc/sxNsQWdr/Dining-Table-3-D-Walkthrough-1080-P-HD-029.jpg
  https://i.postimg.cc/9FsccyYP/Dining-Table-3-D-Walkthrough-1080-P-HD-030.jpg
  https://i.postimg.cc/VNWw9pQ4/Dining-Table-3-D-Walkthrough-1080-P-HD-031.jpg
  https://i.postimg.cc/bJYhmgqP/Dining-Table-3-D-Walkthrough-1080-P-HD-032.jpg
  https://i.postimg.cc/Kz9ywTYM/Dining-Table-3-D-Walkthrough-1080-P-HD-033.jpg
  https://i.postimg.cc/vTcdsm1S/Dining-Table-3-D-Walkthrough-1080-P-HD-034.jpg
  https://i.postimg.cc/mZ5sS7Jx/Dining-Table-3-D-Walkthrough-1080-P-HD-035.jpg
  https://i.postimg.cc/9Q3H6CcJ/Dining-Table-3-D-Walkthrough-1080-P-HD-036.jpg
  https://i.postimg.cc/8zhgD95D/Dining-Table-3-D-Walkthrough-1080-P-HD-037.jpg
  https://i.postimg.cc/s2sd2mQW/Dining-Table-3-D-Walkthrough-1080-P-HD-038.jpg
  https://i.postimg.cc/TP085bg4/Dining-Table-3-D-Walkthrough-1080-P-HD-039.jpg
  https://i.postimg.cc/MTpC7GYK/Dining-Table-3-D-Walkthrough-1080-P-HD-040.jpg
  https://i.postimg.cc/ydpwvzfh/Dining-Table-3-D-Walkthrough-1080-P-HD-041.jpg
  https://i.postimg.cc/j2WB1k9p/Dining-Table-3-D-Walkthrough-1080-P-HD-042.jpg
  https://i.postimg.cc/Zn1XzxzC/Dining-Table-3-D-Walkthrough-1080-P-HD-043.jpg
  https://i.postimg.cc/xj7wmnNn/Dining-Table-3-D-Walkthrough-1080-P-HD-044.jpg
  https://i.postimg.cc/7ZrjB9NR/Dining-Table-3-D-Walkthrough-1080-P-HD-045.jpg
  https://i.postimg.cc/nhKgNmRh/Dining-Table-3-D-Walkthrough-1080-P-HD-046.jpg
  https://i.postimg.cc/ZqT2mq2F/Dining-Table-3-D-Walkthrough-1080-P-HD-047.jpg
  https://i.postimg.cc/BvMyn0GW/Dining-Table-3-D-Walkthrough-1080-P-HD-048.jpg
  https://i.postimg.cc/76hRCWx5/Dining-Table-3-D-Walkthrough-1080-P-HD-049.jpg
  https://i.postimg.cc/MTLF1mTd/Dining-Table-3-D-Walkthrough-1080-P-HD-050.jpg
  https://i.postimg.cc/yxSrj33B/Dining-Table-3-D-Walkthrough-1080-P-HD-051.jpg
  https://i.postimg.cc/QVGYyNc7/Dining-Table-3-D-Walkthrough-1080-P-HD-052.jpg
  https://i.postimg.cc/wxy6ZWhx/Dining-Table-3-D-Walkthrough-1080-P-HD-053.jpg
  https://i.postimg.cc/J7f1LbqN/Dining-Table-3-D-Walkthrough-1080-P-HD-054.jpg
  https://i.postimg.cc/65CB5yjD/Dining-Table-3-D-Walkthrough-1080-P-HD-055.jpg
  https://i.postimg.cc/sgysBsb1/Dining-Table-3-D-Walkthrough-1080-P-HD-056.jpg
  https://i.postimg.cc/0yfxDhqn/Dining-Table-3-D-Walkthrough-1080-P-HD-057.jpg
  https://i.postimg.cc/1z3SHMmQ/Dining-Table-3-D-Walkthrough-1080-P-HD-058.jpg
  https://i.postimg.cc/cJkS5YC8/Dining-Table-3-D-Walkthrough-1080-P-HD-059.jpg
  https://i.postimg.cc/d17YM1ZN/Dining-Table-3-D-Walkthrough-1080-P-HD-060.jpg
  https://i.postimg.cc/9MvjchGm/Dining-Table-3-D-Walkthrough-1080-P-HD-061.jpg
  https://i.postimg.cc/6qnx3m0d/Dining-Table-3-D-Walkthrough-1080-P-HD-062.jpg
  https://i.postimg.cc/HWygBrgV/Dining-Table-3-D-Walkthrough-1080-P-HD-063.jpg
  https://i.postimg.cc/8PgV3Tpw/Dining-Table-3-D-Walkthrough-1080-P-HD-064.jpg
  https://i.postimg.cc/ncKtfNMx/Dining-Table-3-D-Walkthrough-1080-P-HD-065.jpg
  https://i.postimg.cc/FHD57cjn/Dining-Table-3-D-Walkthrough-1080-P-HD-066.jpg
  https://i.postimg.cc/7Lhv769P/Dining-Table-3-D-Walkthrough-1080-P-HD-067.jpg
  https://i.postimg.cc/B6PdYVRd/Dining-Table-3-D-Walkthrough-1080-P-HD-068.jpg
  https://i.postimg.cc/zDWsT4Ch/Dining-Table-3-D-Walkthrough-1080-P-HD-069.jpg
  https://i.postimg.cc/fyx1Z0zC/Dining-Table-3-D-Walkthrough-1080-P-HD-070.jpg
  https://i.postimg.cc/kXmkswsp/Dining-Table-3-D-Walkthrough-1080-P-HD-071.jpg
  https://i.postimg.cc/NfkZzTPf/Dining-Table-3-D-Walkthrough-1080-P-HD-072.jpg
  https://i.postimg.cc/P5f0sxBb/Dining-Table-3-D-Walkthrough-1080-P-HD-073.jpg
  https://i.postimg.cc/hG6Yd0hM/Dining-Table-3-D-Walkthrough-1080-P-HD-074.jpg
  https://i.postimg.cc/4dcSbh9G/Dining-Table-3-D-Walkthrough-1080-P-HD-075.jpg
  https://i.postimg.cc/Wz6YxL8f/Dining-Table-3-D-Walkthrough-1080-P-HD-076.jpg
  https://i.postimg.cc/qM45yqMf/Dining-Table-3-D-Walkthrough-1080-P-HD-077.jpg
  https://i.postimg.cc/8P4nHGj7/Dining-Table-3-D-Walkthrough-1080-P-HD-078.jpg
  https://i.postimg.cc/Nj0CCnHp/Dining-Table-3-D-Walkthrough-1080-P-HD-079.jpg
  https://i.postimg.cc/wjbfCk5H/Dining-Table-3-D-Walkthrough-1080-P-HD-080.jpg
  https://i.postimg.cc/LsYC2ZvP/Dining-Table-3-D-Walkthrough-1080-P-HD-081.jpg
  https://i.postimg.cc/xdwsCTF4/Dining-Table-3-D-Walkthrough-1080-P-HD-082.jpg
  https://i.postimg.cc/pTKsnbwX/Dining-Table-3-D-Walkthrough-1080-P-HD-083.jpg
  https://i.postimg.cc/KjFJPpb7/Dining-Table-3-D-Walkthrough-1080-P-HD-084.jpg
  https://i.postimg.cc/hvrMp84k/Dining-Table-3-D-Walkthrough-1080-P-HD-085.jpg
  https://i.postimg.cc/nVYdFxK3/Dining-Table-3-D-Walkthrough-1080-P-HD-086.jpg
  https://i.postimg.cc/m2Lmhn8B/Dining-Table-3-D-Walkthrough-1080-P-HD-087.jpg
  https://i.postimg.cc/Hs6BMth5/Dining-Table-3-D-Walkthrough-1080-P-HD-088.jpg
  https://i.postimg.cc/XYhLHY3Y/Dining-Table-3-D-Walkthrough-1080-P-HD-089.jpg
  https://i.postimg.cc/DzXgt3yd/Dining-Table-3-D-Walkthrough-1080-P-HD-090.jpg
  https://i.postimg.cc/j5YXT3DV/Dining-Table-3-D-Walkthrough-1080-P-HD-091.jpg
  https://i.postimg.cc/Jn3Qz3Xs/Dining-Table-3-D-Walkthrough-1080-P-HD-092.jpg
  https://i.postimg.cc/MHdbyWdx/Dining-Table-3-D-Walkthrough-1080-P-HD-093.jpg
  https://i.postimg.cc/J015Dy3P/Dining-Table-3-D-Walkthrough-1080-P-HD-094.jpg
  https://i.postimg.cc/ZYcckcZg/Dining-Table-3-D-Walkthrough-1080-P-HD-095.jpg
  https://i.postimg.cc/vHZvGVZm/Dining-Table-3-D-Walkthrough-1080-P-HD-096.jpg
  https://i.postimg.cc/yYpyx8Dy/Dining-Table-3-D-Walkthrough-1080-P-HD-097.jpg
  https://i.postimg.cc/vZ1LVw9F/Dining-Table-3-D-Walkthrough-1080-P-HD-098.jpg
  https://i.postimg.cc/DwtQQpdW/Dining-Table-3-D-Walkthrough-1080-P-HD-099.jpg
  https://i.postimg.cc/KzbnwKWx/Dining-Table-3-D-Walkthrough-1080-P-HD-100.jpg
  https://i.postimg.cc/7PmgtZnr/Dining-Table-3-D-Walkthrough-1080-P-HD-101.jpg
  https://i.postimg.cc/fbmc87B8/Dining-Table-3-D-Walkthrough-1080-P-HD-102.jpg
  https://i.postimg.cc/brN1Y785/Dining-Table-3-D-Walkthrough-1080-P-HD-103.jpg
  https://i.postimg.cc/NFJmKdjj/Dining-Table-3-D-Walkthrough-1080-P-HD-104.jpg
  https://i.postimg.cc/Dy0193xJ/Dining-Table-3-D-Walkthrough-1080-P-HD-105.jpg
  https://i.postimg.cc/HsNbHvNS/Dining-Table-3-D-Walkthrough-1080-P-HD-106.jpg
  https://i.postimg.cc/RZnK0Q5v/Dining-Table-3-D-Walkthrough-1080-P-HD-107.jpg
  https://i.postimg.cc/HLD58cdX/Dining-Table-3-D-Walkthrough-1080-P-HD-108.jpg
  https://i.postimg.cc/6QrZrWpS/Dining-Table-3-D-Walkthrough-1080-P-HD-109.jpg
  https://i.postimg.cc/RFvHGk30/Dining-Table-3-D-Walkthrough-1080-P-HD-110.jpg
  https://i.postimg.cc/rmgtHfWN/Dining-Table-3-D-Walkthrough-1080-P-HD-111.jpg
  https://i.postimg.cc/PJRvXNSL/Dining-Table-3-D-Walkthrough-1080-P-HD-112.jpg
  https://i.postimg.cc/9X87tNcW/Dining-Table-3-D-Walkthrough-1080-P-HD-113.jpg
  https://i.postimg.cc/FsYJPgK0/Dining-Table-3-D-Walkthrough-1080-P-HD-114.jpg
  https://i.postimg.cc/4NjHj7Kq/Dining-Table-3-D-Walkthrough-1080-P-HD-115.jpg
  https://i.postimg.cc/dVdZFsr1/Dining-Table-3-D-Walkthrough-1080-P-HD-116.jpg
  https://i.postimg.cc/9fY44LxH/Dining-Table-3-D-Walkthrough-1080-P-HD-117.jpg
  https://i.postimg.cc/509X88GY/Dining-Table-3-D-Walkthrough-1080-P-HD-118.jpg
  https://i.postimg.cc/NMN5D5qN/Dining-Table-3-D-Walkthrough-1080-P-HD-119.jpg
  https://i.postimg.cc/pr4yN4dz/Dining-Table-3-D-Walkthrough-1080-P-HD-120.jpg
  https://i.postimg.cc/Dy48QvCg/Dining-Table-3-D-Walkthrough-1080-P-HD-121.jpg
  https://i.postimg.cc/PqTJkmd3/Dining-Table-3-D-Walkthrough-1080-P-HD-122.jpg
  https://i.postimg.cc/tgkTRYTX/Dining-Table-3-D-Walkthrough-1080-P-HD-123.jpg
  https://i.postimg.cc/k4552q6W/Dining-Table-3-D-Walkthrough-1080-P-HD-124.jpg
  https://i.postimg.cc/26XSvMhM/Dining-Table-3-D-Walkthrough-1080-P-HD-125.jpg
  https://i.postimg.cc/L5Y6VDVX/Dining-Table-3-D-Walkthrough-1080-P-HD-126.jpg
  https://i.postimg.cc/nryVSmd1/Dining-Table-3-D-Walkthrough-1080-P-HD-127.jpg
  https://i.postimg.cc/xjhddr0b/Dining-Table-3-D-Walkthrough-1080-P-HD-128.jpg
  https://i.postimg.cc/MKBpMsT3/Dining-Table-3-D-Walkthrough-1080-P-HD-129.jpg
  https://i.postimg.cc/kgdXxxRJ/Dining-Table-3-D-Walkthrough-1080-P-HD-130.jpg
  https://i.postimg.cc/jSQqvLyz/Dining-Table-3-D-Walkthrough-1080-P-HD-131.jpg
  https://i.postimg.cc/Lsx9KwC5/Dining-Table-3-D-Walkthrough-1080-P-HD-132.jpg
  https://i.postimg.cc/sX1VVmqc/Dining-Table-3-D-Walkthrough-1080-P-HD-133.jpg
  https://i.postimg.cc/gJ5GrRPP/Dining-Table-3-D-Walkthrough-1080-P-HD-134.jpg
  https://i.postimg.cc/prFRjT25/Dining-Table-3-D-Walkthrough-1080-P-HD-135.jpg
  https://i.postimg.cc/7brDnk6s/Dining-Table-3-D-Walkthrough-1080-P-HD-136.jpg
  https://i.postimg.cc/pVwn6557/Dining-Table-3-D-Walkthrough-1080-P-HD-137.jpg
  https://i.postimg.cc/MK1j2ZyG/Dining-Table-3-D-Walkthrough-1080-P-HD-138.jpg
  https://i.postimg.cc/fRZSw4Kf/Dining-Table-3-D-Walkthrough-1080-P-HD-139.jpg
  https://i.postimg.cc/pLZhr0cb/Dining-Table-3-D-Walkthrough-1080-P-HD-140.jpg
  https://i.postimg.cc/SKxXMWHX/Dining-Table-3-D-Walkthrough-1080-P-HD-141.jpg
  https://i.postimg.cc/hGZXbXq2/Dining-Table-3-D-Walkthrough-1080-P-HD-142.jpg
  https://i.postimg.cc/cHV62PCY/Dining-Table-3-D-Walkthrough-1080-P-HD-143.jpg
  https://i.postimg.cc/yxcWHn3G/Dining-Table-3-D-Walkthrough-1080-P-HD-144.jpg
  https://i.postimg.cc/2jZ1hj9x/Dining-Table-3-D-Walkthrough-1080-P-HD-145.jpg
  https://i.postimg.cc/TYvp98Zv/Dining-Table-3-D-Walkthrough-1080-P-HD-146.jpg
  https://i.postimg.cc/L6khQCpY/Dining-Table-3-D-Walkthrough-1080-P-HD-147.jpg
  https://i.postimg.cc/GmctWFLM/Dining-Table-3-D-Walkthrough-1080-P-HD-148.jpg
  https://i.postimg.cc/bw3rpZdq/Dining-Table-3-D-Walkthrough-1080-P-HD-149.jpg
  https://i.postimg.cc/25y66CBh/Dining-Table-3-D-Walkthrough-1080-P-HD-150.jpg
  https://i.postimg.cc/Y9mC68RS/Dining-Table-3-D-Walkthrough-1080-P-HD-151.jpg
  https://i.postimg.cc/rsXFQWZN/Dining-Table-3-D-Walkthrough-1080-P-HD-152.jpg
  https://i.postimg.cc/x8vj7CWD/Dining-Table-3-D-Walkthrough-1080-P-HD-153.jpg
  https://i.postimg.cc/ryxpznzn/Dining-Table-3-D-Walkthrough-1080-P-HD-154.jpg
  https://i.postimg.cc/28YSWQZz/Dining-Table-3-D-Walkthrough-1080-P-HD-155.jpg
  https://i.postimg.cc/NfxfkK6R/Dining-Table-3-D-Walkthrough-1080-P-HD-156.jpg
  https://i.postimg.cc/7ZYPsq9d/Dining-Table-3-D-Walkthrough-1080-P-HD-157.jpg
  https://i.postimg.cc/5tX4JpZm/Dining-Table-3-D-Walkthrough-1080-P-HD-158.jpg
  https://i.postimg.cc/Gp6cmGRn/Dining-Table-3-D-Walkthrough-1080-P-HD-159.jpg
  https://i.postimg.cc/qRnphqBh/Dining-Table-3-D-Walkthrough-1080-P-HD-160.jpg
  https://i.postimg.cc/0jsPpvrt/Dining-Table-3-D-Walkthrough-1080-P-HD-161.jpg
  https://i.postimg.cc/gcVYGxB1/Dining-Table-3-D-Walkthrough-1080-P-HD-162.jpg
  https://i.postimg.cc/htjg8pPq/Dining-Table-3-D-Walkthrough-1080-P-HD-163.jpg
  https://i.postimg.cc/25LDMyZc/Dining-Table-3-D-Walkthrough-1080-P-HD-164.jpg
  https://i.postimg.cc/Ss0hh4Ly/Dining-Table-3-D-Walkthrough-1080-P-HD-165.jpg
  https://i.postimg.cc/cHQN1zTf/Dining-Table-3-D-Walkthrough-1080-P-HD-166.jpg
  https://i.postimg.cc/J0MCsQdv/Dining-Table-3-D-Walkthrough-1080-P-HD-167.jpg
  https://i.postimg.cc/1RrZLL8Q/Dining-Table-3-D-Walkthrough-1080-P-HD-168.jpg
  https://i.postimg.cc/8PkVDtvr/Dining-Table-3-D-Walkthrough-1080-P-HD-169.jpg
  https://i.postimg.cc/TYkvPgjN/Dining-Table-3-D-Walkthrough-1080-P-HD-170.jpg
  https://i.postimg.cc/zG6mCNcn/Dining-Table-3-D-Walkthrough-1080-P-HD-171.jpg
  https://i.postimg.cc/vBwpKzMT/Dining-Table-3-D-Walkthrough-1080-P-HD-172.jpg
  https://i.postimg.cc/wv5SYmTV/Dining-Table-3-D-Walkthrough-1080-P-HD-173.jpg
  https://i.postimg.cc/nrHNFhXt/Dining-Table-3-D-Walkthrough-1080-P-HD-174.jpg
  https://i.postimg.cc/mk8JtW91/Dining-Table-3-D-Walkthrough-1080-P-HD-175.jpg
  https://i.postimg.cc/9XpvxZkX/Dining-Table-3-D-Walkthrough-1080-P-HD-176.jpg
  https://i.postimg.cc/zXG443mC/Dining-Table-3-D-Walkthrough-1080-P-HD-177.jpg
  https://i.postimg.cc/02XhvxxL/Dining-Table-3-D-Walkthrough-1080-P-HD-178.jpg
  https://i.postimg.cc/8zF9P3zs/Dining-Table-3-D-Walkthrough-1080-P-HD-179.jpg
  https://i.postimg.cc/zBNc7GSR/Dining-Table-3-D-Walkthrough-1080-P-HD-180.jpg
  https://i.postimg.cc/XvdP9CFb/Dining-Table-3-D-Walkthrough-1080-P-HD-181.jpg
  https://i.postimg.cc/XYThZ8rL/Dining-Table-3-D-Walkthrough-1080-P-HD-182.jpg
  https://i.postimg.cc/fTFXzfsC/Dining-Table-3-D-Walkthrough-1080-P-HD-183.jpg
  https://i.postimg.cc/0ywSbK2s/Dining-Table-3-D-Walkthrough-1080-P-HD-184.jpg
  https://i.postimg.cc/mrWHMZtF/Dining-Table-3-D-Walkthrough-1080-P-HD-185.jpg
  https://i.postimg.cc/xdGbPrzp/Dining-Table-3-D-Walkthrough-1080-P-HD-186.jpg
  https://i.postimg.cc/262bP4T4/Dining-Table-3-D-Walkthrough-1080-P-HD-187.jpg
  https://i.postimg.cc/hjSQyC8D/Dining-Table-3-D-Walkthrough-1080-P-HD-188.jpg
  https://i.postimg.cc/QCC9sHnv/Dining-Table-3-D-Walkthrough-1080-P-HD-189.jpg
  https://i.postimg.cc/nrWsLpyr/Dining-Table-3-D-Walkthrough-1080-P-HD-190.jpg
  https://i.postimg.cc/CMrn7sR0/Dining-Table-3-D-Walkthrough-1080-P-HD-191.jpg
  https://i.postimg.cc/vH1gNxnV/Dining-Table-3-D-Walkthrough-1080-P-HD-192.jpg
  https://i.postimg.cc/rwxd86Qy/Dining-Table-3-D-Walkthrough-1080-P-HD-193.jpg
  https://i.postimg.cc/qM9hVBcZ/Dining-Table-3-D-Walkthrough-1080-P-HD-194.jpg
  https://i.postimg.cc/tgbsJrM3/Dining-Table-3-D-Walkthrough-1080-P-HD-195.jpg
  https://i.postimg.cc/KY5RMn6d/Dining-Table-3-D-Walkthrough-1080-P-HD-196.jpg
  https://i.postimg.cc/sXD19My1/Dining-Table-3-D-Walkthrough-1080-P-HD-197.jpg
  https://i.postimg.cc/W3Wz9sb8/Dining-Table-3-D-Walkthrough-1080-P-HD-198.jpg
  https://i.postimg.cc/8c759x7S/Dining-Table-3-D-Walkthrough-1080-P-HD-199.jpg
  https://i.postimg.cc/4yjdgwch/Dining-Table-3-D-Walkthrough-1080-P-HD-200.jpg
  https://i.postimg.cc/dQfDrQft/Dining-Table-3-D-Walkthrough-1080-P-HD-201.jpg
  https://i.postimg.cc/4Nhy5kCv/Dining-Table-3-D-Walkthrough-1080-P-HD-202.jpg
  https://i.postimg.cc/wj8v4fHC/Dining-Table-3-D-Walkthrough-1080-P-HD-203.jpg
  https://i.postimg.cc/52BthB26/Dining-Table-3-D-Walkthrough-1080-P-HD-204.jpg
  https://i.postimg.cc/1zyzs88M/Dining-Table-3-D-Walkthrough-1080-P-HD-205.jpg
  https://i.postimg.cc/nLThzn7x/Dining-Table-3-D-Walkthrough-1080-P-HD-206.jpg
  https://i.postimg.cc/d11tZgmy/Dining-Table-3-D-Walkthrough-1080-P-HD-207.jpg
  https://i.postimg.cc/76WP3XmQ/Dining-Table-3-D-Walkthrough-1080-P-HD-208.jpg
  https://i.postimg.cc/Vv0fDMhs/Dining-Table-3-D-Walkthrough-1080-P-HD-209.jpg
  https://i.postimg.cc/c6qsjCqR/Dining-Table-3-D-Walkthrough-1080-P-HD-210.jpg
  https://i.postimg.cc/FFY3265z/Dining-Table-3-D-Walkthrough-1080-P-HD-211.jpg
  https://i.postimg.cc/NGZmYxB4/Dining-Table-3-D-Walkthrough-1080-P-HD-212.jpg
  https://i.postimg.cc/gkRR060P/Dining-Table-3-D-Walkthrough-1080-P-HD-213.jpg
  https://i.postimg.cc/zGrhHXLH/Dining-Table-3-D-Walkthrough-1080-P-HD-214.jpg
  https://i.postimg.cc/1zRNMCr9/Dining-Table-3-D-Walkthrough-1080-P-HD-215.jpg
  https://i.postimg.cc/Xv2BPfs9/Dining-Table-3-D-Walkthrough-1080-P-HD-216.jpg
  https://i.postimg.cc/SsJYbnP3/Dining-Table-3-D-Walkthrough-1080-P-HD-217.jpg
  https://i.postimg.cc/gJQXzYFJ/Dining-Table-3-D-Walkthrough-1080-P-HD-218.jpg
  https://i.postimg.cc/8cvFsqNb/Dining-Table-3-D-Walkthrough-1080-P-HD-219.jpg
  https://i.postimg.cc/dtMkgtjN/Dining-Table-3-D-Walkthrough-1080-P-HD-220.jpg
  https://i.postimg.cc/Vs007bnb/Dining-Table-3-D-Walkthrough-1080-P-HD-221.jpg
  https://i.postimg.cc/ZKrBmtfb/Dining-Table-3-D-Walkthrough-1080-P-HD-222.jpg
  https://i.postimg.cc/0yP62W3p/Dining-Table-3-D-Walkthrough-1080-P-HD-223.jpg
  https://i.postimg.cc/7Z95C18j/Dining-Table-3-D-Walkthrough-1080-P-HD-224.jpg
  https://i.postimg.cc/XvDXLVv8/Dining-Table-3-D-Walkthrough-1080-P-HD-225.jpg
  https://i.postimg.cc/qRhqZ9hd/Dining-Table-3-D-Walkthrough-1080-P-HD-226.jpg
  https://i.postimg.cc/Twz18Cg5/Dining-Table-3-D-Walkthrough-1080-P-HD-227.jpg
  https://i.postimg.cc/D01Z7LPj/Dining-Table-3-D-Walkthrough-1080-P-HD-228.jpg
  https://i.postimg.cc/XN5XK66f/Dining-Table-3-D-Walkthrough-1080-P-HD-229.jpg
  https://i.postimg.cc/dtK34NJz/Dining-Table-3-D-Walkthrough-1080-P-HD-230.jpg
  https://i.postimg.cc/MKbT40TX/Dining-Table-3-D-Walkthrough-1080-P-HD-231.jpg
  https://i.postimg.cc/8zp5VFJ4/Dining-Table-3-D-Walkthrough-1080-P-HD-232.jpg
  https://i.postimg.cc/rwfpy85k/Dining-Table-3-D-Walkthrough-1080-P-HD-233.jpg
  https://i.postimg.cc/9fzQrvBq/Dining-Table-3-D-Walkthrough-1080-P-HD-234.jpg
  https://i.postimg.cc/mDHZSCJL/Dining-Table-3-D-Walkthrough-1080-P-HD-235.jpg
  https://i.postimg.cc/MG4KRds3/Dining-Table-3-D-Walkthrough-1080-P-HD-236.jpg
  https://i.postimg.cc/QCZ8YVZp/Dining-Table-3-D-Walkthrough-1080-P-HD-237.jpg
  https://i.postimg.cc/Rh1Mk9v2/Dining-Table-3-D-Walkthrough-1080-P-HD-238.jpg
  https://i.postimg.cc/ry5F0G5g/Dining-Table-3-D-Walkthrough-1080-P-HD-239.jpg
  https://i.postimg.cc/RVRSGMsH/Dining-Table-3-D-Walkthrough-1080-P-HD-240.jpg
  https://i.postimg.cc/85MDvDfs/Dining-Table-3-D-Walkthrough-1080-P-HD-241.jpg
  https://i.postimg.cc/hGJKSVSL/Dining-Table-3-D-Walkthrough-1080-P-HD-242.jpg
  https://i.postimg.cc/bvKpddJK/Dining-Table-3-D-Walkthrough-1080-P-HD-243.jpg
  https://i.postimg.cc/brPPHM1g/Dining-Table-3-D-Walkthrough-1080-P-HD-244.jpg
  https://i.postimg.cc/QCq36bb3/Dining-Table-3-D-Walkthrough-1080-P-HD-245.jpg
  https://i.postimg.cc/tRdpCqHM/Dining-Table-3-D-Walkthrough-1080-P-HD-246.jpg
  https://i.postimg.cc/Fs9mYMrs/Dining-Table-3-D-Walkthrough-1080-P-HD-247.jpg
  https://i.postimg.cc/RVXmKgh1/Dining-Table-3-D-Walkthrough-1080-P-HD-248.jpg
  https://i.postimg.cc/YC0H3QL5/Dining-Table-3-D-Walkthrough-1080-P-HD-249.jpg
  https://i.postimg.cc/52rMkjw6/Dining-Table-3-D-Walkthrough-1080-P-HD-250.jpg
  https://i.postimg.cc/vm6dRMzX/Dining-Table-3-D-Walkthrough-1080-P-HD-251.jpg
  https://i.postimg.cc/V6qQ6R2C/Dining-Table-3-D-Walkthrough-1080-P-HD-252.jpg
  https://i.postimg.cc/XJS64h1W/Dining-Table-3-D-Walkthrough-1080-P-HD-253.jpg
  https://i.postimg.cc/cCdq83N5/Dining-Table-3-D-Walkthrough-1080-P-HD-254.jpg
  https://i.postimg.cc/1XBk0zmR/Dining-Table-3-D-Walkthrough-1080-P-HD-255.jpg
  https://i.postimg.cc/Dfc33xrV/Dining-Table-3-D-Walkthrough-1080-P-HD-256.jpg
  https://i.postimg.cc/9MtKVfqP/Dining-Table-3-D-Walkthrough-1080-P-HD-257.jpg
  https://i.postimg.cc/90mSfjG6/Dining-Table-3-D-Walkthrough-1080-P-HD-258.jpg
  https://i.postimg.cc/T3pzmGZG/Dining-Table-3-D-Walkthrough-1080-P-HD-259.jpg
  https://i.postimg.cc/28cpV392/Dining-Table-3-D-Walkthrough-1080-P-HD-260.jpg
  https://i.postimg.cc/fRp6fpNd/Dining-Table-3-D-Walkthrough-1080-P-HD-261.jpg
  https://i.postimg.cc/9f9s8bmn/Dining-Table-3-D-Walkthrough-1080-P-HD-262.jpg
  https://i.postimg.cc/RhgY6bdN/Dining-Table-3-D-Walkthrough-1080-P-HD-263.jpg
  https://i.postimg.cc/xj5h4cQn/Dining-Table-3-D-Walkthrough-1080-P-HD-264.jpg
  https://i.postimg.cc/HsLRDdW5/Dining-Table-3-D-Walkthrough-1080-P-HD-265.jpg
  https://i.postimg.cc/BQwyJktz/Dining-Table-3-D-Walkthrough-1080-P-HD-266.jpg
  https://i.postimg.cc/9QRk0b7Q/Dining-Table-3-D-Walkthrough-1080-P-HD-267.jpg
  https://i.postimg.cc/sgkNhWY9/Dining-Table-3-D-Walkthrough-1080-P-HD-268.jpg
  https://i.postimg.cc/5t8kqtpc/Dining-Table-3-D-Walkthrough-1080-P-HD-269.jpg
  https://i.postimg.cc/vBM2PdS4/Dining-Table-3-D-Walkthrough-1080-P-HD-270.jpg
  https://i.postimg.cc/k4c1zhkf/Dining-Table-3-D-Walkthrough-1080-P-HD-271.jpg
  https://i.postimg.cc/tJ4SjNby/Dining-Table-3-D-Walkthrough-1080-P-HD-272.jpg
  https://i.postimg.cc/yxpfY36R/Dining-Table-3-D-Walkthrough-1080-P-HD-273.jpg
  https://i.postimg.cc/jqM3hm6j/Dining-Table-3-D-Walkthrough-1080-P-HD-274.jpg
  https://i.postimg.cc/Gh97gKzx/Dining-Table-3-D-Walkthrough-1080-P-HD-275.jpg
  https://i.postimg.cc/YqVX5FsK/Dining-Table-3-D-Walkthrough-1080-P-HD-276.jpg
  https://i.postimg.cc/bwt6pv7G/Dining-Table-3-D-Walkthrough-1080-P-HD-277.jpg
  https://i.postimg.cc/hGR2jBn2/Dining-Table-3-D-Walkthrough-1080-P-HD-278.jpg
  https://i.postimg.cc/SKLDYvNk/Dining-Table-3-D-Walkthrough-1080-P-HD-279.jpg
  https://i.postimg.cc/tTXD3NYP/Dining-Table-3-D-Walkthrough-1080-P-HD-280.jpg
  https://i.postimg.cc/pTqCq5FS/Dining-Table-3-D-Walkthrough-1080-P-HD-281.jpg
  https://i.postimg.cc/gjjD5cy2/Dining-Table-3-D-Walkthrough-1080-P-HD-282.jpg
  https://i.postimg.cc/Dfp5GsFJ/Dining-Table-3-D-Walkthrough-1080-P-HD-283.jpg
  https://i.postimg.cc/ZnQchkjF/Dining-Table-3-D-Walkthrough-1080-P-HD-284.jpg
  https://i.postimg.cc/rFvJnkDq/Dining-Table-3-D-Walkthrough-1080-P-HD-285.jpg
  https://i.postimg.cc/bNGg9JN6/Dining-Table-3-D-Walkthrough-1080-P-HD-286.jpg
  https://i.postimg.cc/rwx97P4x/Dining-Table-3-D-Walkthrough-1080-P-HD-287.jpg
  https://i.postimg.cc/YS7x7zNV/Dining-Table-3-D-Walkthrough-1080-P-HD-288.jpg
  https://i.postimg.cc/pdBJL5qd/Dining-Table-3-D-Walkthrough-1080-P-HD-289.jpg
  https://i.postimg.cc/LX6BY4b3/Dining-Table-3-D-Walkthrough-1080-P-HD-290.jpg
  https://i.postimg.cc/sX6PpdFd/Dining-Table-3-D-Walkthrough-1080-P-HD-291.jpg
  https://i.postimg.cc/T1KV07Gy/Dining-Table-3-D-Walkthrough-1080-P-HD-292.jpg
  https://i.postimg.cc/vTCWNrH0/Dining-Table-3-D-Walkthrough-1080-P-HD-293.jpg
  https://i.postimg.cc/QNzkC3kc/Dining-Table-3-D-Walkthrough-1080-P-HD-294.jpg
  https://i.postimg.cc/tCVdVM2w/Dining-Table-3-D-Walkthrough-1080-P-HD-295.jpg
  https://i.postimg.cc/GmwFPxf2/Dining-Table-3-D-Walkthrough-1080-P-HD-296.jpg
  https://i.postimg.cc/YC61dmcx/Dining-Table-3-D-Walkthrough-1080-P-HD-297.jpg
  https://i.postimg.cc/rpq53FM2/Dining-Table-3-D-Walkthrough-1080-P-HD-298.jpg
  https://i.postimg.cc/HL3bgDkc/Dining-Table-3-D-Walkthrough-1080-P-HD-299.jpg
  
  `;
  return data.split("\n")[index];
}

const frameCount = 277;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:2,
      // pin:true,
      trigger:"#home3-footer>canvas",
      start:"top 50%",
      end:"bottom -20%",
      ease: "none"
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home3 -footer canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:3,
      trigger:"#home3-footer",
      start:"bottom 0%",
      // markers:true,
      // end:"bottom 120%"
      ease:"none"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home3-footer",
  pin:true,
  start:"bottom 100%",

  
})

}

dom3footer()


function dom4footer(){
  const canvas = document.querySelector("#home4-footer>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = `https://i.postimg.cc/yY1ZF4Mp/Dining-Table-3-D-Walkthrough-1080-P-HD-000.jpg
  https://i.postimg.cc/N0fkL7Fz/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-010.jpg
  https://i.postimg.cc/TP7qbLWY/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-011.jpg
  https://i.postimg.cc/k42NvJxN/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-012.jpg
  https://i.postimg.cc/QxGgcrV5/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-013.jpg
  https://i.postimg.cc/HW74JLWd/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-014.jpg
  https://i.postimg.cc/mkMQKmpt/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-015.jpg
  https://i.postimg.cc/Hsww2P7N/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-016.jpg
  https://i.postimg.cc/gJ1VMCDC/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-017.jpg
  https://i.postimg.cc/QdjpnkQd/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-018.jpg
  https://i.postimg.cc/Z5jrkBHF/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-019.jpg
  https://i.postimg.cc/JhnjRrdw/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-020.jpg
  https://i.postimg.cc/xd4MCwWX/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-021.jpg
  https://i.postimg.cc/k4R8tjmf/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-022.jpg
  https://i.postimg.cc/wMKN5hxH/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-023.jpg
  https://i.postimg.cc/BbxKmXtF/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-024.jpg
  https://i.postimg.cc/8kWMpnwC/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-025.jpg
  https://i.postimg.cc/Fs4c7gnV/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-026.jpg
  https://i.postimg.cc/MKmBRMC2/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-027.jpg
  https://i.postimg.cc/sgfhJfzB/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-028.jpg
  https://i.postimg.cc/2SHB9pj0/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-029.jpg
  https://i.postimg.cc/QMHKR6Hh/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-030.jpg
  https://i.postimg.cc/mrJ1RQHM/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-031.jpg
  https://i.postimg.cc/RFt60N7Y/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-032.jpg
  https://i.postimg.cc/KjyK3xQ8/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-033.jpg
  https://i.postimg.cc/8cB7h9nB/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-034.jpg
  https://i.postimg.cc/gcvLFLkX/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-035.jpg
  https://i.postimg.cc/kXq6nMBj/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-036.jpg
  https://i.postimg.cc/m2jchx9T/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-037.jpg
  https://i.postimg.cc/RZ0WHP1K/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-038.jpg
  https://i.postimg.cc/CKBdvzQK/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-039.jpg
  https://i.postimg.cc/mg6tNQVq/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-040.jpg
  https://i.postimg.cc/R0kh24kL/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-041.jpg
  https://i.postimg.cc/26nyDgmR/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-042.jpg
  https://i.postimg.cc/cCZH4T4K/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-043.jpg
  https://i.postimg.cc/fyKb3XJ8/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-044.jpg
  https://i.postimg.cc/ZYFnDkV6/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-045.jpg
  https://i.postimg.cc/L69Xcybw/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-046.jpg
  https://i.postimg.cc/BQm64TW6/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-047.jpg
  https://i.postimg.cc/pLydTmxB/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-048.jpg
  https://i.postimg.cc/7ZcZTqZr/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-049.jpg
  https://i.postimg.cc/nLDc4NXj/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-050.jpg
  https://i.postimg.cc/ydC6vnRf/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-051.jpg
  https://i.postimg.cc/5054Gvqf/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-052.jpg
  https://i.postimg.cc/5yx4M0nL/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-053.jpg
  https://i.postimg.cc/vT3Q8sNj/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-054.jpg
  https://i.postimg.cc/BQnSYj8G/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-055.jpg
  https://i.postimg.cc/XN8NkfY8/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-056.jpg
  https://i.postimg.cc/BQ7qdJDP/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-057.jpg
  https://i.postimg.cc/kgVnCLF1/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-058.jpg
  https://i.postimg.cc/NjWQjbdg/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-059.jpg
  https://i.postimg.cc/q7y4hnF2/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-060.jpg
  https://i.postimg.cc/hjng9vF6/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-061.jpg
  https://i.postimg.cc/vBvyXybB/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-062.jpg
  https://i.postimg.cc/nrRJb1sf/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-063.jpg
  https://i.postimg.cc/BbQ0VznC/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-064.jpg
  https://i.postimg.cc/dQ4vyJ5N/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-065.jpg
  https://i.postimg.cc/NfFt8ZVs/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-066.jpg
  https://i.postimg.cc/GhfCXqwk/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-067.jpg
  https://i.postimg.cc/9QqjKZCs/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-068.jpg
  https://i.postimg.cc/xdDS28d8/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-069.jpg
  https://i.postimg.cc/MTtkVYmf/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-070.jpg
  https://i.postimg.cc/KzmS1WBy/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-071.jpg
  https://i.postimg.cc/bvxfNPGT/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-072.jpg
  https://i.postimg.cc/0jNTfJVW/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-073.jpg
  https://i.postimg.cc/D0YtYyD2/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-074.jpg
  https://i.postimg.cc/v8qFm3mp/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-075.jpg
  https://i.postimg.cc/HsrG8Xcj/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-076.jpg
  https://i.postimg.cc/fTpGcymC/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-077.jpg
  https://i.postimg.cc/fRd6BsvN/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-078.jpg
  https://i.postimg.cc/8CVxYYyr/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-079.jpg
  https://i.postimg.cc/pdY3MB7c/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-080.jpg
  https://i.postimg.cc/bJyWytfy/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-081.jpg
  https://i.postimg.cc/vB0jcZGW/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-082.jpg
  https://i.postimg.cc/gjr7Rb01/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-083.jpg
  https://i.postimg.cc/HnKh9vcn/Hotel-Cinematic-Boutique-Hotel-Port-Elizabeth-2-K-HD-Trim-084.jpg
  https://i.postimg.cc/28FgLYr9/hotel2-000.jpg
https://i.postimg.cc/9QLS1B4G/hotel2-001.jpg
https://i.postimg.cc/CKd22fD9/hotel2-002.jpg
https://i.postimg.cc/0N34120j/hotel2-003.jpg
https://i.postimg.cc/0ykFp4Nk/hotel2-004.jpg
https://i.postimg.cc/B6KVS9mg/hotel2-005.jpg
https://i.postimg.cc/7hrQbscy/hotel2-006.jpg
https://i.postimg.cc/KctHCbkc/hotel2-007.jpg
https://i.postimg.cc/kGNYSN3R/hotel2-008.jpg
https://i.postimg.cc/YqksHPY6/hotel2-009.jpg
https://i.postimg.cc/RVRbVTLj/hotel2-010.jpg
https://i.postimg.cc/XYY1Zy2X/hotel2-011.jpg
https://i.postimg.cc/YCDnQqVR/hotel2-012.jpg
https://i.postimg.cc/3wyL1QQT/hotel2-013.jpg
https://i.postimg.cc/KvvDQhtH/hotel3-000.jpg
https://i.postimg.cc/VLGBVZRL/hotel3-001.jpg
https://i.postimg.cc/7Zj1xCdF/hotel3-002.jpg
https://i.postimg.cc/g2xqFySy/hotel3-003.jpg
https://i.postimg.cc/0NmYrkqb/hotel3-004.jpg
https://i.postimg.cc/W3w065zV/hotel3-005.jpg
https://i.postimg.cc/G2CkyWcz/hotel3-006.jpg
https://i.postimg.cc/6q6nHC4v/hotel3-007.jpg
https://i.postimg.cc/Y0XgTjQy/hotel3-008.jpg
https://i.postimg.cc/gkJ38qW9/hotel3-009.jpg
https://i.postimg.cc/bNBkTDyZ/hotel3-010.jpg
https://i.postimg.cc/8zfWnpct/hotel3-011.jpg
https://i.postimg.cc/8C8v22rD/hotel3-012.jpg
https://i.postimg.cc/d16TTDNt/hotel3-013.jpg
https://i.postimg.cc/XJ4CJ98z/hotel3-014.jpg
https://i.postimg.cc/KYnTx0nT/hotel3-015.jpg
https://i.postimg.cc/sx2GPybP/hotel3-016.jpg
https://i.postimg.cc/90NRJKj6/hotel3-017.jpg
https://i.postimg.cc/4489f7hW/hotel3-018.jpg
https://i.postimg.cc/kXBtBJQq/hotel3-019.jpg
https://i.postimg.cc/X7mB5RLF/hotel3-020.jpg
https://i.postimg.cc/9Q9RYLgk/hotel3-021.jpg
https://i.postimg.cc/mrGcX70g/hotel3-022.jpg
https://i.postimg.cc/5tqXZ6Vq/hotel3-023.jpg
https://i.postimg.cc/DZvSFnfV/hotel3-024.jpg
https://i.postimg.cc/cC66gh8X/hotel3-025.jpg
https://i.postimg.cc/T1S1rbVG/hotel3-026.jpg
https://i.postimg.cc/PfFCGgBc/hotel3-027.jpg
https://i.postimg.cc/QdcCTHHG/hotel3-028.jpg
https://i.postimg.cc/8P2schkm/hotel3-029.jpg
https://i.postimg.cc/kX6B7jC5/hotel3-030.jpg
https://i.postimg.cc/vmMBLbV1/hotel3-031.jpg
https://i.postimg.cc/HL2L6Rw6/hotel3-032.jpg
https://i.postimg.cc/MTppN5tq/hotel3-033.jpg
https://i.postimg.cc/zB2GrhPW/hotel3-034.jpg
https://i.postimg.cc/6q755QDP/hotel3-035.jpg
https://i.postimg.cc/vTp81syZ/hotel3-036.jpg
https://i.postimg.cc/jq9S3zfY/hotel3-037.jpg
https://i.postimg.cc/WbkbBhmF/hotel3-038.jpg
https://i.postimg.cc/JzC4MMKT/hotel3-039.jpg
https://i.postimg.cc/8zdkC90T/hotel3-040.jpg
https://i.postimg.cc/QMX8Km21/hotel3-041.jpg
https://i.postimg.cc/pdq2f8v7/hotel3-042.jpg
https://i.postimg.cc/Tw1TCwYP/hotel3-043.jpg
https://i.postimg.cc/QCWhZy7G/hotel3-044.jpg
https://i.postimg.cc/grFdzHyw/hotel3-045.jpg
https://i.postimg.cc/T2yDP2qG/hotel3-046.jpg
https://i.postimg.cc/pVgn5Nqj/hotel3-047.jpg
https://i.postimg.cc/4NVHz8SS/hotel3-048.jpg
https://i.postimg.cc/mg4zVYx2/hotel3-049.jpg
https://i.postimg.cc/QdqBzFsg/hotel3-050.jpg
https://i.postimg.cc/jjdWYRdp/hotel3-051.jpg
https://i.postimg.cc/LXJnhvPv/hotel3-052.jpg
https://i.postimg.cc/j2N245Z7/hotel3-053.jpg
https://i.postimg.cc/mZFPsXBg/hotel3-054.jpg
https://i.postimg.cc/m2ft2YgN/hotel3-055.jpg
https://i.postimg.cc/WbGtDdDR/hotel3-056.jpg
https://i.postimg.cc/VkzvXzMJ/hotel3-057.jpg
https://i.postimg.cc/6pz30FLY/hotel3-058.jpg
https://i.postimg.cc/s2X20KTy/hotel3-059.jpg
https://i.postimg.cc/vmNmR9Kn/hotel3-060.jpg
https://i.postimg.cc/1tV3yXxj/hotel3-061.jpg
https://i.postimg.cc/SR0NR4kN/hotel3-062.jpg
https://i.postimg.cc/mkQZFng3/hotel3-063.jpg
https://i.postimg.cc/VsMkTJWS/hotel3-064.jpg
https://i.postimg.cc/15Q3Zyvv/hotel3-065.jpg
https://i.postimg.cc/fTfTz1FD/hotel3-066.jpg
https://i.postimg.cc/RZPSfK4Y/hotel3-067.jpg
https://i.postimg.cc/d0pJNF7m/hotel3-068.jpg
https://i.postimg.cc/mgZZt8fM/hotel3-069.jpg
https://i.postimg.cc/CKzF45Kx/hotel3-070.jpg
https://i.postimg.cc/cCTjj79y/hotel4-000.jpg
https://i.postimg.cc/ncRgGk9q/hotel4-001.jpg
https://i.postimg.cc/htNYHtrj/hotel4-002.jpg
https://i.postimg.cc/4xYML9pq/hotel4-003.jpg
https://i.postimg.cc/rpWHc2n9/hotel4-004.jpg
https://i.postimg.cc/QC64S8Cj/hotel4-005.jpg
https://i.postimg.cc/4dQF7bT7/hotel4-006.jpg
https://i.postimg.cc/1tQj37b1/hotel4-007.jpg
https://i.postimg.cc/RhCpc6MP/hotel4-008.jpg
https://i.postimg.cc/xjg49RRB/hotel4-009.jpg
https://i.postimg.cc/Gh2Stygt/hotel4-010.jpg
https://i.postimg.cc/cJQF2MC9/hotel4-011.jpg
https://i.postimg.cc/7YWt2ZjV/hotel4-012.jpg
https://i.postimg.cc/bwSCHjhj/hotel4-013.jpg
https://i.postimg.cc/vmRP0SYx/hotel4-014.jpg
https://i.postimg.cc/hjc2Bz7S/hotel4-015.jpg
https://i.postimg.cc/Pxy2rXm1/hotel4-016.jpg
https://i.postimg.cc/Gtpz4WQV/hotel4-017.jpg
https://i.postimg.cc/Wzf8g5Y3/hotel4-018.jpg
https://i.postimg.cc/kMjf05Mm/hotel4-019.jpg
https://i.postimg.cc/gkQ40B6t/hotel4-020.jpg
https://i.postimg.cc/5N6nbMjF/hotel4-021.jpg
https://i.postimg.cc/Xv08fGLw/hotel4-022.jpg
https://i.postimg.cc/BnFpPcTS/hotel4-023.jpg
https://i.postimg.cc/cJMcXxkP/hotel4-024.jpg
https://i.postimg.cc/XJjkPRTq/hotel4-025.jpg
https://i.postimg.cc/sXT4Cnrc/hotel4-026.jpg
https://i.postimg.cc/qqgXJ8Bd/hotel4-027.jpg
https://i.postimg.cc/qqYczzg6/hotel4-028.jpg
https://i.postimg.cc/Y2yzXy82/hotel4-029.jpg
https://i.postimg.cc/Fsdgwgny/hotel4-030.jpg
https://i.postimg.cc/9QyPQX2z/hotel4-031.jpg
https://i.postimg.cc/GhWJR8ZZ/hotel4-032.jpg
https://i.postimg.cc/1zPGnxRB/hotel4-033.jpg
https://i.postimg.cc/yNPF0fkH/hotel4-034.jpg
https://i.postimg.cc/3Rx21gvD/hotel4-035.jpg
https://i.postimg.cc/3RfmcdXf/hotel4-036.jpg
https://i.postimg.cc/8cFMQNwp/hotel4-037.jpg
https://i.postimg.cc/vTp9GkSW/hotel4-038.jpg
https://i.postimg.cc/y650h3Yk/hotel4-039.jpg
https://i.postimg.cc/Wbkg5phS/hotel4-040.jpg
https://i.postimg.cc/mgWMJx94/hotel4-041.jpg
https://i.postimg.cc/3xjpHLjv/hotel4-042.jpg
https://i.postimg.cc/tg2xsYMR/hotel4-043.jpg
https://i.postimg.cc/7LxzPgXQ/hotel4-044.jpg
https://i.postimg.cc/C15fkS3G/hotel4-045.jpg
https://i.postimg.cc/fLPSv1s6/hotel4-046.jpg
https://i.postimg.cc/1XNn7M54/hotel4-047.jpg
https://i.postimg.cc/z3ZLsWV7/hotel4-048.jpg
https://i.postimg.cc/fW38hNVS/hotel4-049.jpg
https://i.postimg.cc/3rPn8cGS/hotel4-050.jpg
https://images.unsplash.com/photo-1549875648-357fef68fec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80
  `;
  return data.split("\n")[index];
}

const frameCount = 222;

const images = [];
const imageSeq = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
      scrub:2,
      // pin:true,
      trigger:"#home4-footer>canvas",
      start:"top 0%",
      end:"bottom -20%",
      ease: "none"
      
      
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home4-footer canvas",{
  scale:.8,
  scrollTrigger:{
      scrub:3,
      trigger:"#home4-footer",
      start:"bottom 0%",
      // markers:true,
      // end:"bottom 120%"
      ease:"none"
   
      
  },
 

})
ScrollTrigger.create({
  trigger:"#home4-footer",
  pin:true,
  start:"bottom 100%",

  
})

}

dom4footer()


// document.querySelectorAll("body")
// .forEach(function(elem){
//   elem.addEventListener("mousemove", function(dets){
//     document.querySelector("#cursor").style.top = `${dets.clientY}px`
//     document.querySelector("#cursor").style.left = `${dets.clientX}px`
//     // document.querySelector("#cursor").style.mixBlendMode = "difference"

//   })
// })

document.querySelector("body")
.addEventListener("mousemove", function(dets){
    function abc(){
        document.querySelector("#semicircle").style.top= `${dets.clientY}px`
        document.querySelector("#semicircle").style.left= `${dets.clientX}px`
        document.querySelector("#semicircle").style.mixBlendMode= "difference"
        document.querySelector("#semicircle").style.backgroundColor= "white"
    }
    window.requestAnimationFrame(abc)
});

document.querySelectorAll("#hover-slideshow")
.forEach(function(elem){
  elem.addEventListener("mousemove", function(){
    document.querySelector("#semicircle").style.display = "none"

  })
})
document.querySelectorAll("#hover-slideshow")
.forEach(function(elem){
  elem.addEventListener("mouseout", function(){
    document.querySelector("#semicircle").style.display = "initial"

  })
})
document.querySelectorAll(".enlarge")
.forEach(function(elem){
  elem.addEventListener("mousemove", function(){
    document.querySelector("#semicircle").style.width = "3vw"
    document.querySelector("#semicircle").style.height = "3vw"
    document.querySelector("#semicircle").style.mixBlendMode= "difference"
    

  })
})
document.querySelectorAll(".enlarge")
.forEach(function(elem){
  elem.addEventListener("mouseout", function(){
    document.querySelector("#semicircle").style.width = "1vw"
    document.querySelector("#semicircle").style.height = "1vw"
    // document.querySelector("#semicircle").style.backgroundColor= "transparent"

  })
})

