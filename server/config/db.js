// MySQLモジュールをインポート（MySQLデータベースに接続するため）
const mysql = require('mysql');

// pathモジュールをインポート（ファイルパスを操作するため）
const path = require('path');

// dotenvモジュールを使って環境変数を読み込む
// .envファイルのパスを指定して、環境変数を設定
const result = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// .envファイルの読み込み中にエラーが発生した場合、そのエラーをコンソールに出力
if (result.error) {
  console.error('Error loading .env file:', result.error);
} else {
  // .envファイルが正常に読み込まれた場合、読み込んだ環境変数をコンソールに出力
  console.log('Environment variables loaded:', result.parsed);
}

// MySQLデータベースへの接続情報を設定
const db = mysql.createConnection({
  host: process.env.DB_HOST,       // データベースのホスト名
  user: process.env.DB_USER,       // データベースに接続するためのユーザー名
  password: process.env.DB_PASSWORD, // データベースに接続するためのパスワード
  database: process.env.DB_NAME    // 接続するデータベース名
});

// データベースに接続を試みる
db.connect((err) => {
  if (err) {
    // 接続が失敗した場合、エラーメッセージをコンソールに出力
    console.error('Database connection failed:', err.stack);
    return;  // エラーが発生した場合、ここで処理を終了
  }
  // 接続が成功した場合、成功メッセージをコンソールに出力
  console.log('Connected to database.');
});

// データベース接続オブジェクトを他のモジュールで使えるようにエクスポート
module.exports = db;
