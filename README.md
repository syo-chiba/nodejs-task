# Node.jsを使ったユーザー管理システム

このプロジェクトでは、Node.jsを使用してサーバーサイドで動作するユーザー管理システムを構築します。クライアントサイド（HTML、CSS、JavaScript）からユーザー情報を送信し、サーバーサイドでその情報を処理してデータベースに保存します。また、既存のユーザー情報の取得、更新、および削除も可能です。このプロジェクトを通して、Node.jsの基本的な使い方、サーバーサイドプログラミングの基礎、およびデータベース操作の基本を学びます。

## 学習ポイント

### 1. Node.jsとExpressの導入

- **Node.js**は、JavaScriptをサーバーサイドで実行するためのランタイム環境です。通常、JavaScriptはブラウザ上で実行されますが、Node.jsを使用することでサーバー上でもJavaScriptを使ってプログラムを動かすことができます。
- **Express**は、Node.jsのための軽量なWebフレームワークです。サーバーを簡単に構築し、HTTPリクエスト（GET, POST, PUT, DELETEなど）を処理するための強力なツールを提供します。

**このプロジェクトでの使用方法:**

- Expressを使ってWebサーバーを立ち上げ、クライアントからのリクエストを処理します。

**理解のポイント:**

- Expressの基本的な使い方（サーバーの立ち上げ、ルートの設定）
- HTTPリクエストとレスポンスの仕組み

### 2. プロジェクトのセットアップと依存関係の管理

- **npm（Node Package Manager）**は、Node.jsのパッケージ管理ツールです。外部のライブラリやモジュール（例: Express、body-parser、corsなど）を簡単にインストールして管理することができます。

**このプロジェクトでの使用方法:**

- npmを使ってプロジェクトを初期化し、必要な依存関係をインストールします。

**理解のポイント:**

- `npm init`で`package.json`ファイルを作成し、プロジェクトを管理する方法
- 依存関係をインストールし、`package.json`に記録する方法

### 3. 環境変数と`.env`ファイル

- **環境変数**は、プログラムの外部から設定することができる変数です。アプリケーションの設定（例: データベース接続情報、APIキーなど）を外部から変更できるようにするために使います。

**このプロジェクトでの使用方法:**

- `.env`ファイルを使って、データベース接続情報やサーバーのポート番号を管理します。
- `dotenv`モジュールを使って、`.env`ファイルから環境変数を読み込みます。

**理解のポイント:**

- 環境変数を使うことで、設定情報をコードから分離し、セキュリティと柔軟性を高める方法
- `dotenv`を使用して環境変数を読み込む方法

### 4. ルーティングとコントローラーの設定

- **ルーティング**は、特定のURLパスに基づいてリクエストを処理するための方法です。Expressでは、`app.get()`や`app.post()`などのメソッドを使って、URLに対応する処理を設定します。

**このプロジェクトでの使用方法:**

- `/api/users`に対するルーティングを設定し、GET、POST、PUT、DELETEリクエストをそれぞれ異なるコントローラ関数で処理します。

**理解のポイント:**

- ルートの設定方法（GET, POST, PUT, DELETEの使い方）
- クライアントからのリクエストに基づいて適切なコントローラーを呼び出す方法

### 5. ミドルウェアの使用

- **ミドルウェア**は、リクエストとレスポンスの間で特定の処理を実行する関数です。Expressでは、リクエストがルートハンドラーに到達する前やレスポンスがクライアントに返される前に、ミドルウェアを使用してさまざまな処理を追加することができます。

**このプロジェクトでの使用方法:**

- `body-parser`ミドルウェアを使って、リクエストボディをJSONとして解析します。
- `cors`ミドルウェアを使って、異なるオリジンからのリクエストを許可します。

**理解のポイント:**

- ミドルウェアの基本的な使い方
- リクエストの前処理や後処理を行うためにミドルウェアを使用する方法

### 6. データベース操作

- **データベース**は、アプリケーションのデータを保存するためのものです。Node.jsでは、`mysql`モジュールを使用してMySQLデータベースとやり取りすることができます。

**このプロジェクトでの使用方法:**

- `mysql`モジュールを使ってMySQLデータベースに接続し、ユーザー情報を操作します（作成、取得、更新、削除）。

**理解のポイント:**

- MySQLデータベースへの接続方法
- SQLクエリの基本的な書き方（SELECT, INSERT, UPDATE, DELETE）
- データベース操作時のエラーハンドリング

### 7. セキュリティの基本

- **ハッシュ化**は、パスワードのような敏感な情報を安全に保つための手法です。`bcrypt`ライブラリを使って、ユーザーのパスワードをハッシュ化します。

**このプロジェクトでの使用方法:**

- `bcrypt`を使ってユーザーのパスワードをハッシュ化し、安全にデータベースに保存します。

**理解のポイント:**

- ハッシュ化とその必要性
- `bcrypt`を使ったハッシュ化の方法

### 8. 非同期プログラミング

- **非同期処理**は、時間のかかる操作（例: データベースクエリ、ネットワークリクエストなど）が完了するのを待たずに他のコードを実行することを可能にするプログラミングスタイルです。Node.jsは、非同期処理が得意です。

**このプロジェクトでの使用方法:**

- データベースクエリなどの操作を非同期で実行し、コールバック関数でその結果を処理します。

**理解のポイント:**

- 非同期処理の基本概念
- コールバック関数の使い方と、そのコールバック地獄（Callback Hell）を避ける方法（Promiseやasync/await）

### 9. エラーハンドリング

- **エラーハンドリング**は、アプリケーション開発において、エラーが発生した場合に適切な処理を行うために重要です。エラーが発生したときに、アプリケーションがクラッシュせずに適切に対処できるようにする必要があります。

**このプロジェクトでの使用方法:**

- 各データベース操作に対してエラーハンドリングを行い、エラーが発生した場合は適切なメッセージを返します。

**理解のポイント:**

- エラーハンドリングの重要性
- エラーが発生したときに、アプリケーションを適切に処理し続ける方法

### 10. APIのテスト

- **APIのテスト**は、クライアントが期待するデータを正確に返しているかを検証するために重要です。テストツール（Postmanなど）を使って、APIのエンドポイントをテストします。

**このプロジェクトでの使用方法:**

- APIエンドポイントを手動でテストし、正しいデータが返ってくることを確認します。

**理解のポイント:**

- テストツールの使い方
- APIのテストケースの書き方と実行方法

---

このプロジェクトを通じて、Node.jsを使ったサーバーサイド開発の基本を学び、フロントエンドとバックエンドがどのように連携するかを理解することができます。各ステップを実行しながら、それぞれのコンセプトを深く理解していきましょう。
