import "../styles/home.css";
import Footer from "./Footer";
import ProductCard from "./ProductCard";

const Home = ({ data, loader }) => {
  const Loading = () => {
    return (
      <div className="loader">
        <h2>Loading 🔃 ...</h2>
      </div>
    );
  };

  return (
    <>
      <div className="home">
        <h1>Welcome to Redux Toolkit Store</h1>
        <br />
        <h3>PRODUCTS : </h3>

        <div className="product-list">
          {loader ? (
            <Loading />
          ) : (
            data.map((item) => <ProductCard {...item} key={item.id} />)
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
