import Link from "next/link";

const mockUrls = [
  "https://cplpanel.s3.ap-south-1.amazonaws.com/purchases/bills/bagasse/2024/06/09/Screenshot+2024-04-11+at+3.38.36+PM.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="width-full h-full pl-[300px]">
      <p>Hello</p>
      {mockImages.map((image) => (
        <div key={image.id}>
          <img src={image.url} />
        </div>
      ))}
    </main>
  );
}
