import React, { useContext } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FaDollarSign } from "react-icons/fa6";
import { AppContext } from "../context/AppContext";

const CartProductCard = ({ id, title, price }) => {
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
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      pb={4}
      mt={2}
      borderBottom={"1px solid gray"}
    >
      <Text>
        {title
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </Text>
      <Box>
        <Flex alignItems={"center"} mt={2}>
          <FaDollarSign /> {price}
        </Flex>
        <Button
          colorScheme="teal"
          mt={2}
          onClick={() => {
            removeItemFromCart(id);
          }}
        >
          Remove
        </Button>
      </Box>
    </Flex>
  );
};

export default CartProductCard;
