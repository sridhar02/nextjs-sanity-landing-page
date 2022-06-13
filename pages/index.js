import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

// import sanity client
import client from "../lib/sanity";
import YoutubeEmbed from "../components/Youtube";
import Social from "../components/Social";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function Home({ data }) {
  console.log({ data });
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${data?.image.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex items-center justify-center flex-col text-white h-screen"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-5 leading-snug">{data.title}</h1>
          <h2 className="max-w-4xl mb-4 leading-normal text-lg font-semibold">
            {data.subtitle}
          </h2>
          <div className="mt-12 text-center text-sm">
            <a
              href={`${data?.cta.current}`}
              className="bg-white text-kisiBlack rounded-md px-20 py-3.5"
            >
              JOIN OUR TEAM
            </a>
          </div>
        </div>
      </div>
      <main className="py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl">{data?.heading}</h1>
          <div className="font-thin my-4 border-gray-300 opacity-50 border-t-2"></div>
          <p className="my-4 text-lg leading-10">{data?.subheading}</p>
        </div>
      </main>
      <main className="pt-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex place-content-between items-center">
            <div className="text-3xl mb-2">{data?.theteam}</div>
            <div className="border-2 border-gray-200 p-2 rounded-sm">
              <a
                href="https://www.getkisi.com/careers#careers"
                className="uppercase flex"
              >
                <div>Discover Postitions</div>
                <img
                  className="ml-2"
                  src="https://www.getkisi.com/images/arrow-right-dark-grey.svg"
                  alt="arrow"
                />
              </a>
            </div>
          </div>
          <div className="font-thin my-4 border-gray-300 opacity-50 border-t-2 mb-8 pb-2"></div>
          <div className="mb-8">
            <YoutubeEmbed url={data?.youtubeLink.url} />
          </div>
          <div
            style={{
              backgroundImage: `url(${data?.teamImage.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="h-80 flex flex-col justify-center items-center bg-slate-200"
          >
            <div
              style={{
                background: "rgba(0,0,0,0.3)",
              }}
              className="w-full h-full text-white "
            >
              <div className="mx-auto max-w-2xl text-white font-bold text-center relative mt-20">
                <h1 className="text-5xl ">{data?.teamTitle}</h1>
                <p className="my-4">{data?.teamSubTitle}</p>
                <button className="bg-kisiBrand rounded-md text-white text-center font-normal px-40 py-2 mt-4">
                  View Careers
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Social />
      <Footer />
    </div>
  );
}

const pageQuery = `*\[_type == "page"\][0]
  {
  ...,
  image{
    ...asset->
  },
  teamImage{
    ...asset->
  }
  } 
`;

// _type == 'reference' => @->,
export const getServerSideProps = async ({ params }) => {
  const landingPageData = await client.fetch(pageQuery);

  console.log(landingPageData);
  return {
    props: {
      data: landingPageData,
    },
  };
};
