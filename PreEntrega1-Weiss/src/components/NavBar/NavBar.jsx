import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";


export default function NavBar({ CartWidget }) {

  const DesktopNav = () => {
    return (
      <nav>
        <NavLink className={styles.enlaces} to="/">
          Home
        </NavLink>
        <NavLink className={styles.enlaces} to="/women">
          Women
        </NavLink>
        <NavLink className={styles.enlaces} to="/men">
          Men
        </NavLink>
        <NavLink className={styles.enlaces} to="/jewelery">
          Jewelery
        </NavLink>
        <NavLink className={styles.enlaces} to="/electronic">
          Electronic
        </NavLink>
      </nav>
    );
  };

  return (
    <>
      <Box bg={useColorModeValue("red.400", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex align="center" mr={5}>
            <NavLink to="/">
              <Heading as="h1" size="lg">
                ShopStore
              </Heading>
            </NavLink>
          </Flex>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <CartWidget />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
