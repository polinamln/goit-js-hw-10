import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as n}from"./assets/vendor-651d7991.js";const o=document.querySelector(".form"),m=document.querySelectorAll('input[name="state"]'),c=document.querySelector('input[name="delay"]');o.addEventListener("submit",l);function l(t){u(t)}function u(t){t.preventDefault();const i=parseInt(c.value),s=[...m].find(e=>e.checked).value;new Promise((e,r)=>{setTimeout(()=>{s==="fulfilled"?e(i):s==="rejected"&&r(i)},i)}).then(e=>{n.success({position:"topRight",title:"OK",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{n.error({position:"topRight",title:"Error",message:`❌ Rejected promise in ${e}ms`})}),o.reset()}o.style.width="300px";
//# sourceMappingURL=commonHelpers2.js.map
