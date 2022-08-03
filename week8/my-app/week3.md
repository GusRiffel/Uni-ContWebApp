

``` npm install --save-dev react-app-rewired customize-cra```

```js 

/** config-overrides.js */

const { useBabelRc, override} = require('customize-cra')

module.exports = override(
  useBabelRc()
);
```


And change scripts in package.json to like this: 


```js
"scripts": {
    "start": "react-app-rewired start start",
    "build": "react-app-rewired start build",
    "test": "react-app-rewired start test",
    "eject": "react-scripts eject"
  }
```

- ```npm install --save-dev babel-plugin-styled-components```

- ```npm install --save styled-components```

- ```import styled from 'styled-components';```


-   ```DaysComplete.js```   

```js const DaysCompleteHeading = styled.h2`
   text-align: center;
   color: #BC9CFF;
`

```

- Since this is a template literal we can easily adapt based on on props. 

  
- Consider adding animations to the days complete `https://styled-components.com/docs/basics#animations`


- Theming and global styles.
- styled-components has full theming support by exporting a <ThemeProvider> wrapper component. This component provides a theme to all React components underneath itself via the context API. In the render tree all styled-components will have access to the provided theme, even when they are multiple levels deep.



# Week 4 State and Navigation

