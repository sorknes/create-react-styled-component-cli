#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const program = require('commander')

function run(name, options) {
  const dir = path.resolve(name)
  const jsx = path.resolve(dir, name + '.jsx')
  const js = path.resolve(dir, 'styles' + '.js')
  const tag = options.tag || 'div'

  // Create styled component template
  const jsContent = `// Style for ${name} component
// ----------------------------------------------------------------------------

import styled from 'styled-components'

// Tokens
import { TOKEN_NAME } from '../../utilities/tokens/TOKEN_NAME'

// Configs
import { space } from '../../utilities/config/space'
import { typeScale } from '../../utilities/config/space'

export const ${name}Style = styled.${tag}\`
  /* Add style here */
\`
  `

  // Create jsx template with import styles
  const jsxContent = `// ${name} component
// ----------------------------------------------------------------------------

import React from 'react'
import { string, bool, oneOf, node } from 'prop-types'

import { ${name}Style } from './styles'

const propTypes = {
  /** Add prop-types here */
  propName: string,
}

const defaultProps = {
  /** Add default prop-types here */
  propName: 'your-value-here',
}

const ${name} = props => {
  const { children, ...rest } = props

  return (
    <${name}Style {...rest}>
      {children}
    </${name}Style>
  )
}

export default ${name}

${name}.propTypes = propTypes
${name}.defaultProps = defaultProps
  `

  fs.mkdirSync('./' + name)
  fs.writeSync(fs.openSync(js, 'w'), jsContent)
  fs.writeSync(fs.openSync(jsx, 'w'), jsxContent)

  console.log(`Your new component, ${name} is created with "${tag}" tag!`)
}

program
  .version('0.0.1')
  .option('-t, --tag [type]', 'tag type [default: div]')
  .arguments('<name>')
  .action(run)
  .parse(process.argv)
