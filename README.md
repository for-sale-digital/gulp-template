# Gulp Template

Use this template to adopt new gulp based projects. This grunt template was mainly built to compile JS and SCSS assets.

**Table of Contents**

-   [⚙️ Workflow](#workflow)
    -   [Branching](#branching)
    -   [Branch-Overview](#branch-overview)
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

The `develop` branch is the default branch. Whenever we decide to deploy to production, we merge `develop` into `master`. The `master` branch is protected and we only merge code from `develop` into `master`. Developers should create `feature/` - branches to merge code into `develop`. Those branches should be named like this : `feature/JIRA-TICKET_some-comment`. It is also possible to prefix them with `hotfix/...` (for any kinds of bugs) or `chore/...` (refactorings, unit tests, update dependecies etc.)

### Branch Overview

| Branch                                | Description                                                                                                                                                                                                                                                                                       |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `master`                              | Deployed to production.                                                                                                                                                                                                                                                                           |
| `develop`                             | The working branch which gets deployed to staging environment (called _perf_). New features set to be launched will be merged here for a final production-readyness test.                                                                                                                         |
| `BRANCH_TYPE/JIRA-TICKET_description` | The BRANCH_TYPE should be one of `feature` or `hotfix` or `chore`. A feature branch for each new feature being added to the application. This branch should only temporarily exist until the changes has been launched to production. Please remove them autonomous when your PR has been merged. |

## Development

We're using [NPM](https://www.npmjs.com/) as our package manager and [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) _([`airbnb/javascript Style Guide`](https://github.com/airbnb/javascript) specifically)_ & [stylelint](https://stylelint.io/) to automatically format all code using [`lint-staged`](https://github.com/okonet/lint-staged). It's also recommended to have a [linter](#linting) active in your editor, to ensure common coding styleguides and speed up your own development.

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
      <td><code>gulp</code></td>
      <td>Compiles and lints all assets.</td>
    </tr>
    <tr>
      <td><code>gulp watch</code></td>
      <td>Compiles and lints all assets – and keeps watching for further changes.</td>
    </tr>
    <tr>
      <td><code>gulp --production</code></td>
      <td>Compiles all assets without linting.</td>
    </tr>
  </tbody>
</table>

### Commiting

For committing, we are following the [Conventional Commits specification](https://www.conventionalcommits.org/). The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
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
