import Image from "next/image";
import * as React from "react";
/**
 * Grid Item Variants
 * 1. image card
 * 2. image-text card
 *      direction
 *      overlay
 * 3. text card
 * 4.
 * Grid Container variants
 *
 */
//======================================
export const GridLayout = <T extends React.ReactNode>({
  items,
}: {
  /**
   * @required grid items
   */
  items: T[];
}) => {
  //======================================return
  return (
    <div className="container mx-auto col-center">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {items.map((item, i) => (
          <div
            key={i}
            className={
              "w-full shadow aspect-square rounded-sm overflow-hidden relative"
            }
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
