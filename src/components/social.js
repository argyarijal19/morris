import React from "react";
import { HStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaSpotify } from "react-icons/fa";

function Social() {
  return (
    <HStack spacing="25">
      <Icon as={FaFacebook} boxSize="35" />
      <Icon as={FaInstagram} boxSize="35" />
      <Icon as={FaSpotify} boxSize="35" />
    </HStack>
  );
}

export default Social;
