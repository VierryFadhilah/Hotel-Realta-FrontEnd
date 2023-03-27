import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import SearchBooking from "@/components/searchBooking"
import SidebarBooking from "@/components/sidebarBooking"
import Sidebar from "@/components/sidebar"

export default function App() {
  return (
    <main className="w-[85%] mx-auto">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <SearchBooking /> */}
      {/* <SidebarBooking /> */}
      <Sidebar />
    </main>
  )
}
