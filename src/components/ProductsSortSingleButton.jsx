import React from "react";
import { Button } from "@chakra-ui/react";

const ProductsSortSingleButton = ({ title, icon }) => {
  return <Button leftIcon={icon}>{title}</Button>;
};

export default ProductsSortSingleButton;
