目的：今後 TypeScript や React にスケールする為の準備段階
使用技術： JavaScript/CSS/HTML

<h1>HTML (ウェブページの構造)</h1>
HTML はウェブページの骨組みを作る言語です。表示されるコンテンツやその配置を定義します。

<h3>!DOCTYPE html</h3>: これはHTML5の文書であることをブラウザに伝えています。

<h3>html lang="ja"</h3>: この要素は、文書が日本語で書かれていることを示します。

<h3>head</h3>:

<h3>meta charset="UTF-8"</h3>>: 文字コードをUTF-8に設定し、様々な言語の文字が正しく表示されるようにします。

<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3>: ページをデバイスの画面幅に合わせて表示し、初期の拡大率を1.0に設定します。これにより、スマートフォンなどでも見やすい表示になります。
<h3>title</h3>: ウェブブラウザのタブやウィンドウに表示されるページのタイトルです。

<h3>link rel="stylesheet" href="style.css"</h3>: style.cssという外部のCSSファイルを読み込みます。このファイルにページの見た目を整える指示が書かれています。

<h3>body</h3>:
  <h3>div class="box"</h3>: 「シンプルなカウンター」というテキストを含む箱（コンテナ）を作成します。このdiv要素にはboxというクラス名が付けられており、CSSで特定のスタイルを適用できます。

  <h3>p id="counterDisplay"</h3>: 段落要素です。ここにカウンターの数値が表示されます。初期値は0です。counterDisplayというIDが設定されており、JavaScriptからこの要素を簡単に特定できます。

  <h3>button id="incrementButton"</h3>: カウンターの数を増やすためのボタンです。「Count Up」というテキストが表示されます。incrementButtonというIDが設定されており、JavaScriptからこのボタンのクリックを検出できます。
  
  <h3>script src="script.js"</h3>: script.jsという外部のJavaScriptファイルを読み込みます。このファイルに、カウンターの動作（ボタンを押したときに数値が変わるなど）を制御するコードが書かれています。

<h1>CSS (ウェブページの見た目)</h1>
CSS は HTML で作られたウェブページの見た目をデザインする言語です。色、サイズ、配置などを指定します。

- body: ページ全体のスタイルを設定しています。
  - width: 100%; height: 100vh;: ページの幅を 100%にし、高さをビューポート（表示領域）の高さに合わせます。
  - background: url(img/Stylish_Marble2025_4.png) no-repeat;: 背景に画像を設定し、繰り返し表示しないようにします。
  - background-size: cover;: 背景画像を要素全体を覆うように拡大縮小します。
  - font-family: Arial, sans-serif;: フォントを Arial に設定します。
  - text-align: center;: ページ内のテキストを中央揃えにします。
  - margin-top: 50px;: 上部に 50px の余白を設定します。
- #counterDisplay: カウンターの数字が表示される部分（<p id="counterDisplay">）のスタイルを設定しています。
  - font-size: 60px; font-weight: bold;: 文字のサイズを大きくし、太字にします。
  - color: #007bff;: 文字色を青色にします。
  - margin-bottom: 30px;: 下部に 30px の余白を設定します。
  - border: 3px solid #007bff; border-radius: 10px; padding: 20px;: 青色の 3px の境界線を付け、角を丸くし、内側に 20px の余白を設定します。
  - display: inline-block;: 要素をインライン要素（テキストのように並ぶ）として扱いながら、ブロック要素（幅や高さを持つ）の特性も持たせます。
  - min-width: 100px;: 最小幅を 100px に設定し、数字が増えてもレイアウトが崩れにくくします。
  - background-color: #e9f5ff;: 背景色を薄い水色にします。
- #incrementButton: 「Count Up」ボタン（<button id="incrementButton">）のスタイルを設定しています。
  - padding: 15px 30px;: ボタンの内側に上下 15px、左右 30px の余白を設定します。
  - font-size: 20px;: 文字のサイズを 20px にします。
  - cursor: pointer;: マウスカーソルをボタンの上に置いたときに、指の形に変わるようにします。
  - background-color: #6c757d;: ボタンの背景色を灰色にします。
  - color: white;: ボタンの文字色を白色にします。
  - border: none; border-radius: 8px;: 境界線をなくし、角を丸くします。
  - transition: background-color 0.3s ease;: 背景色の変化を 0.3 秒かけてゆっくりと行います（ホバー時のアニメーションのため）。
- #incrementButton:hover: ボタンにマウスが乗ったときのスタイルを設定しています。
  - background-color: #5a6268;: 背景色を少し濃い灰色にします。これにより、ボタンがクリックできることを視覚的に伝えます。
