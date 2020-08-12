
# CORS 対策

json-server と react のローカルサーバーのホストが異なるため、そのままアクセスするとCORSに引っかかってアクセスすることができない。

1. json-server の レスポンスヘッダ書き換え
2. json-server の オプション変更
3. json-server と react ローカルサーバーのアドレスを同じにする
4. proxy を利用したアクセス 

## json-server の オプション変更

以下のようにjson-serverを設定する

```javascript
const server = jsonServer.create();
const middlewares = jsonServer.defaults({
  noCors: false,
});
server.use(middlewares);
```

## proxy を利用したアクセス

#### package.json編集

package.json に以下を追加

```json
"proxy": "http://localhost:8000"
```

#### アクセスする際のURLを変更

以下のようにURL部分からプロトコルとホスト部分を除いて指定する

```javascript
axios.get("/tasks/")
    .then(res => setTask(res.data))
    .catch(console.error)

```

