# ReactNative-KenobyTeste
Simple test for for Kenoby recruit. 


Para iniciar o projeto basta dar um `git clone` git clone ou `fork` abrir a pasta mobileApp e rodar `yarn start` ou `npm start`.

O projeto foi feito utilizando o Expo CLI. 
http://expo.github.io/


## Sobre a execução

### Arquiterura
O projeto era bem simples então não se há muito oque ser explicado. 

Criei uma pagina para conter toda aplicação `src/pages/Home`.

Para compor essa pagina eu utilizo `react-native-maps` utilizando a tag `<MapView>` e crio um componente para ser meu visor `src/components/Visor`. Delegando ao component a função de exibir o clima na tela.

A função de atualizar eu envio como prop para o component Visor para assim tbm atualizar a posição do mapa em um reload.

Para os estilos eu teria a opção de usar styled-components pq acaba deixando mais organizado os components, mas fiz com sheetStyle do react-native pq num futuro posso usar algum desses components e querer animalos e o styled-components/native nao suporta o metodo `keyframes` do styled-components.

No mais Obrigado

