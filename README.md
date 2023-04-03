# vscode-mdhatena

通常の Markdown をはてなブログ用に変換する VSCode 拡張

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ふつうの markdown → はてなブログ版 md への変換が毎度手間だったので、ついに vscode の拡張機能を作ってみるなど <a href="https://t.co/D07N5RNb9x">pic.twitter.com/D07N5RNb9x</a></p>&mdash; Andante (@andanteyk) <a href="https://twitter.com/andanteyk/status/1642782663101775872?ref_src=twsrc%5Etfw">April 3, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## How to use

`Ctrl+Shift+P` → `Markdown to HatenaBlog md`

変換されたテキストがクリップボードにコピーされるので、はてなブログの投稿画面に貼り付けてください。

デフォルトでは下記の処理が行われます。

* `$` / `$$` 数式を `[tex:]` 記法に変換
* 行末にスペース 2 個を追加して改行をテキスト通りにする

## Extension Settings

設定で置換の挙動を変更できます。  
奇数行に置換前、偶数行に置換後のテキストを書いてください。上から順に処理されます。

