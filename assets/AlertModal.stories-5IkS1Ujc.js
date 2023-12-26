import{j as e}from"./jsx-runtime-EN2LmfEx.js";import{M as o,a as i}from"./index-rF3RHS9l.js";import{u as c,b as p}from"./index-75jR297F.js";import"./index-CWWLs2mj.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-uYjVNemX.js";const A={title:"Components/Modal Alert",component:o,tags:["autodocs"],args:{size:"md",hideCloseButton:!1,backdrop:"opaque"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","full"],description:"Tamanho do modal",table:{defaultValue:{summary:"md"}}},hideCloseButton:{control:{type:"boolean"}},backdrop:{control:{type:"inline-radio"},options:["transparent","opaque","blur"]}},parameters:{layout:"centered"}},t=()=>{const{isOpen:l,onOpen:a,onOpenChange:d}=c();return e.jsxs(e.Fragment,{children:[e.jsx(p,{onPress:a,children:"Open Modal"}),e.jsxs(o.Root,{isOpen:l,onOpenChange:d,children:[e.jsx(o.Header,{children:e.jsx("p",{className:"text-colors-neutral-1000",children:"Confirmação"})}),e.jsxs(o.Content,{children:[e.jsx(i,{className:"mt-2 mb-0 self-center",color:"#B72B1A",size:28}),e.jsx("p",{className:"font-semibold text-colors-danger-500 text-center m-4",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, beatae?"})]}),e.jsx(o.Footer,{children:e.jsx("button",{className:"flex items-center gap-1 body-semi justify-center rounded px-4 py-3 bg-colors-neutral-700 text-colors-primary-600  border border-solid ",children:"Botões"})})]})]})};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onOpenChange
  } = useDisclosure();
  return <>
      <Button onPress={onOpen}>Open Modal</Button>
      <ModalAlert.Root isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalAlert.Header>
          <p className="text-colors-neutral-1000">Confirmação</p>
        </ModalAlert.Header>
        <ModalAlert.Content>
          <AlertCircle className="mt-2 mb-0 self-center" color="#B72B1A" size={28} />
          <p className="font-semibold text-colors-danger-500 text-center m-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,
            beatae?
          </p>
        </ModalAlert.Content>
        <ModalAlert.Footer>
          <button className="flex items-center gap-1 body-semi justify-center rounded px-4 py-3 bg-colors-neutral-700 text-colors-primary-600  border border-solid ">
            Botões
          </button>
        </ModalAlert.Footer>
      </ModalAlert.Root>
    </>;
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const h=["ModalAlert_"];export{t as ModalAlert_,h as __namedExportsOrder,A as default};
