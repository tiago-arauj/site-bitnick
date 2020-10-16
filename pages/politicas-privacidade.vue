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
    PageBanner.termsBanner(label="VERIFIQUE NOSSOS TERMOS", title="Políticas e Privacidade", image="banner-como-funciona.png")
    .page-content
      section.sectionPageTitle
        .sectionPageTitle-header
          BoxTitle.sectionPageTitle-boxTitle(label="Políticas e", title="PRIVACIDADE")
        .terms
          p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
            b
              span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                | Pol&iacute;tica de Privacidade
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Bem-vindo ao Site da
                span.SpellE Organik
                | . A sua privacidade &eacute; um assunto extremamente
                | importante para n&oacute;s. Ent&atilde;o, antes de iniciar qualquer intera&ccedil;&atilde;o ou transa&ccedil;&atilde;o
                | pelo Site, &eacute; providencial que voc&ecirc; entenda e concorde com todos os detalhes
                | desta Pol&iacute;tica de Privacidade e de nossos
              span(style='color:black;\
            mso-color-alt:windowtext')
                a(href='https://www.mercadobitcoin.com.br/termo')
                  span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
                Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
                PT-BR;text-decoration:none;text-underline:none') Termos de Uso
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | . Ao clicar na op&ccedil;&atilde;o &ldquo;aceito&rdquo; ao final do texto, voc&ecirc; concorda com esta
                | Pol&iacute;tica de Privacidade na &iacute;ntegra, vinculando-se, automaticamente, ao seu
                | conte&uacute;do. As defini&ccedil;&otilde;es utilizadas nesta Pol&iacute;tica de Privacidade s&atilde;o aquelas
                | identificadas nos
              span(style='color:black;mso-color-alt:windowtext')
                a(href='https://www.mercadobitcoin.com.br/termo')
                  span(style='font-size:12.0pt;\
                mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:Calibri;\
                mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:PT-BR;\
                text-decoration:none;text-underline:none') Termos de Uso
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | .
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Essa Pol&iacute;tica de Privacidade se
                | aplica a todas as intera&ccedil;&otilde;es realizadas por meio do Site da
                span.SpellE
                  b Organik
                b
                  | Contratos Inteligentes
                | , operado pela pessoa jur&iacute;dica
                a(name='_Hlk14339296')
                  | SOLARIS
                  | AGRICULTURA IND&Uacute;STRIA E COM&Eacute;RCIO DE ALIMENTOS LTDA com sede na cidade de Bras&iacute;lia
                  | - DF, Setor Sudoeste CLSW 302 BLOCO B LOJA 78/80 - T&Eacute;RREO, inscrita no CNPJ 30.229.246.0001-09
                | assim como a todos os produtos e servi&ccedil;os oferecidos pela&nbsp;
                span.SpellE
                  b Organik
                | &nbsp;aos Usu&aacute;rios.
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
                  | Contratos Inteligentes
                |  poder&aacute; estabelecer
              span(style='color:black;mso-color-alt:windowtext')
                a(href='https://www.mercadobitcoin.com.br/termo')
                  span(style='font-size:12.0pt;\
                mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:Calibri;\
                mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:PT-BR;\
                text-decoration:none;text-underline:none') Termos de Uso
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | e Pol&iacute;ticas de Privacidade espec&iacute;ficas e aplic&aacute;veis a determinado
                | Produto, Site ou Aplicativo, conforme o caso, que complementar&atilde;o e prevalecer&atilde;o
                | sobre esta Pol&iacute;tica de Privacidade e os
              span(style='color:black;\
            mso-color-alt:windowtext')
                a(href='https://www.mercadobitcoin.com.br/termo')
                  span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
                Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
                PT-BR;text-decoration:none;text-underline:none') Termos de Uso
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | . Em qualquer caso, o Usu&aacute;rio dever&aacute; aceitar os termos e condi&ccedil;&otilde;es
                | aplic&aacute;veis.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Essa Pol&iacute;tica de Privacidade foi
                | criada para reafirmar o compromisso da
                span.SpellE
                  b Organik
                b
                | com a seguran&ccedil;a e a privacidade das informa&ccedil;&otilde;es coletadas dos Usu&aacute;rios, bem
                | como para assegurar sua prote&ccedil;&atilde;o.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | &nbsp;n&atilde;o
                | aceita cadastro de menores de 18 (dezoito) anos, excetuando os casos
                | espec&iacute;ficos previstos em lei, sendo vedada a inscri&ccedil;&atilde;o destes em qualquer
                | Servi&ccedil;o disponibilizado pelo&nbsp;
                span.SpellE
                  b Organik
              span(style='font-size:10.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | .
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | COMO OS DADOS PODEM SER COLETADOS E
                  | QUAIS DADOS COLETAMOS?
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Seus dados podem ser coletados quando
                | voc&ecirc;: (i) navega, realiza seu cadastro e transa&ccedil;&otilde;es no site da
                span.SpellE
                  b Organik
                | , (
                span.SpellE ii
                | ) compartilha
                | informa&ccedil;&otilde;es fundamentais para a execu&ccedil;&atilde;o dos Servi&ccedil;os e aprimoramento dos
                | processos da&nbsp;
                span.SpellE
                  b Organik
                | , (
                span.SpellE iii
                | ) entra em contato com nossos canais de atendimento.
                | Outras poss&iacute;veis formas de obten&ccedil;&atilde;o de dados pelo&nbsp;
                span.SpellE
                  b Organik
                | ,
                | conforme o caso, s&atilde;o por meio de (
                span.SpellE iv
                | ) parceiros
                | externos, (v) provedores de informa&ccedil;&atilde;o, que nos ajudam a entender dados
                | demogr&aacute;ficos e perfis socioecon&ocirc;micos, complementando os dados coletados por
                | n&oacute;s, (vi) redes sociais, desde que concedida a permiss&atilde;o pelo Usu&aacute;rio para
                | acessar os dados em uma ou mais redes, (
                span.SpellE vii
                | ) fontes
                | p&uacute;blicas oficiais, como banco de dados do governo ou demais institui&ccedil;&otilde;es.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Todas as fontes de coleta de dados
                | garantem a prote&ccedil;&atilde;o de seus dados de acordo com as pr&aacute;ticas aqui descritas.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Os dados pessoais que ser&atilde;o
                | solicitados para que voc&ecirc; tenha acesso integral aos nossos Servi&ccedil;os, conforme o
                | caso, s&atilde;o: Nome completo, Carteira, E-mail e Documento de Identifica&ccedil;&atilde;o. A&nbsp;
                span.SpellE
                  b Organik
                |  tamb&eacute;m solicitar&aacute; que voc&ecirc; envie c&oacute;pia
                | digitalizada de um documento de identidade v&aacute;lida com foto, al&eacute;m de selfie. Sem
                | o envio desses documentos, a utiliza&ccedil;&atilde;o de nossos canais, servi&ccedil;os e
                | funcionalidades, poder&atilde;o sofrer restri&ccedil;&otilde;es. A&nbsp;
                span.SpellE
                  b Organik
                | poder&aacute;, conforme o caso, solicitar outros documentos para o Usu&aacute;rio, com o
                | intuito de garantir o acesso aos Servi&ccedil;os da plataforma.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Voc&ecirc; poder&aacute; perder acesso aos nossos
                | Servi&ccedil;os se recusar-se a nos
                span.SpellE fornecer
                |  os dados
                | b&aacute;sicos necess&aacute;rios para o processamento dos nossos servi&ccedil;os e funcionalidades.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Quando voc&ecirc; realiza seu cadastro,
                | navega em nosso site e utiliza os servi&ccedil;os da&nbsp;
                span.SpellE
                  b Organik
                | ,
                | os seguintes dados e informa&ccedil;&otilde;es podem ser coletados, entre outros:
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Dados de contato: n&uacute;mero de telefone
                | e outros dados semelhantes.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Credenciais: coletamos senhas,
                | palavras seguras, PIN de seguran&ccedil;a e informa&ccedil;&otilde;es de seguran&ccedil;a necess&aacute;rias para
                | o processo de autentica&ccedil;&atilde;o, acesso a contas e transa&ccedil;&otilde;es.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Dados demogr&aacute;ficos: sexo, endere&ccedil;o,
                | escolaridade, renda.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Dados financeiros: coletamos dados
                | necess&aacute;rios para a realiza&ccedil;&atilde;o de saques em Reais (R$), como banco e ag&ecirc;ncia.
                | Coletamos chaves de API de negocia&ccedil;&otilde;es e endere&ccedil;o de carteira criptografada.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Dados de uso: Al&eacute;m de dados
                | relacionados &agrave;s suas transa&ccedil;&otilde;es de criptomoedas, incluindo seu perfil de
                | Usu&aacute;rio, tamb&eacute;m podemos captar dados relacionados a sua intera&ccedil;&atilde;o com nossas
                | comunica&ccedil;&otilde;es e em nossos canais, dados de dispositivo, sistema operacional e
                | identificador de dispositivo (IMEI) e configura&ccedil;&atilde;o.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Dados de atendimento: Sua intera&ccedil;&atilde;o
                | em nossos canais de atendimento tamb&eacute;m fica registrada, assim como outros
                | detalhes de seu contato, podendo incluir conte&uacute;do de conversas em chat.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Dados de rela&ccedil;&otilde;es: Apenas quando
                | concedida inequ&iacute;voca permiss&atilde;o, podemos captar dados de quais s&atilde;o os contatos
                | de sua rede de relacionamento.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Dados de localiza&ccedil;&atilde;o: podemos, por
                | meio de nosso aplicativo e site, coletar dados de localiza&ccedil;&atilde;o originados de
                | dados de GPS (Sistema de Navega&ccedil;&atilde;o Global), GNSS (Global
                span.SpellE Navigation
                span.SpellE Satellite
                |  System), de torres de comunica&ccedil;&otilde;es m&oacute;veis,
                | pontos de acesso
                span.SpellE Wi-fi
                |  ou localiza&ccedil;&atilde;o vinda de seu
                | IP.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Todos os dados pessoais coletados s&atilde;o
                | armazenados em servidores ou meios magn&eacute;ticos de alta seguran&ccedil;a.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A contrata&ccedil;&atilde;o dos Servi&ccedil;os prestados
                | pela&nbsp;
                span.SpellE
                  b Organik
                | &nbsp;pressup&otilde;e o envio de
                | mensagens eletr&ocirc;nicas (como, por exemplo, e-mails e
                span.SpellE pushs
                | )
                | de cunhos de seguran&ccedil;a e administrativo, al&eacute;m de mensagens publicit&aacute;rias, sendo
                | esse envio imprescind&iacute;vel &agrave; execu&ccedil;&atilde;o e desenvolvimento de nossa atividade. Caso
                | voc&ecirc; n&atilde;o concorde com este procedimento, &eacute; necess&aacute;rio solicitar o cancelamento
                | de sua conta na&nbsp;
                span.SpellE
                  b Organik
                | .
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | PARA QUE UTILIZAMOS OS DADOS
                  | COLETADOS?
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:10.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR') A
              span(style='font-size:12.0pt;\
            mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:Calibri;\
            mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:PT-BR')
                | principal
                | finalidade para a qual coletamos seus dados pessoais &eacute; para oferecer a melhor
                | experi&ecirc;ncia a voc&ecirc;, de forma segura, eficiente e customizada. Via de regra, utilizamos
                | os dados coletados para criar, desenvolver, operar, entregar e aprimorar nossos
                | produtos, processos e Servi&ccedil;os. Podemos, desta maneira, entregar experi&ecirc;ncias
                | personalizadas e completas. Sem preju&iacute;zo do disposto neste par&aacute;grafo,
                | utilizamos os dados coletados para:
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Permitir a realiza&ccedil;&atilde;o de transa&ccedil;&otilde;es com
                | os contratos inteligentes na&nbsp;
                span.SpellE
                  b Organik
                | ,
                | criar Ordens de Compra e Venda e gerar e permitir acesso a carteira virtual;
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Aprimorar nossos produtos, processos
                | e servi&ccedil;os;
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Personalizar conte&uacute;do, realizar altera&ccedil;&otilde;es
                | em nossos produtos e canais;
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Disponibilizar novas funcionalidades,
                | produtos e din&acirc;micas promocionais;
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Realizar pesquisas a fim de melhorar
                | continuamente a experi&ecirc;ncia de uso do site da
                span.SpellE
                  b Organik
                | &nbsp;para
                | os Usu&aacute;rios.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Solucionar problemas e d&uacute;vidas, garantindo
                | a qualidade de nossos servi&ccedil;os e atendimento.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Estabelecer um di&aacute;logo relevante e
                | assertivo, respeitando suas prefer&ecirc;ncias de intera&ccedil;&atilde;o;
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Sofisticar ainda mais nossa
                | seguran&ccedil;a, agindo de forma eficaz em atividades suspeitas e viola&ccedil;&otilde;es de termos
                | ou pol&iacute;ticas.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Analisar o desempenho e medir a
                | audi&ecirc;ncia do site, verificar os h&aacute;bitos de navega&ccedil;&atilde;o dos Usu&aacute;rios no Site, a
                | forma pela qual chegaram na p&aacute;gina do Site (por exemplo, atrav&eacute;s de links de
                | outros sites, buscadores ou diretamente pelo endere&ccedil;o), avaliar estat&iacute;sticas
                | relacionadas ao n&uacute;mero de acessos e uso do Site seus recursos e
                | funcionalidades.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Analisar a seguran&ccedil;a do Site,
                | aperfei&ccedil;oando e desenvolvendo nossas ferramentas de seguran&ccedil;a;
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Al&eacute;m do disposto acima, a
                span.SpellE
                  b Organik
                | , respeitando a privacidade de seus Usu&aacute;rios,
                | envia mensagens por meios eletr&ocirc;nicos como e-mails e
                span.SpellE pushs
                | para confirmar atividades da plataforma, para fins publicit&aacute;rios e para
                | comunicados de massivo interesse. A frequ&ecirc;ncia de envio pode variar, de acordo
                | com a intera&ccedil;&atilde;o dos Usu&aacute;rios com essas comunica&ccedil;&otilde;es. A qualquer momento, voc&ecirc;
                | poder&aacute; solicitar a interrup&ccedil;&atilde;o do processamento de suas informa&ccedil;&otilde;es
                | pessoalmente identific&aacute;veis atrav&eacute;s dos canais, respeitando os prazos e
                | diretrizes legais:
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR') Pelo e-mail
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
              Calibri;mso-bidi-theme-font:minor-latin;color:#002060;mso-fareast-language:\
              PT-BR')
                  | contato@organik.net.br
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span.SpellE
                span(style='font-size:12.0pt;\
              mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:Calibri;\
              mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:PT-BR') Emails
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | promocionais, pelo e-mail de
                span.SpellE descadastramento
                | .
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Os dados coletados ser&atilde;o utilizados
                | pela&nbsp;
                span.SpellE
                  b Organik
                |  por prazo indeterminado ou
                | pelo maior prazo permitido pela legisla&ccedil;&atilde;o local. A qualquer momento os
                | Usu&aacute;rios poder&atilde;o solicitar a interrup&ccedil;&atilde;o do processamento de suas informa&ccedil;&otilde;es
                | pessoalmente identific&aacute;veis para fins de marketing atrav&eacute;s dos canais: Site, no
                | menu &ldquo;Configura&ccedil;&otilde;es&rdquo;, e-mails promocionais, pelo e-mail
              b
                span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
              Calibri;mso-bidi-theme-font:minor-latin;color:#002060;mso-fareast-language:\
              PT-BR') contato@organik.net.br
              span(style='font-size:12.0pt;\
            mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:Calibri;\
            mso-bidi-theme-font:minor-latin;color:#002060;mso-fareast-language:PT-BR')
              span(style='font-size:12.0pt;mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:\
            Calibri;mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:\
            PT-BR')
                | de interrup&ccedil;&atilde;o do uso de informa&ccedil;&otilde;es pessoalmente identific&aacute;veis ser&aacute;
                | atendida dentro de um per&iacute;odo razo&aacute;vel de tempo e, em qualquer caso, de acordo
                | com prazos especificados pela legisla&ccedil;&atilde;o espec&iacute;fica aplic&aacute;vel.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | UTILIZA&Ccedil;&Atilde;O DE COOKIES E TECNOLOGIAS
                  | SEMELHANTES
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Os Cookies, a plataforma Data
                | Management Platform (DMP) e tecnologias semelhantes suportam o processo de
                | identifica&ccedil;&atilde;o de cliente, comunica&ccedil;&atilde;o e demais a&ccedil;&otilde;es de marketing, al&eacute;m de
                | possibilitarem a prote&ccedil;&atilde;o dos dados coletados. Eles armazenam informa&ccedil;&otilde;es em
                | navegadores da Web, usados em computadores, telefones e outros dispositivos,
                | que trazem a informa&ccedil;&atilde;o sobre seu uso em nosso Site e acesso em outros sites e
                | aplicativos. S&atilde;o &uacute;teis nos processos de autentica&ccedil;&atilde;o, publicidade,
                | recomenda&ccedil;&otilde;es, mensura&ccedil;&otilde;es de audi&ecirc;ncia e recursos e funcionalidades dos canais,
                | an&aacute;lises de seguran&ccedil;a para aperfei&ccedil;oamento e desenvolvimento de ferramentas
                | antifraude.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Voc&ecirc; pode desabilitar os cookies nas
                | op&ccedil;&otilde;es de configura&ccedil;&atilde;o do seu navegador, estando cientes de que as
                | funcionalidades e servi&ccedil;os da&nbsp;
                span.SpellE
                  b Organik
                |  podem
                | n&atilde;o ser fornecidos ou ser&atilde;o fornecidos parcialmente em caso de
                span.SpellE desabilita&ccedil;&atilde;o
                | . Para se descadastrar na DMP &eacute; necess&aacute;rio que
                | a solicita&ccedil;&atilde;o seja feita no menu &ldquo;Configura&ccedil;&otilde;es&rdquo;.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Ao acessar e
                span.SpellE logar
                | nos canais da
                span.SpellE
                  b Organik
                | &nbsp;sem desabilitar
                | essas tecnologias, voc&ecirc; concorda em receber uma experi&ecirc;ncia de navega&ccedil;&atilde;o mais
                | personalizadas e autoriza o armazenamento das informa&ccedil;&otilde;es j&aacute; mencionadas acima.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | OS DADOS COLETADOS S&Atilde;O COMPARTILHADOS
                  | COM TERCEIROS?
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Os dados coletados ser&atilde;o tratados
                | sempre pela&nbsp;
                span.SpellE
                  b Organik
                |  diretamente ou por
                | parceiros contratados exclusivamente para este fim. Voc&ecirc; autoriza,
                | expressamente, este compartilhamento.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | As informa&ccedil;&otilde;es pessoalmente
                | identific&aacute;veis n&atilde;o ser&atilde;o utilizadas para fins de a&ccedil;&otilde;es de marketing ou qualquer
                | outra finalidade prevista neste Pol&iacute;tica de Privacidade se o Usu&aacute;rio n&atilde;o tiver
                | fornecido consentimento para tanto.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Podem existir casos em que haja a
                | contrata&ccedil;&atilde;o de empresas terceiras para presta&ccedil;&atilde;o de servi&ccedil;o que envolva
                | informa&ccedil;&otilde;es de Usu&aacute;rios, pessoalmente identific&aacute;veis ou n&atilde;o, para o
                | desenvolvimento das atividades da
                span.SpellE
                  b Organik
                | .
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Em todos os casos em que haja o
                | compartilhamento de informa&ccedil;&otilde;es, ser&aacute; exigido da empresa os mesmos padr&otilde;es,
                | conforme o caso, de confidencialidade, anonimiza&ccedil;&atilde;o e guarda das informa&ccedil;&otilde;es
                | que as adotadas pela&nbsp;
                span.SpellE
                  b Organik
                | .
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | &nbsp;poder&aacute;
                | revelar dados e informa&ccedil;&otilde;es de qualquer Usu&aacute;rio, caso isso seja requerido por
                | lei, como em caso de processos investigativos ou solicita&ccedil;&otilde;es judiciais, ou por
                | ordem de uma autoridade
              span(style='font-size:10.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
              span(style='font-size:12.0pt;\
            mso-fareast-font-family:"Times New Roman";mso-bidi-font-family:Calibri;\
            mso-bidi-theme-font:minor-latin;color:#333333;mso-fareast-language:PT-BR')
                | competente,
                | como ag&ecirc;ncias reguladoras, &oacute;rg&atilde;os do governo, sem aviso e autoriza&ccedil;&atilde;o pr&eacute;via do
                | Usu&aacute;rio, nos termos exigidos pela legisla&ccedil;&atilde;o aplic&aacute;vel.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Os canais da&nbsp;
                span.SpellE
                  b Organik
                | podem conter links para outras p&aacute;ginas na Internet, que podem possuir pol&iacute;tica
                | de coleta e informa&ccedil;&otilde;es pr&oacute;prias. A
                span.SpellE
                  b Organik
                |  n&atilde;o
                | se responsabiliza pelo tratamento das informa&ccedil;&otilde;es fora de seu ambiente.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | CONTATO
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | adota todas as melhores pr&aacute;ticas para manter a confidencialidade e a seguran&ccedil;a
                | das informa&ccedil;&otilde;es dos Usu&aacute;rios. N&oacute;s mantemos seus dados pessoais por meio de
                | processos f&iacute;sicos, eletr&ocirc;nicos e de seguran&ccedil;a em conson&acirc;ncia com o exigido pela
                | legisla&ccedil;&atilde;o aplic&aacute;vel.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | No entanto, os Usu&aacute;rios declaram-se
                | cientes da possibilidade de viola&ccedil;&atilde;o de seguran&ccedil;a dos servidores do Site por
                | ataques de hackers ou outras circunst&acirc;ncias a que sistemas conectados &agrave;
                | Internet estejam sujeitos, casos em que, apesar dos melhores esfor&ccedil;os da
                span.SpellE
                  b Organik
                | , as informa&ccedil;&otilde;es e dados dos Usu&aacute;rios poder&atilde;o
                | eventualmente ser ilegalmente acessadas por terceiros.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Apenas encarregados de &aacute;reas
                | espec&iacute;ficas da&nbsp;
                span.SpellE
                  b Organik
                | , que possuem
                | liga&ccedil;&atilde;o de seus exerc&iacute;cios das fun&ccedil;&otilde;es atribu&iacute;das na rela&ccedil;&atilde;o de trabalho com a
                | empresa, tem acesso, com n&iacute;veis diferentes de restri&ccedil;&atilde;o, aos dados coletados,
                | estando submetidos a Pol&iacute;tica Interna de Seguran&ccedil;a da Informa&ccedil;&atilde;o. A viola&ccedil;&atilde;o
                | desta Pol&iacute;tica poder&aacute; acarretar san&ccedil;&otilde;es administrativas e/ou legais, podendo
                | culminar em rescis&atilde;o do contrato de trabalho e/ou qualquer outro contrato de
                | relacionamento de presta&ccedil;&atilde;o de servi&ccedil;o entre o funcion&aacute;rio, associado,
                | consultor e/ou s&oacute;cio, assim como qualquer entidade com rela&ccedil;&atilde;o contratual
                | direta ou indireta com a&nbsp;
                span.SpellE
                  b Organik
                | .
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | A
                span.SpellE
                  b Organik
                | zela pela seguran&ccedil;a de seus dados, empregando as mais modernas tecnologias e
                | seguros procedimentos. No entanto, &eacute; essencial que tamb&eacute;m haja o
                | comprometimento do Usu&aacute;rio para mitigar riscos e exposi&ccedil;&otilde;es, como por ex. n&atilde;o
                | compartilhar ou informar senhas com terceiros, utilizar senhas fortes, n&atilde;o
                | utilizar a senha da&nbsp;
                span.SpellE
                  b Organik
                |  em outros
                | sites ou servi&ccedil;os, trocando-a periodicamente. &Eacute; importante, tamb&eacute;m, sempre se
                span.SpellE deslogar
                |  (
                span.SpellE logoff
                | ) da nossa
                | plataforma ao fim de sua utiliza&ccedil;&atilde;o, evitando o uso em computadores ou redes de
                | acesso p&uacute;blico e manter o sistema operacional e antiv&iacute;rus atualizados.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Eventualmente podem circular e-mails
                | falsos pela internet, chamados
                span.SpellE Phishing
                | , envolvendo o
                | nome da
                span.SpellE
                  b Organik
                | , e outras comunica&ccedil;&otilde;es
                | externas com o intuito fraudulento de induzir os Usu&aacute;rios a compartilhar
                | informa&ccedil;&otilde;es pessoais e senhas com pessoas mal-intencionadas. Essas mensagens
                | n&atilde;o s&atilde;o provenientes da&nbsp;
                span.SpellE
                  b Organik
                | . N&atilde;o
                | enviamos e-mails ou
                span.SpellE pushs
                |  solicitando dados
                | confidenciais, senhas, n&uacute;meros de cart&atilde;o de cr&eacute;dito, endere&ccedil;o de carteira criptografada
                | etc. Tamb&eacute;m n&atilde;o enviamos mensagens eletr&ocirc;nicas com anexos que possam ser
                | executados (extens&otilde;es: .
                span.SpellE exe
                | , .com, entre outras) ou
                | links para eventuais downloads. Nunca forne&ccedil;a resposta a esses e-mails e
                | reporte em nossos canais de atendimento. N&atilde;o ceda acesso aos seus dados em
                | aplicativos que n&atilde;o s&atilde;o da&nbsp;
                span.SpellE Organik
                | .
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Caso voc&ecirc; tenha conhecimento de que
                | qualquer terceiro teve acesso a seu log-in e senha, ou da ocorr&ecirc;ncia de
                | qualquer uso ou acesso n&atilde;o autorizado de sua conta no Site por terceiros,
                | solicite imediatamente a altera&ccedil;&atilde;o de senha no pr&oacute;prio site, atrav&eacute;s da op&ccedil;&atilde;o
                | &ldquo;Mudar Senha&rdquo; no menu &ldquo;Configura&ccedil;&otilde;es&rdquo; e comunique o fato a n&oacute;s.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | O QUE MAIS DEVO SABER SOBRE ESSA
                  | POL&Iacute;TICA DE PRIVACIDADE?
              span(style='font-size:16.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Para estar sempre condizente com a
                | din&acirc;mica de utiliza&ccedil;&atilde;o de nossos produtos e servi&ccedil;os, atualizaremos a pol&iacute;tica
                | de privacidade ao longo do tempo. Neste caso, o Usu&aacute;rio ser&aacute; notificado da
                | altera&ccedil;&atilde;o, devendo aceitar, expressamente, o novo texto.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Caso o Usu&aacute;rio n&atilde;o concorde com
                | quaisquer altera&ccedil;&otilde;es implementadas, dever&aacute; imediatamente cancelar seu Cadastro
                | e abster-se de utilizar o Site. Caso o Usu&aacute;rio n&atilde;o efetue esse cancelamento ou
                | continue utilizando o Site, ele concordar&aacute; com a nova Pol&iacute;tica de Privacidade.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Aplica-se a esta Pol&iacute;tica de
                | Privacidade a legisla&ccedil;&atilde;o da Rep&uacute;blica Federativa do Brasil e as d&uacute;vidas ser&atilde;o
                | solucionadas na Comarca da Capital do Estado do Distrito Federal.
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              b
                span(style='font-size:16.0pt;mso-fareast-font-family:\
              "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
              color:#333333;mso-fareast-language:PT-BR')
                  | COMO ENTRO EM CONTATO NO CASO DE
                  | D&Uacute;VIDAS?
                  o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                | Toda e qualquer quest&atilde;o relacionada a
                | esta Pol&iacute;tica de Privacidade ser&aacute; tratada por meio da do e-mail
                | contato@organik.net.br
                o:p
            p.MsoNormal(style='margin-bottom:7.5pt;text-align:justify;line-height:\
          16.0pt;background:white')
              span(style='font-size:12.0pt;mso-fareast-font-family:\
            "Times New Roman";mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;\
            color:#333333;mso-fareast-language:PT-BR')
                o:p &nbsp;


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

