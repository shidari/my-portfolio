# 技術系自己紹介資料

---

## 目次

1. [フロントエンド開発で好きな技術・ツール](#フロントエンド開発で好きな技術・ツール)
2. [好みの技術、API、設計](#好みの技術api設計)
3. [最近試している技術](#最近試している技術)
4. [コンピュータサイエンスへの興味](#コンピュータサイエンスへの興味)
5. [システム開発における価値観](#システム開発における価値観)
6. [今後挑戦したいこと（業務）](#今後挑戦したいこと業務)
7. [今後挑戦したいこと（キャリア）](#今後挑戦したいことキャリア)
8. [好きな技術書・教材](#好きな技術書教材)
9. [最近のトレンド情報の収集方法](#最近のトレンド情報の収集方法)
10. [技術記事で主にお世話になった有名エンジニア](#技術記事で主にお世話になった有名エンジニア)

---

## フロントエンド開発で好きな技術・ツール

- React
  - UI = f(data) の考え方に共感
  - 小さなコンポーネントをレゴのように組み合わせる開発スタイルを好む
  - React Hooks APIの設計に魅力を感じている
    - 状態を持たない関数コンポーネントに、Hookという形で状態を持たせるという発想に強く惹かれた
    - **Custom
      Hook**の設計も経験があり、とにかく「コンポーネントを小さくする」ことを重視
      - Hooksは極力末端でのみ使い、**Context
        APIの多用は避ける**という設計方針を取っている

---

## 好みの技術、API、設計

### フロントエンド

- React Hooks / Fiber Architecture / Suspense に共感
- APIやアーキテクチャの構造美に魅力を感じる
- ユーザー視点で、小さく扱いやすいコンポーネント設計を重視
- 特に React Hooks
  に関しては、状態の管理を明示的にコンポーネントに付与できる点に惹かれた

### バックエンド

- 型安全なAPI設計（zodを活用）
- エラー制御に neverthrow や effect-ts を選択
- データ駆動型で例外を避け、処理の見通しやすさを重視
- 型ファースト設計を志向するが、**非同期処理の型扱いの難しさ**に直面することも多い

---

## 最近試している技術

- **effect-ts**\
  プログラムを分かりやすく、綺麗に書きたいと思っていて、その中でエフェクトシステムに出会った。Effectにすれば、非同期処理やリソース管理（close処理など）を共通のインターフェースで扱える。`acquire-release`
  APIで安全に処理できるのが良い。エラーも返り値の型として集約され、`Context`も明示的に型として扱える点に惹かれている。

  - **個人開発で導入経験あり**
    - 非同期処理が細かく分割しやすく、型により依存関係や注入の明示ができる点は非常に良い
    - 一方で **ボイラープレート的なコードがかなり増える**のが悩ましい
    - 実務導入には、エラーの抽象化やフレームワークとしての統一的な書き方の整備が必要そう

- **react-server**\
  Next.js は重すぎる印象があり、Remix は個人的に API が好みに合わないため、React
  Server Components に特化した軽量な `react-server`
  を試している。まだ触り始めた段階だが、file-based routing や React 19 の RSC
  が使えて便利。今後アダプターまわりなども試していきたい。

---

## コンピュータサイエンスへの興味

- 数学的背景を持つCS分野に強い関心
- 型理論が特に好き
  - 型ファーストでシステムの設計を行いたいと考えている
- 大堀淳さんの計算機科学チャンネルを愛読

---

## システム開発における価値観

- 意図が明確で保守しやすいコードを大切にする
- 「とりあえず動く」コードに頼らず、将来的な運用と改善を見据えた実装を重視
- 技術はあくまで**事業課題の解決手段**という視点で捉えている
- 継続的にお客様へサービス提供するために、**品質への意識は高く持っている**
- 参考URL:\
  https://hachibeechan.hateblo.jp/entry/done-is-better-than-perfect

---

## 今後挑戦したいこと（業務）

- **行政オープンデータの仕様策定・API設計**
- **行政システムの内製化・内製化支援**
- **企業の基幹業務システムの設計（まずは小さな社内ツールから）**

---

## 今後挑戦したいこと（キャリア）

- プロダクトマネージャーまたはEM（エンジニアリングマネージャー）として、システム開発とチーム運営に取り組みたい
- 技術に対する好奇心を持ちつつ、**あくまで技術は事業の課題を解決する手段**という現実主義で進めたい
- HaskellやRustのスキルを磨き、バックエンド実装に活かしたい

---

## 好きな技術書・教材

詳細は[こちら](./Books.md)をご覧ください。

---

## 最近のトレンド情報の収集方法

- **O'Reilly Radar Topics**\
  毎月更新される網羅的なテックトレンドのまとめで、最新動向を効率的に把握できる。\
  ▶️ [O'Reilly Radar Topics](https://www.oreilly.com/radar/topics/radar-trends/)

- **Cybozu Frontend Monthly**\
  フロントエンドに特化した情報が定期的に公開されている。YouTube動画もあり、記事ピックアップのセンスが自分の好みに合っている。\
  ▶️ [Cybozu Frontend Monthly](https://cybozu.github.io/frontend-monthly/)

---

## 技術記事で主にお世話になった有名エンジニア

- **uhyo さん**\
  TypeScriptやReactに関する記事や書籍が非常に充実しており、特に型レベルの設計やReactのライフサイクルに関する理解を深める際に多く参照させていただいた。文章が明快で、背景や設計意図の説明が丁寧なため、継続的に学習の助けになっている。

  - [React の use の設計をRFCから理解する](https://zenn.dev/uhyo/articles/react-use-rfc)
  - [React 17 の useEffect 仕様変更について](https://zenn.dev/uhyo/articles/react17-useeffect)
  - [Next.js なしで学ぶ React Server Components](https://zenn.dev/uhyo/books/rsc-without-nextjs)
  - [React Concurrent Hands-on](https://zenn.dev/uhyo/books/react-concurrent-handson)
  - [書籍『プロを目指す人のためのTypeScript入門』](https://gihyo.jp/book/2022/978-4-297-12747-3)
  - [型の強さを活かした TypeScript のコーディング](https://qiita.com/uhyo/items/de4cb2085fdbdf484b83)
  - [TypeScript で型レベルの map をやってみる](https://qiita.com/uhyo/items/6a3b14950c1ef6974024)
  - [useCallback の理解を深めるカスタム Hook の実装例](https://blog.uhy.ooo/entry/2021-02-23/usecallback-custom-hooks/)

- **Dan Abramov さん**\
  React の設計思想や使い方の背景を深く掘り下げた技術記事が多く、特に `useEffect`
  の正しい使い方や落とし穴についての解説は React
  に対する理解を深める上で非常に参考になった。

  - [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
