import brandList from "@/lib/apiRequest/brandList";
import Link from "next/link";
import Image from "next/image";

export default async function Brands() {
  const brands = await brandList();

  return (
    <section className='py-20'>
      <div className='container mx-auto px-4 text-center'>
        <h3 className='mb-16 text-2xl font-heading'>
          Trusted by brands all over the world
        </h3>
        <div className='flex flex-wrap -mx-2'>
          {brands.map((brand) => {
            return (
              <div
                key={brand.id}
                className='mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2'
              >
                <Link href='#'>
                  <Image
                    className='mx-auto h-8'
                    width={100}
                    height={40}
                    src={brand.image}
                    alt={brand.name}
                  />
                </Link>
              </div>
            );
          })}

          {/* <div className='mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2'>
            <a href='#'>
              <img
                className='mx-auto h-8'
                src='atis-assets/logo/brands/dropbox.png'
                alt=''
              />
            </a>
          </div>
          <div className='mb-12 md:mb-0 w-full md:w-1/2 lg:w-1/4 px-2'>
            <a href='#'>
              <img
                className='mx-auto h-8'
                src='atis-assets/logo/brands/spotify.png'
                alt=''
              />
            </a>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 px-2'>
            <a href='#'>
              <img
                className='mx-auto h-8'
                src='atis-assets/logo/brands/stripe.png'
                alt=''
              />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
