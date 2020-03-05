
var prison = (function() {
    var prisoner_name = 'Mike Mikowski',
        jail_term = '20 years term';
        
    return {
        prisoner: function() {
            return prisoner_name + ' - ' + jail_term;
        },
        setJailItem: function(term) {
            jail_term = term;
        }
    }; 
})();

console.log(prison.prisoner());

prison.setJailItem('Sentence commuted');

console.log(prison.prisoner());
