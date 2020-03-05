// 即時関数（自己実行型無名関数構文）のおさらい
var prison = (function() {
    var prisoner_name = 'mike mikowski',
        jail_term = '20 years term';

    return {
        prisoner: prisoner_name + ' - ' + jail_term,
        sentence: jail_term
    };
})();

// アクセスできない（undefined）
console.log(prison.prisoner_name);
// returnで返却されたプロパティにはアクセスすることができる
console.log(prison.prisoner);
console.log(prison.sentence);

// --------------------------------

console.log(prison.jail_term);
// この文を実行した時点で、prison.jail_termというプロパティが作られる
// 即時関数で設定されたjail_termとは異なることに注意する
prison.jail_term = 'Sentence commuted.';
console.log(prison.jail_term);

console.log(prison.prisoner);
