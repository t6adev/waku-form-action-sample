import { Link } from 'waku';

import { Sample } from '../components/sample.js';
import { actionWithFormData, actionWithoutFormData } from '../components/func.js';

export const HomePage = async () => {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Sample
        actionWithFormData={actionWithFormData}
        actionWithoutFormData={actionWithoutFormData}
      />
      <Link to="/about" className="mt-4 inline-block underline">
        Learn more
      </Link>
    </div>
  );
};

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
  };

  return data;
};
