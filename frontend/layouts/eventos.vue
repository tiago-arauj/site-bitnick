<script>
  import EventHeader from '~/components/eventos/header'

  export default {
    name: 'LayoutEvents',
    components: {
      EventHeader
    },
    mounted: function () {
      this.$nextTick(function () {
        const self = this;
        self.setScreenWidth();
        window.addEventListener('resize', function () {
          self.setScreenWidth()
        })
      })
    },
    methods: {
      setScreenWidth: function () {
        this.$store.commit('layout/setPageAttrs', {
          screenWidth: screen.width
        })
      }
    },
  }
</script>

<template lang="pug">
  .__layout_event
    EventHeader
    nuxt
</template>

<style lang="scss">

  .__layout_event {
    overflow: hidden;
    --textShadow: -1px 2px 3px rgba(0,0,0,.6), -3px 3px 4px rgba(0,0,0,0.15);

    body {
      font-size: 14px;
      line-height: 25px;
      font-weight: 400;
      font-family: "Montserrat", sans-serif !important;
      color: #838383;
      font-style: normal;
      overflow-x: hidden;
    }

    .el-input {
      &.is-disabled {
        input {
          color: #9e9e9e;
        }
      }
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      color: #18181c;
      line-height: 1.3;
    }

    h1, .h1 {
      font-size: 48px;
      margin-bottom: 25px;
    }

    h2, .h2 {
      font-size: 42px;
      margin-bottom: 25px;
    }

    h3, .h3 {
      font-size: 36px;
      margin-bottom: 25px;
    }

    h4, .h4 {
      font-size: 24px;
      margin-bottom: 15px;
    }

    h5, .h5 {
      font-size: 18px;
      margin-bottom: 15px;
    }

    h6, .h6 {
      font-size: 14px;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      font-family: "Montserrat", sans-serif;
      margin: 0 0 15px;
      line-height: 24px;
      font-weight: 400;
      color: #838383;
    }

    p:last-child {
      margin-bottom: 0;
    }

    a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      font-size: 13px;
      font-weight: 400;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }

    a:hover,
    a:focus,
    a:active {
      text-decoration: none;
      outline: none;
      color: #838383;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }

    ul.nosyely_list {
      padding: 0;
      margin: 0;
      list-style: none;
    }

    .section_title {
      position: relative;
      margin-bottom: 25px;
    }

    .section_title .title {
      text-transform: uppercase;
      padding: 10px 0;
      font-size: 36px;
    }

    .section_title .title:before {
      width: 30px;
      content: " ";
      position: absolute;
      border-top: solid 3px var(--highlightColor);
      left: 0;
      top: 0;
    }


    .bg-img {
      border-radius: 4px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      position: relative;
    }

    .bg-img .overlay_dark {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .brand_item {
      opacity: 0.3;
      -webkit-transition: all ease-in-out 0.4s;
      transition: all ease-in-out 0.4s;
    }

    .brand_item img {
      display: block;
      max-width: 130px;
      margin: 0 auto;
    }

    .brand_item:hover {
      opacity: 1;
      -webkit-transition: all ease-in-out 0.4s;
      transition: all ease-in-out 0.4s;
    }

    .icon_list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .icon_list li {
      display: inline-block;
      width: 100%;
      position: relative;
      padding-left: 50px;
      min-height: 50px;
      margin-bottom: 7px;
    }

    .icon_list li i {
      background-color: var(--highlightColor);
      display: block;
      border-radius: 50px;
      padding: 7px 0;
      font-size: 24px;
      color: #ffffff;
      width: 40px;
      height: 40px;
      text-align: center;
      position: absolute;
      left: 0;
    }

    .icon_list li span {
      color: #333333;
      padding-top: 6px;
      display: inline-block;
    }

    blockquote {
      padding: 75px 25px 25px;
      font-size: 20px;
      text-align: center;
      margin: 25px 50px;
    }

    blockquote:before {
      content: open-quote;
      display: block;
      font-size: 134px;
      font-family: Georgia, Verdana, Roboto, serif;
      line-height: 0.2;
      padding: 0;
      opacity: 0.2;
      font-weight: 600;
      margin: 0;
    }

    blockquote p {
      font-size: 18px;
      text-transform: capitalize;
      font-weight: 400;
      font-style: italic;
    }

    .text-muted {
      color: #868e96 !important;
      font-size: 14px;
      line-height: 2.1;
    }

    strong {
      font-weight: 700;
      font-family: "Montserrat", sans-serif !important;
    }

    .text-xs {
      font-size: 11px;
    }

    .text-xl {
      font-size: 48px;
      font-weight: 600;
      letter-spacing: 1px;
    }

    .uppercase {
      text-transform: uppercase;
    }

    .capitalize {
      text-transform: capitalize;
    }

    img {
      max-width: 100%;
    }

    @media (max-width: 768px) {
      h1, .h1 {
        font-size: 28px;
        margin-bottom: 15px;
        font-weight: 700;
      }

      h2, .h2 {
        font-size: 24px;
        margin-bottom: 15px;
      }

      h3, .h3 {
        font-size: 20px;
        margin-bottom: 15px;
      }

      h4, .h4 {
        font-size: 16px;
        margin-bottom: 10px;
      }

      h5, .h5 {
        font-size: 14px;
        margin-bottom: 10px;
      }

      h6, .h6 {
        font-size: 12px;
        margin-bottom: 5px;
      }

      .hide-md {
        display: none !important;
      }
    }
    /* ----------------Responsive Align ------------------- */
    @media all and (max-width: 767px) {
      .text-center-xs {
        text-align: center;
      }

      .text-left-xs {
        text-align: left;
      }

      .text-right-xs {
        text-align: right;
      }
    }

    .loader {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 100%;
      background-color: #f7f7f7;
      z-index: 999999;
    }

    .loader .loader-inner {
      position: absolute;
      border: 2px solid var(--highlightColor);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      left: calc(50% - 20px);
      top: calc(50% - 20px);
      border-right: 0;
      border-top-color: transparent;
      -webkit-animation: loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
      animation: loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
    }

    @-webkit-keyframes loader-outter {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes loader-outter {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @-webkit-keyframes loader-inner {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg);
      }
    }
    @keyframes loader-inner {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg);
      }
    }

    .btn {
      font-size: 12px;
      line-height: 1.7;
      text-transform: uppercase;
      color: #fff;
      font-weight: 500;
      padding: 12px 40px;
      border-radius: 0;
      outline: 0 !important;
      border: none;
      cursor: pointer;
      background-color: #18181c;
      -webkit-transition: all 300ms ease-in-out;
      transition: all 300ms ease-in-out;
      font-family: Montserrat,serif;
    }
    .btn:hover {
      color: var(--darkMuted);
      background-color: #fff;
      -webkit-transition: all 300ms ease-in-out;
      transition: all 300ms ease-in-out;
    }
    .btn:focus {
      outline: 0 !important;
      -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }

    .btn-rounded {
      border-radius: 50px;
    }

    .btn-primary {
      background-color: var(--highlightColor);
      color: #ffffff;
      -webkit-transition: all 300ms ease-in-out;
      transition: all 300ms ease-in-out;
    }
    .btn-primary:hover {
      background-color: var(--darkMuted);
      color: #ffffff;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      -webkit-transition: all 300ms ease-in-out;
      transition: all 300ms ease-in-out;
    }
  }
</style>

