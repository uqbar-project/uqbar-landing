import { easy, hard, medium } from './difficulties'
import images from './images'
import { alf, fer, ivo, juan, nahue, nicoS } from './mentors'
import { laboFunciones, lspIDE, wollokClient, wollokMobile, wollokTS } from './repos'

const { wollokMobileImg, laboFuncionesImg, linterImg, autocompleteImg, testRunnerImg, consoleImg, quickFixesImg, dynamicDiagramImg, staticDiagramImg, debuggerImg, typeSystemImg, gameWebImg } = images

// Contexts
const wollokContext = "Wollok es un lenguaje de programación y entorno de desarrollo integrado (IDE) para ser utilizado en el dictado de materias iniciales de programación orientada a objetos con la capacidad de ir agregando conceptos de forma incremental y programando desde el primer día."

const lspIdeContext = `${wollokContext} Actualmente nos encontramos migrando la tecnología de base (IDE + Lenguaje) de la versión actual realizada sobre Eclipse a una basada en Language Server Protocol (LSP) en TypeScript para poder usarse desde, por ejemplo, VSCode. Esto implica además el desarrollo de todas las herramientas presentes en la versión actual.`

const gameContext = `${wollokContext} Además, Wollok cuenta con una herramienta que permite el desarrollo de videojuegos básicos llamada Wollok Game. En los últimos años estuvimos desarrollando un cliente web capaz de poder correr estos juegos desde un navegador, sin necesidad de instalarse el entorno de desarrollo.`

const mobileContext = `${wollokContext} A modo de prueba, comenzamos a desarrollar Wollok Mobile, una aplicación que permite crear y ejecutar programas (en forma NO textual) desde un dispositivo móvil. Éste es un proyecto nuevo, desarrollado en React Native, que nos permitirá investigar una forma alternativa de programar desde otros dispositivos.`

const laboContext = "Este proyecto fue creado con la intención de familiarizarse con el paradigma de programación Funcional. Consiste en visualizar las funciones y valores como bloques que se van encastrando, permitiendo entender la estructura de las expresiones más fácilmente que con texto. Cuenta con un chequeo de tipos, currificación posicional y reducción de algunas expresiones."

const lspIdeSkills = {
    required: 'Dominar el paradigma orientado a objetos.',
    preferred: 'Haber usado Typescript o Javascript. Estar familiarizado con lenguajes de tipado explícito.'
}

const reactSkill = {
    required: lspIdeSkills.required,
    preferred: 'Haber usado ReactJS (o similar) preferentemente con Typescript.'
}

