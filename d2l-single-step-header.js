import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';

import '@brightspace-ui/core/components/icons/icon.js';
import './language-behaviour.js';

class D2LSingleStepHeader extends mixinBehaviors([D2L.PolymerBehaviours.CustomBehaviours.LanguageBehaviour], PolymerElement) {
	static get template() {
		return html`
		<style include="shared-styles">
			.circle {
				height: 26px;
				width: 26px;
				border-radius: 50%;
				border: 2px solid;
			}

			.inner-progress-circle {
				height: 22px;
				width: 22px;
				border-radius: 50%;
				background-color: var(--d2l-color-celestine);
				margin: 2px;
			}

			.step {
				display: inline-block;
				text-align: center;
			}

			hr {
				width: 60px;
				height: 4px;
				margin: auto;
			}

			.step-header {
				display: flex;
			}

			.step-title {
				margin: auto;
				max-width: 120px;
				overflow-wrap: break-word;
				@apply --d2l-body-small-text;
				border: none !important;
				background: none !important;
				color: var(--d2l-color-ferrite);
			}

			.done-icon {
				margin-top: 2px;
				color: var(--d2l-color-olivine);
				height: 20px;
				width: 20px;
				padding: 2px;
			}

			.done {
				border-color: var(--d2l-color-olivine);
				color: var(--d2l-color-olivine);
			}

			.done hr,
			.in-progress hr:first-child {
				background: var(--d2l-color-olivine);
				border: var(--d2l-color-olivine);
			}

			.in-progress {
				border-color: var(--d2l-color-celestine);
				color: var(--d2l-color-celestine);
			}

			.not-started .circle {
				background-color: var(--d2l-color-mica);
				border-color: var(--d2l-color-mica);
			}

			.in-progress hr:last-child,
			.not-started hr {
				background: var(--d2l-color-mica);
				border: var(--d2l-color-mica);
			}

			.first hr:first-child,
			.last hr:last-child {
				visibility: hidden;
			}

		</style>

		<div class$="[[_getIsFirst(currentStep)]] [[_getIsLast(totalSteps, currentStep)]]">
			<div class="step">
				<div class$="[[_getProgressStatus(selectedStep, currentStep)]] step-header">
					<hr>

					<div class="circle" title="[[_getStepLabel(totalSteps, currentStep)]]">
						<template is="dom-if" if="[[_isDone(selectedStep, currentStep)]]">
							<d2l-icon class="done-icon" icon="d2l-tier1:check"></d2l-icon>
						</template>

						<template is="dom-if" if="[[_isInProgress(selectedStep, currentStep)]]">
							<div class="inner-progress-circle"></div>
						</template>
					</div>

					<hr>
				</div>

				<div class$="[[_getProgressStatus(selectedStep, currentStep)]] step-title">[[title]]</div>
			</div>
		</div>
`;
	}

	static get properties() {
		return {
			title: String,
			totalSteps: {
				type: Number,
				value: 0
			},
			currentStep: {
				type: Number,
				value: 0
			},
			selectedStep: {
				type: Number,
				value: 0
			}
		};
	}

	_isDone(selectedStep, currentStep) {
		return currentStep < selectedStep;
	}

	_isInProgress(selectedStep, currentStep) {
		return currentStep === selectedStep;
	}

	_getProgressStatus(selectedStep, currentStep) {
		var className = 'not-started';
		if (this._isDone(selectedStep, currentStep)) {
			className = 'done';
		} else if (this._isInProgress(selectedStep, currentStep)) {
			className = 'in-progress';
		}
		return className;
	}

	_getIsFirst(currentStep) {
		if (currentStep === 0) {
			return 'first';
		}
	}

	_getIsLast(totalSteps, currentStep) {
		if (totalSteps === currentStep + 1) {
			return 'last';
		}
	}

	_getStepLabel(totalSteps, currentStep) {
		return this.localize('steplabel', 'totalSteps', totalSteps, 'currentStep', currentStep + 1);
	}
}

customElements.define('d2l-single-step-header', D2LSingleStepHeader);
