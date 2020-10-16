<script>

  const OBSERVER = null;
  export default {
    components: {
    },
    data: () => ({

    }),
    mounted: function () {
      this.createObserver(document.querySelector('#bannerImage'));
      document.getElementById("changeMenu").checked = false
    },
    beforeDestroy() {
      this.OBSERVER.disconnect();
    },
    methods: {
      callback: function (entries) {
        entries.forEach(function (entry) {
          document.querySelector('#theHeader').classList.toggle('isSticky', !entry.intersectionRatio > 0)
          document.querySelector('#bannerImage').classList.toggle('isSticky', !entry.intersectionRatio > 0)
        })
      },
      createObserver: function (target) {
        const options = {
          rootMargin: '0px',
          threshold: 0
        };
        this.OBSERVER = new IntersectionObserver(this.callback, options);
        this.OBSERVER.observe(target)
      }
    }
  }
</script>


<template lang="pug">
  .page
    PageBanner.termsBanner(label="VERIFIQUE NOSSOS TERMOS", title="Termo de Uso e Condições", image="banner-como-funciona.png")
    .page-content
      section.sectionPageTitle
        .sectionPageTitle-header
          BoxTitle.sectionPageTitle-boxTitle(label="Termos de uso e", title="CONDIÇÕES")
        .terms
          p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
            b
              span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                | TERMOS DE USO
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Antes de utilizar quaisquer servi&ccedil;os
                | da plataforma
                span.SpellE Organik
                |  Contratos Inteligentes,
                | dispon&iacute;vel no site e app (
              span(style='color:black;mso-color-alt:windowtext')
                a(href='https://organik.net.br/')
                  b
                    span(style='font-size:12.0pt;mso-fareast-font-family:\
                  "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
                  color:#002060;mso-fareast-language:PT-BR;text-decoration:none;text-underline:\
                  none') https://organik.net.br/
              b
                span(style='font-size:\
              12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:Calibri;\
              mso-bidi-theme-font:minor-latin;color:#002060;mso-fareast-language:PT-BR') )
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | , voc&ecirc; deve ler e concordar com os presentes termos de uso e com nossa
                | Pol&iacute;tica de Privacidade.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Ao se cadastrar e utilizar a
                | plataforma da
                span.SpellE
                  b Organik
                | , voc&ecirc; concordar&aacute; com
                | nossos termos de uso, conforme adiante descritos.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Antes de aceitar os presentes termos
                | de uso, certifique-se de que voc&ecirc; compreendeu e concordou com seu inteiro teor.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | O SITE, APLICATIVO E PLATAFORMA
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Site, Aplicativo e Plataforma da
                span.SpellE
                  b Organik
                |  (
              span(style='color:black;mso-color-alt:\
            windowtext')
                a(href='https://organik.net.br/')
                  span(style='font-size:12.0pt;\
                mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:Calibri;\
                mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:PT-BR;\
                text-decoration:none;text-underline:none') https://organik.net.br/
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | ) s&atilde;o mantidos pela SOLARIS AGRICULTURA IND&Uacute;STRIA E COM&Eacute;RCIO DE
                | ALIMENTOS LTDA com sede na cidade de Bras&iacute;lia - DF, Setor Sudoeste CLSW 302
                | BLOCO B LOJA 78/80 - T&Eacute;RREO, inscrita no CNPJ 30.229.246.0001-09.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | oferece uma plataforma para a realiza&ccedil;&atilde;o de contratos inteligentes, compra de cripto-ativos
                | e futuramente vendas entre os seus pr&oacute;prios Usu&aacute;rios (os &ldquo;Usu&aacute;rios&rdquo;), que
                | poder&aacute; ser acessada via Site ou atrav&eacute;s de aplicativo celular (IOS e Android).
                | Atrav&eacute;s da Plataforma, o Usu&aacute;rio pode comprar criptomoedas de outros Usu&aacute;rios
                | (a &ldquo;Plataforma&rdquo;).
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A Plataforma apenas possibilita a
                | aproxima&ccedil;&atilde;o entre Usu&aacute;rios que desejam comprar e vender suas pr&oacute;prias
                | criptomoedas, oferecendo funcionalidades para facilitar e dar seguran&ccedil;a &agrave;
                | efetiva na compra e venda entre os pr&oacute;prios usu&aacute;rios. Neste sentido, a
                span.SpellE
                  b Organik
                |  atua prestando servi&ccedil;os de intermedia&ccedil;&atilde;o
                | entre os interessados e as transa&ccedil;&otilde;es realizadas entre os Usu&aacute;rios s&atilde;o de
                | inteira responsabilidade destes, correndo por sua conta e risco.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Em hip&oacute;tese alguma a
                span.SpellE
                  b Organik
                b
                | poder&aacute; ser responsabilizada por
                | quaisquer perdas, danos, preju&iacute;zos e/ou lucros cessantes que possam ser
                | incorridos pelos Usu&aacute;rios em decorr&ecirc;ncia da compra e venda de criptomoedas por
                | meio da Plataforma.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio cadastrado na Plataforma
                | poder&aacute; armazenar suas criptomoedas em carteiras virtuais criadas por estes.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                b
                | poder&aacute; implementar limites, tais como, mas n&atilde;o se limitando a, quantidade
                | de transa&ccedil;&otilde;es de criptomoedas a serem comercializados por Usu&aacute;rio, a seu
                | exclusivo crit&eacute;rio.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | CADASTRO
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Para comprar ou vender criptomoedas
                | atrav&eacute;s da Plataforma, o Usu&aacute;rio deve aceitar os presentes Termos de Uso, nossa
                | Pol&iacute;tica de Privacidade e realizar seu cadastro no Site, seguindo,
                | obrigatoriamente, as regras aqui previstas. O cadastro &eacute; realizado atrav&eacute;s do
                | preenchimento do formul&aacute;rio on-line dispon&iacute;vel na op&ccedil;&atilde;o &ldquo;LOGIN&rdquo; na p&aacute;gina
                | inicial do Site.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                b
                | poder&aacute; recusar qualquer documenta&ccedil;&atilde;o enviada fora dos padr&otilde;es citados
                | nestes Termos de Uso. A recusa poder&aacute; dar ensejo a solicita&ccedil;&atilde;o de nova
                | documenta&ccedil;&atilde;o, a exclusivo crit&eacute;rio da
                span.SpellE
                  b Organik
                | ,
                | bem como, na recusa do envio da documenta&ccedil;&atilde;o solicitada, o cancelamento do
                | cadastro.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Ao preencher o formul&aacute;rio de
                | cadastro, o Usu&aacute;rio ingressa no banco de dados da
                span.SpellE
                  b Organik
                | ,
                | autorizando o acesso desta aos dados disponibilizados. Os dados pessoais e de
                | transa&ccedil;&otilde;es do Usu&aacute;rio, tais como documentos solicitados, s&atilde;o protegidos, no que
                | couber, pela Pol&iacute;tica de Privacidade, que dever&aacute; ser aceita em conjunto com
                | este Termo de Uso.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Para cadastrar-se na Plataforma, o
                | Usu&aacute;rio dever&aacute; ter 18 anos completos. N&atilde;o aceitamos cadastros de pessoas com
                | menos de 16 anos, sendo que o cadastro de pessoas maiores de 16 anos completos
                | e menores de 18 anos s&oacute; ser&aacute; aceito mediante assist&ecirc;ncia de respons&aacute;vel legal,
                | desde que este &uacute;ltimo forne&ccedil;a toda documenta&ccedil;&atilde;o solicitada pela
                span.SpellE
                  b Organik
                | , a exclusivo crit&eacute;rio desta &uacute;ltima. Nos
                | casos de emancipa&ccedil;&atilde;o, para efetiva&ccedil;&atilde;o do cadastro, o Usu&aacute;rio dever&aacute; apresentar
                | os documentos competentes para tanto.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O cadastro de pessoas jur&iacute;dicas como
                | Usu&aacute;rio dever&aacute; ser realizado necessariamente por um representante legal
                | devidamente autorizado para tanto. A
                span.SpellE
                  b Organik
                |  poder&aacute;
                | solicitar o envio de documentos que comprovem tais poderes. Na falta do
                | respectivo envio, a
                span.SpellE
                  b Organik
                |  poder&aacute; recusar o
                | cadastro, a seu exclusivo crit&eacute;rio.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio obriga-se a fornecer
                | informa&ccedil;&otilde;es verdadeiras, atuais e completas relativas ao seu Cadastro e dever&aacute;
                | manter tais informa&ccedil;&otilde;es, sempre atualizadas. A
                span.SpellE
                  b Organik
                | poder&aacute; solicitar, a qualquer tempo, e a seu exclusivo crit&eacute;rio, a atualiza&ccedil;&atilde;o
                | cadastral do Usu&aacute;rio, podendo ainda, conforme o caso, condicionar a
                | continuidade da utiliza&ccedil;&atilde;o da Plataforma ao envio da atualiza&ccedil;&atilde;o documental.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | n&atilde;o se responsabiliza pelas informa&ccedil;&otilde;es prestadas por cada Usu&aacute;rio no momento
                | de seu Cadastro, sendo tais informa&ccedil;&otilde;es fornecidas sob exclusiva
                | responsabilidade do Usu&aacute;rio.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O fornecimento de informa&ccedil;&atilde;o falsa ou
                | a utiliza&ccedil;&atilde;o indevida de dados de terceiros em nome pr&oacute;prio constitui crime
                | tipificado pelo C&oacute;digo Penal Brasileiro. Em qualquer desses casos, a
                span.SpellE
                  b Organik
                |  poder&aacute; suspender ou cancelar, de imediato e
                | definitivamente, o acesso do Usu&aacute;rio aos servi&ccedil;os e funcionalidades da
                | Plataforma, sem preju&iacute;zo da tomada das demais medidas presentes na legisla&ccedil;&atilde;o
                | vigente.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | poder&aacute;, a seu exclusivo crit&eacute;rio, requisitar documentos e informa&ccedil;&otilde;es
                | adicionais para confirmar ou manter o cadastro de qualquer Usu&aacute;rio. Caso a
                span.SpellE
                  b Organik
                |  decida exercer essa faculdade em rela&ccedil;&atilde;o a
                | qualquer Usu&aacute;rio, o cadastro desse Usu&aacute;rio poder&aacute; ser suspenso ou
                | definitivamente cancelado caso o mesmo se recuse a prestar as informa&ccedil;&otilde;es ou a
                | enviar os documentos requeridos, ou, caso, ainda, se constate, a partir da
                | an&aacute;lise de tais informa&ccedil;&otilde;es e documentos, que o Usu&aacute;rio inseriu informa&ccedil;&atilde;o
                | falsa ou incompleta no momento de seu Cadastro.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | poder&aacute;, a seu exclusivo crit&eacute;rio, requisitar documentos e informa&ccedil;&otilde;es
                | adicionais para dar continuidade ao processamento de avisos de dep&oacute;sito criados
                | por qualquer Usu&aacute;rio.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Cada Usu&aacute;rio poder&aacute; manter apenas um
                | &uacute;nico cadastro na Plataforma. Caso seja constatada a exist&ecirc;ncia de mais de um
                | cadastro relativo a uma mesma pessoa, um ou todos esses cadastros poder&atilde;o ser
                | suspensos ou cancelados, a exclusivo crit&eacute;rio da
                span.SpellE
                  b Organik
                b .
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Apenas ap&oacute;s a valida&ccedil;&atilde;o do cadastro
                | do Usu&aacute;rio, a exclusivo crit&eacute;rio da
                span.SpellE
                  b Organik
                b ,
                | &eacute; que este poder&aacute; realizar transa&ccedil;&otilde;es na Plataforma.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                b ,
                | se reserva o direito de recusar qualquer solicita&ccedil;&atilde;o de cadastro e de suspender
                | ou cancelar um cadastro previamente aceito nos seguintes casos: (i) de viola&ccedil;&atilde;o
                | de qualquer das disposi&ccedil;&otilde;es deste Termo de Uso, (
                span.SpellE ii
                | )
                | impossibilidade de verifica&ccedil;&atilde;o da identidade do Usu&aacute;rio ou constata&ccedil;&atilde;o de
                | falsidade em qualquer das informa&ccedil;&otilde;es por ele fornecidas, (
                span.SpellE iii
                | )
                | pr&aacute;tica pelo Usu&aacute;rio de atos fraudulentos ou dolosos ou a ado&ccedil;&atilde;o de qualquer
                | comportamento que, a exclusivo crit&eacute;rio da
                span.SpellE
                  b Organik
                | ,
                | seja incompat&iacute;vel com os objetivos da Plataforma, bem como com a urbanidade com
                | outros Usu&aacute;rios ou que possam, de qualquer modo, causar danos a terceiros ou &agrave;
                | Plataforma ou imagem da
                span.SpellE
                  b Organik
                | .
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio poder&aacute;, a qualquer momento,
                | solicitar o cancelamento de seu cadastro na Plataforma, ficando ressalvada a
                | guarda pela
                span.SpellE
                  b Organik
                |  das informa&ccedil;&otilde;es e/ou dados
                | cuja manuten&ccedil;&atilde;o seja a ela imposta em raz&atilde;o de obriga&ccedil;&otilde;es legais e/ou
                | regulat&oacute;rias ou, ainda, cuja a manuten&ccedil;&atilde;o seja necess&aacute;ria para cumprimento de
                | ordem judicial, no &acirc;mbito de processos judiciais e/ou administrativos e
                | questionamentos de terceiros, decorrentes das atividades desempenhadas pelo
                | Usu&aacute;rio na Plataforma.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | LOG-IN E SENHA
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Ao efetuar seu cadastro, o Usu&aacute;rio
                | dever&aacute; informar o seu e-mail ativo e criar uma senha para realizar o acesso &agrave;
                | sua conta na Plataforma. Nos casos de pessoa f&iacute;sica, dever&aacute; ser informado
                | tamb&eacute;m nome, sobrenome e enviar o documento de identifica&ccedil;&atilde;o. J&aacute; nos casos de
                | pessoa jur&iacute;dica, dever&aacute; ser enviado documento de constitui&ccedil;&atilde;o da empresa ou, se
                | aplic&aacute;vel, a &uacute;ltima altera&ccedil;&atilde;o do contrato/estatuto social da empresa, bem como
                | documento com foto que contenha o CPF ou REGISTRO DE IDENTIDADE do
                | representante legal da empresa.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O log-in e senha s&atilde;o pessoais e
                | intransfer&iacute;veis e n&atilde;o dever&atilde;o ser informados pelo Usu&aacute;rio a quaisquer
                | terceiros. Caso o Usu&aacute;rio tenha conhecimento de que qualquer terceiro teve
                | acesso a seu log-in e senha, ou da ocorr&ecirc;ncia de qualquer uso ou acesso n&atilde;o
                | autorizado de sua conta na Plataforma por terceiros, o Usu&aacute;rio dever&aacute; solicitar
                | imediatamente a altera&ccedil;&atilde;o de senha e comunicar o fato, de maneira imediata
                | atrav&eacute;s do e-mail
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#002060;mso-fareast-language:PT-BR') contato@organik.net.br
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | , &agrave;
                span.SpellE
                  b Organik
                | .
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio ser&aacute; o &uacute;nico respons&aacute;vel
                | pelas opera&ccedil;&otilde;es de compra e venda de criptomoedas efetuadas em sua conta na
                | Plataforma.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | COMPRA E VENDA DE CRIPTOMOEDAS
                  | ATRAV&Eacute;S DA PLATAFORMA
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Para iniciar a compra e venda de
                | criptomoedas atrav&eacute;s da Plataforma, o Usu&aacute;rio deve, previamente, ter seu
                | cadastro ativado com sucesso e ter aceitado todas as disposi&ccedil;&otilde;es dos presentes
                | Termos de Uso e na Pol&iacute;tica de Privacidade.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio que desejar comprar
                | criptomoedas de outros Usu&aacute;rios dever&aacute; publicar na Plataforma uma Ordem de
                | Compra (a &ldquo;Ordem de Compra&rdquo;), atrav&eacute;s do preenchimento do formul&aacute;rio dispon&iacute;vel
                | na Plataforma. Antes de publicar sua Ordem de Compra, o Usu&aacute;rio deve ter saldo
                | em Reais da respectiva Ordem de Compra, atrav&eacute;s das op&ccedil;&otilde;es de dep&oacute;sito
                | disponibilizadas na Plataforma.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio declara-se ciente de que
                | cada Ordem de Compra por ele publicada na Plataforma representa uma oferta
                | firme de compra das criptomoedas referidas na Ordem de Compra, pelo pre&ccedil;o nela
                | indicado pelo pr&oacute;prio Usu&aacute;rio. Assim, o Usu&aacute;rio declara-se ciente de que, ap&oacute;s
                | a aceita&ccedil;&atilde;o de sua Ordem de Compra por outro Usu&aacute;rio, a compra das criptomoedas
                | constantes da Ordem de Compra ser&aacute; executada pela Plataforma e n&atilde;o poder&aacute; ser
                | desfeita ou modificada. Uma vez aceita a Ordem de Compra por qualquer Usu&aacute;rio,
                | o valor, em Reais, da referida compra ser&aacute; automaticamente transferido pela
                | Plataforma e creditada para a conta do Usu&aacute;rio aceitante. O Usu&aacute;rio poder&aacute;
                | cancelar qualquer Ordem de Compra apenas antes de sua execu&ccedil;&atilde;o por completo.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio que desejar vender suas
                | criptomoedas a outros Usu&aacute;rios dever&aacute; publicar na Plataforma uma Ordem de Venda
                | (a &ldquo;Ordem de Venda&rdquo;), atrav&eacute;s do preenchimento do formul&aacute;rio dispon&iacute;vel na
                | Plataforma. Antes de publicar sua Ordem de Venda, o Usu&aacute;rio deve ter saldo da
                | respectiva criptomoeda que pretende negociar.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio declara-se ciente de que
                | cada Ordem de Venda por ele publicada na Plataforma representa uma oferta firme
                | de venda de criptomoedas referidas na respectiva Ordem de Venda, pelo pre&ccedil;o
                | nela indicado pelo pr&oacute;prio Usu&aacute;rio. Assim, o Usu&aacute;rio declara-se ciente de que,
                | ap&oacute;s a aceita&ccedil;&atilde;o de sua Ordem de Venda por outro Usu&aacute;rio, a venda das
                | criptomoedas constantes da Ordem de Venda ser&aacute; executada pela Plataforma e n&atilde;o
                | poder&aacute; ser desfeita ou modificada. Uma vez aceita a Ordem de Venda por qualquer
                | Usu&aacute;rio, as criptomoedas referentes &agrave; Ordem de Venda ser&atilde;o automaticamente
                | transferidas para a conta do Usu&aacute;rio aceitante. O Usu&aacute;rio somente poder&aacute;
                | cancelar qualquer Ordem de Venda antes da sua execu&ccedil;&atilde;o por completo na
                | Plataforma.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio deve estar ciente de que
                | qualquer Ordem de Venda ou Ordem de Compra por ele publicada poder&aacute; ser
                | parcialmente aceita por outro Usu&aacute;rio. Assim, por exemplo, se o Usu&aacute;rio publica
                | uma Ordem de Compra de 10 criptomoedas, outro Usu&aacute;rio poder&aacute; aceitar
                | parcialmente essa Ordem e concordar com a venda de 6 criptomoedas pelo pre&ccedil;o
                | nela especificado. Nesse caso, o restante da Ordem de Compra poder&aacute; ser cancelado
                | pelo Usu&aacute;rio que a publicou, ou ele poder&aacute; mant&ecirc;-la vigente, aguardando que
                | outros Usu&aacute;rios tamb&eacute;m aceitem vender as criptomoedas restantes pelo pre&ccedil;o da
                | Ordem de Compra, at&eacute; o limite da quantidade remanescente dessa Ordem.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Caso o Usu&aacute;rio deseje cancelar uma
                | Ordem de Venda por ele publicada e ainda n&atilde;o aceita por outro Usu&aacute;rio, o
                | Usu&aacute;rio emitente da respectiva Ordem poder&aacute; realizar o cancelamento
                span.GramE da mesma
                | , atrav&eacute;s da pr&oacute;pria Plataforma, sendo restaurado o
                | saldo origin&aacute;rio na sua conta nesta &uacute;ltima.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Caso o Usu&aacute;rio deseje cancelar uma
                | Ordem de Compra por ele publicada e ainda n&atilde;o aceita por outro Usu&aacute;rio, o
                | Usu&aacute;rio emitente da respectiva Ordem poder&aacute; realizar o cancelamento
                span.GramE da mesma
                | , atrav&eacute;s da pr&oacute;pria Plataforma, sendo restaurado o
                | saldo origin&aacute;rio na sua conta nesta &uacute;ltima.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | n&atilde;o &eacute; parte nem dever&aacute; ser considerada parte em qualquer das transa&ccedil;&otilde;es de
                | compra e venda realizadas pelos Usu&aacute;rios atrav&eacute;s da Plataforma e n&atilde;o ser&aacute;
                | respons&aacute;vel pelo efetivo cumprimento das obriga&ccedil;&otilde;es assumidas pelos Usu&aacute;rios
                | nessas transa&ccedil;&otilde;es.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio reconhece e aceita que, ao
                | realizar negocia&ccedil;&otilde;es com outros Usu&aacute;rios, o faz por sua conta e risco,
                | reconhecendo a
                span.SpellE
                  b Organik
                |  apenas como fornecedora
                | de servi&ccedil;os de disponibiliza&ccedil;&atilde;o de Plataforma para negocia&ccedil;&atilde;o entre os Usu&aacute;rios.
                | Em nenhum caso, a
                span.SpellE
                  b Organik
                |  ser&aacute; respons&aacute;vel por
                | quaisquer perdas, danos, preju&iacute;zos ou lucros cessantes que o Usu&aacute;rio possa
                | sofrer devido &agrave;s negocia&ccedil;&otilde;es realizadas ou n&atilde;o realizadas atrav&eacute;s da
                | Plataforma.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio deve certificar-se de que cadastrou
                | corretamente: (i) seus dados banc&aacute;rios para o saque de valores em Reais e, (
                span.SpellE ii
                | ) o endere&ccedil;o de seu local de armazenamento de
                | criptomoedas (carteira) para a futura retirada de criptomoedas da Plataforma,
                | caso queira realizar algum destes tipos de transa&ccedil;&atilde;o. A
                span.SpellE
                  b Organik
                | n&atilde;o se responsabiliza por eventuais erros cometidos pelo Usu&aacute;rio no cadastro de
                | seus dados banc&aacute;rios ou endere&ccedil;o de carteira.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | INFORMA&Ccedil;&Otilde;ES E AVISOS CONCERNENTES &Agrave;S
                  | CRIPTOMOEDAS
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | disponibiliza seus servi&ccedil;os de dep&oacute;sito, retirada, negocia&ccedil;&atilde;o e armazenamento
                | apenas para as criptomoedas suportadas em nossa plataforma, que podem se
                | alterar esporadicamente. Em nenhuma circunst&acirc;ncia, o Usu&aacute;rio dever&aacute; tentar
                | armazenar, enviar ou receber criptomoedas n&atilde;o suportadas pela Plataforma. A tentativa
                | de envio, recebimento ou armazenamento indevido de criptomoedas n&atilde;o suportadas
                | poder&aacute; resultar em perda integral, definitiva e irrevers&iacute;vel das criptomoedas,
                | n&atilde;o podendo a
                span.SpellE
                  b Organik
                |  ser responsabilizada em
                | conex&atilde;o com esses atos do Usu&aacute;rio.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | armazena de forma segura as chaves privadas referentes &agrave;s criptomoedas
                | depositadas nos endere&ccedil;os disponibilizados, atrav&eacute;s de uma combina&ccedil;&atilde;o de
                | armazenamentos online e offline. Em raz&atilde;o dessa configura&ccedil;&atilde;o escolhida em prol
                | da seguran&ccedil;a dos Usu&aacute;rios, poder&aacute; haver atrasos em rela&ccedil;&atilde;o ao processamento do
                | recebimento, cr&eacute;dito em conta e/ou envio de criptomoedas da Plataforma.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio reconhece e aceita que,
                | caso n&atilde;o haja aviso expresso da
                span.SpellE
                  b Organik
                |  em
                | sentido distinto, a Plataforma n&atilde;o suporta meta
                span.SpellE coins
                | ,
                | moedas coloridas (
                span.SpellE colored
                span.SpellE coins
                | ),
                | redes paralelas (
                span.SpellE side
                span.SpellE chains
                | ),
                | derivativo, criptomoedas divididas em processos conhecidos como hard
                span.SpellE forks
                | , tokens, criptomoedas ou quaisquer outras formas de
                | representa&ccedil;&otilde;es digitais de valor, incluindo, mas n&atilde;o se limitando, &agrave;s que
                | interagem e/ou suplementam criptomoedas suportadas pela
                span.SpellE
                  b Organik
                | .
                | O usu&aacute;rio n&atilde;o deve tentar utilizar sua conta na Plataforma para receber,
                | enviar, armazenar ou interagir com as criptomoedas n&atilde;o suportadas pela
                span.SpellE
                  b Organik
                | . A Plataforma n&atilde;o &eacute; configurada para
                | detectar ou assegurar transa&ccedil;&otilde;es envolvendo criptomoedas n&atilde;o suportadas e a
                span.SpellE
                  b Organik
                |  n&atilde;o possui responsabilidade sobre tentativas
                | de transa&ccedil;&otilde;es e/ou opera&ccedil;&otilde;es envolvendo criptomoedas n&atilde;o suportadas. A lista de
                | criptomoedas suportadas pela Plataforma pode ser solicitada pelo e-mail
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
              Calibri;mso-bidi-theme-font:minor-latin;color:#002060;mso-fareast-language:\
              PT-BR') contato@organik.net.br
              span(style='font-size:12.0pt;\
            mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:Calibri;\
            mso-bidi-theme-font:minor-latin;color:#002060;mso-fareast-language:PT-BR') &nbsp;
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | e est&aacute; sujeita a altera&ccedil;&otilde;es.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | n&atilde;o &eacute; propriet&aacute;ria nem controla os protocolos e redes que governam as
                | criptomoedas suportadas na Plataforma. Frequentemente, essas criptomoedas
                | possuem c&oacute;digo aberto e quaisquer indiv&iacute;duos podem utilizar, copiar, modificar
                | e distribuir o c&oacute;digo balizador da criptomoeda em quest&atilde;o. A
                span.SpellE
                  b Organik
                |  n&atilde;o assume responsabilidade pela opera&ccedil;&atilde;o,
                | manuten&ccedil;&atilde;o e desenvolvimento desses protocolos, redes, criptomoedas e n&atilde;o &eacute;
                | capaz de garantir sua funcionalidade, seguran&ccedil;a ou disponibilidade. O Usu&aacute;rio
                | reconhece e aceita esses riscos associados a utiliza&ccedil;&atilde;o e envolvimento com
                | criptomoedas, inclusive sua possibilidade de altera&ccedil;&atilde;o em rela&ccedil;&atilde;o ao seu
                | funcionamento atual.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Em particular, os protocolos est&atilde;o
                | sujeitos a mudan&ccedil;as abruptas em suas regras de funcionamento (&ldquo;
                span.SpellE forks
                | &rdquo;). Tais
                span.SpellE forks
                |  podem afetar
                | consideravelmente o valor, fun&ccedil;&atilde;o e/ou nomes das criptomoedas suportadas pela
                span.SpellE
                  b Organik
                | . Caso seja poss&iacute;vel, a
                span.SpellE
                  b Organik
                | ir&aacute; prover declara&ccedil;&otilde;es e posicionamentos sobre esses eventos, de forma a melhor
                | informar a decis&atilde;o do Usu&aacute;rio. Entretanto, &eacute; de inteira responsabilidade do
                | Usu&aacute;rio a decis&atilde;o de como lidar em rela&ccedil;&atilde;o a
                span.SpellE forks
                | futuros. No caso de um
                span.SpellE fork
                | , pode haver a suspens&atilde;o
                | de opera&ccedil;&otilde;es na Plataforma, inclusive sem aviso pr&eacute;vio e/ou previs&atilde;o de tempo
                | esperado para normaliza&ccedil;&atilde;o das opera&ccedil;&otilde;es. A
                span.SpellE
                  b Organik
                | ,
                | a seu exclusivo crit&eacute;rio, poder&aacute; decidir suportar ou n&atilde;o suportar uma ou todas
                | as poss&iacute;veis divis&otilde;es resultantes de um
                span.SpellE fork
                | . Como
                | consequ&ecirc;ncia do n&atilde;o suporte &agrave; determinada criptomoeda resultante de um
                span.SpellE fork
                | , o Usu&aacute;rio n&atilde;o possuir&aacute; direito e n&atilde;o ter&aacute; acesso ao
                | saldo referente ao protocolo n&atilde;o suportado.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio reconhece os riscos
                | relacionados aos
                span.SpellE forks
                |  e aceita que a
                span.SpellE
                  b Organik
                |  n&atilde;o possui responsabilidade e/ou dever de
                | auxiliar o Usu&aacute;rio a mover e/ou vender a criptomoeda n&atilde;o suportada resultante
                | do processo de
                span.SpellE fork
                | .
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | COMISS&Otilde;ES
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O cadastro na Plataforma &eacute; gratuito.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio pagar&aacute; as comiss&otilde;es
                | cobradas pela Plataforma apenas para realizar as seguintes opera&ccedil;&otilde;es (a
                | &ldquo;Comiss&atilde;o&rdquo;):
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | (a) Dep&oacute;sito de valores em Reais para
                  | compra de Criptomoedas:
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Quando o Usu&aacute;rio efetua um
                | dep&oacute;sito em Reais para compra de Criptomoedas atrav&eacute;s da Plataforma, &eacute; cobrada,
                | em determinados casos, uma Comiss&atilde;o sobre o valor depositado. Assim, o saldo
                | que ficar&aacute; dispon&iacute;vel para esse Usu&aacute;rio para compra de Criptomoedas ser&aacute; o
                | valor de seu dep&oacute;sito, j&aacute; descontado o valor da Comiss&atilde;o.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR') (b) Saque de valores em Reais:
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | Tanto o Usu&aacute;rio que vende suas criptomoedas atrav&eacute;s da Plataforma,
                | quanto o Usu&aacute;rio que, ao ter depositado valores em Reais, n&atilde;o os utiliza
                | integralmente para a compra de criptomoedas, pagar&atilde;o Comiss&atilde;o &agrave; Plataforma para
                | saque dos valores em Reais. Assim, no momento do saque, ser&aacute; transferido ao
                | Usu&aacute;rio o saldo em Reais, j&aacute; descontado o valor da Comiss&atilde;o.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR') (c) Execu&ccedil;&atilde;o de Ordem de Venda:
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | A publica&ccedil;&atilde;o de uma Ordem de Venda de criptomoedas na Plataforma &eacute;
                | gratuita. No entanto, caso essa Ordem de Venda seja aceita, total ou
                | parcialmente, por outro Usu&aacute;rio, ser&aacute; cobrada uma Comiss&atilde;o do Usu&aacute;rio que
                | publicou a Ordem. Assim, o saldo em Reais dispon&iacute;vel para retirada por esse
                | Usu&aacute;rio ser&aacute; o valor de venda de suas criptomoedas, j&aacute; descontado o valor da
                | Comiss&atilde;o prevista neste item.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR') (d) Execu&ccedil;&atilde;o de Ordem de Compra:
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | A publica&ccedil;&atilde;o de uma Ordem de Compra de criptomoedas na Plataforma
                | &eacute; gratuita. No entanto, caso essa Ordem de Compra seja aceita, total ou
                | parcialmente, por outro Usu&aacute;rio, ser&aacute; cobrada uma Comiss&atilde;o do Usu&aacute;rio que
                | publicou a Ordem. Assim, o saldo em criptomoedas dispon&iacute;vel para retirada pelo
                | Usu&aacute;rio que publica uma Ordem de Compra ser&aacute; o valor por ele adquirido, j&aacute;
                | descontado o valor da Comiss&atilde;o prevista neste item e taxas de minera&ccedil;&atilde;o da
                | pr&oacute;pria criptomoeda em quest&atilde;o.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | (e) Dep&oacute;sito e Retirada de
                  | Criptomoedas:
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O recebimento e envio de
                | criptomoedas est&aacute; sujeito a taxas cobradas pela pr&oacute;pria rede de mineradores e/ou
                | validadores, podendo variar de acordo com condi&ccedil;&otilde;es da rede. A taxa de retirada
                | de criptomoedas ser&aacute; demonstrada no momento da opera&ccedil;&atilde;o de retirada e ser&aacute;
                | deduzida automaticamente da quantia total de criptomoedas a serem enviadas.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Mais detalhes sobre as taxas,
                | comiss&otilde;es e limites, acesse:
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#002060;mso-fareast-language:PT-BR') (
              span(style='color:black;\
            mso-color-alt:windowtext')
                a(href='https://organik.net.br/como-funciona')
                  b
                    span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
                  Calibri;mso-bidi-theme-font:minor-latin;color:#002060;mso-fareast-language:\
                  PT-BR;text-decoration:none;text-underline:none') https://organik.net.br/como-funciona
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
              Calibri;mso-bidi-theme-font:minor-latin;color:#002060;mso-fareast-language:\
              PT-BR')
                  | ).
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Ao aceitar os presentes Termos de
                | Uso, o Usu&aacute;rio concorda em pagar &agrave;
                span.SpellE
                  b Organik
                |  os
                | valores correspondentes &agrave;s Comiss&otilde;es pelos servi&ccedil;os prestados, conforme
                | indicadas neste Termo de Uso. A
                span.SpellE
                  b Organik
                b
                | se
                | reserva o direito de modificar, aumentar ou eliminar comiss&otilde;es vigentes a
                | qualquer momento, seja em car&aacute;ter permanente ou em car&aacute;ter transit&oacute;rio.
                | Quaisquer altera&ccedil;&otilde;es em nossas comiss&otilde;es ser&atilde;o divulgadas atrav&eacute;s do Site,
                span.GramE Aplicativo
                | , e-mail, blog e/ou redes sociais oficiais.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | DIREITOS DE PROPRIEDADE INTELECTUAL
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Os Usu&aacute;rios reconhecem e concordam
                | que a
                span.SpellE
                  b Organik
                |  &eacute; a &uacute;nica e exclusiva titular de
                | todos os direitos autorais e de propriedade intelectual relacionados ao Site,
                | Aplicativo e Plataforma, incluindo seu nome de dom&iacute;nio, sua programa&ccedil;&atilde;o,
                | arquivos, bancos de dados, conte&uacute;do, design, funcionalidades e demais
                | caracter&iacute;sticas, e que tais direitos s&atilde;o protegidos por lei. O nome comercial
                span.SpellE
                  b Organik
                b ,
                |  a marca
                span.SpellE
                  span.GramE
                    b Organik
                span.GramE
                  b ,
                  | ,
                |  e os
                | produtos e servi&ccedil;os associados a essa marca s&atilde;o de exclusiva titularidade da
                span.SpellE
                  b Organik
                |  e seu uso n&atilde;o autorizado &eacute; sujeito &agrave;s
                | consequ&ecirc;ncias previstas em lei.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O presente Termo de Uso n&atilde;o implica a
                | cess&atilde;o ou transfer&ecirc;ncia ao Usu&aacute;rio de quaisquer direitos relativos ao Site,
                | Aplicativo e Plataforma ou a qualquer parte de seu conte&uacute;do ou caracter&iacute;sticas.
                | Os Usu&aacute;rios poder&atilde;o utilizar o Site, Aplicativo e Plataforma apenas nos
                | estritos termos permitidos no presente Termo de Uso.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | &Eacute; vedado aos Usu&aacute;rios modificar ou
                | tentar modificar qualquer funcionalidade do Site, Aplicativo e Plataforma,
                | produzir quaisquer deriva&ccedil;&otilde;es do Site, Aplicativo e Plataforma ou, ainda,
                | acessar qualquer parte do Site, Aplicativo e Plataforma visando &agrave; cria&ccedil;&atilde;o de um
                | produto ou servi&ccedil;o concorrente, ou de qualquer produto ou servi&ccedil;o que contenha
                | ideias, caracter&iacute;sticas ou fun&ccedil;&otilde;es similares &agrave;s do Site, Aplicativo e
                | Plataforma. N&atilde;o &eacute; permitida tamb&eacute;m a utiliza&ccedil;&atilde;o de nenhum dispositivo, software
                | ou outro recurso que possa interferir nas atividades e opera&ccedil;&otilde;es do Site,
                | Aplicativo e Plataforma ou que tenha por objetivo o acesso indevido &agrave;s
                | informa&ccedil;&otilde;es ou bancos de dados do Site, Aplicativo e Plataforma. Qualquer
                | atividade que viole ou contrarie as leis de propriedade intelectual, as demais
                | normas aplic&aacute;veis ou as proibi&ccedil;&otilde;es estipuladas neste Termo de Uso sujeitar&atilde;o o
                | respons&aacute;vel &agrave;s consequ&ecirc;ncias legais pertinentes, incluindo indeniza&ccedil;&otilde;es por
                | eventuais danos causados.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Site, Aplicativo e Plataforma
                | poder&atilde;o exibir links para outros sites da Internet, o que n&atilde;o significa que
                | esses sites sejam de propriedade da, ou operados pela,
                span.SpellE
                  b Organik
                | .
                | A
                span.SpellE
                  b Organik
                |  n&atilde;o possui controle sobre o conte&uacute;do
                | de outros sites cujo acesso seja facilitado por links inseridos em nosso Site,
                span.GramE Aplicativo
                |  ou Plataforma e, dessa forma, n&atilde;o ser&aacute;
                | respons&aacute;vel pelos conte&uacute;dos, pr&aacute;ticas e servi&ccedil;os ofertados nesses outros sites.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | n&atilde;o possui parceria com empresas que oferecem servi&ccedil;os de clonagem de
                span.SpellE Whatsapp
                | , venda de produtos ou servi&ccedil;os em plataformas
                span.SpellE peer-to-peer
                | , minera&ccedil;&atilde;o, doa&ccedil;&atilde;o para marketing multin&iacute;vel.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Todas as parcerias da
                span.SpellE
                  b Organik
                |  est&atilde;o devidamente comunicadas em nosso Site,
                | Aplicativo, Plataforma, e-mail, blog e/ou redes sociais oficiais. Os Usu&aacute;rios
                | da
                span.SpellE
                  b Organik
                |  devem verificar a idoneidade das
                | empresas antes de realizar qualquer opera&ccedil;&atilde;o e acionar a
                span.SpellE
                  b Organik
                | caso verifiquem a associa&ccedil;&atilde;o de alguma empresa suspeita &agrave;
                span.SpellE
                  b Organik
                | ou se sintam inseguros sobre os servi&ccedil;os oferecidos por tais empresas.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | PRIVACIDADE
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Todos os dados pessoais informados
                | pelo Usu&aacute;rio no momento de seu cadastro s&atilde;o armazenados em servidores ou meios
                | magn&eacute;ticos de alta seguran&ccedil;a.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | adota todas as medidas poss&iacute;veis para manter a confidencialidade e a seguran&ccedil;a
                | das informa&ccedil;&otilde;es prestadas por seus Usu&aacute;rios. No entanto, os Usu&aacute;rios
                | declaram-se cientes da possibilidade de viola&ccedil;&atilde;o da seguran&ccedil;a dos servidores da
                | Plataforma por ataques de hackers ou outras circunst&acirc;ncias a que sistemas
                | conectados &agrave; Internet estejam sujeitos, casos em que, apesar dos melhores
                | esfor&ccedil;os da
                span.SpellE
                  b Organik
                | , as informa&ccedil;&otilde;es e dados
                | dos Usu&aacute;rios poder&atilde;o eventualmente ser ilegalmente acessadas por terceiros.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | poder&aacute; tamb&eacute;m revelar dados e informa&ccedil;&otilde;es de qualquer Usu&aacute;rio, caso isso seja
                | requerido por lei ou por ordem de uma autoridade competente.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O uso dos servi&ccedil;os prestados pela
                span.SpellE
                  b Organik
                |  requer o envio, para os Usu&aacute;rios, de
                | mensagens eletr&ocirc;nicas (como, por exemplo, e-mails) de cunho de seguran&ccedil;a e
                | administrativo. Por fazerem parte da natureza dos servi&ccedil;os prestados, estas
                | notifica&ccedil;&otilde;es s&atilde;o parte integrante do funcionamento da Plataforma e n&atilde;o podem
                | ter seu envio para o Usu&aacute;rio cancelado. Como parte dos servi&ccedil;os prestados pela
                span.SpellE
                  b Organik
                | , os Usu&aacute;rios tamb&eacute;m poder&atilde;o receber e-mails
                | informativos, bem como e-mails Marketing, sendo que estes e-mails contam com um
                | link de
                span.SpellE descadastramento
                | .
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | RESTRI&Ccedil;&Otilde;ES E PROBLEMAS DE ACESSO
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Os servi&ccedil;os da Plataforma est&atilde;o
                | dispon&iacute;veis para acesso exclusivamente atrav&eacute;s da Internet. Para acessar nossos
                | servi&ccedil;os, os Usu&aacute;rios dever&atilde;o estar providos dos equipamentos necess&aacute;rios e
                | apropriados, tais como computador/smartphones/tablets, com programa de
                | navega&ccedil;&atilde;o (browser ou interface de negocia&ccedil;&otilde;es) devidamente instalado e
                | licenciado, modem, bem como dos servi&ccedil;os de provimento e infraestrutura de
                | acesso &agrave; Internet.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Os servi&ccedil;os da Plataforma est&atilde;o
                | sujeitos a interrup&ccedil;&otilde;es, atrasos e problemas inerentes ao uso da Internet. A
                span.SpellE
                  b Organik
                |  n&atilde;o ser&aacute; respons&aacute;vel por qualquer dessas
                | interrup&ccedil;&otilde;es, atrasos ou problemas, nem por eventuais defeitos ou limita&ccedil;&otilde;es
                | dos equipamentos ou do programa de navega&ccedil;&atilde;o utilizados pelos Usu&aacute;rios ou,
                | ainda, por eventuais defeitos ou limita&ccedil;&otilde;es dos servi&ccedil;os de provimento de
                | acesso ou infraestrutura de acesso &agrave; Internet contratados pelos Usu&aacute;rios.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | tamb&eacute;m n&atilde;o ser&aacute; respons&aacute;vel por qualquer v&iacute;rus que possa atacar o equipamento
                | do Usu&aacute;rio em decorr&ecirc;ncia do acesso, utiliza&ccedil;&atilde;o ou navega&ccedil;&atilde;o na Internet ou
                | como consequ&ecirc;ncia da transfer&ecirc;ncia de dados, arquivos, imagens, textos ou
                | &aacute;udio.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Para acesso e informa&ccedil;&otilde;es do nosso
                | aplicativo m&oacute;vel (App), acesse:
              b
                span(style='font-size:12.0pt;\
              mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:Calibri;\
              mso-bidi-theme-font:minor-latin;color:#002060;mso-fareast-language:PT-BR') (
              span(style='color:black;mso-color-alt:windowtext')
                a(href='https://organik.net.br/')
                  b
                    span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
                  Calibri;mso-bidi-theme-font:minor-latin;color:#002060;mso-fareast-language:\
                  PT-BR;text-decoration:none;text-underline:none') https://organik.net.br/
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
              Calibri;mso-bidi-theme-font:minor-latin;color:#002060;mso-fareast-language:\
              PT-BR')
                  | ).
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#002060;mso-fareast-language:PT-BR')
                  o:p &nbsp;
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | LIMITA&Ccedil;&Atilde;O DE RESPONSABILIDADE
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Al&eacute;m das limita&ccedil;&otilde;es j&aacute; inclu&iacute;das
                | neste Termo de Uso e na legisla&ccedil;&atilde;o aplic&aacute;vel, a
                span.SpellE
                  b Organik
                | n&atilde;o ser&aacute; respons&aacute;vel por quaisquer perdas e danos, lucros cessantes ou
                | emergentes, cujas causas possam ser atribu&iacute;das, de forma direta ou indireta a
                | (i) qualquer transa&ccedil;&atilde;o processada pelos Usu&aacute;rios, bem como pelos resultados
                | financeiros decorrentes destas transa&ccedil;&otilde;es (
                span.SpellE ii
                | )
                | qualquer falha ou indisponibilidade t&eacute;cnica ocorrida no Site, Aplicativo e
                | Plataforma, incluindo, mas n&atilde;o se limitando a, falha que impossibilite a
                | realiza&ccedil;&atilde;o de transa&ccedil;&otilde;es ou a utiliza&ccedil;&atilde;o da Plataforma pelo Usu&aacute;rio, (
                span.SpellE iii
                | ) resultados produzidos pela Plataforma em decorr&ecirc;ncia
                | de qualquer tipo de influ&ecirc;ncia externa ou pela instala&ccedil;&atilde;o no equipamento do
                | Usu&aacute;rio ou de terceiros de v&iacute;rus, trojans, malware,
                span.SpellE worm
                | ,
                span.SpellE bot
                | ,
                span.SpellE backdoor
                | ,
                span.SpellE spyware
                | ,
                span.SpellE rootkit
                | , ou de quaisquer
                | outros dispositivos que venham a ser criados, em decorr&ecirc;ncia da navega&ccedil;&atilde;o no
                | Site ou Aplicativo ou na utiliza&ccedil;&atilde;o da Plataforma pelo Usu&aacute;rio, (
                span.SpellE iv
                | ) interface do Site, Aplicativo e Plataforma com qualquer
                | outro software de terceiros ou do Usu&aacute;rio, (v) eventos definidos na legisla&ccedil;&atilde;o
                | civil como caso fortuito ou for&ccedil;a maior.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Al&eacute;m das responsabilidades j&aacute;
                | assumidas pelo Usu&aacute;rio neste Termo de Uso e por aqueles previstas na legisla&ccedil;&atilde;o
                | em vigor, o Usu&aacute;rio responsabiliza-se por (i) todos e quaisquer atos ou
                | omiss&otilde;es por ele realizados a partir de seu acesso &agrave; Plataforma, (
                span.SpellE ii
                | ) por todo e qualquer conte&uacute;do por ele carregado, enviado
                | e/ou transmitido &agrave; Plataforma, (
                span.SpellE iii
                | ) pela repara&ccedil;&atilde;o
                | de todos e quaisquer danos, inclusive decorrentes de viola&ccedil;&atilde;o de quaisquer
                | direitos de outros usu&aacute;rios, de terceiros, inclusive direitos de propriedade
                | intelectual que sejam causados &agrave; Mercado Bitcoin, a qualquer outro Usu&aacute;rio, ou,
                | ainda, a qualquer terceiro, inclusive em virtude do descumprimento do disposto
                | neste Termo de Uso e ou de qualquer ato praticado a partir de seu acesso ao
                | Site, Aplicativo e Plataforma.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | ALTERA&Ccedil;&Otilde;ES NOS TERMOS DE USO
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:10.0pt;font-family:"Arial",sans-serif;\
            mso-fareast-font-family:"Times New Roman";color:#333333;mso-fareast-language:\
            PT-BR') A
              span.SpellE
                b
                  span(style='font-size:12.0pt;mso-fareast-font-family:\
                "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
                color:#333333;mso-fareast-language:PT-BR') Organik
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | poder&aacute; alterar, a qualquer tempo, o presente Termo de Uso, visando o
                | seu aprimoramento e a melhoria dos servi&ccedil;os oferecidos pela Plataforma.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Eventuais altera&ccedil;&otilde;es neste Termo de
                | Uso entrar&atilde;o em vigor imediatamente ap&oacute;s sua publica&ccedil;&atilde;o no Site e Aplicativo.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Caso o Usu&aacute;rio n&atilde;o concorde com quaisquer
                | altera&ccedil;&otilde;es implementadas
                span.SpellE neste
                |  Termo de Uso, dever&aacute;
                | imediatamente cancelar seu cadastro. Caso o Usu&aacute;rio n&atilde;o efetue esse
                | cancelamento, ele concordar&aacute; com o novo Termo de Uso.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR') DISPOSI&Ccedil;&Otilde;ES FINAIS
              span(style='font-size:16.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | No caso de descumprimento, pelo
                | Usu&aacute;rio, de qualquer disposi&ccedil;&atilde;o do presente Termo de Uso, a
                span.SpellE
                  b Organik
                | poder&aacute; declar&aacute;-lo resolvido em rela&ccedil;&atilde;o a esse Usu&aacute;rio, independentemente de
                | qualquer aviso, notifica&ccedil;&atilde;o ou de qualquer outra formalidade, interrompendo, de
                | imediato, o acesso do Usu&aacute;rio &agrave; Plataforma, sem preju&iacute;zo de quaisquer outros
                | direitos assegurados &agrave;
                span.SpellE
                  b Organik
                |  por lei ou pelo
                | presente Termo de Uso.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A atualiza&ccedil;&atilde;o de protocolos de
                | seguran&ccedil;a e de tramita&ccedil;&atilde;o de procedimentos n&atilde;o implicam no reconhecimento,
                | t&aacute;cito ou expresso, de que os protocolos anteriormente utilizados eram
                | insuficientes, mas apenas e t&atilde;o somente que a
                span.SpellE
                  b Organik
                | est&aacute; atualizando seus protocolos de acordo com a demanda do mercado e das novas
                | tecnologias que surgem no ramo.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | S&atilde;o partes integrantes e insepar&aacute;veis
                | deste Termo de Uso, e nele se consideram incorporados:
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='color:black;mso-color-alt:windowtext')
                a(href='https://www.mercadobitcoin.com.br/comissoes-prazos-limites/' title='Tabela de Comissões, Prazos e Limites')
                  b
                    span(style='font-size:12.0pt;\
                  mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:Calibri;\
                  mso-bidi-theme-font:minor-latin;color:#002060;mso-fareast-language:PT-BR;\
                  text-decoration:none;text-underline:none') Tabela de Comiss&otilde;es, Prazos e Limites
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
              Calibri;mso-bidi-theme-font:minor-latin;color:#002060;mso-fareast-language:\
              PT-BR')
                  | ;
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='color:black;mso-color-alt:windowtext')
                a(href='https://www.mercadobitcoin.com.br/privacidade/' title='Política de Privacidade')
                  b
                    span(style='font-size:12.0pt;mso-fareast-font-family:\
                  "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
                  color:#002060;mso-fareast-language:PT-BR;text-decoration:none;text-underline:\
                  none') Pol&iacute;tica de Privacidade
              b
                span(style='font-size:\
              12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:Calibri;\
              mso-bidi-theme-font:minor-latin;color:#002060;mso-fareast-language:PT-BR')
                  | .
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O presente Termo de Uso &eacute; regido
                | pelas leis da Rep&uacute;blica Federativa do Brasil e fica eleito o foro da Capital do
                | Estado do Distrito Federal, com exclus&atilde;o de qualquer outro, por mais
                | privilegiado que seja ou possa vir a ser, para dirimir quaisquer lit&iacute;gios ou
                | controv&eacute;rsias oriundas do presente Termo de Uso.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | O Usu&aacute;rio reconhece que as
                | peculiaridades de uso da Plataforma e dos servi&ccedil;os nela disponibilizados foram
                | suficientemente descritos neste Termo de Uso e que a
                span.SpellE
                  b Organik
                | ,
                | cumpriu devidamente o dever de informa&ccedil;&atilde;o. Ap&oacute;s ler todas as condi&ccedil;&otilde;es que
                | regulam o uso da Plataforma e de seus servi&ccedil;os, o Usu&aacute;rio consente com este
                | Termo de Uso e aceita todas as suas disposi&ccedil;&otilde;es.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Qualquer d&uacute;vida, entre com contato
                | pelo e-mail
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#002060;mso-fareast-language:PT-BR') contato@organik.net.br
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                o:p

</template>

<style lang="sass" scoped>
  .sectionPageTitle
    width: fit-content
    max-width: 1024px
    padding: 24px 16px
    &-header
      display: flex
      align-items: baseline
    &-boxTitle
      flex-basis: 380px
      padding: 16px 0 16px 50px
  .terms
    width: 90vw
    max-width: 100%
    margin: 10px auto
    background-color: white
    padding: 30px
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)

</style>

<style lang="scss">
  .termsBanner {
    .theBanner-image {
      height: 55vh !important;
      min-height: unset !important;
    }
  }
</style>

