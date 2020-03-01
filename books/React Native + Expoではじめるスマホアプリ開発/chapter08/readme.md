## プロジェクトの作成

プロジェクト名には大小英数字のみ利用できる

```shell script
expo init ToiletMap
```

コマンド実行後、テンプレートを選択することができる。

プロジェクトができるとフォルダができるので、その中に移動する。

## MapView の利用
Expo の MapView は 非推奨となったようだ。ホームページのドキュメントをみると、react-native-mapsを使えとある。


```shell script
yarn add react-native-maps
yarn add @types/react-native-maps
```

## turf.js の利用(地図に関するライブラリ)

```shell script
yarn add @turf/destination
```

## 画面遷移を行うので、react-navigation ライブラリを設定

```shell script
yarn add react-navigation
```

## アプリケーションの開始

以下コマンドで Expo 管理画面が起動する。

```shell script
# ios
yarn start
```

## てづまり

途中でエラーが出て動かなくなってしまった。一旦中断します。