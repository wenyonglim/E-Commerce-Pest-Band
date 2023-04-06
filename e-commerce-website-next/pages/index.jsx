import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import ApparelCard from "@/components/ApparelCard";
import Footer from "@/components/Footer";
import data from "@/lib/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>PEST Commerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pest-logo.svg" />
      </Head>
      <>
        <NavBar />
        <div className="flex flex-col md:flex-row md:p-24 justify-center items-center">
          {data.products.map((product) => (
            <div key={product.slug} className="pb-4 md:pr-4">
              <ApparelCard
                name={product.name}
                description={product.description}
                price={product.price}
                src={product.image}
                category={product.category}
                slug={product.slug}
              />
            </div>
          ))}
        </div>
        <Footer></Footer>
      </>
    </>
  );
}
