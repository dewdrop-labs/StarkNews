import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import LatestNews from "./components/latest-news";
import Posts from "./components/posts";
import LatestVideos from "./components/latest-videos";
import Learn from "./components/learn";
import Sponsors from "./components/sponsors";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center ">
        <Navbar />
        <Header />
        <LatestNews />
        <Posts />
        <LatestVideos />
        <Learn />
        <Sponsors />
        <Footer />
    </div>
  );
}
