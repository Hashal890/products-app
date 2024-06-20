import React, { useContext } from "react";
import { Box, Button, Flex, Grid, GridItem, Input } from "@chakra-ui/react";
import { MdFilterListAlt } from "react-icons/md";
import { AppContext } from "../context/AppContext";
import { productsSortButtons } from "../assets/data";
import ProductsSortSingleButton from "./ProductsSortSingleButton";
import ProductCard from "./ProductCard";

const ProductsList = () => {
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
    <Box w={["100%", "100%", "67%", "70%"]} mb={[8]}>
      <Flex alignItems={"center"} justifyContent={"space-between"} gap={4}>
        <Flex w={"90%"} alignItems={"center"} gap={2}>
          <Input placeholder="Serach products here..." />
          <Button bg={"orange"} _hover={{ bg: "red", color: "white" }}>
            Search
          </Button>
        </Flex>
        <Button>
          <MdFilterListAlt />
        </Button>
      </Flex>
      <Flex alignItems={"center"} gap={[2, 4, 6]} mt={4} flexWrap={"wrap"}>
        {productsSortButtons.map((el) => (
          <ProductsSortSingleButton key={el.id} {...el} />
        ))}
      </Flex>
      <Grid
        templateColumns={[
          "1fr",
          "1fr 1fr",
          "1fr 1fr",
          "1fr 1fr 1fr",
          "1fr 1fr 1fr 1fr",
        ]}
        gap={4}
        mt={4}
      >
        {data.productsData?.map((product) => (
          <GridItem key={product.id}>
            <ProductCard {...product} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsList;
