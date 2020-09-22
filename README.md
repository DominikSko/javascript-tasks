

"test:js": "eslint js/", zabrany z jsona aby nie blokowal npm run watch :)
z jasona usuniety eslint:
"eslint": "^6.8.0",
    "eslint-plugin-react": "^7.19.0",

i html validate:
 "html-validate": "^2.8.0",


ze skryptów usunięte

"test": "npm-run-all test:*",
"test:html": "html-validate *.html",
"test:scss": "stylelint sass/",
"test": "npm-run-all test:*",
    "build": "npm-run-all build:* test",
