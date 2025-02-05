import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  Modal,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { menu } from "../../constants/data.ts";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../../App.css";
import ConnectButton from "../../components/ConnectButton.tsx";
import { RegisterCreator } from "../../components/RegisterCreator.tsx";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <Flex h="100vh">
      <Box
        w="500px"
        h="100vh"
        py={"2rem"}
        px={"1.8rem"}
        bg={"#171717"}
        overflowY={"auto"}
        overflowX={"hidden"}
      >
        <Box
          mb={"5rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text>LOGO</Text>
          <ConnectButton />
        </Box>

        <Flex flexDirection={"column"} justify={"space-between"} h={"77%"}>
          <Flex flexDirection={"column"} gap={"1rem"}>
            {menu.map((item, index) => (
              <NavLink to={item.link} key={index} className="activeClassName">
                <Flex align={"center"} px={"1rem"}>
                  <Icon as={item.icon} />
                  <Text fontSize={".9rem"} p={".8rem"}>
                    {item.title}
                  </Text>
                </Flex>
              </NavLink>
            ))}
          </Flex>
          <Box>
            <Button
              bgGradient="linear(to-r, #04A67D, #24B1B6)"
              borderRadius={"100rem"}
              border={"none"}
              color={"#fff"}
              transition={"all .5s ease-in-out"}
              w={"150px"}
              _hover={{
                bgGradient: "linear(to-r, #04A67D, #24B1B6)",
                border: "none",
              }}
              _focus={{ outline: "none" }}
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <Text>Register</Text>
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box
        w={"100%"}
        h={"100vh"}
        overflowY={"auto"}
        overflowX={"hidden"}
        py={"2.5rem"}
        px={"1.5rem"}
      >
        {props.children}
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <RegisterCreator />
      </Modal>
    </Flex>
  );
};

export default DashboardLayout;
