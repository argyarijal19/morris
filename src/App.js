import {
  Flex,
  VStack,
  Heading,
  IconButton,
  useColorMode,
  Spacer,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaAndroid,
  FaFacebookMessenger,
} from "react-icons/fa";
import Header from "./components/Header";
import Social from "./components/social";
import MYSelf from "./components/Myself";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Argya Rijal Rafi
        </Heading>
        <Spacer> </Spacer>
        <IconButton
          icon={<FaInstagram />}
          ml={2}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaAndroid />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaFacebookMessenger />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>{" "}
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>{" "}
      </Flex>{" "}
      <Header />
      <Social />
      <MYSelf />
    </VStack>
  );
}

export default App;
