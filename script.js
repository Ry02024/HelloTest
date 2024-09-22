document.getElementById("submit-btn").addEventListener("click", function() {
    const token = document.getElementById("token-input").value;

    if (token === '') {
        document.getElementById("output").textContent = 'トークンを入力してください。';
        return;
    }

    // GitHub Actionsのワークフローをトリガーする
    fetch('https://api.github.com/repos/Ry02024/HelloTest/actions/workflows/hello.yml/dispatches', {
        method: 'POST',
        headers: {
            'Authorization': `token ${token}`,  // ユーザーが入力したトークンを使用
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ref: 'main'  // 実行するブランチ名を指定
        })
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("output").textContent = 'GitHub Actionsをトリガーしました。結果を取得しています...';
            return fetch('https://api.github.com/repos/Ry02024/HelloTest/actions/artifacts', {
                headers: {
                    'Authorization': `token ${token}`,  // 同じトークンを使ってアーティファクトを取得
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
        } else {
            document.getElementById("output").textContent = 'トークンが無効です。';
            throw new Error('Invalid token');
        }
    })
    .then(response => response.json())
    .then(data => {
        const artifact = data.artifacts.find(a => a.name === 'result');
        if (artifact) {
            document.getElementById("output").textContent = 'hello github';
        } else {
            document.getElementById("output").textContent = '結果が見つかりませんでした。';
        }
    })
    .catch(error => {
        document.getElementById("output").textContent = `エラーが発生しました: ${error.message}`;
    });
});
