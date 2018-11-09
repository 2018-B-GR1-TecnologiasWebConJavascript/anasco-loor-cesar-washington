// 01-Observables.ts
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const numeros$ = rxjs.of(1, "Adrian", true, { nombre: 'Adrian' }, [1, 2, 3], new Date());
console.log(numeros$);
numeros$
    .pipe(map(() => {
    return false;
}))
    .subscribe((ok) => {
    console.log('En ok', ok);
}, (error) => {
    console.log('Eroor', error);
}, () => {
    console.log('Completado');
});
