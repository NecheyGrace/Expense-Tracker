import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  // const { id, title, category, description, image, price, rating } =
  //   products[0];
  const renderList = products.map((product) => {
    return (
      // <div key={product.id} className="four column wide">
      //  <Link to={`/product/${product.id}`}>

      //   <div className="ui link cards">
      //     <div className="card">
      //       <div className="image">
      //         <img src={product.image} alt={product.title} />
      //       </div>
      //       <div className="content">
      //         <div className="header">{product.title}</div>
      //         <div className="meta price"> ${product.price}</div>
      //         <div className="meta">{product.category}</div>
      //       </div>
      //     </div>
      //   </div>
      //  </Link>

      // </div>

      <div className="four wide column" key={product.id}>
        <Link to={`/product/${product.id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="content">
                <div className="header">{product.title}</div>
                <div className="meta price">$ {product.price}</div>
                <div className="meta">{product.category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
}

export default ProductComponent;
