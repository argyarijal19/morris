import React from "react";
import {
  useColorMode,
  useMediaQuery,
  Stack,
  Circle,
  Flex,
  Box,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import Gambar from "./images/1.JPG";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        mr={isNotSmallerScreen ? "0" : "-62"}
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        zIndex="-1"
        w="200px"
        h="200px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="100px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold" fontFamily="monospace">
            Hi, I Am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Argya Rijal
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Mahasiswa Politeknik Pos Indonesia Jurusan Teknik Informatika,
            Memiliki Cita-Cita Sebagai Seorang Data Science
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => window.open("https://www.google.com/")}
          >
            Lihat CV{" "}
          </Button>
        </Box>
        <Image
          alignSelf="flex-end"
          mt={isNotSmallerScreen ? "0" : "-80"}
          mb={isNotSmallerScreen ? "0" : "12"}
          mr={isNotSmallerScreen ? "0" : "-40"}
          zIndex="-1"
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="200px"
          src={Gambar}
        />
      </Flex>
    </Stack>
  );
}

export default Header;
