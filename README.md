[![Build Status](https://travis-ci.org/patoi/svelte-component-library-template.svg?branch=master)](https://travis-ci.org/patoi/svelte-component-library-template) [![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/) ![](https://github.com/patoi/svelte-component-library-template/workflows/Auto%20merge%20Dependabot%20updates/badge.svg)

# Svelte Components template

**You can create your own component library to your applications with this template.**

A base for building Svelte _component library._

Original work is https://github.com/sveltejs/component-template

## Using

**On GitHub:**

`Use this template` button on top right.

Read more: [Creating a repository from a template](https://help.github.com/en/articles/creating-a-repository-from-a-template)

**CLI:**

1. Clone it with [degit](https://github.com/Rich-Harris/degit)

```bash
npx degit patoi/svelte-component-library-template svelte-component-library-template
cd svelte-component-library-template
npm install # or yarn
```

2. Add your component's code to [src/](./src/) as directory, e.g.: [src/HelloComponent/](./src/HelloComponent/) (or add your component directly to [src/](./src/)).

3. Export the new component to apps in [src/index.js](./src/index.js)

4. [src/test.js](./src/test.js) and [src/App.svelte](./src/App.svelte) are for testing purposes:

-   add component to the [src/App.svelte](./src/App.svelte)
-   add component's properties to [src/test.js](./src/test.js)

4. Create your test cases to your component:

-   add tests to [test/](./test/) directory

## Development

1. `npm install`

2. `npm run dev` :

-   **build components on change** and
-   **serves** from `public/` directory at `http://localhost:5000`
-   and **handling livereload**

3. `npm test` : test runner

For changing the view of the test page use [public/global.css](./public/global.css) and [public/index.html](./public/index.html)

## Using components in app

https://github.com/rollup/rollup-plugin-svelte#pkgsvelte

**Tip:** if you are a developer of the _component library,_ then you can install it _once_ as **devDependencies** to app with `npm i -D <path-to-your-components>` , all change will appear immediately if you use livereload in app.

Import _component library_ into your app in `App.svelte` :

```html
<script>
    import { ByeBye, Hello } from 'svelte-component-library-template'
    export let name
</script>

<Hello {name} />
<ByeBye {name} />
```

## Technical background

More: https://github.com/sveltejs/sapper-template/blob/master/README.md#using-external-components

-   `svelte` https://svelte.dev
-   `nightwatch` for testing: https://nightwatchjs.org
-   `eslint` and `prettier` for formatting and linting
-   `rollupjs` for bundling: https://rollupjs.org
