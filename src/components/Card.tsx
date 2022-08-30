import * as React from "react";

/**
 * Cards Variants
 * 1. image card
 * 2. image-text card
 *      direction
 *      overlay
 * 3. text card
 *
 */
//======================================
export const Card = () => {
  //======================================return
  return (
    <div className="bg-slate-400 py-4 row-center">
      <div className="mycard w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="mycard-body">
          <h2 className="mycard-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="mycard-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
