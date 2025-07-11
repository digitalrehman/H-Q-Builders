import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { siteConfig } from "./assets/config";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>{siteConfig.meta.title}</title>
          <meta name="description" content={siteConfig.meta.description} />
          <meta name="keywords" content={siteConfig.meta.keywords} />
          <meta name="author" content={siteConfig.meta.author} />
          <meta property="og:title" content={siteConfig.meta.title} />
          <meta
            property="og:description"
            content={siteConfig.meta.description}
          />
          <meta property="og:image" content={siteConfig.meta.image} />
          <meta property="og:url" content={siteConfig.meta.url} />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
