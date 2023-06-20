import React from "react";
import { productList } from "../../data/productList";

const Card = () => {
  return (
    <main className="arrayProductCard">
      {Array.from({ length: 20 }).map(() =>
        // récupère la totalité des produits et les intègres dans une fiche
        productList.map((product) => (
          <React.Fragment key={product.id}>
            <div className="productCard">
              <img src={product.picture} alt={product.altPicture} />
              <div className="textProductCard">
                <h1>{product.nameProduct} </h1>
                <h2>{product.summary.title} </h2>
                {/* récupère la totalité du résumé d'un produit et l'intègres à une balise "p" */}
                {product.summary.paragraph.map((para) => (
                  <p key={para.id}>{para.text}</p>
                ))}{" "}
              </div>
            </div>
          </React.Fragment>
        ))
      )}
    </main>
  );
};

export default Card;