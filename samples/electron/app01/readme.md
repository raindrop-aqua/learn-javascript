## 開発環境の設定

### アプリケーション作成

```shell script
npx create-react-app electron-react-ts --typescript
```

### Electron の設定

```shell script
yarn add -D electron electron-is-dev concurrently wait-on
```

- public フォルダ内に electron.js を作成する
- package.json の編集
  - homepage
  - main
  - script dev
