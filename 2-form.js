import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form"),s="feedback-form-state";let e={email:"",message:""};const l=localStorage.getItem(s);l&&(e=JSON.parse(l),a.email.value=e.email,a.message.value=e.message);a.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem(s,JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(s),e={email:"",message:""},a.reset()});const r=document.querySelector("button");r.classList.add("form-btn");const o=document.querySelector("input");o.classList.add("form-input");const m=document.querySelector("textarea");m.classList.add("form-textarea");const c=document.querySelectorAll("label");c.forEach(t=>t.classList.add("form-label"));
//# sourceMappingURL=2-form.js.map
