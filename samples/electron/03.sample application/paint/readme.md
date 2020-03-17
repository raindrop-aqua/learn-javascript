## 開発環境の設定

### アプリケーション作成

```shell script
npm install --save-dev electron
```

## Canvas ライブラリの設定

```shell script
yarn add konva
```

## React の設定

```shell script
yarn add react react-dom @types/react @types/react-dom react-konva
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
