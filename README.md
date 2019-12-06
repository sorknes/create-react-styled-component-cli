# Create React Component

This `create-react-styled-component` CLI will create a JSX functional component
and a styled-component file. We also included some custom imports for
design tokens and config files in the styled-component to help you on your way.

```code
How to use:
create-react-styled-component <name> [option]

Options:
-V, --version     output the version number
-t, --tag [type]  tag type [default: div]
-h, --help        output usage information
```

## Install

```code
npm i -g create-react-styled-component-cli
```

## Example

```code
create-react-styled-component Link -t a
```

Will create this structure

```code
Link
  |-- Link.jsx
  |-- style.js
```

Content of Link.jsx

```jsx noeditor
// Link component
// ----------------------------------------------------------------------------

import React from "react";
import { string, bool, oneOf, node } from "prop-types";

import { LinkStyle } from "./styles";

const propTypes = {
  /** Add prop-types here */
  propName: string
};

const defaultProps = {
  /** Add default prop-types here */
  propName: "your-value-here"
};

const Link = props => {
  const { children, ...rest } = props;

  return <LinkStyle {...rest}>{children}</LinkStyle>;
};

export default Link;

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
```

Content of styles.js

```js noeditor
// Style for Link component
// ----------------------------------------------------------------------------

import styled from "styled-components";

// Tokens
import { TOKEN_NAME } from "../../utilities/tokens/TOKEN_NAME";

// Configs
import { space } from "../../utilities/config/space";
import { typeScale } from "../../utilities/config/space";

export const LinkStyle = styled.a`
  /* Add style here */
`;
```
