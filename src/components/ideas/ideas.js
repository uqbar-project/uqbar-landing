import wollokMobileImg from './imgs/wollok_mobile_icon.jpeg'
import laboFuncionesImg from './imgs/labo_funciones_icon.png'
import linterImg from './imgs/linter.png'
import autocompleteImg from './imgs/autocomplete.png'
import testRunnerImg from './imgs/test_runner.png'
import consoleImg from './imgs/console.png'
import quickFixesImg from './imgs/quickFixes.png'
import diagramsImg from './imgs/diagrams.png'
import debuggerImg from './imgs/debugger.png'
import typeSystemImg from './imgs/typeSystem.png'
import gameWebImg from './imgs/gameWeb.png'

// Contexts
const wollokContext = "Wollok es un lenguaje de programación y entorno de desarrollo integrado (IDE) para ser utilizado en el dictado de materias iniciales de programación orientada a objetos con la capacidad de ir agregando conceptos de forma incremental y programando desde el primer día."

const linterContext = `${wollokContext} Actualmente nos encontramos migrando la tecnología de base (IDE + Lenguaje) de la versión actual realizada sobre Eclipse a una basada en Language Server Protocol (LSP) en TypeScript para poder usarse desde, por ejemplo, VSCode. Esto implica además el desarrollo de todas las herramientas presentes en la versión actual.`

const gameContext = `${wollokContext} Además, Wollok cuenta con una herramienta que permite el desarrollo de videojuegos básicos llamada Wollok Game. En los últimos años estuvimos desarrollando un cliente web capaz de poder correr estos juegos desde un navegador, sin necesidad de instalarse el entorno de desarrollo.`

const mobileContext = `${wollokContext} A modo de prueba, comenzamos a desarrollar Wollok Mobile, una aplicación que permite crear y ejecutar programas (en forma NO textual) desde un dispositivo móvil. Éste es un proyecto nuevo, desarrollado en React Native, que nos permitirá investigar una forma alternativa de programar desde otros dispositivos.`

const laboContext = "Este proyecto fue creado con la intención de familiarizarse con el paradigma de programación Funcional. Consiste en visualizar las funciones y valores como bloques que se van encastrando, permitiendo entender la estructura de las expresiones más fácilmente que con texto. Cuenta con un chequeo de tipos, currificación posicional y reducción de algunas expresiones."

// Mentors
const alf = "Alfredo Sanzo - alfredo.sanzo@gmail.com"
const fer = "Fernando Dodino - fernando.dodino@gmail.com"
const ivo = "Ivan Jawerbaum - ivojawerbaum@gmail.com "
const nahue = "Nahuel Palumbo - nahuel.palumbo@gmail.com"
const nicoS = "Nicolás Scarcella - nscarcella@gmail.com"

// URLs
const linter = "https://github.com/uqbar-project/wollok-linter"
const wollokTS = "https://github.com/uqbar-project/wollok-ts"
const wollokClient = "https://github.com/uqbar-project/wollok-run-client"
const wollokMobile = "https://github.com/uqbar-project/wollok-mobile"
const laboFunciones = "https://github.com/uqbar-project/function-laboratory"

