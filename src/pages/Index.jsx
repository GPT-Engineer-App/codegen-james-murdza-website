import React from "react";
import { Box, Container, Heading, Text, VStack, Image, Link, Button, Icon, Divider } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5} as="article">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1559766144-f1050b0e6a39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxKYW1lcyUyME11cmR6YXxlbnwwfHx8fDE3MTAxNzI0Nzh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="James Murdza" mb={4} />
        <Heading as="h1" size="xl">
          James Murdza
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Software Developer | Code Generation Enthusiast
        </Text>
        <Divider my={5} />
        <Text fontSize="md">Hi, I'm James, a passionate software developer with a particular interest in code generation and its impact on modern software development practices. Through my work and research, I strive to create tools and systems that enhance developer productivity and software quality.</Text>
        <Divider my={5} />
        <Heading as="h2" size="lg">
          About Codegen
        </Heading>
        <Text fontSize="md">Code generation is an automated process of generating code that would otherwise have to be written manually. It's a powerful technique that can help reduce boilerplate, prevent human error, and fast-track the development process. By leveraging templates and specific rules, codegen tools can produce consistent and reliable code based on a defined input, often in the form of a model or schema.</Text>
        <Button rightIcon={<FaEnvelope />} colorScheme="teal" variant="solid" mt={5}>
          Get in Touch
        </Button>
        <Box d="flex" mt={5} justifyContent="center">
          <Link href="https://github.com/jamesmurdza" isExternal mx={2}>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
          <Link href="https://linkedin.com/in/jamesmurdza" isExternal mx={2}>
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
          <Link href="https://twitter.com/jamesmurdza" isExternal mx={2}>
            <Icon as={FaTwitter} boxSize={6} />
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
