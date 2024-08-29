// ページ読み込み時にクエリパラメータからユーザーIDを取得
window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('id');
  console.log(userId);

  // ユーザーIDがある場合、ユーザー情報を取得してフォームに表示
  if (userId) {
      axios.get(`http://localhost:3000/api/users/${userId}`)
          .then(response => {
              const user = response.data;
              document.getElementById('userId').value = user.id;
              document.getElementById('updateName').value = user.name;
              document.getElementById('updateEmail').value = user.email;
          })
          .catch(error => console.error('Error:', error));
  }
};

// ユーザー情報更新フォームの送信イベントリスナーを設定
document.getElementById('updateUserForm').addEventListener('submit', updateUser);

// ユーザー情報を更新するための関数
function updateUser(e) {
  e.preventDefault();

  const id = document.getElementById('userId').value;
  const name = document.getElementById('updateName').value;
  const email = document.getElementById('updateEmail').value;
  const password = document.getElementById('updatePassword').value;

  axios.put(`http://localhost:3000/api/users/${id}`, {
      name: name,
      email: email,
      password: password
  })
  .then(response => {
      alert(response.data.message);
      window.location.href = 'index.html'; // 更新後、メインページに戻る
  })
  .catch(error => console.error('Error:', error));
}
