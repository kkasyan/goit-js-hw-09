function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=u);var i=u("eWCmQ");const r={form:document.querySelector(".form"),submitBtn:document.querySelector("button"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]')};function l(e,t){const n=Math.random()>.3;return new Promise(((o,u)=>{setTimeout((()=>{n?o({position:e,delay:t}):u({position:e,delay:t})}),t)}))}r.form.addEventListener("submit",(function(t){t.preventDefault();let n=0,o=Number(r.inputDelay.value)-Number(r.inputStep.value);for(let t=0;t<Number(r.inputAmount.value);t+=1)n+=1,o+=Number(r.inputStep.value),l(n,o).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}));
//# sourceMappingURL=03-promises.e211cd5e.js.map