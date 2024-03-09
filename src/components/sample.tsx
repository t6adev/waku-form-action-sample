'use client';

import { useTransition } from 'react';

export const Sample = ({
  actionWithFormData,
  actionWithoutFormData,
}: {
  actionWithFormData: (formData: FormData) => Promise<void>;
  actionWithoutFormData: (title: string) => Promise<void>;
}) => {
  const [isPending, startTransition] = useTransition();
  const handleClick2 = (formData: FormData) => {
    startTransition(async () => {
      await actionWithFormData(formData);
    });
  };
  return (
    <section className="border-blue-400 -mx-4 mt-4 rounded border border-dashed p-4">
      <form action={handleClick2}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          className="w-full rounded border border-blue-400 p-2"
        />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => actionWithoutFormData('title')}>Submit without form data</button>
    </section>
  );
};
