## プロジェクトの作成

プロジェクト名には大小英数字のみ利用できる

```shell script
expo init TodoAppWithWithRedux
```

コマンド実行後、テンプレートを選択することができる。

プロジェクトができるとフォルダができるので、その中に移動する。

## React Native Elements の設定

```shell script
yarn add react-native-elements
```
## iPhone X 対応
```shell script
yarn add react-native-iphone-x-helper
```

## Redux 設定
```shell script
yarn add redux react-redux 
yarn add -D @types/redux @types/react-redux
```
## 永続化ライブラリ設定
```shell script
yarn add redux-persist
yarn add -D @types/redux-persist
```



## アプリケーションの開始

以下コマンドで Expo 管理画面が起動する。

```shell script
# ios
yarn start
```
