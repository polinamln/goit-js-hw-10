import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as o}from"./assets/vendor-651d7991.js";const i=document.querySelector(".form"),c=document.querySelectorAll('input[name="state"]'),m=document.querySelector('input[name="delay"]');i.addEventListener("submit",l);function l(n){n.preventDefault();const t=parseInt(m.value),s=[...c].find(e=>e.checked).value;new Promise((e,r)=>{setTimeout(()=>{s==="fulfilled"?e(t):s==="rejected"&&r(t)},t)}).then(e=>{o.success({position:"topRight",title:"OK",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{o.error({position:"topRight",title:"Error",message:`❌ Rejected promise in ${e}ms`})})}i.style.width="300px";
//# sourceMappingURL=commonHelpers2.js.map