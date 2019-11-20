import {diff} from 'jsondiffpatch';
import {format} from './formatter';

import merge from "deepmerge";
import {diffJson} from 'diff';
import {diff as deepdiff} from 'deep-diff';

const data = {
    base: {
        "Promo": {
            "intent": "<div>GOGO: $50 gets you $10\nFree Accessory when accessory added to card of $50+</div>",
            "name": "Test Brand: GOGO + Free Accessory  Test",
            "codes": [],
            "sold_out_date": null,
            "display": {
                "Display": {
                    "top_div": "Free Accessory and Reward Card with a $50 Purchase!"
                }
            },
            "body": {
                "When": {
                    "reward": {
                        "MakeCertificate": {
                            "brand_code": "TESTBRAND",
                            "message": "",
                            "label": "Reward Card",
                            "recipient": "Sender",
                            "faceplate": "DCY7RCFZ",
                            "currency_code": null,
                            "sender": "Modport",
                            "limit_maximum": null,
                            "amount": "10",
                            "deactivate_on_return": false,
                            "thesaurus": {
                                "Thesaurus": {
                                    "code": "promo-fce93236-a90f-4690-a956-1300fd7ae42b",
                                    "render_balance_inquiry_ui": null,
                                    "email_template_code": "ABC",
                                    "product": "NORM",
                                    "merchant_instructions": "<div class=\"merch-info show-print\"><p>Reward Card Redemption:</p><p>Reward Card Redemption: Only a manager can process Reward Cards. E-Reward Card print-outs should be included in the Corporate accounting package. Process for Non-LSC Members: Manager opens the Guest check and selects the ‘Assign Member’ button. Manually enter the card number (14 digits) as ‘Assign Member’. If second reward card presented, apply discount using \\\"Manual Holiday\\\" comp key.</p><p>Reward Card Redemption:</p><p>Only a manager can process Reward Cards. E-Reward Card print-outs should be included in the Corporate accounting package. Process for Non-LSC Members: Manager opens the Guest check and selects the ‘Assign Member’ button. Manually enter the card number (14 digits) as ‘Assign Member’. If second reward card presented, apply discount using \\\"Manual Holiday\\\" comp key. Process for LSC Members: Manager applies the discount using the \\\"MANUAL HOLIDAY\\\" comp key (or twice, if a second Reward Card is redeemed). Next, Manager processes the Select Club card following normal procedures (\\\"Assign Member\\\").</p></div>",
                                    "brand": "TESTBRAND",
                                    "egc_label": "Reward Card",
                                    "template_code": "",
                                    "language": "en-us"
                                }
                            },
                            "limit_token": null,
                            "delivery_date": null,
                            "category": "PRMO"
                        }
                    },
                    "cart": {
                        "CartAmount": {
                            "GreaterOrEqual": 50
                        }
                    },
                    "cards": null
                }
            }
        },
        "start_date": "2017-11-15T03:00:00",
        "promo_alias": null,
        "end_date": "2020-12-23T03:00:00",
        "promo_code": "MDPRTACCGO",
        "channel_code": "DEFAULT",
        "single_use": false,
        "facts": {
            "issues_digital_rewards": true,
            "ship_to_countries": [],
            "issues_plastic_rewards": false,
            "has_limit": false
        },
        "promo_alias_status": null
    },

    'es-us-USD': {
        "Promo": {
            "intent": "El GOGO: El $50 gets you el $10\nFree Accessory when accessory added to card of $50+",
            "name": "El Test Brand: El GOGO + Free Accessory  Test",
            "display": {
                "Display": {
                    "top_div": "El Free Accessory and Reward Card with a $50 Purchase!"
                }
            },
            "body": {
                "When": {
                    "reward": {
                        "MakeCertificate": {
                            "label": "El Reward Card",
                            "recipient": "El Sender",
                            "faceplate": "El DCY7RCFZ",
                            "currency_code": "USD",
                            "sender": "El Modport",
                            "amount": "10001",
                            "thesaurus": {
                                "Thesaurus": {
                                    "email_template_code": "El ABC",
                                    "merchant_instructions": "<div class=\"merch-info show-print\"><p>El Reward Card Redemption:</p><p>Reward Card Redemption: Only a manager can process Reward Cards. E-Reward Card print-outs should be included in the Corporate accounting package. Process for Non-LSC Members: Manager opens the Guest check and selects the ‘Assign Member’ button. Manually enter the card number (14 digits) as ‘Assign Member’. If second reward card presented, apply discount using \\\"Manual Holiday\\\" comp key.</p><p>Reward Card Redemption:</p><p>Only a manager can process Reward Cards. E-Reward Card print-outs should be included in the Corporate accounting package. Process for Non-LSC Members: Manager opens the Guest check and selects the ‘Assign Member’ button. Manually enter the card number (14 digits) as ‘Assign Member’. If second reward card presented, apply discount using \\\"Manual Holiday\\\" comp key. Process for LSC Members: Manager applies the discount using the \\\"MANUAL HOLIDAY\\\" comp key (or twice, if a second Reward Card is redeemed). Next, Manager processes the Select Club card following normal procedures (\\\"Assign Member\\\").</p></div>",
                                    "egc_label": "El Reward Card",
                                    "template_code": "El ABC",
                                    "language": "es-us"
                                }
                            }
                        }
                    },
                    "cart": {
                        "CartAmount": {
                            "GreaterOrEqual": 999
                        }
                    }
                }
            }
        }
    },
    'fr-ca-CAD': {
        "Promo": {
            "intent": "<div>Le GOGO: Le $50 gets you le $10\nFree Accessory when accessory added to card of $50+</div>",
            "name": "Le Test Brand: Le GOGO + Free Accessory  Test",
            "display": {
                "Display": {
                    "top_div": "Le Free Accessory and Reward Card with a $50 Purchase!"
                }
            },
            "body": {
                "When": {
                    "reward": {
                        "MakeCertificate": {
                            "label": "Le Reward Card",
                            "recipient": "Le Sender",
                            "faceplate": "Le DCY7RCFZ",
                            "currency_code": "CAD",
                            "sender": "Le Modport",
                            "amount": "11",
                            "thesaurus": {
                                "Thesaurus": {
                                    "email_template_code": "Le ABC",
                                    "merchant_instructions": "<div class=\"merch-info show-print\"><p>Le Reward Card Redemption:</p><p>Reward Card Redemption: Only a manager can process Reward Cards. E-Reward Card print-outs should be included in the Corporate accounting package. Process for Non-LSC Members: Manager opens the Guest check and selects the ‘Assign Member’ button. Manually enter the card number (14 digits) as ‘Assign Member’. If second reward card presented, apply discount using \\\"Manual Holiday\\\" comp key.</p><p>Reward Card Redemption:</p><p>Only a manager can process Reward Cards. E-Reward Card print-outs should be included in the Corporate accounting package. Process for Non-LSC Members: Manager opens the Guest check and selects the ‘Assign Member’ button. Manually enter the card number (14 digits) as ‘Assign Member’. If second reward card presented, apply discount using \\\"Manual Holiday\\\" comp key. Process for LSC Members: Manager applies the discount using the \\\"MANUAL HOLIDAY\\\" comp key (or twice, if a second Reward Card is redeemed). Next, Manager processes the Select Club card following normal procedures (\\\"Assign Member\\\").</p></div>",
                                    "egc_label": "Le Reward Card",
                                    "template_code": "Le ABC",
                                    "language": "fr-ca"
                                }
                            }
                        }
                    },
                    "cart": {
                        "CartAmount": {
                            "GreaterOrEqual": 51
                        }
                    }
                }
            }
        }
    },
    'zh-hk-HKD': {}
};

