import { Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const LandingPageLayout = ({ children, ...props }) => (
  <Flex
    direction="column"
    align="center"
    maxW={{ xl: "1200px" }}
    m="0 auto"
    {...props}
  >
    <Header />
    {children}
    <Footer />
  </Flex>
);
