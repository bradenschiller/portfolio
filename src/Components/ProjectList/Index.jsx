import {
  Button,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import styles from "../../../styles/Home.module.css";

const ProjectList = ({ projects }) => {
  console.log({ projects })

return (
  <>
    {projects.map(({ description, name, openGraphImageUrl: image, url }) => {
      return (
        <a href={url}>
        <Box
          className={styles.boxes}
          maxW="xsm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image htmlWidth="250px" boxSize="200px" objectFit="fill" src={image} alt={image} />
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {description}
          </Box>
        </Box>
        </a>
      );
    })}
  </>
);

};

export default ProjectList;
