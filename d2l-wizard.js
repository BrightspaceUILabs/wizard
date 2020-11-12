import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import '@polymer/iron-pages';

import './language-behaviour.js';
import './d2l-single-step-header.js';
import './d2l-step.js';

class D2LWizard extends mixinBehaviors([D2L.PolymerBehaviours.CustomBehaviours.LanguageBehaviour], PolymerElement) {
	static get properties() {
		return {
			stepTitles: {
				type: Array,
				value: function() { return []; }
			},
			stepCount: {
				type: Number,
				value: 0
			},
			selectedStep: {
				type: Number,
				value: 0
			}
		};
	}
	static get template() {
		return html`
		<style>
			.header {
				display: flex;
				flex: 1;
				width: 100%;
				justify-content: center;
				margin: 30px 0px;
				overflow-x: auto;
			}

		</style>

		<div class="header">
			<template is="dom-repeat" items="[[stepTitles]]" restamp>
				<d2l-labs-single-step-header total-steps="[[stepCount]]" current-step="[[index]]" selected-step="[[selectedStep]]" title="[[item]]"></d2l-labs-single-step-header>
			</template>
		</div>

		<iron-pages id="wizardPages" selected="[[selectedStep]]" selectable="d2l-labs-step" on-iron-items-changed="_updateSteps" >
			<slot></slot>
		</iron-pages>
`;
	}

	next() {
		var pages = this.$.wizardPages;
		pages.selectNext();
		if (window.parentIFrame) {
			window.parentIFrame.scrollTo(0, 0);
		}

		this.selectedStep = pages.selected;
	}

	restart() {
		this.selectedStep = 0;
	}

	_getSteps() {
		return this.$.wizardPages.items;
	}

	_updateSteps() {
		var steps = this._getSteps();

		this.stepTitles = [];
		steps.forEach(function(step) {
			this.push('stepTitles', step.title);
		}.bind(this));

		this.stepCount = steps.length;
	}
}

customElements.define('d2l-labs-wizard', D2LWizard);
