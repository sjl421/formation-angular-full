//-----------------------------------------
// // #region Inference
// let test: number = 145;
// console.log(test);
// // #endregion


//-----------------------------------------
// //#region enums
// enum DIRECTIONS {
//     UP,
//     DOWN,
//     LEFT,
//     RIGHT
// }
// let up = DIRECTIONS.UP;
// console.log(up);
// //#endregion


//-----------------------------------------
// //#region functions
// function isPair(x: number): boolean {
//     return x % 2 === 0;
// }
// console.log(isPair(2));

// function isPair2(x: number | string): boolean {
//     if (typeof x !== 'number') {
//         x = parseInt(<string>x, 10);
//     }
//     return <number>x % 2 === 0;
// }
// console.log(isPair2(2));

// function hello(t: Array<string>): Array<string> {
//     let out = [];
//     for (const item of t) {
//         out.push(item);
//         console.log(item);
//     }
//     return out;
// }
// hello(['hi', 'coucou', 'salut']);

// function isOdd(x: number, callback?: (num: number) => void): boolean {
//     if (callback) {
//         callback(x);
//     }
//     console.log(x % 2 !== 0);
//     return x % 2 !== 0;
// }
// isOdd(2, (num) => console.log(num));
// //#endregion


//-----------------------------------------
// //#region classes
// class Demo {
//     public a;
//     protected b;
//     private c;

//     constructor() { }

//     static demo() {
//         return 'coucou';
//     }
// }
// var d = new Demo();
// d.a = 1;
// console.log(d.a);
// console.log(Demo.demo());
// //#endregion


//-----------------------------------------
// //#region interfaces
// // definir la structure d'un objet que l'on passe en parametre
// interface IDemo {
//     x: number;
//     y: number;
//     hello: (data: string) => void;
// }

// class Demo {
//     public options: IDemo;
//     constructor(options: IDemo) {
//         this.options = options;
//     }
// }

// let demo = new Demo({
//     x: 2,
//     y: 2,
//     hello: (data: string) => console.log(data)
// });
// demo.options.hello('salut');
// //#endregion


//-----------------------------------------
// //#region namespaces
// // creee une self invoking function
// // pas indispensable si on travail avec les modules
// namespace Viveris {
//     let hello = 'salut'; // accessible uniquement dans le namespace
//     export class Demo {
//         constructor() { }
//     }
// }
// let demo = new Viveris.Demo();
// //#endregion


//-----------------------------------------
// //#region modules
// import Lib from './lib';
// let lib = new Lib();
// console.log(lib.hello());
// //#endregion


//-----------------------------------------
// //#region decorators
// // Les décorateurs permettent d'ajouter des annotations 
// // et une syntaxe de méta-programmation pour les déclarations de classe et les membres. 
// // Les décorateurs sont disponibles en tant que fonctionnalité expérimentale de TypeScript
// function decorator(target) {
//     console.log(target);
// }

// function decorator2(metadata) { // decorator factory
//     return function (target) { // decorator
//         // on peut faire des choses avec target et metadata
//         console.log(metadata, target);
//     }
// }

// // @decorator
// @decorator2({
//     selector: 'demo-component'
// })
// class Demo {
//     private _hello;
//     constructor() { this._hello = 'salut'; }
//     hello() { return this._hello; }
// }
// //#endregion


//-----------------------------------------
//#region vendors 
// importer une librairie tierce de nodeJS
// typescript ne connais pas la librairie (module) scroll-to
// il faut un fichier de declaration qui decrit comment fonctionne un module
import scrollTo from 'scroll-to';

scrollTo(500, 1200, {
    ease: 'out-bounce',
    duration: 1500
});

// Creer un fichier de declation pour jQuery peut prendre beaucoup de temps
// heureusement y a un outil --> @types
import * as $ from 'jquery';

$('#btn').click(function () {
    scrollTo(0, 0);
});
//#endregion