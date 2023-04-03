import { Outlet } from 'umi';
import styles from './index.less';
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}
