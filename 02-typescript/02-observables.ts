// 01-Observables.ts


//import {pipe} from "rxjs";

declare var require: any;
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct();


const numeros$ = rxjs.of(
    1,
    "Adrian",
    1,
    true,
    "Adrian",
    {nombre: 'Adrian'},
    1,
    [1,2,3],
    1,
    new Date()
);

console.log(numeros$);



numeros$
    .pipe(
        distinct(),
        map(
            (valorActual)=> {
                return {
                    data: valorActual
                };
            }
        )

    )
    .subscribe(
    (ok)=> {
        console.log('En ok', ok)
    },
    (error)=>{
        console.log('Error', error);
    },
    ()=>{
        console.log('Completado');
    })