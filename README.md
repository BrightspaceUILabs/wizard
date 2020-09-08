# wizard

[![NPM version](https://img.shields.io/npm/v/@brightspace-ui-labs/wizard.svg)](https://www.npmjs.org/package/@brightspace-ui-labs/wizard)
[![Build][CI Badge]][CI Workflows]

> Note: this is a ["labs" component](https://github.com/BrightspaceUI/guide/wiki/Component-Tiers). While functional, these tasks are prerequisites to promotion to BrightspaceUI "official" status:
>
> - [ ] [Design organization buy-in](https://github.com/BrightspaceUI/guide/wiki/Before-you-build#working-with-design)
> - [x] [design.d2l entry](http://design.d2l/)
> - [ ] [Architectural sign-off](https://github.com/BrightspaceUI/guide/wiki/Before-you-build#web-component-architecture)
> - [x] [Continuous integration](https://github.com/BrightspaceUI/guide/wiki/Testing#testing-continuously-with-travis-ci)
> - [x] [Cross-browser testing](https://github.com/BrightspaceUI/guide/wiki/Testing#cross-browser-testing-with-sauce-labs)
> - [x] [Unit tests](https://github.com/BrightspaceUI/guide/wiki/Testing#testing-with-polymer-test) (if applicable)
> - [ ] [Accessibility tests](https://github.com/BrightspaceUI/guide/wiki/Testing#automated-accessibility-testing-with-axe)
> - [ ] [Visual diff tests](https://github.com/BrightspaceUI/visual-diff)
> - [x] [Localization](https://github.com/BrightspaceUI/guide/wiki/Localization) with Serge (if applicable)
> - [x] Demo page
> - [ ] README documentation

[Polymer](https://www.polymer-project.org) component for going through a setup in a multi step process.


For further information on this and other components, refer to [The Brightspace UI Guide](https://github.com/BrightspaceUI/guide/wiki).

## Installation

To install from NPM:

```shell
npm install @brightspace-ui-labs/wizard
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) polyfill loader (for browsers who don't natively support web components), then include necessary components:

```html
<head>
  <script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
  <script type="module" src="node_modules/@brightspace-ui-labs/wizard/d2l-wizard.js"></script>
  <script type="module" src="node_modules/@brightspace-ui-labs/wizard/d2l-step.js"></script>
  <script type="module" src="node_modules/@brightspace-ui-labs/wizard/d2l-single-step-header.js"></script>
</head>
```

### Basic Usage

Add the component to your page

```html
<d2l-labs-wizard id="wizard" on-stepper-restart="restart">
	<d2l-labs-step title="Step 1" on-stepper-next="next">
		<p> First step </p>
	</d2l-labs-step>

	<d2l-labs-step title="Step 2" on-stepper-next="save">
		<p> Second step </p>
	</d2l-labs-step>
</d2l-labs-wizard>
```

In the component using this, make sure you call `next` on the wizard.

```js
restart() {
	this.$.wizard.restart();
}

next() {
	// your validation
	this.$.wizard.next();
}

save() {
	// validate and save
}
```



## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
polymer test --skip-plugin sauce
```

To lint AND run local unit tests:

```shell
npm test
```

## Versioning & Releasing

All version changes should obey [semantic versioning](https://semver.org/) rules.

Include either `[increment major]`, `[increment minor]` or `[increment patch]` in your merge commit message to automatically increment the `package.json` version and create a tag during the next build.



[CI Badge]: https://github.com/BrightspaceUILabs/wizard/workflows/build/badge.svg?branch=master
[CI Workflows]: https://github.com/BrightspaceUILabs/wizard/actions?query=workflow%3Abuild+branch%3Amaster