const defaultValEl = document.querySelector('#default');
const overrideValEl = document.querySelector('#override');
const mergedEl = document.querySelector('#merged');
const mergeBut = document.querySelector('#merge-em');
const changeLang = document.querySelector('#switch-lang');

function htmlEscapeString(text) {
    let html = JSON.stringify(text);
    html = html.substring(1, html.length - 1);
    let replacements = [
        [/&/g, '&amp;'],
        [/</g, '&lt;'],
        [/>/g, '&gt;'],
        [/'/g, '&apos;'],
        [/"/g, '&quot;'],
        [/\n/, "\\n"]
    ];
    for (let i = 0; i < replacements.length; i++) {
        html = html.replace(replacements[i][0], replacements[i][1]);
    }
    return html;
}

const formatMerged = (base, diff) => {
    const output = [];
    const spaces = (n) => Array(n + 1).fill('').join(' ');
    const pathsEqual = (p1, p2) => {
        if (p1.length !== p2.length) { return false; }
        for (let i = 0; i < p1.length; i++) {
            if (p1[i] !== p2[i]) { return false; }
        }
        return true;
    };
    // brute-force... bad!
    const helper = (base, indent, path = []) => {
        if (Array.isArray(base)) {
            output.push(`[\n`);
            base.forEach((val, idx) => {
                helper(val, indent + 4, path.concat([idx]));
                if (idx !== base.length - 1) { output.push(',\n'); }
                else { output.push('\n'); }
            });
            output.push(`${spaces(indent)}]`);
        } else if (typeof base === 'object' && base !== null) {
            output.push(`{\n`);
            Object.keys(base).forEach((key, idx) => {
                const val = base[key];
                output.push(`${spaces(indent + 4)}"${key}": `);
                helper(val, indent + 4, path.concat([key]));
                if (idx !== Object.keys(base).length - 1) { output.push(',\n'); }
                else { output.push('\n'); }
            });
            output.push(`${spaces(indent)}}`);
        } else {
            let isDiff = false;
            let diffVal = base;
            diff.forEach(diff => {
                if (pathsEqual(path, diff.path)) {
                    isDiff = true;
                    diffVal = diff.rhs; // TODO: check diff type, etc/
                }
            });
            const type = typeof diffVal;
            output.push(`<span ${isDiff ? 'style="background-color: greenyellow;' : ''} data-path="${path.join('.')}">`);
            if (type === 'string') { output.push('"'); }
            const escaped = type === 'string' ? htmlEscapeString(diffVal) : diffVal;
            output.push(`${escaped}`);
            if (type === 'string') { output.push('"'); }
            output.push('</span>');
        }
    };
    helper(base, 0);
    return output.join('');
};

const calculateDiff = (delta) => {
    const diff = {};
    const addPath = (p, val, obj) => {
        if (!p || p.length === 0) {
            return;
        }
        if (p.length === 1) {
            obj[p[0]] = val;
            return;
        }
        // TODO: Handle other types
        const key = p[0];
        if (!(key in obj)) { obj[key] = {}; }
        addPath(p.slice(1), val, obj[key]);
    };
    delta.forEach((d) => {
        // TODO: Handle other types
        d.path.forEach((p) => {
            addPath(d.path, d.rhs, diff);
        });
    });
    return diff;
};

const mergeEm = () => {
    'use strict';
    const merged = JSON.parse(mergedEl.textContent);
    const left = JSON.parse(defaultValEl.textContent);
    const delta = deepdiff(left, merged);
    const formatted = formatMerged(merged, delta);
    mergedEl.innerHTML = formatted;
    const right = calculateDiff(delta);
    overrideValEl.textContent = JSON.stringify(right, null, 4);


};

changeLang.addEventListener('change', (el) => {
    'use strict';
    document.querySelector('#override-lang-title').textContent = `Override (${el.target.value})`;
    document.querySelector('#merged-lang-title').textContent = `Merged (${el.target.value})`;
    overrideValEl.textContent = JSON.stringify(data[el.target.value], null, 4);
    const left = JSON.parse(defaultValEl.textContent);
    const right = JSON.parse(overrideValEl.textContent);
    const merged = merge(left, right);
    mergedEl.textContent = JSON.stringify(merged, null, 4);
    mergeEm();
});

const init = () => {
    'use strict';
    defaultValEl.textContent = JSON.stringify(data.base, null, 4);
    overrideValEl.textContent = JSON.stringify(data['fr-ca-CAD'], null, 4);
    mergeBut.addEventListener('click', mergeEm);

    // construct the initial merged data
    const left = JSON.parse(defaultValEl.textContent);
    const right = JSON.parse(overrideValEl.textContent);
    const merged = merge(left, right);
    mergedEl.textContent = JSON.stringify(merged, null, 4);
    mergeEm();
};

init();


