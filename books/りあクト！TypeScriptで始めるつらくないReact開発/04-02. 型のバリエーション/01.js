var n = 3;
//n = "foo";    // error TS2322: Type '"foo"' is not assignable to type 'number'.
if (n) {
    console.log('`n` is true');
}
// strictNullChecks: off
n = null;
