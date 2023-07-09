import React from "react";

const Description = ({ productDescription, index }) => {
  return (
    <>
      <div className="bgParagraph">
        {productDescription.product.summary.paragraph.map(
          (productDescription, index) => (
            <>
              <h3 key={index}> {productDescription.subTitle} </h3>
              <p key={index}>{productDescription.text}</p>
            </>
          )
        )}
      </div>
      ;
    </>
  );
};

export default Description;
