# Svelte Kit Todo App

This is a simple Todo application built with Svelte Kit and styled with Tailwind CSS.

## Installation

First, install the dependencies:

```bash
npm install
```

Then, start the development server:

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see the app running.

## Structure

The main files of this application are:

- `src/routes/index.svelte`: The home page of the application.
- `src/routes/todo.svelte`: The main Todo page.
- `src/components/TodoItem.svelte`: The component for individual Todo items.
- `src/components/TodoList.svelte`: The component for the list of Todo items.
- `src/components/AddTodo.svelte`: The component to add new Todo items.
- `src/lib/store.js`: The Svelte store for managing the state of the Todo list.

## Usage

On the Todo page, you can add new Todo items using the input field and the "Add" button. You can mark items as completed by clicking on them, and you can delete items using the "Delete" button.

## Building

To create an optimized version of the app:

```bash
npm run build
```

## Deploying

After building the app, you can deploy it to any static file hosting service.