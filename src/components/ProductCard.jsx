import React, { useContext } from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { FaDollarSign } from "react-icons/fa6";
import { AppContext } from "../context/AppContext";

const ProductCard = (props) => {
  const { id, title, price, image } = props;
  const {
    data,
    setData,
    getProductsData,
    addCartData,
    removeItemFromCart,
    emptyCartData,
    editUserName,
  } = useContext(AppContext);

  return (
    <Box borderRadius={"10px"} border={"1px dotted gray"} p={2}>
      <Image src={image} alt={id} w={"100%"} />
      <Box mt={2}>
        {title
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </Box>
      <Flex alignItems={"center"} mt={2}>
        <FaDollarSign /> {price}
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Button
          colorScheme="teal"
          mt={2}
          onClick={() => {
            addCartData(props);
          }}
        >
          Add to Cart
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductCard;
