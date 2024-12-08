# Vue + Mocks Service Worker (MSWjs)

## Dependências

npm install msw@latest --save-dev

## Criar script do web worker

npx msw init <PUBLIC_DIR> --save

## Criar arquivos de mock e seus handlers

Crie seus arquivos de mock seguindo o exemplo do arquivo `src/mocks/profile/profileMocks.js` com os dados que você deseja retornar em cada requisição http.

Em seguida crie o arquivo de handlers seguindo o exemplo do arquivo `src/mocks/profile/profileHandlers.js` que irá interceptar as requisições http e retornar o conteúdo dos mocks.

## Criar o inicializador do web worker

Crie um arquivo na raíz da pasta mocks seguindo o exemplo do arquivo `src/mocks/browser.js`, onde devem ser importados todos os handlers e injetados na função `setupWorker`

## Inicializando o web worker em ambiente de desenvolvimento

No arquivo `main.js` recrie a função `enableMocking`. Esta função deve ser a primeira coisa a ser executada em sua aplicação, e assim que sua execução for concluída você pode inicializar o Vue.
