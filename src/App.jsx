import { Box, Flex, Spacer } from "@chakra-ui/react";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  return (
    <Box>
      <Flex
        flexDir={["column", "column", "row"]}
        justifyContent={"space-between"}
        m={4}
        p={4}
        // border={"1px solid red"}
      >
        <ProductsList />
        <Spacer />
        <Cart />
      </Flex>
    </Box>
  );
}

export default App;
