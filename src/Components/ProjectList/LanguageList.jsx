import { Badge, Flex } from "@chakra-ui/react";

const languageList = ({ languages }) => {
  if (!languages) return null;

  return (
    <Flex>
      {languages.nodes.map(({ name }, index) => {
        return (
          <Badge
            key={index}
            style={{ margin: ".25rem", borderRadius: ".25rem" }}
            variant="solid"
            colorScheme="blue"
          >
            {name}
          </Badge>
        );
      })}
    </Flex>
  );
};

export default languageList;
