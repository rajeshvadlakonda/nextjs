import Link from "next/link";
import Layout from "../components/Layout";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
  Box,
  Heading
} from "@chakra-ui/core";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Heading>Hello Next.js 👋</Heading>
    <Box>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>Accordion 1</AccordionButton>
          <AccordionPanel>Welcome home</AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Button colorScheme="red" marginTop="40px">
        Welcome
      </Button>
    </Box>
  </Layout>
);

export default IndexPage;
