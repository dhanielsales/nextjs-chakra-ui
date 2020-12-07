import { useRouter } from 'next/dist/client/router';

const Product = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.slug}</h1>
    </div>
  );
};

export default Product;
