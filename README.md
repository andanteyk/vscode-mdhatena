# vscode-mdhatena

通常の Markdown をはてなブログ用に変換する VSCode 拡張

https://twitter.com/andanteyk/status/1642782663101775872

## How to use

`Ctrl+Shift+P` → `Markdown to HatenaBlog md`

変換されたテキストがクリップボードにコピーされるので、はてなブログの投稿画面に貼り付けてください。

デフォルトでは下記の処理が行われます。

* `$` / `$$` 数式を `[tex:]` 記法に変換
* 行末にスペース 2 個を追加して改行をテキスト通りにする

## Extension Settings

設定で置換の挙動を変更できます。  
奇数行に置換前、偶数行に置換後のテキストを書いてください。上から順に処理されます。

