// bcryptモジュールをインポート（パスワードのハッシュ化に使用）
const bcrypt = require('bcrypt');

// Userモデルをインポート（ユーザーのデータベース操作に使用）
const User = require('../models/userModel');

// 新しいユーザーを作成するための関数
exports.createUser = (req, res) => {
  // リクエストのボディから名前、メール、パスワードを取得
  const { name, email, password } = req.body;

  // パスワードをハッシュ化（暗号化）する
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Hashing error:', err);  // ハッシュ化に失敗した場合、エラーメッセージを出力
      return res.status(500).json({ error: 'Error hashing password' });  // エラーレスポンスを返す
    }

    // ハッシュ化されたパスワードで新しいユーザーをデータベースに作成
    User.create({ name, email, password: hashedPassword }, (err, result) => {
      if (err) {
        console.error('Database error:', err);  // データベース操作に失敗した場合、エラーメッセージを出力
        return res.status(500).json({ error: 'Database error' });  // エラーレスポンスを返す
      }
      // ユーザー作成が成功した場合、成功メッセージを返す
      res.status(201).json({ message: 'User created successfully!' });
    });
  });
};

// 全てのユーザーを取得するための関数
exports.getUsers = (req, res) => {
  // データベースから全てのユーザーを取得
  User.findAll((err, users) => {
    if (err) {
      console.error('Error fetching users:', err);  // データベース操作に失敗した場合、エラーメッセージを出力
      return res.status(500).json({ error: 'Error fetching users' });  // エラーレスポンスを返す
    }
    // ユーザー取得が成功した場合、ユーザーのリストを返す
    res.status(200).json(users);
  });
};

// ユーザー情報を更新するための関数
exports.updateUser = (req, res) => {
  // リクエストのパラメータからユーザーIDを取得し、ボディから更新するデータを取得
  const { id } = req.params;
  const { name, email, password } = req.body;

  // 新しいパスワードをハッシュ化する
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Hashing error:', err);  // ハッシュ化に失敗した場合、エラーメッセージを出力
      return res.status(500).json({ error: 'Error hashing password' });  // エラーレスポンスを返す
    }

    // データベースでユーザー情報を更新
    User.updateById(id, { name, email, password: hashedPassword }, (err, result) => {
      if (err) {
        console.error('Database error:', err);  // データベース操作に失敗した場合、エラーメッセージを出力
        return res.status(500).json({ error: 'Database error' });  // エラーレスポンスを返す
      }
      // ユーザー更新が成功した場合、成功メッセージを返す
      res.status(200).json({ message: 'User updated successfully!' });
    });
  });
};

// ユーザー情報をIDで取得するためのコントローラー関数
exports.getUserById = (req, res) => {
  const { id } = req.params;
  User.findById(id, (err, user) => {
      if (err) {
          console.error('Error fetching user:', err); // エラーログ
          return res.status(500).json({ error: 'Internal server error' });
      }
      if (!user) {
          console.log('User not found with ID:', id); // デバッグ用のログ
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
  });
};

// ユーザーを削除するための関数
exports.deleteUser = (req, res) => {
  // リクエストのパラメータから削除するユーザーIDを取得
  const { id } = req.params;

  // データベースからユーザーを削除
  User.deleteById(id, (err, result) => {
    if (err) {
      console.error('Database error:', err);  // データベース操作に失敗した場合、エラーメッセージを出力
      return res.status(500).json({ error: 'Database error' });  // エラーレスポンスを返す
    }
    // ユーザー削除が成功した場合、成功メッセージを返す
    res.status(200).json({ message: 'User deleted successfully!' });
  });
};
