# ASYNC UI 

## Install packages 

```
npm i @asyncui/react

pnpm add @asyncui/react

```

## Tailwind CSS Config

```typescript
import { colors } from "@asyncui/react";
import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@asyncui/react/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            colors
        }
    },
  },
}
export const plugins = [nextui()]
```


# Use asyncui components

## Text

```tsx
"use client";

import { Text } from "@asyncui/react";

export default function Home() {
  return (
    <Text size="xxs" className="text-colors-primary-700">
      Hello World
    </Text>
  );
}
```

## Avatar

```tsx
"use client";

import { AvatarComponents } from "@asyncui/react";

export default function Home() {
  return (
    <>
      <AvatarComponents.Avatar
        size="lg"
        isFocusable
        className="text-colors-primary-400"
        showFallback
        src="https://github.com/andrebellico.png"
      />
      <AvatarComponents.Avatar
        isBordered
        isDisabled
        size="lg"
        className="text-colors-neutral-0 bg-colors-neutral-600"
        src=""
      />

      <AvatarComponents.Group max={4} isBordered total={1}>
        <AvatarComponents.Avatar
          className="text-colors-primary-400"
          showFallback
          src="https://github.com/andrebellico.png"
        />
        <AvatarComponents.Avatar
          className="text-colors-neutral-0 bg-colors-neutral-600"
          src=""
        />
      </AvatarComponents.Group>
    </>
  );
}
```

## Header

```tsx

"use client";

import { Header } from "@asyncui/react";

export default function Home() {
  return (
    <div>
      <Header
        subtitle="36 entries found"
        title="Create an Entry"
        primaryActionBtn={
          <button className="w-[122px] h-9 px-4 py-2.5 text-colors-neutral-0 bg-indigo-600 rounded justify-center items-center gap-2 inline-flex">
            Save
          </button>
        }
        secondaryActionBtn={
          <button className="w-[76px] h-8 px-4 py-2 bg-white rounded border border-zinc-200 justify-center items-center gap-2 inline-flex">
            Edit
          </button>
        }
        tertiaryActionBtn={
          <button className="w-[122px] h-9 px-4 py-2.5 border-solid border text-colors-neutral-1000 bg-colors-neutral-0 rounded justify-center items-center gap-2 inline-flex">
            Cancel
          </button>
        }
        back={<button className="text-colors-primary-600">Back</button>}
      ></Header>
    </div>
  );
}
```

## Dialog

```tsx
"use client";

import { Dialog } from "@asyncui/react";
import { useDisclosure } from "@nextui-org/react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div>
        <button
          onClick={onOpen}
          className="bg-colors-primary-600 border text-colors-neutral-0 px-6 py-2 rounded-md"
        >
          Show Dialog
        </button>
        <Dialog.Root
          backdrop="blur"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <Dialog.Header onClose={onOpenChange} className="bg-colors-neutral-0">
            Confirm
          </Dialog.Header>
          <Dialog.Content className="bg-colors-neutral-0 text-center">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              aspernatur cumque eius at voluptate deleniti voluptatum in quidem
              molestiae, possimus, repellendus quas, omnis consectetur sunt nam
              debitis! Ab, vel ratione.
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              aspernatur cumque eius at voluptate deleniti voluptatum in quidem
              molestiae, possimus, repellendus quas, omnis consectetur sunt nam
              debitis! Ab, vel ratione.
            </span>
          </Dialog.Content>
          <Dialog.Footer className="bg-colors-neutral-0">
            <button className=" bg-colors-danger-600 border  text-colors-neutral-0 px-6 py-2 rounded-md">
              Secondary button
            </button>
            <button className="bg-colors-primary-600 border  text-colors-neutral-0 px-6 py-2 rounded-md">
              Primary button
            </button>
          </Dialog.Footer>
        </Dialog.Root>
      </div>
    </>
  );
}
```

## AlertModal

```tsx
"use client";

import { ModalAlert } from "@asyncui/react";
import { useDisclosure } from "@nextui-org/react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div>
        <button
          onClick={onOpen}
          className="bg-colors-primary-600 border text-colors-neutral-0 px-6 py-2 rounded-md"
        >
          Show ModalAlert
        </button>
        <ModalAlert.Root
          backdrop="blur"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalAlert.Header className="bg-colors-neutral-0">
            Confirmação
          </ModalAlert.Header>
          <ModalAlert.Content className="bg-colors-neutral-0 text-center">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              aspernatur cumque eius at voluptate deleniti voluptatum in quidem
              molestiae, possimus, repellendus quas, omnis consectetur sunt nam
              debitis! Ab, vel ratione.
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              aspernatur cumque eius at voluptate deleniti voluptatum in quidem
              molestiae, possimus, repellendus quas, omnis consectetur sunt nam
              debitis! Ab, vel ratione.
            </span>
          </ModalAlert.Content>
          <ModalAlert.Footer className="bg-colors-neutral-0">
            <button className=" bg-colors-danger-600 border  text-colors-neutral-0 px-6 py-2 rounded-md">
              Secondary button
            </button>
            <button className="bg-colors-primary-600 border  text-colors-neutral-0 px-6 py-2 rounded-md">
              Primary button
            </button>
          </ModalAlert.Footer>
        </ModalAlert.Root>
      </div>
    </>
  );
}

```

## Alert/Toast

```tsx
"use client";

import { useAlert } from "@asyncui/react";

export default function Home() {
  const { alerts, createToast } = useAlert();
  const addAlert = () => {
    createToast({
      title: "Warning alert:",
      children: "Alert with title and longer description.",
      variant: "success",
      onClose: () => {},
      link: "https://www.google.com/",
      textLink: "Saiba Mais",
    });
  };

  return (
    <>
      <div>
        <button
          onClick={addAlert}
          className="bg-colors-primary-600 border text-colors-neutral-0 px-6 py-2 rounded-md"
        >
          Adicionar Alert
        </button>
        {alerts}
      </div>
    </>
  );
}

```