- .box: 「シンプルなカウンター」のテキストが入っている箱（<div class="box">）のスタイルを設定しています。
  - width: 720px; height: 480px;: 幅 720px、高さ 480px のサイズにします。
  - margin: 13% auto 0;: 上部に 13%の余白を設定し、左右を自動にして中央に配置します。
  - display: flex; align-items: center; justify-content: center;: フレックスボックスを使って、中のテキストを中央に配置します。
  - color: #fff; font-size: 32px; font-weight: bold;: 文字色を白、サイズを 32px、太字にします。
  - position: relative;: 子要素の絶対位置の基準となります。
  - transition: 0.4s;: 0.4 秒かけて変化するアニメーションを設定します。
- .box::before, .box::after: これらは擬似要素と呼ばれ、.box 要素の前後に仮想的な要素を追加します。ここでは、箱の角に装飾的な線を描くために使われています。
  - content: "";: 擬似要素の中身は空です。
  - width: 50px; height: 50px;: 幅と高さを 50px にします。
  - border-top: 2px solid rgba(255, 255, 255, 0.5); border-left: 2px solid rgba(255, 255, 255, 0.5); (::before): 上と左に半透明の白い境界線を設定します。
  - border-bottom: 2px solid rgba(255, 255, 255, 0.5); border-right: 2px solid rgba(255, 255, 255, 0.5); (::after): 下と右に半透明の白い境界線を設定します。
  - position: absolute;: 親要素である.box の内部で自由に位置を決められるようにします。
  - top: -1px; left: -1px; (::before): 左上の角に配置します。
  - bottom: -1px; right: -1px; (::after): 右下の角に配置します。
  - transition: 0.4s; transition-delay: 0.5s;: 0.4 秒かけて変化し、0.5 秒の遅延後にアニメーションが始まります。
- .box:hover:before, .box:hover::after: .box 要素にマウスが乗ったときの、擬似要素のスタイルを設定しています。
  - width: 100%; height: 100%;: 幅と高さを.box 要素全体に広げます。
  - border-color: rgba(255, 255, 255, 0.3);: 境界線の色を少し透明度が高い白にします。
  - transition-delay: 0s;: アニメーションの遅延をなくします。
  - border-radius: 10px;: 角を丸くします。
- .box:hover: .box 要素にマウスが乗ったときのスタイルを設定しています。
  - background: rgba(255, 255, 255, 0.1);: 背景を半透明の白にします。
  - backdrop-filter: blur(15px);: 背景にある要素をぼかします（すりガラスのような効果）。
  - transition-delay: 0.3s;: 0.3 秒の遅延後にアニメーションが始まります。
  - border-radius: 10px;: 角を丸くします。

<h1>JavaScript (ウェブページの動作)</h1>
JavaScriptはウェブページに動きやインタラクティブな機能を追加するプログラミング言語です。
 * const counterDisplay = document.getElementById("counterDisplay");:

- document.getElementById("counterDisplay"): HTML 文書の中から ID が counterDisplay である要素（つまり、カウンターの数字が表示される<p>タグ）を見つけます。

- const counterDisplay = ...: 見つけた要素を counterDisplay という名前の定数（変更できない変数）に保存します。これで、JavaScript からこの要素にアクセスできるようになります。

- const incrementButton = document.getElementById("incrementButton");:

  - HTML 文書の中から ID が incrementButton である要素（つまり、「Count Up」ボタンの<button>タグ）を見つけて、incrementButton という定数に保存します。

- let count = 0;:

  - let count = 0;: count という名前の変数（後で値を変更できる変数）を宣言し、初期値として 0 を設定します。これがカウンターの現在の値を保持します。

- incrementButton.addEventListener("click", () => { ... });:

  - incrementButton.addEventListener("click", ...): incrementButton（「Count Up」ボタン）がクリックされたときに、指定された処理を実行するように設定します。

  - () => { ... }: これは「アロー関数」という書き方で、クリックされたときに実行される具体的な処理を記述する部分です。

  - count++;: count 変数の値を 1 増やします。例えば、count が 0 なら 1 に、1 なら 2 になります。

  - counterDisplay.textContent = count;: counterDisplay 要素（カウンターの数字が表示される場所）のテキスト内容を、現在の count 変数の値に更新します。これにより、ウェブページ上の数字が変化します。

<h1>【まとめ】</h1>
この3つのファイルを組み合わせることで、次のようなシンプルなカウンターが実現されています。

- HTML がページの構造を作り、カウンターの数字を表示する場所とボタンを準備します。

- CSS がそのカウンターとボタン、そして背景の見た目を美しく整えます。

- JavaScript がボタンがクリックされたときに、カウンターの数字を増やし、HTML に表示されている数字を更新する、という動きをつけます。

特に、box 要素にホバー（マウスが乗る）した際のアニメーションは、::before と::after 擬似要素を使って、角から線が伸びて箱全体を囲むような動きと、背景がぼやける効果を組み合わせています。
