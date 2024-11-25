import Link from "next/link";
//import { db } from "~/server/db";

import { getMyImages } from "~/server/queries"


/*
const mockUrls = [
  "https://utfs.io/f/06079463-903c-4d25-a12e-1172fbdbd99d-1ody.jpg", 
  "https://utfs.io/f/5accb5ae-66b7-4f8d-9ba7-445f7aa08ac1-2a.jpg",
  "https://utfs.io/f/30aa60e5-cf99-4f20-9873-563d36cef6d0-n5yecz.jpg",
  "https://utfs.io/f/465f90dc-7176-4bf8-8d42-7d8164465b59-m24mvs.jpg",
  "https://utfs.io/f/Gi1lyvQ5cMToTsHQG1yjsSTz8Btrk3A5PUyO1v4e9hbwICYi"
];

const mockImages = mockUrls.map((url, index) =>({
  id: index + 1,
  url,
}));
*/

export default async function HomePage() {
  const images = await getMyImages().catch((error) => {
    console.error(error);
  return null;
  });
  return (
    <main className="">
      <div className= "flex flex-wrap gap-4">
        {images != null && images.map((image, index) => (
          <div key={image.id} className="w-48 flex-col">
            <img src={image.url} />
            <div>{image.name} </div>
            <img className ="" src={image.url} />
      </div>
      ))}
      </div>
    </main>
  );
}
