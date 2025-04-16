"use client";

import type React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load components that are not immediately visible
const NewsFeed = lazy(() => import("./components/NewsFeed"));
const Categories = lazy(() => import("./components/Categories"));
const EditorsPicks = lazy(() => import("./components/EditorsPicks"));
const TrendingTopics = lazy(() => import("./components/TrendingTopics"));
const Newsletter = lazy(() => import("./components/Newsletter"));
const Footer = lazy(() => import("./components/Footer"));
const AllNews = lazy(() => import("./pages/all-news"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-8 h-8 border-4 border-neon-green/20 border-t-neon-green rounded-full animate-spin"></div>
  </div>
);

// Layout component to maintain consistent structure
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-charcoal bg-cyber-grid bg-cyber relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal pointer-events-none"></div>
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-16">{children}</main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

// Home page content
const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <NewsFeed />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Categories />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <TrendingTopics />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <EditorsPicks />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Newsletter />
      </Suspense>
    </>
  );
};

// AnimatedRoutes component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/all-news"
            element={
              <Layout>
                <Suspense fallback={<LoadingFallback />}>
                  <AllNews />
                </Suspense>
              </Layout>
            }
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;

