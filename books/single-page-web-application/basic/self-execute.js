var prison = (function() {
    var prisoner_name = 'mike mikowski',
        jail_term = '20 years term';

    return {
        prisoner: prisoner_name + ' - ' + jail_term,
        sentence: jail_term
    };
})();

console.log(prison.prisoner_name);

console.log(prison.prisoner);

console.log(prison.sentence);


// --------------------------------
console.log(prison.jail_term);
prison.jail_term = 'Sentence commuted.';
console.log(prison.jail_term);

console.log(prison.prisoner);

