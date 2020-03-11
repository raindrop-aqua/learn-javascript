## 開発環境の設定

[参考](https://qiita.com/yhirose/items/22b0621f0d36d983d8b0)

### アプリケーション作成

```shell script
create-react-app my-app --typescript
```

```shell script
yarn add electron-is-dev electron-reload
yarn add -D concurrently electron electron-builder wait-on
```

## アプリケーションの開始

```shell script
yarn electron:windev
# ダイアログボックスが表示されるけどOK
```

## アプリケーションビルド方法

```shell script
yarn electron:build
# ダイアログボックスが表示されるけどOK
```
