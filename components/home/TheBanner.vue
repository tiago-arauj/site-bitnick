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
        h1.theBanner-title Seu contrato inteligente para gestão de risco!
        h2.theBanner-text-bold BITNICK.CO é uma organização voltada a mediação de risco e arbitragem profissional com o objetivo de minimizar perdas.
        p.theBanner-text  investimentos é necessário um processo continuo de investigação e mediação, possibilitando assim transparência e segurança a relação de negócios, garantindo equidade entre as expectativas das partes. Pensando nisto a Bitnick.co desenvolveu um software que é uma ferramenta eficaz para tal aplicação. Constitui-se de um aplicativo que facilita as transações financeiras, utiliza recursos tecnológicos para mediação de conflitos e analise de investimentos. Esse campo analítico possibilita em si próprio uma infinidade de possibilidades. Com o amadurecimento das relações entre as nações e os estabelecimentos das rotas comerciais promoveu-se uma relação de intercâmbio cultural comercial e financeiro no mundo. Essas rotas comerciais proporcionaram desenvolvimento do comercio levando a necessidade da criação do sistema financeiro ao qual rege as regras das relações comerciais.Ao decorrer dos séculos essas atividades que inicialmente suportavam umas as outras tomaram caminhos distintos criando assim suas próprias regras e maneiras de funcionamento. Essas regras são diferentes dependendo das nações a quais elas pertencem criando assim um contraste nos contextos comerciais e financeiros de cada região. Essas diferenças determinam em grandes partes o sucesso e o fracasso econômicos dos países, influenciando também seus cidadãos. A bitnick.co é uma empresa especializada em operações financeiras, mediação de risco e sistemas de pagamento que objetivam reduzir perdas nessas relações. Criamos assim um aplicativo que valoriza seu dinheiro investindo de maneira correta intermediando as relações para que as expectativas sejam claras e objetivas garantindo uma operação financeira rápida e segura.

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
