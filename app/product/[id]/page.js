export default async function Home({ params }) {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  const id = params.id;

  // Debugging logs
  console.log("API Base URL:", API_BASE);
  console.log("Product ID:", id);

  const url = `${API_BASE}/product/${id}`;
  console.log("Fetch URL:", url);

  const data = await fetch(url, { cache: "no-store" });

  // Check for fetch errors
  if (!data.ok) {
    throw new Error(`Failed to fetch product: ${data.statusText}`);
  }

  const product = await data.json();
  console.log({ product, category: product.category });

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">{product.title}</h1>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Date of Release:</strong> {new Date(product.releaseDate).toLocaleDateString()}</p>
      <p><strong>Product ID:</strong> {product.id}</p>
      <p><strong>Features:</strong> {product.features?.join(', ')}</p>
    </div>
  );
}

