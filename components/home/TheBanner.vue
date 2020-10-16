<script>
export default {
  name: 'TheBanner'
}
</script>

<template lang="pug">
  section.theBanner
    .theBanner-content
      .theBanner-textBox
        span.theBanner-label Contrato Inteligente
        h1.theBanner-title Seu contrato inteligente gerando lucro!
        h2.theBanner-text-bold SmartContracts financiando a agricultura orgânica auto sustentável.
        p.theBanner-text Quando nos deparamos com as dificuldades e valores dos alimentos orgânicos logo deduzimos que é impossível se alimentar exclusivamente de alimentos orgânicos, imediatamente calculamos o preço e nos deparamos com uma realidade impossível para a maioria das pessoas. Pensando nisso desenvolvemos uma plataforma que se propõe a realizar projetos agrícolas de alta produtividade e auto sustentáveis, objetivando baixar os custos de produção, consecutivamente os preços no mercado consumidor, para que todos possam se alimentar de forma orgânica e saudável.
        .appButton(@click="$router.push('como-funciona')")
          AppButton.theBanner-button.gradient(icon="el-icon-arrow-right") Clique para saber mais
    img#bannerImage.theBanner-image(src="images/black.jpg" alt='banner')
</template>

<style lang="sass" scoped>
  .theBanner
    z-index: -1
    align-items: center
    display: contents
    flex-direction: column
    width: 100%
    &-content
      position: relative
      max-width: 1024px
      width: 100%
    &-textBox
      color: #FFFFFF
      position: absolute
      top: 180px
      left: 0
      width: 70%
      padding: 0 16px
    &-label
      border-bottom: 2px solid var(--highlightColor)
      text-transform: uppercase
      margin: 16px 0
      padding-bottom: 8px
    &-title
      font:
        family: 'Barlow-Bold'
        size: 3.5em
      line-height: 1em
      margin: 16px 0 24px
    &-text
      line-height: 1.4em
      margin: 16px 0
    &-text-bold
      margin: -6px 0
      font-size: 20px
    &-button
      background-color: var(--highlightColor)
      border: none
      color: #FFFFFF
      margin: 0
      text-transform: lowercase
    &-image
      width: 100%
      min-height: 530px
      object-fit: cover
      &.isSticky
        margin-top: -76px

  @media (max-width: 1024px)
    .theBanner
      &-textBox
        width: 80%
        top: 150px
      &-title
        font-size: 2.5em
        margin-bottom: 16px

  @media (max-width: 600px)
    .theBanner
      display: none
</style>
