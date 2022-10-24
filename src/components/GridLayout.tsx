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
      <div className="grid w-full grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2 lg:grid-cols-3 lg:px-28">
        {items.map((item, i) => (
          <div key={i} className="w-full">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
