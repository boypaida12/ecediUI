import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";
import React from "react";

const EscrowBid = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Accept</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fund Escrow</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Card>
              <CardBody>
                <Text>10000 GHC</Text>
              </CardBody>
            </Card>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Decline</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EscrowBid;
