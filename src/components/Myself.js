import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  useMediaQuery,
  Icon,
} from "@chakra-ui/react";
import { DiAndroid } from "react-icons/di";

function MYSelf() {
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="self-start" px="12" py="6">
        <Heading fontWeight="extrabold" color="cyan.500" size="2xl">
          1 Thn
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          {" "}
          Telah Belajar DI POLTEKPOS
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16" mt={-48}>
        <Text fontWeight="bold" fontSize="1xl">
          Tugas Yang Telah Dihosting Dan Digunakan
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={-2}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="40vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon color="white" p={4} as={DiAndroid} w={24} h={24}></Icon>
            <Text color="white" p={4} fontSize="xl" fontWeight="semibold">
              Games Android
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default MYSelf;
