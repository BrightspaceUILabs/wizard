import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-meta/iron-meta.js';
import 'd2l-localize-behavior/d2l-localize-behavior.js';

/** @polymerBehavior NewLanguageBehaviour */
var NewLanguageBehaviour = {
	properties: {
		resources: {
			value: function () {
				return {
					'en': {
						'steplabel': 'Step { currentStep } of { totalSteps }',
						'stepper.defaults.next': 'Next',
						'stepper.defaults.restart': 'Restart',
					}
				};
			}
		}
	}
};

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviours = window.D2L.PolymerBehaviours || {};
window.D2L.PolymerBehaviours.CustomBehaviours = window.D2L.PolymerBehaviours.CustomBehaviours || {};

/** @polymerBehavior */
D2L.PolymerBehaviours.CustomBehaviours.LanguageBehaviour = [D2L.PolymerBehaviors.LocalizeBehavior, NewLanguageBehaviour];
