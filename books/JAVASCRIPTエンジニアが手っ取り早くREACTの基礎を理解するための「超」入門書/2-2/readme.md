
## 下準備

```sh
npm init -y
```

```sh
mkdir src dist
```

## Babelセットアップ
```sh
npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/register
```

.babelrc を作成する

## Webpackセットアップ

```sh
npm i -D webpack webpack-cli
```

webpack.config.js development.js を作成する。

## Reactセットアップ

```sh
npm i -S react react-dom
```

ここでReactのコードを記述し、以下のコマンドでコンパイルを行う

```sh
./node_modules/.bin/webpack
```

## webpack dev server のセットアップ

```sh
npm i -D webpack-dev-server html-webpack-plugin
```

サーバー起動

```sh
./node_modules/.bin/webpack-dev-server
```
