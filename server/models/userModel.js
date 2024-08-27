// データベース接続オブジェクトをインポート
const db = require('../config/db');

// Userオブジェクトを定義し、ユーザー関連のデータベース操作メソッドをまとめる
const User = {
  // 新しいユーザーをデータベースに追加するメソッド
  create: (data, callback) => {
    // SQLクエリを定義。ユーザーの名前、メール、パスワードをusersテーブルに挿入
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    // クエリを実行。プレースホルダー（?）にはdataオブジェクトからの値が渡される
    db.query(query, [data.name, data.email, data.password], callback);
  },

  // メールアドレスでユーザーを検索するメソッド
  findByEmail: (email, callback) => {
    // SQLクエリを定義。指定されたメールアドレスを持つユーザーを検索
    const query = `SELECT * FROM users WHERE email = ?`;
    // クエリを実行。プレースホルダー（?）には検索対象のメールアドレスが渡される
    db.query(query, [email], callback);
  },

  // すべてのユーザーを取得するメソッド
  findAll: (callback) => {
    // SQLクエリを定義。すべてのユーザー情報をusersテーブルから取得
    const query = `SELECT * FROM users`;
    // クエリを実行。コールバック関数で結果を処理
    db.query(query, callback);
  },

  // 指定されたIDのユーザー情報を更新するメソッド
  updateById: (id, data, callback) => {
    // SQLクエリを定義。指定されたIDのユーザーの名前、メール、パスワードを更新
    const query = `UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?`;
    // クエリを実行。プレースホルダー（?）には更新するデータとユーザーIDが渡される
    db.query(query, [data.name, data.email, data.password, id], callback);
  },

  // 指定されたIDのユーザーを削除するメソッド
  deleteById: (id, callback) => {
    // SQLクエリを定義。指定されたIDのユーザーをusersテーブルから削除
    const query = `DELETE FROM users WHERE id = ?`;
    // クエリを実行。プレースホルダー（?）には削除するユーザーのIDが渡される
    db.query(query, [id], callback);
  }
};

// Userオブジェクトをモジュールとしてエクスポート
module.exports = User;
