// expressモジュールをインポート（Node.jsのWebフレームワーク）
const express = require('express');

// body-parserモジュールをインポート（リクエストのボディを解析するために使用）
const bodyParser = require('body-parser');

// ユーザー関連のルートをインポート（APIのエンドポイントを定義しているファイル）
const userRoutes = require('./routes/userRoutes');

// dotenvモジュールを使用して、環境変数を読み込む（.envファイルから設定をロード）
require('dotenv').config();

// corsモジュールをインポート（クロスオリジンリソースシェアリングを許可するため）
const cors = require('cors');

// expressアプリケーションを作成
const app = express();

// サーバーのポートを設定（環境変数から取得するか、デフォルトで3000を使用）
const PORT = process.env.PORT || 3000;

// CORSミドルウェアを使用（他のオリジンからのリクエストを許可）
app.use(cors());

// リクエストのボディをJSONとして解析するミドルウェアを使用
app.use(bodyParser.json());

// '/api'パスのリクエストに対してuserRoutesを使用（ユーザー関連のエンドポイントを管理）
app.use('/api', userRoutes);

// ルートエンドポイント（'/'）に対するGETリクエストを処理
// サーバーが動作していることを確認するための簡単な応答を返す
app.get('/', (req, res) => {
  res.send('Server is running');
});

// サーバーを指定されたポートで起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
