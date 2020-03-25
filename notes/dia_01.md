# Primeiro dia

* **Apresentar aplicação:**
    * Be The Hero: Aplicação mobile e web.

* Configurar ambiente de desenvolvimento:

    * **Node.js & NPM:**
        * Node.js: Motor no Chrome para interpretar JavaScript. Front-end.
        * `yay -Sy nodejs-lts-erbium`
        * `yay -Sy npm`

    * Visual Studio Code:
        * Editor de texto

* Entender sobre back-end & front-end
    * Arquitetura da aplicação
    * **Back-end:**
        * O que o usuario não enxerga:
            * Regras de negócio,
            * Conexão banco de dados,
            * Envio de e-mail,
            * Comunicação com webservices,
            * Autenticação do usuário,
            * Criptografía e segurança.
    * **Front-end:**
        * Back-end -> Front-end web
        * Back-end -> Front-end mobile
        * Back-end -> Serviços externos
    *  **JSON**:
        * Linguagem de comunicação entre back-end e front-end
        * JSON é uma estrutura de dados, representar dados através de uma
          estrutura. JavaScript Object Notation.

* Criar projeto com Node.js
    * :folder: backend
    * `npm init -y`
        * cria o arquivo `package.json` e armazena algumas informações
          importantes.
    * `npm install express`
        * micro-framework, dependencia.
    * hello world:
        * `index.js`

* Entender sobre React & SPA
    * Abordagem tradicional:
        * Nenhum framework
        * Na abordagem tradicional, a cada requisição, o servidor retorna o
          conteúdo completo da página, contendo todo HTML e CSS.
        * Essa abordagem limita o front-end para o browser já que o aplicativo
          mobile ou serviços externos não vão conseguir interpretar o HTML.
        * [browser] -- requisição --> [JS] (HTML, CSS, JavaScript) -- resposta (HTML)
          --> [browser]
    * Abordagem de SPA (single-page applications):
        * Na abordagem de SPA, as requisições trazem apenas dados como respostas
          e com esses dados, o front-end pode prencher as informações em tela.
        * A página nunca recarrega, otimizando a performance e dando vida ao
          conceito de SPA. Retornando apenas JSON podemos ter quantos front-end
          quisermos.
        * [browser - html/css/javascript] -- requisição --> [JS] -- resposta (JSON) -- [browser -
          html/css/javascript]

* Criar projeto com ReactJS
    * `npx create-react-app frontend`
    * :folder: fronted
    * `npm start`

* Entender sobre React Native & Expo
    * Abordagem tradicional
        * iOs: Objective-C, Swift -- .ipa --> mobile
        * Android: Java, Kotlin ---- .apk --> mobile
        * Na abordagem tradicional, criamos uma plicação para iOs e outra para
          Android, e nesses casos, o trabalho se torna repetido tanto para
          criação quanto para as alterações no projeto.
    * Abordagem do React Native
        * React Native -- .ipa --> ios
        * React Native -- .apk --> android
        * Todo código feito é em JavaScript, esse código **não é convertido em
          código nativo**, melhor do que isso, o dispositivo passa a enternder o
          código JavaScript e a interface gerada é **totalmente nativa**.
        * Por que utilizaremos o Expo?
            * Sem o Expo, precisamos instalar em nosso sistema tanto o Android
              Studio para obter a SDK de desenvolvimento Android, e o Xcode para
              obter a SDK do iOS.
            * Nesse caso, nossa iniciação no desenvolvimento fica mais penosa,
              já que essas SDK's não são extremamente simples de instalar e
              livres de erros.
            * Com o Expo, nós instalamos um aplicativo no celular chamado Expo,
              e dentre dele, tudo o que precisamos para desenvolver no React
              Native já está instalado, como as API's de mapas, geolocalização,
              camera, sensores, calendario, etc..
            * Com isso, nao precisamos nos preocupar em gerar o aplicativo para
              Android e iOS ja que o app do Expo instalado tem tudo o que
              precisamos e assim usamos apenas React.
