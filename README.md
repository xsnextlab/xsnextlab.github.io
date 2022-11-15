# XS Next Lab Website

Production version available [![here](https://xsnextlab.github.io)]

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/ 
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── articles/
│       │		└── article.md
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.js
├── .eslintrc.js
├── .prettierrc
└── package.json
```

Place assets in the `public/articleAssets/[articleNumber]/` directory, where article number is a one-indexed number of the article

Articles go inside the `src/pages/articles/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |