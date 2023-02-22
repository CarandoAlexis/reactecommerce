import { Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            objectFit='cover'
            src="https://cise-egypt.com/wp-content/uploads/2019/09/WELCOME-ST-IVES.jpg"
            alt="Impresora"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;