const ideas = [
    {
        name: "Wollok - Validador",
        img: linterImg,
        context: lspIdeContext,
        goal: "El objetivo de esta idea es terminar de implementar todas las validaciones del lenguage en la nueva versión del mismo y poder mostrarlas (en más de un idioma) en el IDE.",
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: easy,
        mentors: [fer, nicoS, alf]
    },
    {
        name: "Wollok - Autocompletado",
        img: autocompleteImg,
        context: lspIdeContext,
        goal: "El objetivo aquí es desarrollar un módulo de sugerencias de autocompletado en el servidor LSP para poder ser consumido desde el IDE. Esto implica hacer búsqueda de mensajes, referencias, clases, objetos o palabras claves dependendiendo del contexto.",
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: medium,
        mentors: [fer, nicoS, alf]
    },
    {
        name: "Wollok - Test Runner",
        img: testRunnerImg,
        context: lspIdeContext,
        goal: "Wollok ya cuenta con una forma de definir y correr tests automatizados dentro del lenguaje. El objetivo es implementarlo como servicio LSP para poder ejecutar y visualizar los resultados de los tests desde el IDE.",
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: medium,
        mentors: [fer, nicoS, nahue]
    },
    {
        name: "Wollok - Consola",
        img: consoleImg,
        context: lspIdeContext,
        goal: "La versión actual Wollok cuenta con una consola REPL que permite hacer pruebas manuales sobre el código. El objetivo es contar con una herramienta similar (REPL o archivo worksheet como Scala) en la nueva versión del servidor LSP para poder usarse desde los nuevos IDEs.",
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: medium,
        mentors: [fer, nicoS, nahue]
    },
    {
        name: "Wollok - Quick fixes & Refactors",
        img: quickFixesImg,
        context: lspIdeContext,
        goal: "El objetivo de esta idea es brindar ayuda para resolver los problemas detectados en el código (quick fixes) sugiriendo alternativas ya conocidas para editar el código de manera automática. De forma análoga, queremos ofrecer la posibilidad de hacer cambios al código de manera orgánica (refactors), como por ejemplo: renombrar algún elemento y sus usos, mover métodos entre entidades.",
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: medium,
        mentors: [fer, nicoS, alf]
    },
    {
        name: "Wollok - Diagrama dinámico",
        img: dynamicDiagramImg,
        context: lspIdeContext,
        goal: "Actualmente Wollok cuenta con un diagrama de objetos vivos que permite visualizar los objetos que están en el ambiente y las referencias entre ellos. El objetivo de esta tarea es tener este diagrama, muy útil durante los primeros pasos de la POO, disponible para VSCode.",
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: medium,
        mentors: [fer, nicoS, alf]
    },
    {
        name: "Wollok - Diagrama estático",
        img: staticDiagramImg,
        context: lspIdeContext,
        goal: `Actualmente Wollok cuenta con un diagrama estático (o "de clases") que permite visualizar las entidades de un programa y sus relaciones (herencia, asociación, uso). El objetivo de esta tarea es tener este diagrama, útil en la compresión de conceptos y comunicación de un diseño, disponible para VSCode.`,
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: medium,
        mentors: [fer, nicoS, alf]
    },
    {
        name: "Wollok - Debugger",
        img: debuggerImg,
        context: lspIdeContext,
        goal: "El objetivo aquí es implementar un módulo en el servidor LSP que ofrezca la posibilidad de debuggear la ejecución de un programa. Actualmente la implementación del lenguaje ya cuenta con una API para poder debuggear su ejecución y tenemos hecha una prueba de concepto funcional en https://game.wollok.org/debugger.",
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: medium,
        mentors: [fer, nicoS, nahue]
    },
    {
        name: "Wollok - Sistema de tipos",
        img: typeSystemImg,
        context: lspIdeContext,
        goal: "Wollok es un lenguaje de tipado dinámico sin notaciones de tipos en su sintaxis. La idea es tener una primera versión de un sistema de tipos que infiera, de manera estática, el tipo de las variables y expresiones en base al uso que se le da. Esta información debería ser brindada por el servidor LSP para poder visualizarse en el IDE.",
        url: wollokTS,
        skills: lspIdeSkills,
        difficulty: hard,
        mentors: [nahue, nicoS]
    },
    {
        name: "Wollok Game Web",
        context: gameContext,
        img: gameWebImg,
        goal: "El objetivo de esta idea es seguir con el desarrollo del cliente web para poder ejecutar todos los juegos desarrollados en el IDE. Esto implica mejorar algunos temas de performance, descubrir comportamientos extraños comparados con la versión del IDE actual (en Xtext) y mejorar en la interfaz de usuario del sitio.",
        url: wollokClient,
        skills: reactSkill,
        difficulty: medium,
        mentors: [nahue, nicoS]
    },
    {
        name: "Wollok Mobile",
        context: mobileContext,
        img: wollokMobileImg,
        goal: "Como éste es un proyecto nuevo y a prueba, hay varias líneas de trabajo. El objetivo principal es probar la aplicación y mejorar la forma propuesta para crear programas: visualización de entidades y métodos, armado de expresiones, navegación y layout.",
        url: wollokMobile,
        skills: reactSkill,
        difficulty: medium,
        mentors: [nahue, ivo]
    },
    {
        name: "Laboratorio de Funciones",
        context: laboContext,
        img: laboFuncionesImg,
        goal: "El objetivo de esta idea es continuar con el desarrollo de algunas funcionalidades como: definición de funciones propias, mejorar la visualización de errores, terminar la biblioteca de funciones básicas y sus reducciones",
        url: laboFunciones,
        skills: {
            required: 'Dominar el paradigma orientado a objetos y las ideas del paradigma funcional.',
            preferred: 'Haber usado Javascript y/o herramientas de programación con bloques.'
        },
        difficulty: easy,
        mentors: [juan, nahue, alf]
    },
]

export default ideas