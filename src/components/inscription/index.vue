<template>
  <div class="inscription-wrap">
    <div class="inscription-box-wrap">
      <div class="inscription-title">
        <svg class="icon"
             aria-hidden="true">
          <slot name="h2TitleIcon"></slot>
        </svg>
        <slot name="h2Title">暂无标题</slot>
      </div>
      <div class="inscription-content">
        <ul>
          <slot name="projectList"></slot>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/base/base";
@import "../../assets/base/color";
$liWAndH: 2.4rem;
div.inscription-wrap {
  display: flex;
  justify-content: center;
  width: $childBaseWidth - 5vw;
  overflow: hidden;
  div.inscription-box-wrap {
    display: flex;
    flex-direction: column;
    width: $boxWidth;
    div.inscription-title {
      display: flex;
      flex-direction: row;
      align-items: center;
      .icon {
        margin-left: $spancin;
        margin-right: 0.05rem;
        font-size: $iconSize;
      }
    }
    div.inscription-content {
      ul {
        display: inline-flex;
        flex-wrap: wrap;
        width: 100%;
        li {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          flex: 1 1 $liWAndH;
          width: $liWAndH - 0.2rem;
          margin-bottom: 0;
          padding: $spancin;
          transition: all 0.5s ease-out;
          overflow: hidden;
          img,
          p:first-child,
          span.img-box {
            height: 1.2rem;
            background: lighten($fontColor, 35%);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size: 0.18rem;
            color: lighten($fontColor, 20%);
          }
          p,
          span.img-box,
          h4 {
            word-break: break-all;
          }
          h4 {
            height: 0.3rem;
            line-height: 0.3rem;
          }
          p,
          span.img-box {
            color: lighten($fontColor, 2%);
          }
          span.ivu-badge {
            position: absolute;
            right: 0;
            top: 0;
            padding: 0;
            border: 0;
            width: 0.21rem;
            height: 0.21rem;
            .ivu-badge-count-alone {
              padding: 0;
              width: inherit;
              height: inherit;
            }
          }
          .linkIcon {
            position: absolute;
            top: 0.2rem;
            left: 0.2rem;
            color: lighten($fontColor, 20%);
            transition: all 0.5s ease;
          }
          .linkIcon:hover {
            color: $menuColor;
          }
        }
        li:hover {
          background: lighten($fontColor, 38%);
          cursor: pointer;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "Inscription",
  data() {
    return {};
  }
};
</script>
