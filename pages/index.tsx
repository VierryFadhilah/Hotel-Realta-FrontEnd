import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  return (
    <>
      <h1 className="text-3xl font-poppins-bold text-primary underline">Hello world!</h1>
    </>
  );
}
