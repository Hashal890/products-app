import React, { useContext } from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaDollarSign } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const CartPrintReceiptModal = ({ sumOfCartItemsPrice }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <>
      <Button w={"100%"} colorScheme="orange" onClick={onOpen}>
        Print Receipt
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cart Receipt</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              This is your cart data checkout summary. After this step, the
              items in your cart will be deleted for the checkout process. If
              you wish to continue purchasing, feel free to add more items to
              your cart. The total amount you need to pay is{" "}
              <Box as="span" display="inline-flex" alignItems="center">
                <FaDollarSign /> {sumOfCartItemsPrice}
              </Box>
              .
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                emptyCartData();
              }}
            >
              Accpet & Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CartPrintReceiptModal;
