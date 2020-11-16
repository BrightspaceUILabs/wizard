import '../d2l-wizard.js';
import { expect, fixture, html } from '@open-wc/testing';
import { runConstructor } from '@brightspace-ui/core/tools/constructor-test-helper.js';

const defaultFixture = html`
<d2l-labs-wizard></d2l-labs-wizard>
`;

describe('d2l-labs-wizard', () => {

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
			expect(elem.localName).to.equal('d2l-labs-wizard');
		});
	});

});
