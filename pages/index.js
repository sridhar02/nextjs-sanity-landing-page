import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

// import sanity client
import client from "../lib/sanity";

export default function Home({ data }) {
  return (
    <>
      <h1 className="text-center text-xl font-bold">Hello Nextjs and sanity</h1>
    </>
  );
}
