import { Button, Box, Text, Image } from "@chakra-ui/react";
import styles from "../../../styles/Home.module.css";
import LanguageList from './LanguageList'

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map(
        ({ description, name, languages, url }) => {
          return (
            <a href={url} key={url}>
              <Box
                className={styles.boxes}
                maxW="xsm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                height="100px"
              >
                <LanguageList languages={languages} />
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="sm"
                  textTransform="uppercase"
                  ml="2"
                >
                  <Text fontWeight="bold">{name}</Text>
                  <Box color="black" fontSize='10px'>
                    <Text>{description}</Text>
                  </Box>
                </Box>
              </Box>
            </a>
          );
        }
      )}
    </>
  );
};

export default ProjectList;
