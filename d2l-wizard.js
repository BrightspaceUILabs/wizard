import { css, html, LitElement } from 'lit-element';

class D2LWizard extends LitElement {
	static get properties() {
		return {
			stepTitles: {
				type: Array,
				attribute: 'step-titles'
			},
			stepCount: {
				type: Number,
				attribute: 'step-count'
			},
			selectedStep: {
				type: Number,
				attribute: 'selected-step'
			}
		};
	}

	static get styles() {
		return css`
			.header {
				display: flex;
				flex: 1;
				width: 100%;
				justify-content: center;
				margin: 30px 0px;
				overflow-x: auto;
			}
		`;
	}

	constructor() {
		super();

		this.stepTitles = [];
		this.stepCount = 0;
		this.selectedStep = 0;
	}

	next() {
		this.selectedStep = (this.selectedStep + 1) === this.stepCount ? this.selectedStep : (this.selectedStep + 1);

		this._updateStep();

		if (window.parentIFrame) {
			window.parentIFrame.scrollTo(0, 0);
		}
	}

	render() {
		return html`
			<div class="header">
				${this.stepTitles.map((title, index) =>
		html`
						<d2l-labs-single-step-header total-steps="${this.stepCount}" current-step="${index}" selected-step="${this.selectedStep}" title="${title}"></d2l-labs-single-step-header>
					`)}

			</div>
			<slot @slotchange="${this._handleSlotChange}"></slot>
		`;
	}

	restart() {
		this.selectedStep = 0;

		this._updateStep();
	}

	_handleSlotChange() {
		this._updateStep();
	}

	_updateStep() {
		const steps = this.shadowRoot.querySelector('slot').assignedNodes({ flatten: true }).filter((node) => node.nodeType === Node.ELEMENT_NODE);
		this.stepCount = steps.length;

		this.stepTitles = [];

		steps.forEach((element, index) => {
			this.stepTitles.push(element.attributes.title.value);
			element.style.display = index !== this.selectedStep ? 'none' : '';
		});

		this.stepCount = steps.length;
	}

}

customElements.define('d2l-labs-wizard', D2LWizard);
