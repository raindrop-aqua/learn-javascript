## プロジェクトの作成

プロジェクト名には大小英数字のみ利用できる

```shell script
expo init TodoApp
```

コマンド実行後、テンプレートを選択することができる。

プロジェクトができるとフォルダができるので、その中に移動する。

## アプリケーションの開始

以下コマンドで Expo 管理画面が起動する。

```shell script
# ios
yarn start
```

## 得られた知見

### typescript によるコーディング

prop や local state を利用する場合は、型を指定すること。lint でエラーが出てしまう。

### FlatList を利用する場合

通常の ScrollView 以下に配置すると、Warning が発生する。SafeAreaView の下に置くとよい。

### Button と Style

Button には Style を当てることができないみたい。
