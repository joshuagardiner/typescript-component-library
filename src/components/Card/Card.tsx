import React from "react";
import { ICardProps } from "./ICardProps";

/**
 * The Card component
 *
 * @returns the Card component JSX
 */
export const Card: React.FC<ICardProps> = ({
  children,
  height,
  marginTop,
  width,
}: React.PropsWithChildren<ICardProps>): JSX.Element => {
  return (
    <div
      className={"tcl-card"}
      data-testid={"card"}
      style={{ height: height, marginTop: marginTop, maxWidth: width }}
    >
      <div className={"tcl-card__content"} data-testid={"card-content"}>
        {children}
      </div>
    </div>
  );
};
