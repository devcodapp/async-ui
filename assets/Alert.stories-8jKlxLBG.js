import{j as p}from"./jsx-runtime-EN2LmfEx.js";import{A as m,u as g}from"./index-rF3RHS9l.js";import"./index-CWWLs2mj.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-uYjVNemX.js";const b={title:"Components/Alert",component:m,tags:["autodocs"],args:{title:"Warning alert:",children:"Alert with title and longer description.",variant:"warning",onClose:()=>{},link:"https://www.google.com/",textLink:"Saiba Mais"},argTypes:{variant:{control:{type:"inline-radio"},options:["warning","success","info","danger"]}},parameters:{layout:"centered"}},t={},e=()=>{const{alerts:l,createToast:c}=g(),d=()=>{c({title:"Warning alert:",children:"Alert with title and longer description.",onClose:()=>{},size:"large",link:"https://www.google.com/",textLink:"Saiba Mais"})};return p.jsxs("button",{onClick:d,className:"bg-white border text-colors-neutral-1000 px-6 py-2 rounded-md",children:["Adicionar Alert",l]})};var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const {
    alerts,
    createToast
  } = useAlert();
  const addAlert = () => {
    createToast({
      title: "Warning alert:",
      children: "Alert with title and longer description.",
      onClose: () => {},
      size: "large",
      link: "https://www.google.com/",
      textLink: "Saiba Mais"
    });
  };
  return <button onClick={addAlert} className="bg-white border text-colors-neutral-1000 px-6 py-2 rounded-md">
      Adicionar Alert
      {alerts}
    </button>;
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const k=["Alert_","Action"];export{e as Action,t as Alert_,k as __namedExportsOrder,b as default};
