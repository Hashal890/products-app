import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { FaUser, FaEdit, FaDollarSign } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { AppContext } from "../context/AppContext";
import CartProductCard from "./CartProductCard";
import CartPrintReceiptModal from "./CartPrintReceiptModal";

const Cart = () => {
  const {
    data,
    setData,
    getProductsData,
    addCartData,
    removeItemFromCart,
    emptyCartData,
    editUserName,
  } = useContext(AppContext);
  const [newUserName, setNewUserName] = useState(data.userName);
  const [isEditable, setIsEditable] = useState(true);
  const [sumOfCartItemsPrice, setSumOfCartItemsPrice] = useState(0);

  const findTotalOfCartItems = () => {
    let sum = 0;
    for (let i = 0; i < data.cartData.length; i++) {
      let item = data.cartData[i];
      sum += item.price;
    }
    setSumOfCartItemsPrice(sum);
  };

  useEffect(() => {
    findTotalOfCartItems();
  }, [data]);

  return (
    <Box w={["100%", "100%", "30%", "27%"]}>
      <InputGroup>
        <InputLeftAddon cursor={"pointer"}>
          <FaUser />
        </InputLeftAddon>
        <Input
          placeholder={newUserName}
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <InputRightAddon
          onClick={() => {
            setIsEditable(!isEditable);
            if (!isEditable) {
              editUserName(newUserName);
            }
          }}
          cursor={"pointer"}
        >
          {isEditable ? <FaEdit /> : <IoMdDoneAll />}
        </InputRightAddon>
      </InputGroup>
      <Box mt={4}>
        {data.cartData?.map((cartItem) => {
          const { id } = cartItem;
          return <CartProductCard key={id} {...cartItem} />;
        })}
      </Box>
      <Box mt={8}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text fontWeight={700}>Subtotal</Text>
          <Flex alignItems={"center"} mt={2}>
            <FaDollarSign /> {sumOfCartItemsPrice}
          </Flex>
        </Flex>
      </Box>
      <Flex
        mt={12}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={6}
      >
        <Button
          bg={"white"}
          w={"100%"}
          _hover={{ bg: "white" }}
          border={"1px dotted grey"}
        >
          Add Voucher Code
        </Button>
        <CartPrintReceiptModal sumOfCartItemsPrice={sumOfCartItemsPrice} />
      </Flex>
    </Box>
  );
};

export default Cart;
