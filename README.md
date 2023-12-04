# Wizard

[![NPM version](https://img.shields.io/npm/v/@brightspace-ui-labs/wizard.svg)](https://www.npmjs.org/package/@brightspace-ui-labs/wizard)

> Note: this is a ["labs" component](https://github.com/BrightspaceUI/guide/wiki/Component-Tiers). While functional, these tasks are prerequisites to promotion to BrightspaceUI "official" status:
>
> - [x] [Design organization buy-in](https://github.com/BrightspaceUI/guide/wiki/Before-you-build#working-with-design)
> - [x] [design.d2l entry](http://design.d2l/)
> - [ ] [Architectural sign-off](https://github.com/BrightspaceUI/guide/wiki/Before-you-build#web-component-architecture)
> - [x] [Continuous integration](https://github.com/BrightspaceUI/guide/wiki/Testing#testing-continuously-with-travis-ci)
> - [x] [Cross-browser testing](https://github.com/BrightspaceUI/guide/wiki/Testing#cross-browser-testing-with-sauce-labs)
> - [x] [Unit tests](https://github.com/BrightspaceUI/guide/wiki/Testing#testing-with-polymer-test) (if applicable)
> - [ ] [Accessibility tests](https://github.com/BrightspaceUI/guide/wiki/Testing#automated-accessibility-testing-with-axe)
> - [ ] [Visual diff tests](https://github.com/BrightspaceUI/visual-diff)
> - [x] [Localization](https://github.com/BrightspaceUI/guide/wiki/Localization) with Serge (if applicable)
> - [x] Demo page
> - [X] README documentation

For further information on this and other components, refer to [The Brightspace UI Guide](https://github.com/BrightspaceUI/guide/wiki).

## Installation

To install from NPM:

```shell
npm install @brightspace-ui-labs/wizard
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) polyfill loader (for browsers who don't natively support web components), then include necessary components:

![Wizard](./demo/wizard.gif)

```html
<head>
  <script type="module" src="@brightspace-ui-labs/wizard/d2l-wizard.js"></script>
  <script type="module" src="@brightspace-ui-labs/wizard/d2l-step.js"></script>
</head>
```

### Basic Usage

Add the component to your page

```html
<d2l-labs-wizard id="wizard">
	<d2l-labs-step title="Step 1">
		<p> First step </p>
	</d2l-labs-step>

	<d2l-labs-step title="Step 2">
		<p> Second step </p>
	</d2l-labs-step>
</d2l-labs-wizard>
<script>
	var wizard = document.getElementById('wizard');
	wizard.addEventListener('stepper-next', function() {
		wizard.next();
	});
	wizard.addEventListener('stepper-restart', function() {
		wizard.restart();
	});
</script>
```


**Properties:**

| Properties | Type | Description |
|--|--|--|
| `title` | String | Text displayed in the wizard step |
| `restart-button-title` | String | Text that is displayed within the button |
| `restart-button-tooltip` | String | Text that is displayed within the button tooltip |
| `hide-restart-button` | Boolean | Hide the Restart button |
| `next-button-title` | String | Text that is displayed within the button |
| `next-button-tooltip` | String | Text that is displayed within the button tooltip |
| `disable-next-button` | Boolean | Disable the Next button |
| `hide-next-button` | Boolean | Hide the Next button |

**Events:**
- `stepper-next`: dispatched when the Next button is clicked
- `stepper-restart`: dispatched when the Restart button is clicked

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

To run the app and view the demo page:

```shell
npm run start
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To lint AND run local unit tests:

```shell
npm run test
```

### Versioning and Releasing

This repo is configured to use `semantic-release`. Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `main`.

To learn how to create major releases and release from maintenance branches, refer to the [semantic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/semantic-release) documentation.

### Dependabot

Until the `ts-node` [issue](https://github.com/BrightspaceUILabs/wizard/pull/83#issuecomment-1131935120) is resolved, do not merge Dependabot PRs that seek to upgrade `ts-node`.  Other dependency updates should be handled normally.
