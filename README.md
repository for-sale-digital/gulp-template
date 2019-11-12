# Frontend Boilerplate

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fdc064bae9d643dfafc35a373ed7608e)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=for-sale-digital/frontend-boilerplate&utm_campaign=Badge_Grade)[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![conventionl-commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)

This [gulp](https://gulpjs.com/) based template was mainly built to lint and compile JavaScript and CSS assets.

Use this template to adopt new asset projects.

## Get Started Before Getting Started

1. Clone this repository
2. Configure the following files (at least replace `myproject` with your real project name):
    - [`/gulpconfig.js`](/gulpconfig.js)
    - [`/package.json`](/package.json)
    - [`/README.md`](/README.md) _(yes, you're already there)_
3. Enter your Jira project key with following `-` as _rules.parserPreset.parserOpts.issuePrefixes_ in [`/commitlint.config.js`](/commitlint.config.js), e. g. `TECH-` (used by commitlint to validate Jira issue ids in commit messages – you also can specify several project keys as array)
4. Some optionalities:
    - Add a [`shipitfile.js`](/shipit/shipitfile.js) to make this project [deployable](#deployment) – use a similar project as template
    - Configure [`composer.json`](/composer.json) to apply vendor dependencies, like style-cores
5. Proceed with the [**Get Started**](#get-started) manual below
6. Remove this `Frontend Boilerplate` header block right here
7. 🎉 Happy Coding!

---

✂️ **REMOVE ALL ABOVE** ✂️

---

# MyProject

This is a short description of an awesome new asset project.

**Table of Contents**

-   [🆕 **Getting Started**](#getting-started)
-   [⚙️ Workflow](#workflow)
    -   [Branching](#branching)
    -   [Branch Overview](#branch-overview)
-   [🛠 Development](#development)
    -   [Build Commands](#build-commands)
    -   [Commiting](#commiting)
    -   [Deployment](#deployment)
    -   [Release](#release)
-   [💻 User Guide](#user-guide)
-   [🕵 Linting](#linting)

---

## Getting Started

This project uses [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/). We assume in this documentation that all necessary tools are installed and that you are experienced in using them.

### Global Setup

Install `gulp-cli` globally and you'll have access to the `gulp` command anywhere on your system.

```sh
npm i gulp-cli -g
```

### Local Setup

Checkout git repository and set up initially.

```sh
git clone https://git.fsd.li/myproject
cd myproject
npm i gulp-cli -g
npm i && composer install
```

## Workflow

> ⚠️ **Note:** Do regular pull requests in smaller chunks and let it be reviewed by other developers of your team. Only by that we can ensure code quality and catch possible errors early on! Please don't work in a forked codebase as downstream updates are intransparent.

### Branching

The `master` branch is the default branch. Developers should create `feature/` - branches to merge code into `master`. Those branches should be named like this : `feature/JIRA_TICKET_ID-some-comment`. It is also possible to prefix them with `hotfix/...` (for any kinds of bugs) or `chore/...` (refactorings, unit tests, update dependecies etc.). Whenever we decide to deploy those changes to any stage, we merge them into `testing` for perf or into `master` for production stage.

### Branch Overview

| Branch                                               | Description                                                                                                                                                                                                                                                                                       |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `master`                                             | The working branch which gets deployed to production.                                                                                                                                                                                                                                             |
| `testing`                                            | The feature merging branch which gets deployed to perf environment.                                                                                                                                                                                                                               |
| `{BRANCH_TYPE}/{JIRA_TICKET_ID}-{SHORT_DESCRIPTION}` | The BRANCH_TYPE should be one of `feature` or `hotfix` or `chore`. A feature branch for each new feature being added to the application. This branch should only temporarily exist until the changes has been launched to production. Please remove them autonomous when your PR has been merged. |

## Development

We're using [npm](https://www.npmjs.com/) as our package manager and [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) _([`airbnb/javascript`](https://github.com/airbnb/javascript) specifically)_ & [stylelint](https://stylelint.io/) to automatically format all code using [`lint-staged`](https://github.com/okonet/lint-staged). It's also recommended to have a [linter](#linting) active in your editor, to ensure common coding styleguides and speed up your own development.

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
type(scope): subject

body?

issue-reference
```

To make sure, that every commit is following the specification, `commitlint` will check your messages on commit.

### Deployment

This project can be deployed with the following [FSD Jenkins Server](https://ci.fsd.li/) job triggering the [ShipIt](https://github.com/shipitjs) deployment script in this project (`shipit/shipitfile.js`):
[myproject_deploy-assets](https://ci.fsd.li/view/myproject_deploy-assets/)

### Release

There is a [Tool](https://github.com/conventional-changelog/standard-version) to automate the versioning and the changelog. It uses conventional changelog to automatically add the latest changelogs. Just type `npm run release` when you want to release after merging into `master` and it will automatically:

-   bump the version in metadata files (package.json, composer.json, etc).
-   use conventional-changelog to update CHANGELOG.md
-   commit package.json (et al.) and CHANGELOG.md
-   tag a new release

It will automatically determine the release type based on the commit message type.

**Most important commands:**
| Command | Description |
| --- | --- |
| `npm run release` | Bumps version automatically, updates files, commits these changes and creates a git tag. Follow the publish instruction afterwards. |
| `npm run release -- --dry-run` | Allows you to see what commands would be run, without committing to git or updating files. |
| `npm run release -- --release-as major` | If want to raise major version manually instead of automatically detecting it. |

For more information visit [conventional-changelog/standard-version](https://github.com/conventional-changelog/standard-version).

## User Guide

The user guide contains all detailed documentation on how to work and contribute as a team to this awesome project.

-   [🗂 Folder Structure](documentation/FOLDER_STRUCTURE.md)

## Linting

The codebase gets automatically linted and formatted on each `git commit` hook _(done via [husky](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged))_. No code can be pushed that doesn't meet the styleguide requirements.

### JavaScript

For JavaScript, we're using [ESlint](https://eslint.org/) for linting including the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

### CSS

[stylelint](https://stylelint.io/) (with the [`bjankord/stylelint-config-sass-guidelines`](https://github.com/bjankord/stylelint-config-sass-guidelines) ruleset) helps us to maintain a common CSS formating foundation.
