# GitHub Actions トリガーアプリ

このプロジェクトでは、ユーザーがブラウザからGitHub Personal Access Token (PAT) を入力し、GitHub Actionsワークフローを手動でトリガーできるアプリケーションを提供します。ワークフローがトリガーされると、"hello github" というメッセージを含んだファイルが生成され、ブラウザに結果が表示されます。

## 特徴

- ユーザーが入力したGitHub Personal Access Token (PAT) を使用して、ワークフローを手動でトリガーします。
- ワークフロー実行後、"hello github" というメッセージが記載されたファイルが生成されます。
- 生成された結果をブラウザで確認できます。

## 前提条件

このプロジェクトを実行するには、以下のものが必要です。

1. **GitHub Personal Access Token (PAT)**:
   - 以下の権限を持つトークンが必要です。
     - `repo`: リポジトリにアクセスするための権限
     - `workflow`: GitHub Actions ワークフローをトリガーするための権限

2. **GitHub リポジトリ**: 
   - このプロジェクトをホスティングするリポジトリ。

## プロジェクト構成

```
/my-github-actions-project
├── .github
│   └── workflows
│       └── hello.yml        # GitHub Actions ワークフローファイル
├── index.html               # フロントエンド (HTMLファイル)
├── script.js                # フロントエンド (JavaScriptファイル)
└── .gitignore               # Gitに不要なファイルをコミットしないための設定
```

## 動作概要

1. **ユーザーインターフェース**: ブラウザでユーザーがGitHub Personal Access Token (PAT) を入力します。
2. **GitHub Actions トリガー**: ユーザーがトークンを送信すると、JavaScriptを通じてGitHub API にリクエストが送信され、`hello.yml` のワークフローがトリガーされます。
3. **結果の生成とアップロード**: GitHub Actionsが実行され、"hello github" というメッセージを含む `result.txt` ファイルが生成され、アーティファクトとしてアップロードされます。
4. **結果の表示**: アーティファクトが取得され、"hello github" というメッセージがブラウザに表示されます。

## セットアップ手順

### 1. リポジトリをクローン

以下のコマンドでリポジトリをクローンします。

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

### 2. ワークフローファイルを作成

`.github/workflows/` ディレクトリに `hello.yml` という名前のファイルを作成し、GitHub Actionsワークフローを定義します。

### 3. フロントエンドの設定

`index.html` と `script.js` を適切に設定します。

### 4. Personal Access Token の生成

1. GitHubの[Personal Access Token (PAT)](https://github.com/settings/tokens) ページに移動します。
2. `repo` と `workflow` の権限を持つトークンを生成します。
3. トークンをコピーし、ブラウザで入力します。

### 5. アプリケーションの実行

1. `index.html` をブラウザで開きます。
2. Personal Access Token を入力し、「送信」ボタンを押すと、GitHub Actions がトリガーされます。
3. ワークフローが完了すると、"hello github" というメッセージが表示されます。

## セキュリティに関する注意

- **Personal Access Token (PAT) の管理**: トークンはGitHubアカウントの重要な情報です。第三者に漏れないように管理し、使用後は必要に応じてトークンを無効化してください。トークンが漏洩すると、リポジトリやアカウントに不正アクセスされる可能性があります。
- **最小限の権限を付与する**: トークンを生成する際には、必要最小限の権限（`repo` と `workflow` のみ）を付与するようにしてください。
- **HTTPS を使用する**: トークンを入力する際、通信を安全に保つために必ず HTTPS を使用してください。HTTP の場合、トークンが通信中に盗聴されるリスクがあります。
- **トークンの有効期限を設定する**: GitHubではトークンに有効期限を設定することができます。使用後、すぐに期限切れとなるような設定にしておくと、セキュリティリスクが低減します。

## ライセンス

このプロジェクトは MIT License に基づいてライセンスされています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。

---

これでREADMEが完成です。`YOUR_USERNAME` や `YOUR_REPO` を実際のリポジトリ名に置き換えてご利用ください。
