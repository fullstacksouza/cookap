import React from "react";
import { MotiImage } from "moti";
import { styles } from "./styles";
import plateImg from "../../assets/plate.png";

export function Plate() {
  return (
    <MotiImage
      from={{
        rotate: "100deg",
        opacity: 0,
      }}
      animate={{
        rotate: "0deg",
        opacity: 1,
      }}
      transition={{
        type: "timing",
        duration: 2000,
      }}
      style={styles.plate}
      source={plateImg}
      resizeMode="contain"
    />
  );
}
