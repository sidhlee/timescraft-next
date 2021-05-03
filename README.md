# TimesCraft - Next.js

## Adding a global SCSS file

1. Install `sass`

   ```bash
   npm install sass
   ```

2. Customize sass options

   `next.config.js`

   ```js
   const path = require('path');

   module.exports = {
     sassOptions: {
       includePaths: [path.join(__dirname, 'styles')],
     },
   };
   ```

3. Add global style to custom app component

   `_app.tsx`

   ```js
   import '../styles/globals.scss';
   ```

## Background-image path in CSS

When your site is running, `/public` becomes the root of the site. So you need to remove `/public` inside `url()`.

```css
.app {
  /* This will not work */
  background-image: url('/public/assets/images/bg.png');
}

.app {
  /* This will */
  background-image: url('/assets/images/bg.png');
}
```

## Using Redux in Next.js

- [Redux example](https://github.com/vercel/next.js/tree/canary/examples/with-redux)

## Troubleshooting

### Warning: Prop `className` did not match when using styled components

- [GitHub issue](https://github.com/vercel/next.js/issues/7322)
  Install styled-components babel plugin as a dev dependency and add it in the `.babelrc` file.

  ```bash
  npm install --save-dev babel-plugin-styled-components
  ```

  `.babelrc.json`

  ```json
  {
    "presets": ["next/babel"],
    "plugins": [
      [
        "babel-plugin-styled-components",
        {
          "ssr": true,
          "minify": true,
          "transpileTemplateLiterals": true,
          "pure": true,
          "displayName": true,
          "preprocess": false
        }
      ]
    ]
  }
  ```

### manifest.json: Manifest: Line: 1, column: 1, Syntax error

- [GitHub issue](https://github.com/vercel/next.js/issues/9621)
  Add `manifest.webmanifest` to `/public` folder.
