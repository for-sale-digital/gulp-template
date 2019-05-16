# Frontend Boilerplate

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fdc064bae9d643dfafc35a373ed7608e)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=for-sale-digital/frontend-boilerplate&utm_campaign=Badge_Grade)[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![conventionl-commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)

This [webpack](https://webpack.js.org/) based template was mainly built to lint and compile JavaScript and CSS assets.

Use this template to adopt new asset projects.

## Get Started Before Getting Started

1. Clone this repository
2. Configure the following files (at least replace `myproject` with your real project name):
    - [`/package.json`](/package.json)
    - [`/README.md`](/README.md) _(yes, you're already there)_
3. Enter your Jira project key with following `-` as _rules.parserPreset.parserOpts.issuePrefixes_ in [`/commitlint.config.js`](/commitlint.config.js), e. g. `DEV-` (used by commitlint to validate Jira issue ids in commit messages – you also can specify several project keys as array)
4. Proceed with the [**Get Started**](#get-started) manual below
5. Remove this `Frontend Boilerplate` header block right here
6. 🎉 Happy Coding!

---

✂️ **REMOVE ALL ABOVE** ✂️

---

# MyProject

This is a short description of my awesome new asset project.

**Table of Contents**

-   [⚙️ Workflow](#workflow)
    -   [Branching](#branching)
    -   [Branch Overview](#branch-overview)
-   [🛠 Development](#development)
    -   [**Get Started**](#get-started)
    -   [Build Commands](#build-commands)
    -   [Commiting](#commiting)
    -   [Versioning](#versioning)
-   [💻 User Guide](#user-guide)
-   [💅🏻 Linting](#linting)

---

## Workflow

> ⚠️ **Note:** Do regular pull requests in smaller chunks and let it be reviewed by other developers of your team. Only by that we can ensure code quality and catch possible errors early on! Please don't work in a forked codebase as downstream updates are intransparent.

### Branching

The `develop` branch is the default branch. Whenever we decide to deploy to production, we merge `develop` into `master`. The `master` branch is protected and we only merge code from `develop` into `master`. Developers should create `feature/` - branches to merge code into `develop`. Those branches should be named like this : `feature/JIRA_TICKET_ID-some-comment`. It is also possible to prefix them with `hotfix/...` (for any kinds of bugs) or `chore/...` (refactorings, unit tests, update dependecies etc.)

### Branch Overview

| Branch                                               | Description                                                                                                                                                                                                                                                                                       |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `master`                                             | Deployed to production.                                                                                                                                                                                                                                                                           |
| `develop`                                            | The working branch which gets deployed to staging environment. New features set to be launched will be merged here for a final production-readyness test.                                                                                                                                         |
| `{BRANCH_TYPE}/{JIRA_TICKET_ID}-{SHORT_DESCRIPTION}` | The BRANCH_TYPE should be one of `feature` or `hotfix` or `chore`. A feature branch for each new feature being added to the application. This branch should only temporarily exist until the changes has been launched to production. Please remove them autonomous when your PR has been merged. |

## Development

We're using [NPM](https://www.npmjs.com/) as our package manager and [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) _([`airbnb/javascript`](https://github.com/airbnb/javascript) specifically)_ & [stylelint](https://stylelint.io/) to automatically format all code using [`lint-staged`](https://github.com/okonet/lint-staged). It's also recommended to have a [linter](#linting) active in your editor, to ensure common coding styleguides and speed up your own development.

### Get Started

```sh
git clone https://git.fsd.li/myproject
cd myproject
npm i
```

### Build Commands

<table>
  <thead>
    <tr>
      <th>Command</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>npm run build:dev</code></td>
      <td>Lints and compiles all assets.</td>
    </tr>
    <tr>
      <td><code>npm run build:prod</code> <strong>or shorthand:</strong> <code>npm run prod</code></td>
      <td>Lints, compiles and minifies all assets.</td>
    </tr>
    <tr>
      <td><code>npm run watch:dev</code> <strong>or shorthand:</strong> <code>npm run dev</code></td>
      <td>`build:dev` + keep watching for further changes.</td>
    </tr>
    <tr>
      <td><code>npm run watch:prod</code></td>
      <td>`build:prod` + keep watching for further changes.</td>
    </tr>
    <tr>
      <td><code>npm run analyze:dev</code></td>
      <td>`build:dev` + opens Bundle Analyzer view in the browser.</td>
    </tr>
    <tr>
      <td><code>npm run analyze:prod</code></td>
      <td>`build:prod` + opens Bundle Analyzer view in the browser.</td>
    </tr>
  </tbody>
</table>

### Commiting

For committing, we are following the [Conventional Commits specification](https://www.conventionalcommits.org/). The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```
type(scope): issue-reference subject

body?

footer?
```

To make sure, that every commit is following the specification, `commitlint` will check your messages on commit.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/for-sale-digital/gulp-template/tags).

## User Guide

The user guide contains all detailed documentation on how to work and contribute as a team to this awesome project.

-   [🗂 Folder Structure](documentation/FOLDER_STRUCTURE.md)

## Linting

The codebase gets automatically linted and formatted on each `git commit` hook _(done via [husky](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged))_. No code can be pushed that doesn't meet the styleguide requirements.

### JavaScript

For JavaScript, we're using [ESlint](https://eslint.org/) for linting including the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

### CSS

[stylelint](https://stylelint.io/) (with the [`bjankord/stylelint-config-sass-guidelines`](https://github.com/bjankord/stylelint-config-sass-guidelines) ruleset) helps us to maintain a common CSS formating foundation.
