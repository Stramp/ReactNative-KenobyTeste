# ReactNative-KenobyTeste
Simple test for for Kenoby recruit. 


Para iniciar o projeto basta dar um `git clone` git clone ou `fork` abrir a pasta mobileApp e rodar `yarn start` ou `npm start`.

O projeto foi feito utilizando o Expo CLI. 
http://expo.github.io/


## Sobre a execução
O projeto era bem simples então não se há muito oque ser explicado. 

Criei uma pagina para conter toda aplicação `src/pages/Home` 
Para compor essa pagina eu utilizo `react-native-maps` utilizando a tag `<MapView>`
e crio um componente para ser meu visor. 

Delegando ao component a função de exibir o clima na tela.
A função de atualizar eu envio como prop para o component Visor para assim tbm atualizar a posição do mapa em um reload.

