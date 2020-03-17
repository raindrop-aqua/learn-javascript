## 開発環境の設定

### アプリケーション作成

```shell script
npm install --save-dev electron
```

## Text Editor ライブラリの設定

```shell script
yarn add ace
```

## React の設定

```shell script
yarn add react react-dom @types/react @types/react-dom react-ace
```

## TypeScript のトランスパイル

```shell script
# tsc --init して設定ファイルを作っておく

tsc
```

## アプリケーションの開始

```shell script
# package.jsonにscriptを記載しておく
# "start": "electron ."
npm start
```
