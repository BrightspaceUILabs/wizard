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
		`;
	}

	static async getLocalizeResources(langs) {
		return getLocalizeResources(langs);
	}

	constructor() {
		super();
		this.hideRestartButton = false;
		this.disableNextButton = false;
	}

	render() {
		return html`
			<slot></slot>
			<div class="footer">
				${this.hideRestartButton ? html`<div/>` : html`<d2l-button @click="${this._restartClick}">${!this.restartButtonTitle ? this.localize('stepper.defaults.restart') : this.restartButtonTitle}</d2l-button>`}

				<d2l-button class="button-next" @click="${this._nextClick}" primary ?disabled="${this.disableNextButton}">${!this.nextButtonTitle ? this.localize('stepper.defaults.next') : this.nextButtonTitle}</d2l-button>
			</div>
		`;
	}

	_nextClick() {
		this.dispatchEvent(new CustomEvent('stepper-next', { bubbles: true, composed: true }));
	}

	_restartClick() {
		this.dispatchEvent(new CustomEvent('stepper-restart', { bubbles: true, composed: true }));
	}
}

customElements.define('d2l-labs-step', D2LStep);
