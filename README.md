This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project is a skeleton application containing pre-configured common packages to help speed up the initial setup phase. It is designed to enforce strict versioning and coding practices, both within the codebase and Git, to make sure everything is consistent throughout the development lifecycle, no matter who works on it.

## Getting Started

First, run the development server:

```bash
yarn dev
```

## Included Packages

These packages are included and pre-configured:

- storybook
- tailwind
- husky
- prettier
- cross-env

## Storybook

If you are using Storybook, the `stories` directory is optional as the application will search for any files with the `.stories.tsx` extension.

In `.storybook/preview.js`, you'll find custom viewport options as well as support for NextImage. If you are using Tailwind, please make sure the viewport options match the screen options defined in `tailwind.config.js`.

## Git Hooks

There are a few Git hooks set up:

- commit-msg

There are a number of rules set in `commitlint.config.js`. These are designed to ensure developers write meaningful messages and that every commit is consistent. Commits must start with a type enum followed by a message. These can be customized to each project's specific needs.

- pre-commit

Husky will trigger the `yarn lint` command.

- pre-push

Husky will trigger the `yarn build` command.

If there is an error during the execution of a hook, the process will be aborted.

## VSCode

If you are using VSCode, you can find additional debug and setting configurations under `.vscode`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
