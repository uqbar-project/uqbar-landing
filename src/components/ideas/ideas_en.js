import { easy, hard, medium } from './difficulties'
import images from './images'
import { alf, fer, ivo, juan, nahue, nicoS } from './mentors'
import { laboFunciones, lspIDE, wollokClient, wollokMobile, wollokTS } from './repos'

const { wollokMobileImg, laboFuncionesImg, linterImg, autocompleteImg, testRunnerImg, consoleImg, quickFixesImg, dynamicDiagramImg, staticDiagramImg, debuggerImg, typeSystemImg, gameWebImg } = images

// Contexts
const wollokContext = "Wollok is not only a programming language but also an IDE (Integrated Development Environment) specially designed for teaching initial OOP courses. It is a great tool to incrementally add every OO concept, allowing the students to program from the beginning."

const lspIdeContext = `${wollokContext} Now we are migrating the base technology (IDE + language) from current version develop over Eclipse to a Language Server Protocol (LSP) server built in TypeScript to be used from modern IDEs like VSCode. This also implies the development of all the tools present in the current version.`

const gameContext = `${wollokContext} In addition, Wollok has a tool that allows the development of basic video games, Wollok Game. In recent years, we were developing a web client to be able to run these games from a browser, without the need to install the development environment.`

const mobileContext = `${wollokContext} This year we start to develop Wollok Mobile. This app allows you to create and run programs (in non-textual way) from a mobile device. It is a new project, developed in React Native, that will allow us to investigate an alternative way of programming from other devices.`

const laboContext = `This project was creted to become familiar with Function programming paradigm. With it, you are able to visualize functions and values as blocks that you can move and connect with each other, allowing to understand the structure of expressions more easily than with text. Its features are: type checking, positional currying, and reduction of some expressions.`

const lspIdeSkills = {
    required: 'Experience with the object-oriented paradigm.',
    preferred: 'Have used Typescript or Javascript. Be familiar with explicit typed languages.'
}

const reactSkill = {
    required: lspIdeSkills.required,
    preferred: 'Have used ReactJS (or similar) preferably with Typescript.'
}

const ideas = [
    {
        name: "Wollok - Validator",
        img: linterImg,
        context: lspIdeContext,
        goal: "The goal here is to finish the development of all language validations in the new version of it and be able to show them (internationalized) in the IDE.",
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: easy,
        mentors: [fer, nicoS, alf]
    },
    {
        name: "Wollok - Autocomplete",
        img: autocompleteImg,
        context: lspIdeContext,
        goal: "The goal is to develop a module for autocomplete suggestions in the LSP server to be consumed from an IDE. This involves messages, references, classes, objects, or keywords searchs depending on the context.",
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: medium,
        mentors: [fer, nicoS, alf]
    },
    {
        name: "Wollok - Test Runner",
        img: testRunnerImg,
        context: lspIdeContext,
        goal: "Wollok already has a way to define and run automated tests within the language. The goal is to develop it as a LSP service to be able to execute and visualize the results of the tests inside the IDE.",
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: medium,
        mentors: [fer, nicoS, nahue]
    },
    {
        name: "Wollok - Console",
        img: consoleImg,
        context: lspIdeContext,
        goal: "The current version Wollok has a REPL console that allows manual testing of programs. The goal is to develop a similar tool (REPL or Scala worksheet file) for the new version of the LSP server to be consumend from the IDE.",
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: medium,
        mentors: [fer, nicoS, nahue]
    },
    {
        name: "Wollok - Quick fixes & Refactors",
        img: quickFixesImg,
        context: lspIdeContext,
        goal: "The goal of this idea is to provide help in resolving detected problems in the code (quick fixes) suggesting already known alternatives to edit the code automatically. Similarly, we want to offer the possibility to make changes to the code in an organically way (refactors), for example: renaming elements and its uses, move methods.",
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: medium,
        mentors: [fer, nicoS, alf]
    },
    {
        name: "Wollok - Dynamic diagram",
        img: dynamicDiagramImg,
        context: lspIdeContext,
        goal: "Currently Wollok has a live object diagram that allows you to visualize the objects in the environment and the referencies between them. The goal is to have this diagram, very useful during the first steps in OOP, available for VSCode.",
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: medium,
        mentors: [fer, nicoS, alf]
    },
    {
        name: "Wollok - Static diagram",
        img: staticDiagramImg,
        context: lspIdeContext,
        goal: `Wollok currently has a static (or "class") diagram that allows you to visualize the program entities and their relationships (inheritance, association, use). The goal of this task is to have this diagram, useful for understanding concepts and design communication, available for VSCode.`,
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: medium,
        mentors: [fer, nicoS, alf]
    },
    {
        name: "Wollok - Debugger",
        img: debuggerImg,
        context: lspIdeContext,
        goal: "The goal here is to implement a module in the LSP server that provides the ability to debug the execution of a Wollok program. The current implementation of the language already has an API for debug its execution and we have made a functional proof of concept that you can try in https://game.wollok.org/debugger",
        url: lspIDE,
        skills: lspIdeSkills,
        difficulty: medium,
        mentors: [fer, nicoS, nahue]
    },
    {
        name: "Wollok - Type system",
        img: typeSystemImg,
        context: lspIdeContext,
        goal: "Wollok is a dynamically typed language with no type notations in its syntax. The idea is to have a first version of a type system that statically infers the type of variables and expressions based on their use. This information should be provided by the LSP server in order to be displayed in the IDE.",
        url: wollokTS,
        skills: lspIdeSkills,
        difficulty: hard,
        mentors: [nahue, nicoS]
    },
    {
        name: "Wollok Game Web",
        context: gameContext,
        img: gameWebImg,
        goal: "The goal here is to continue the development of the web client to be able to execute all the games developed from the IDE. This involves improving some performance issues, discovering strange behavior compared to the current IDE version (in Xtext), and improving the site's user interface.",
        url: wollokClient,
        skills: reactSkill,
        difficulty: medium,
        mentors: [nahue, nicoS]
    },
    {
        name: "Wollok Mobile",
        context: mobileContext,
        img: wollokMobileImg,
        goal: "As this is a new and trial project, there are many lines of work. The main objective is to test the application and improve the proposed way to create programs: entities and methods visualization, expressions assembly, navigation and layout.",
        url: wollokMobile,
        skills: reactSkill,
        difficulty: medium,
        mentors: [nahue, ivo]
    },
    {
        name: "Function laboratory",
        context: laboContext,
        img: laboFuncionesImg,
        goal: "The objective of this idea is to continue with the development of some features such as: own functions definition, improve the display of errors, finish the library of basic functions and their reductions.",
        url: laboFunciones,
        skills: {
            required: 'Experience with the object-oriented and functional paradigms.',
            preferred: 'Have used Javascript and/or tools about programming with blocks.'
        },
        difficulty: easy,
        mentors: [juan, nahue, alf]
    },
]

export default ideas