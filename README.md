# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

🚀 Dev Stack

A modern and responsive technology stack explorer built with React.
Users can browse popular web development technologies, view their details, and add technologies to their personal stack.

✨ Features

🔎 Browse Technologies — Explore frontend, backend, database, language, styling, DevOps, and tool technologies.

➕ Add to Stack — Select technologies and build your own development stack.

📱 Responsive UI — Clean and modern design for desktop, tablet, and mobile screens.

🛠️ Technologies Used

⚛️ React

📘 TypeScript

🎨 Tailwind CSS

⚡ Vite

📦 JSON — Used as the technology data source

🎯 React Hooks — useState and useEffect

📖 React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript. It makes React components easier to write and understand.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component.

State is data managed inside a component that can change over time.

Props → received from parent

State → managed by the component

3. What does the useState hook do, and where did you use it in this project?

useState is used to create and manage changing data in a React component.

In this project, I used useState to manage the selected technologies/stack and update the UI when a technology is added or removed.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders or when specified data changes.

I used useEffect to load the technology JSON data when the application starts, so the technology cards can be displayed dynamically.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. A unique key helps React understand which item was added, removed, or changed.

Example:

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, when the stack is empty:

{selectedPlayers.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  selectedPlayers.map((player) => (
    <SelectedPlayerCard
      key={player.id}
      player={player}
    />
  ))
)}

The empty message is shown when there are no selected items.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props:

<PlayerCard
  technology={technology}
/>

A child can send an action back to the parent by calling a callback function passed through props:

<PlayerCard
  technology={technology}
  onAdd={handleAdd}
/>

Then the child can call:

onAdd(technology);

So, data normally flows from parent to child through props, while callback functions let the child communicate an action back to the parent.

👨‍💻 Project

Built as a React learning project to practice components, props, state, hooks, TypeScript, JSON data, list rendering, and conditional rendering.