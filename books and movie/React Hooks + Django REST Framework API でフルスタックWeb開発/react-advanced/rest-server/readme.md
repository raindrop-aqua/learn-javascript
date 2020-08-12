# rest server with auth

## 大まかな手順

1. サーバーの起動
2. 認証
3. API呼び出し

## Start Server

サーバーを起動

```shell script
$ node index.js
```

## Authorization（認証）

POSTMANなどを利用して、サーバーに対してリクエストを行う。

| method |url | request content type |
|:---|:---|:---|
| POST | http://localhost3000/auth/ | application/json |
 
* request body
```json
{
  "email": "hoge@email.com",
  "password":"hoge"
}
```

* response body(成功)
```json
{
  "access_token": "XXXXXXXXXXXXXXXX"
}
```

## API呼び出し

request header に 以下の設定しつつ呼び出し

```
Authorization: Token XXXXXXXXXXXXXXXX
```

|method	| url | request content type |
|:---|:---|:---|
|GET | http://localhost:3000/tasks ||	
|GET | http://localhost:3000/tasks/1 ||	
|POST | http://localhost:3000/tasks | application/json |
|PATCH | http://localhost:3000/tasks/1 | application/json |
|PUT | http://localhost:3000/tasks/1 | application/json |
|DELETE | http://localhost:3000/tasks/1 || 

