// new Vue({ })で空のビューインスタンス作成。var app =はつけてもつけなくてもいい。慣例としてappやvmが使われる。ビューインスタンスを変数化（var 変数名)することでコンソールからアクセスできる
var app = new Vue({ 
  // #appの部分が対象
  el: '#app',
  data:{
    message: 'Hello,Vue.js!',
    // ◆チェックボックス（単体）→boolean
    checked: false,
    // ◆チェックボックス(複数) →配列
    colors:[],
    // ◆ラジオボタン →文字列
    color:'',
    // ◆セレクトボックス（単体）→文字列
    selected: '',
    // ◆セレクトボックス（複数）→配列
    selected2: [],
    // ◆修飾子.lazy
    message2:'',
    // ◆修飾子.trim
    message3:'',
    // ◆修飾子.number
    age1: 0,
    age2: 0


  }
  // ,
  // methods:{



  // }
})