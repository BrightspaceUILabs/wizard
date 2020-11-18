import { css, html, LitElement } from 'lit-element';
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
		return css`
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
				max-width: 120px;
				overflow-wrap: break-word;
				font-size: var(--d2l-body-small-text_-_font-size, 14px);
				font-weight: var(--d2l-body-small-text_-_font-weight, 400);
				line-height: var(--d2l-body-small-text_-_line-height, 20px);
				margin: var(--d2l-body-small-text_-_margin, auto);
				border: none !important;
				background: none !important;
				color: var(--d2l-color-ferrite);
			}

			.done-icon {
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
		`;
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
				<div class="step">
					<div class="${this._getProgressStatus()} step-header">
						<hr>

						<div class="circle" title="${this._getStepLabel()}">
							${this._isDone() ? html`<d2l-icon class="done-icon" icon="d2l-tier1:check"></d2l-icon>` : html``}
							${this._isInProgress() ? html`<div class="inner-progress-circle"></div>` : html``}
						</div>

						<hr>
					</div>

					<div class="${this._getProgressStatus()} step-title">${this.title}</div>
				</div>
			</div>
		`;
	}

	_getIsFirst() {
		if (this.currentStep === 0) {
			return 'first';
		}
		return '';
	}

	_getIsLast() {
		if (this.totalSteps === this.currentStep + 1) {
			return 'last';
		}
		return '';
	}

	_getProgressStatus() {
		let className = 'not-started';
		if (this._isDone()) {
			className = 'done';
		} else if (this._isInProgress()) {
			className = 'in-progress';
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
