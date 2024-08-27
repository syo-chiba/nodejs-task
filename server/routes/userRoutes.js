// expressモジュールをインポート（Node.jsのWebフレームワーク）
const express = require('express');

// ユーザーに関連するコントローラをインポート（データベース操作を行う関数群）
const userController = require('../controllers/userController');

// expressのルーターを作成（HTTPリクエストに応じて異なる関数を呼び出すために使用）
const router = express.Router();

// 新しいユーザーを作成するためのPOSTリクエストを処理するルート
// '/users'エンドポイントに対してPOSTリクエストが送信された場合、userController.createUserを実行
router.post('/users', userController.createUser);

// すべてのユーザーを取得するためのGETリクエストを処理するルート
// '/users'エンドポイントに対してGETリクエストが送信された場合、userController.getUsersを実行
router.get('/users', userController.getUsers);

// ユーザー情報を更新するためのPUTリクエストを処理するルート
// '/users/:id'エンドポイントに対してPUTリクエストが送信された場合、userController.updateUserを実行
// ':id'は動的パラメータで、更新するユーザーのIDを指定
router.put('/users/:id', userController.updateUser);

// ユーザーを削除するためのDELETEリクエストを処理するルート
// '/users/:id'エンドポイントに対してDELETEリクエストが送信された場合、userController.deleteUserを実行
// ':id'は動的パラメータで、削除するユーザーのIDを指定
router.delete('/users/:id', userController.deleteUser);

// このルーターを他のファイルで使用できるようにエクスポート
module.exports = router;
