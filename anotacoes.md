# Anotações Relativas ao curso de React Native

### Instalar o React Native

#### Instalando o Create React Native App

`npm install -g create-react-native-app`

#### Utilizando o Expo

[Expo Android]

[Expo IOs]

### Scrool View e FlatList

Basicamente se quisermos que haja scroll no aplicativo devemos utilizar o componente
`ScrollView` ao invés da View. Contudo o component `FlatList` é preferível, pois
ele só irá renderizar os ítens que estão visíveis, ganhando em performance.

Mais detalhes: [ScrollView]

### Input

[Vídeo Input]

### Imagens

[Vídeo Imagens]

### API Dimensions

Usado para selecionar a largura e altura da tela do dispositivo do usuário.
Para usar basta:

`import { Dimensions } from 'react-native'`

Em seguida você pode recuperar o tamanho da tela usando:

`const { width, height } = Dimensions.get('window')`

### Styled Components

Você cria componentes em que o estilo ficará embutido dentro desse componente! 

[Mais Informações], [GitHub Styled Components]



### Outros Componentes

[ActivityIndicator]

[Picker]

[WebView]

[Modal]



[ScrollView]: <https://youtu.be/6JgdIxDn8H4>
[Expo Android]: <https://play.google.com/store/apps/details?id=host.exp.exponent>
[Expo IOs]: <https://itunes.apple.com/us/app/expo-client/id982107779>
[Vídeo Input]: <https://youtu.be/WxdnpxrWZkI>
[Vídeo Imagens]: <https://youtu.be/uxbqKJchzKQ>
[ActivityIndicator]: <https://facebook.github.io/react-native/docs/activityindicator.html>
[Picker]: <https://facebook.github.io/react-native/docs/picker.html>
[WebView]: <https://facebook.github.io/react-native/docs/webview.html>
[Modal]: <https://facebook.github.io/react-native/docs/modal.html>
[Mais Informações]: <https://youtu.be/XF_4MPpvRqs>
[GitHub Styled Components]: <https://github.com/styled-components/styled-components>