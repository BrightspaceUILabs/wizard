import { css, html, LitElement } from 'lit-element';
import { bodySmallStyles } from '@brightspace-ui/core/components/typography/styles.js';
import { getLocalizeResources } from './localization.js';
import { LocalizeMixin } from '@brightspace-ui/core/mixins/localize-mixin.js';

class D2LSingleStepHeader extends LocalizeMixin(LitElement) {

	static get properties() {
		return {
			title: {
				type: String,
				attribute: 'title'
			},
			totalSteps: {
				type: Number,
				attribute: 'total-steps'
			},
			currentStep: {
				type: Number,
				attribute: 'current-step'
			},
			selectedStep: {
				type: Number,
				attribute: 'selected-step'
			}
		};
	}

	static get styles() {
		return [bodySmallStyles, css`
			.d2l-single-step-header-circle {
				height: 26px;
				width: 26px;
				border-radius: 50%;
				border: 2px solid;
			}

			.d2l-single-step-header-inner-progress-circle {
				height: 22px;
				width: 22px;
				border-radius: 50%;
				background-color: var(--d2l-color-celestine);
				margin: 2px;
			}

			.d2l-single-step-header-step {
				display: inline-block;
				text-align: center;
			}

			hr {
				width: 60px;
				height: 4px;
				margin: auto;
			}

			.d2l-single-step-header-step-header {
				display: flex;
			}

			.d2l-single-step-header-step-title {
				margin: auto;
				max-width: 120px;
				overflow-wrap: break-word;
				border: none !important;
				background: none !important;
				color: var(--d2l-color-ferrite);
			}

			.d2l-single-step-header-done-icon {
				color: var(--d2l-color-olivine);
				height: 20px;
				width: 20px;
				padding: 2px;
			}

			.d2l-single-step-header-done {
				border-color: var(--d2l-color-olivine);
				color: var(--d2l-color-olivine);
			}

			.d2l-single-step-header-done hr,
			.d2l-single-step-header-in-progress hr:first-child {
				background: var(--d2l-color-olivine);
				border: var(--d2l-color-olivine);
			}

			.d2l-single-step-header-in-progress {
				border-color: var(--d2l-color-celestine);
				color: var(--d2l-color-celestine);
			}

			.d2l-single-step-header-not-started .d2l-single-step-header-circle {
				background-color: var(--d2l-color-mica);
				border-color: var(--d2l-color-mica);
			}

			.d2l-single-step-header-in-progress hr:last-child,
			.d2l-single-step-header-not-started hr {
				background: var(--d2l-color-mica);
				border: var(--d2l-color-mica);
			}

			.d2l-single-step-header-first hr:first-child,
			.d2l-single-step-header-last hr:last-child {
				visibility: hidden;
			}
		`];
	}

	static async getLocalizeResources(langs) {
		return getLocalizeResources(langs);
	}

	constructor() {
		super();

		this.title = '';
		this.totalSteps = 0;
		this.currentStep = 0;
		this.selectedStep = 0;
	}

	render() {
		return html`
			<div class="${this._getIsFirst()} ${this._getIsLast()}">
				<div class="d2l-single-step-header-step">
					<div class="${this._getProgressStatus()} d2l-single-step-header-step-header">
						<hr>

						<div class="d2l-single-step-header-circle" title="${this._getStepLabel()}">
							${this._isDone() ? html`<d2l-icon class="d2l-single-step-header-done-icon" icon="d2l-tier1:check"></d2l-icon>` : html``}
							${this._isInProgress() ? html`<div class="d2l-single-step-header-inner-progress-circle"></div>` : html``}
						</div>

						<hr>
					</div>

					<div class="${this._getProgressStatus()} d2l-single-step-header-step-title d2l-body-small">${this.title}</div>
				</div>
			</div>
		`;
	}

	_getIsFirst() {
		if (this.currentStep === 0) {
			return 'd2l-single-step-header-first';
		}
		return '';
	}

	_getIsLast() {
		if (this.totalSteps === this.currentStep + 1) {
			return 'd2l-single-step-header-last';
		}
		return '';
	}

	_getProgressStatus() {
		let className = 'd2l-single-step-header-not-started';
		if (this._isDone()) {
			className = 'd2l-single-step-header-done';
		} else if (this._isInProgress()) {
			className = 'd2l-single-step-header-in-progress';
		}
		return className;
	}

	_getStepLabel() {
		return this.localize('aria.steplabel', 'totalSteps', this.totalSteps, 'currentStep', this.currentStep + 1);
	}

	_isDone() {
		return this.currentStep < this.selectedStep;
	}

	_isInProgress() {
		return this.currentStep === this.selectedStep;
	}

}

customElements.define('d2l-labs-single-step-header', D2LSingleStepHeader);
