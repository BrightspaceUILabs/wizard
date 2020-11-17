import '../d2l-single-step-header.js';
import { expect, fixture, html } from '@open-wc/testing';
import { runConstructor } from '@brightspace-ui/core/tools/constructor-test-helper.js';

const defaultFixture = html`
<d2l-labs-single-step-header></d2l-labs-single-step-header>
`;

const firstFixture = html`
<d2l-labs-single-step-header total-steps="10" current-step="0"></d2l-labs-single-step-header>
`;

const lastFixture = html`
<d2l-labs-single-step-header total-steps="10" current-step="9"></d2l-labs-single-step-header>
`;

const firstAndLastFixture = html`
<d2l-labs-single-step-header total-steps="1" current-step="0"></d2l-labs-single-step-header>
`;

describe('d2l-labs-single-step-header', function() {

	describe('accessibility', () => {
		it('should pass all axe tests', async() => {
			const el = await fixture(defaultFixture);
			await expect(el).to.be.accessible();
		});
	});

	describe('constructor', () => {
		it('should construct', () => {
			runConstructor('d2l-labs-wizard');
		});
	});

	describe('basic', () => {
		it('should instantiate the element', async() => {
			const elem = await fixture(defaultFixture);
			expect(elem.localName).to.equal('d2l-labs-single-step-header');
		});
	});

	describe('first', () => {
		it('should have class name first', async() => {
			const elem = await fixture(firstFixture);
			expect(elem.shadowRoot.children[0].className).to.equal('first ');
		});
	});

	describe('last', () => {
		it('should have class name last', async() => {
			const elem = await fixture(lastFixture);
			expect(elem.shadowRoot.children[0].className).to.equal(' last');
		});
	});

	describe('first and last', () => {
		it('should have class name first and last', async() => {
			const elem = await fixture(firstAndLastFixture);
			expect(elem.shadowRoot.children[0].className).to.equal('first last');
		});
	});

});
