## expo command-line interface のインストール

```shell script
npm install -g expo-cli
```

## プロジェクトの作成

プロジェクト名には大小英数字のみ利用できる

```shell script
expo init app01
```

コマンド実行後、テンプレートを選択することができる。

プロジェクトができるとフォルダができるので、その中に移動する。

## アプリケーションの開始

以下コマンドでシミュレータが起動する。iOS のバージョンが新しめでないとだめかも。

```shell script
# ios
yarn ios
```

## MapView の利用

```shell script
yarn add react-native-maps
```
