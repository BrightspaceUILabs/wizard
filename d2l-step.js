import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';

import '@brightspace-ui/core/components/button/button.js';
import './language-behaviour.js';

class D2LStep extends mixinBehaviors([D2L.PolymerBehaviours.CustomBehaviours.LanguageBehaviour], PolymerElement) {
	static get template() {
		return html`
		<style>
			.footer {
				display: flex;
				justify-content: space-between;
				width: 100%;
			}

			.button-next {
				margin-left: auto;
			}

		</style>

		<slot></slot>
		<div class="footer">
			<template is="dom-if" if="[[!hideRestartButton]]">
				<d2l-button on-click="_restartClick">[[restartButtonTitle]]</d2l-button>
			</template>

			<d2l-button class="button-next" on-click="_nextClick" primary="" disabled$="[[disableNextButton]]">[[nextButtonTitle]]</d2l-button>
		</div>
`;
	}

	static get properties() {
		return {
			nextButtonTitle: String,
			restartButtonTitle: String,
			hideRestartButton: {
				type: Boolean,
				value: false
			},
			disableNextButton: {
				type: Boolean,
				value: false
			}
		};
	}

	ready() {
		super.ready();
		if (!this.nextButtonTitle) {
			this.nextButtonTitle = this.localize('stepper.defaults.next');
		}
		if (!this.restartButtonTitle) {
			this.restartButtonTitle = this.localize('stepper.defaults.restart');
		}
	}

	_restartClick() {
		this.dispatchEvent(new CustomEvent('stepper-restart', { bubbles: true, composed: true }));
	}

	_nextClick() {
		this.dispatchEvent(new CustomEvent('stepper-next', { bubbles: true, composed: true }));
	}
}

customElements.define('d2l-labs-step', D2LStep);
