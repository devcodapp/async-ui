import{j as e}from"./jsx-runtime-EN2LmfEx.js";import{D as o}from"./index-rF3RHS9l.js";import{u as c,b as m}from"./index-75jR297F.js";import"./index-CWWLs2mj.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-uYjVNemX.js";const h={title:"Components/Dialog",component:o,args:{size:"md",hideCloseButton:!1,backdrop:"opaque"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","full"],description:"Tamanho do modal",table:{defaultValue:{summary:"md"}}},hideCloseButton:{control:{type:"boolean"}},backdrop:{control:{type:"inline-radio"},options:["transparent","opaque","blur"]}},parameters:{layout:"centered"}},t=()=>{const{isOpen:a,onOpen:l,onOpenChange:i}=c();return e.jsxs(e.Fragment,{children:[e.jsx(m,{onPress:l,children:"Open Modal"}),e.jsxs(o.Root,{isOpen:a,onOpenChange:i,children:[e.jsx(o.Header,{onClose:i,children:e.jsx("p",{className:"font-bold",children:"Título do Modal"})}),e.jsxs(o.Content,{children:[e.jsxs("p",{className:"m-4",children:["Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit."," "]}),e.jsxs("p",{className:"m-4",children:["Lorem ipsum dolor sit amet consectetur adipisicing elit."," "]})]}),e.jsx(o.Footer,{children:e.jsx("button",{className:"flex items-center gap-1 body-semi justify-center rounded px-4 py-3 bg-white  text-colors-primary-600  border border-solid ",children:"Adicionar Conteúdo"})})]})]})};var s,n,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onOpenChange
  } = useDisclosure();
  return <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Dialog.Root isOpen={isOpen} onOpenChange={onOpenChange}>
        <Dialog.Header onClose={onOpenChange}>
          <p className="font-bold">Título do Modal</p>
        </Dialog.Header>
        <Dialog.Content>
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum
            dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit
            amet consectetur adipisicing elitLorem ipsum dolor sit amet
            consectetur adipisicing elitLorem ipsum dolor sit amet consectetur
            adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing
            elit.{" "}
          </p>
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </Dialog.Content>
        <Dialog.Footer>
          <button className="flex items-center gap-1 body-semi justify-center rounded px-4 py-3 bg-white  text-colors-primary-600  border border-solid ">
            Adicionar Conteúdo
          </button>
        </Dialog.Footer>
      </Dialog.Root>
    </>;
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const D=["Dialog_"];export{t as Dialog_,D as __namedExportsOrder,h as default};
