const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default;
const types = require('@babel/types')

const sourceCode = `
  console.log(123)
`

const ast = parser.parse(sourceCode)

traverse(ast, {
  CallExpression(path, state) {
    // path.
  }
})