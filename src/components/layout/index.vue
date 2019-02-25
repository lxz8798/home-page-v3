<template>
  <div class="layout-wrap">
    <div class="layout-box-wrap">
      <div class="l">
        <div>
          <slot name="layoutContent">
            <slot name="layoutLH2"><h2 v-html="jsDes"></h2></slot>
            <slot name="layoutLP"
              ><p>{{ jsDesP1 }}</p></slot
            >
            <slot name="layoutLDes"
              ><p>{{ jsDesP2 }}</p></slot
            >
            <slot name="layoutLTag"
              ><tag-comp :tagList="tagList"></tag-comp
            ></slot>
          </slot>
        </div>
      </div>
      <div class="r">
        <slot name="layoutR">
          <div slot="S3DModule" id="S3DModule" @mouseenter="show = !show">
            <ul id="ViewF">
              <li v-for="(item, index) in items" class="list" :key="index">
                <slot name="layoutRImg"
                  ><img :src="item.img" :alt="item.name"
                /></slot>
              </li>
            </ul>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/base/base";
$parallaxBoxHeight: 5rem; // 视差盒子高度
div.layout-wrap {
  transform: translateY(0.3rem);

  display: flex;
  justify-content: center;
  align-items: center;

  max-width: $boxWidth;
  height: 6.5rem;
  margin: $spancin;
  div.layout-box-wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    div.l {
      flex: 1 1 4rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      p {
        padding-top: $spancin;
      }
    }
    div.r {
      max-width: 7.5rem;
      flex: 1 1 7.5rem;
      height: $parallaxBoxHeight;
      div#S3DModule {
        width: 100%;
        height: $parallaxBoxHeight;
        ul {
          perspective: $boxWidth;
          transform-style: preserve-3d;

          width: 100%;
          height: $parallaxBoxHeight;

          position: relative;

          li {
            position: absolute;

            img {
              width: inherit;
              height: inherit;
            }
          }

          li:nth-child(1) {
            width: 5rem;
            height: 5rem;

            top: 0;
            left: 1.5rem;
            transform: translate3d(0, 0, 1.5rem);
          }

          li:nth-child(2) {
            width: 0.8rem;
            height: 0.6rem;

            top: 0;
            left: 1rem;
            transform: translate3d(2rem, 1.3rem, 6rem);
          }

          li:nth-child(3) {
            width: 0.65rem;
            height: 0.65rem;

            top: 0;
            left: 1rem;
            transform: translate3d(1.5rem, 1.6rem, 8rem);
          }
          li:nth-child(4) {
            width: 1.3rem;
            height: 0.8rem;

            top: 0;
            right: 1rem;
            transform: translate3d(-1.4rem, 2.1rem, 6rem);
          }
          li:nth-child(5) {
            width: 1rem;
            height: 0.85rem;

            top: 0;
            right: 1rem;
            transform: translate3d(-0.5rem, 2.4rem, 4rem);
          }
          li:nth-child(6) {
            width: 0.6rem;
            height: 0.3rem;

            top: 0;
            right: 0;
            transform: translate3d(-0.5rem, 1rem, 2rem);
          }
          li:nth-child(7) {
            width: 0.6rem;
            height: 0.3rem;
            top: 0;
            right: 0;
            transform: translate3d(-3.3rem, 1.8rem, 6rem);
          }

          li:nth-child(8),
          li:nth-child(9),
          li:nth-child(10),
          li:nth-child(11),
          li:nth-child(12),
          li:nth-child(13),
          li:nth-child(14),
          li:nth-child(15) {
            width: 0.6rem;
            height: 0.5rem;
            top: 0;
            right: 0;
          }
          li:nth-child(8) {
            transform: translate3d(-3.7rem, 1.35rem, 2rem);
          }
          li:nth-child(9) {
            transform: translate3d(-4.9rem, 1.7rem, 2.3rem);
          }
          li:nth-child(10) {
            transform: translate3d(-4.7rem, 2.05rem, 2.6rem);
          }
          li:nth-child(11) {
            transform: translate3d(-4rem, 2.1rem, 1.8rem);
          }
          li:nth-child(12) {
            transform: translate3d(-3.6rem, 2.2rem, 2.3rem);
          }
          li:nth-child(13) {
            transform: translate3d(-2.4rem, 2.3rem, 2.8rem);
          }
          li:nth-child(14) {
            transform: translate3d(-2rem, 1.8rem, 2.3rem);
          }
          li:nth-child(15) {
            transform: translate3d(-1.8rem, 1.5rem, 1.5rem);
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "layout",
  data() {
    return {
      jsDes: `参考国外的大神的资料使用c4d建模制作而成，<br />而后使用JS完成视差交互`,
      jsDesP1:
        "建模完成后，通过分层渲染得到单个图片文件，然后使用JS配合css的transform-style: preserve-3d 完成视差效果，制作完成后感觉还过得去。",
      jsDesP2:
        "重构的山体的样式，2.0使用position和z-index来定位，现在使用translate3D来定位，使用flex来布局。",
      show: true,
      S3DData: [
        {
          s3ddom: "",
          request: null,
          radius: "0",
          degree: "0",
          cx: "0",
          cy: "0",
          dx: "0",
          mx: "0",
          my: "0",
          tx: "0",
          ty: "0",
          dy: "0",
          pre: "0"
        }
      ],
      items: [
        {
          name: "img1",
          img: require("../../assets/img/shan/8.png")
        },
        {
          name: "img2",
          img: require("../../assets/img/shan/1.png")
        },
        {
          name: "img3",
          img: require("../../assets/img/shan/6.png")
        },
        {
          name: "img4",
          img: require("../../assets/img/shan/9.png")
        },
        {
          name: "img5",
          img: require("../../assets/img/shan/5.png")
        },
        {
          name: "img6",
          img: require("../../assets/img/shan/9.png")
        },
        {
          name: "img7",
          img: require("../../assets/img/shan/3.png")
        },
        {
          name: "img8",
          img: require("../../assets/img/shan/7.png")
        },
        {
          name: "img9",
          img: require("../../assets/img/shan/7.png")
        },
        {
          name: "img10",
          img: require("../../assets/img/shan/7.png")
        },
        {
          name: "img11",
          img: require("../../assets/img/shan/7.png")
        },
        {
          name: "img12",
          img: require("../../assets/img/shan/7.png")
        },
        {
          name: "img13",
          img: require("../../assets/img/shan/7.png")
        },
        {
          name: "img14",
          img: require("../../assets/img/shan/7.png")
        },
        {
          name: "img15",
          img: require("../../assets/img/shan/7.png")
        }
      ],
      tagList: [
        {
          color: this.getRandomColor(),
          name: "javascript"
        },
        {
          color: this.getRandomColor(),
          name: "parallax"
        }
      ]
    };
  },
  mounted() {
    this.parallax();
  },
  methods: {
    parallax() {
      this.s3ddom = $("#ViewF");
      $(this.s3ddom).mousemove(event => {
        this.cx = Math.ceil(this.s3ddom.width() / 1.2);
        this.cy = Math.ceil(this.s3ddom.height() / 1.2);
        this.dx = event.pageX - this.cx;
        this.dy = event.pageY - this.cy;
        this.tx = -(this.dy / this.cy);
        this.ty = -(this.dx / this.cx);
        this.radius = Math.sqrt(Math.pow(this.tx, 2) + Math.pow(this.ty, 2));
        this.degree = this.radius * 2;

        TweenLite.to(this.s3ddom, 1, {
          transform:
            "rotate3d(" +
            this.tx +
            "," +
            this.ty +
            ",0," +
            this.degree +
            "deg)",
          ease: Power4.easeOut
        });
      });
    }
  }
};
</script>
