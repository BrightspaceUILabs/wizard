import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-meta/iron-meta.js';
import 'd2l-localize-behavior/d2l-localize-behavior.js';

import ar from './lang/ar.js';
import dadk from './lang/da-dk.js';
import de from './lang/de.js';
import en from './lang/en.js';
import es from './lang/es.js';
import fr from './lang/fr.js';
import frfr from './lang/fr-fr.js';
import ja from './lang/ja.js';
import ko from './lang/ko.js';
import nl from './lang/nl.js';
import pt from './lang/pt.js';
import sv from './lang/sv.js';
import tr from './lang/tr.js';
import zh from './lang/zh.js';
import zhtw from './lang/zh-TW.js';

function getTranslations(localization) {
	var translations = {};
	for (const [key, value] of Object.entries(localization)) {
		translations[key] = value['translation'];
	}
	return translations;
}

/** @polymerBehavior NewLanguageBehaviour */
var NewLanguageBehaviour = {
	properties: {
		resources: {
			value: function() {
				return {
					'en': getTranslations(en),
					'ar': getTranslations(ar),
					'da-dk': getTranslations(dadk),
					'de': getTranslations(de),
					'es': getTranslations(es),
					'fr': getTranslations(fr),
					'fr-fr': getTranslations(frfr),
					'ja': getTranslations(ja),
					'ko': getTranslations(ko),
					'nl': getTranslations(nl),
					'pt': getTranslations(pt),
					'sv': getTranslations(sv),
					'tr': getTranslations(tr),
					'zh': getTranslations(zh),
					'zh-tw': getTranslations(zhtw)
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