const ideas = [
    {
        name: "Wollok - Validador",
        img: linterImg,
        context: linterContext,
        goal: "El objetivo de esta idea es terminar de implementar todas las validaciones del lenguage en la nueva versión del mismo y poder mostrarlas (en más de un idioma) en el IDE.",
        url: linter,
        mentors: [ fer, nicoS, alf ]
    },
    {
        name: "Wollok - Autocompletado",
        img: autocompleteImg,
        context: linterContext,
        goal: "El objetivo aquí es desarrollar un módulo de sugerencias de autocompletado en el servidor LSP para poder ser consumido desde el IDE. Esto implica hacer búsqueda de mensajes, referencias, clases, objetos o palabras claves dependendiendo del contexto.",
        url: linter,
        mentors: [ fer, nicoS, alf ]
    },
    {
        name: "Wollok - Test Runner",
        img: testRunnerImg,
        context: linterContext,
        goal: "Wollok ya cuenta con una forma de definir y correr tests automatizados dentro del lenguaje. El objetivo es implementarlo como servicio LSP para poder ejecutar y visualizar los resultados de los tests desde el IDE.",
        url: linter,
        mentors: [ fer, nicoS, nahue ]
    },
    {
        name: "Wollok - Consola",
        img: consoleImg,
        context: linterContext,
        goal: "En la versión actual Wollok cuenta con una consola REPL que permite hacer pruebas manuales sobre el código. El objetivo es contar con una herramienta similar (REPL o archivo worksheet como Scala) en la nueva versión del servidor LSP para poder usarse desde los nuevos IDEs.",
        url: linter,
        mentors: [ fer, nicoS, nahue ]
    },
    {
        name: "Wollok - Quick fixes & Refactors",
        img: quickFixesImg,
        context: linterContext,
        goal: "El objetivo de esta idea es brindar ayuda para resolver los problemas detectados en el código (quick fixes) sugiriendo alternativas ya conocidas para editar el código de manera automática. De forma análoga, queremos ofrecer la posibilidad de hacer cambios al código de manera orgánica (refactors), como por ejemplo: renombrar algún elemento y sus usos, mover métodos entre entidades.",
        url: linter,
        mentors: [ fer, nicoS, alf ]
    },
    {
        name: "Wollok - Diagramas",
        img: diagramsImg,
        context: linterContext,
        goal: "Actualmente Wollok cuenta con varios diagramas que permiten visualizar el estado de los objetos vivos (dinámico) y del código que se está desarrollando (estático). El objetivo es tener estas dos herramientas, que ayudan en la compresión de los conceptos, disponibles para VSCode.",
        url: linter,
        mentors: [ fer, nicoS, alf ]
    },
    {
        name: "Wollok - Debugger",
        img: debuggerImg,
        context: linterContext,
        goal: "El objetivo aquí es implementar un módulo en el servidor LSP que ofrezca la posibilidad de debuggear la ejecución de un programa. Actualmente la implementación del lenguaje ya cuenta con una API para poder debuggear su ejecución y tenemos hecha una prueba de concepto sobre esto.",
        url: linter,
        mentors: [ fer, nicoS, nahue ]
    },
    {
        name: "Wollok - Sistema de tipos",
        img: typeSystemImg,
        context: linterContext,
        goal: "Wollok es un lenguaje de tipado dinámico sin notaciones de tipos en su sintaxis. La idea es tener una primera versión de un sistema de tipos que infiera, de manera estática, el tipo de las variables y expresiones en base al uso que se le da. Esta información debería ser brindada por el servidor LSP para poder visualizarse en el IDE.",
        url: wollokTS,
        mentors: [ nahue, nicoS ]
    },
    {
        name: "Wollok Game Web",
        context: gameContext,
        img: gameWebImg,
        goal: "El objetivo de esta idea es seguir con el desarrollo del cliente web para poder ejecutar todos los juegos desarrollados en el IDE. Esto implica mejorar algunos temas de performance, descubrir comportamientos extraños comparados con la versión del IDE y mejorar en la interfaz de usuario del sitio.",
        url: wollokClient,
        mentors: [ nahue, nicoS ]
    },
    {
        name: "Wollok Mobile",
        context: mobileContext,
        img: wollokMobileImg,
        goal: "Como este es un proyecto nuevo y a prueba, hay varias líneas de trabajo. El objetivo principal es probar la aplicación y mejorar la forma propuesta para crear programas: visualización de entidades y métodos, armado de expresiones, navegación y layout.",
        url: wollokMobile,
        mentors: [ nahue, ivo ]
    },
    {
        name: "Laboratorio de Funciones",
        context: laboContext,
        img: laboFuncionesImg,
        goal: "El objetivo de esta idea es continuar con el desarrollo de algunas funcionalidades como: definición de funciones propias, mejorar la visualización de errores, terminar la biblioteca de funciones básicas y sus reducciones",
        url: laboFunciones,
        mentors: [ nahue, alf ]
    },
]

export default ideas