import '@brightspace-ui/core/components/button/button.js';
import { css, html, LitElement } from 'lit-element';
import { getLocalizeResources } from './localization.js';
import { LocalizeMixin } from '@brightspace-ui/core/mixins/localize-mixin.js';

class D2LStep extends LocalizeMixin(LitElement) {
	static get properties() {
		return {
			nextButtonTitle: {
				type: String,
				attribute: 'next-button-title'
			},
			restartButtonTitle: {
				type: String,
				attribute: 'restart-button-title'
			},
			hideRestartButton: {
				type: Boolean,
				attribute: 'hide-restart-button'
			},
			disableNextButton: {
				type: Boolean,
				attribute: 'disable-next-button'
			},
			nextButtonAriaLabel: {
				type: String,
				attribute: 'next-button-aria-label'
			},
			restartButtonAriaLabel: {
				type: String,
				attribute: 'restart-button-aria-label'
			},
			ariaTitle:{
				type: String,
				attribute: 'aria-title'
			},
			title: {
				type: String,
				attribute: 'title'
			},
			stepCount: {
				type: Number,
				attribute: 'step-count'
			},
			thisStep: {
				type: Number,
				attribute: 'this-step'
			}

		};
	}

	static get styles() {
		return css`
			.footer {
				display: flex;
				justify-content: space-between;
				width: 100%;
			}

			.button-next {
				float: right;
			}

			.screen-reader-only {
				position:absolute;
				left:-10000px;
				top:auto;
				width:1px;
				height:1px;
				overflow:hidden;
			}
		`;
	}

	static async getLocalizeResources(langs) {
		return getLocalizeResources(langs);
	}

	constructor() {
		super();
		this.hideRestartButton = false;
		this.disableNextButton = false;
		this.nextButtonAriaLabel = '';
		this.restartButtonAriaLabel = '';
		this.ariaTitle = '';
	}

	render() {
		return html`
			<div id="aria-title" tabindex="0" class="screen-reader-only">${this._getAriaTitle() }</div>
			<slot></slot>
			<div class="footer">
				${this.hideRestartButton ? html`<div></div>` : html`<d2l-button aria-label="${this.restartButtonAriaLabel}" @click="${this._restartClick}">${!this.restartButtonTitle ? this.localize('stepper.defaults.restart') : this.restartButtonTitle}</d2l-button>`}

				<d2l-button class="button-next" aria-label="${this.nextButtonAriaLabel}" @click="${this._nextClick}" primary ?disabled="${this.disableNextButton}">${!this.nextButtonTitle ? this.localize('stepper.defaults.next') : this.nextButtonTitle}</d2l-button>
			</div>
		`;
	}

	_getAriaTitle() {
		if (this.ariaTitle) {
			return this.ariaTitle;
		} else if (this.title) {
			return `${this.title}. ${this.localize('aria.steplabel', 'totalSteps', this.stepCount, 'currentStep', this.thisStep)}`;
		}
		return this.localize('aria.steplabel', 'totalSteps', this.stepCount, 'currentStep', this.thisStep);
	}

	_getStepLabel() {
		return this.localize('aria.steplabel', 'totalSteps', this.stepCount, 'currentStep', this.thisStep);
	}

	_nextClick() {
		this.dispatchEvent(new CustomEvent('stepper-next', { bubbles: true, composed: true }));
	}

	_restartClick() {
		this.dispatchEvent(new CustomEvent('stepper-restart', { bubbles: true, composed: true }));
	}
}

customElements.define('d2l-labs-step', D2LStep);
