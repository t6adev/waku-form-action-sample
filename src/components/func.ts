'use server';

import { rerender } from 'waku/server';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const actionWithFormData = async (formData: FormData) => {
  await sleep(0); // Getting error with await
  const title = formData.get('title');
  if (title === null) {
    throw new Error('Unexpected null title');
  }
  console.log(title);
  rerender('/');
};

export const actionWithoutFormData = async (title: string) => {
  await sleep(0); // Getting error with await
  console.log(title);
  rerender('/');
};
