// 'userForm'というIDを持つフォーム要素を取得し、formParamという変数に格納
const formParam = document.getElementById('userForm');

// フォームが送信されたときにaddUser関数を実行するイベントリスナーを設定
formParam.addEventListener('submit', addUser);

// ユーザーを追加するための関数
function addUser(e) {
    // フォームのデフォルトの送信動作（ページリロードなど）をキャンセル
    e.preventDefault();
    
    // フォームから入力された値を取得
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Axiosを使ってサーバーにPOSTリクエストを送信し、新しいユーザーを追加
    axios.post('http://localhost:3000/api/users', {
        name: name,          // ユーザー名
        email: email,        // ユーザーのメールアドレス
        password: password   // ユーザーのパスワード
    })
    .then(response => {
        // サーバーからの応答が正常な場合、メッセージを表示しユーザーリストを更新
        alert(response.data.message);
        getUsers();  // ユーザーリストを取得して表示する関数を呼び出す
    })
    .catch(error => console.error('Error:', error));  // エラーが発生した場合、コンソールにエラーを表示
}

// サーバーからユーザーリストを取得し、画面に表示するための関数
function getUsers() {
    // Axiosを使ってサーバーにGETリクエストを送り、ユーザーリストを取得
    axios.get('http://localhost:3000/api/users')
        .then(response => {
            const users = response.data;  // サーバーからの応答で取得したユーザー情報を格納
            const userList = document.getElementById('userList');  // ユーザーリストを表示するHTML要素を取得
            userList.innerHTML = '';  // ユーザーリストをリセット（クリア）

            // 各ユーザーをリストに追加して表示
            users.forEach(user => {
                const li = document.createElement('li');  // 新しいリストアイテムを作成
                li.textContent = `${user.name} (${user.email})`;  // ユーザーの名前とメールアドレスをテキストとして設定
                userList.appendChild(li);  // リストアイテムをユーザーリストに追加
            });
        })
        .catch(error => console.error('Error:', error));  // エラーが発生した場合、コンソールにエラーを表示
}

// ページが読み込まれたときにユーザーリストを取得して表示する
getUsers();
