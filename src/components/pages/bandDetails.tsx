import React, { useContext, useEffect, useState } from "react";
import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import BandMembersContext from "../../context/bandMembersContext";
import api from "../../api/api";
import LogoutButton from "../utils/logout";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

/**
 * Component representing the details of a band, including albums and members.
 */
const BandDetails: React.FC = () => {
  const { members, selectedBandId, genreCode, country } =
    useContext(BandMembersContext);
  const [albums, setAlbums] = useState<Album[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setCurrentBandId] = useState<string | null>(null);

  /**
   * Fetch albums on component mount
   */
  useEffect(() => {
    if (Array.isArray(members) && members.length > 0) {
      if (selectedBandId !== null) {
        setCurrentBandId(selectedBandId);
      }

      api
        .get(`/albums?bandId=${selectedBandId}`)
        .then((response) => {
          if (response.status !== 200) {
            throw Error("Network response was not ok");
          }
          setAlbums(response.data);
        })
        .catch((error) => {
          console.error("Error fetching albums:", error);
        });
    }
  }, [members, selectedBandId]);

  /**
   * Render the list of albums for the band.
   * @returns JSX.Element
   */
  const renderAlbums = () => {
    if (Array.isArray(albums) && albums.length > 0) {
      return albums.map((album, index) => (
        <Box key={index} fontSize="20px">
          <Text>{album.name}</Text>
          <Text mb={4} color="white">
            Release:{" "}
            <Text as="span" color="teal.500">
              {album.year}
            </Text>
          </Text>
        </Box>
      ));
    } else {
      return <Text color="teal.500">No albums available for this band.</Text>;
    }
  };

  /**
   * Render the list of band members.
   * @returns JSX.Element
   */
  const renderMembers = () => {
    if (Array.isArray(members)) {
      return members.map((member, index) => (
        <Text mb={4} key={index} fontSize="20px">
          {member.name}
        </Text>
      ));
    } else {
      return <Text color="teal.500">No members to display.</Text>;
    }
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Box position="absolute" top={5} left={5}>
        <Link to="/user/bands">
          <Box as={FiArrowLeft} size={50} _hover={{ color: "teal.500" }} />
        </Link>
      </Box>
      <Flex justifyContent="flex-end" width="100%" padding="10px">
        <LogoutButton />
      </Flex>
      <Grid templateColumns="1fr 1fr" gap={4} textAlign="center" m="0">
        <Box>
          <Text as="h2" fontSize="30px" mb="5">
            Albums:
          </Text>
          {renderAlbums()}
        </Box>
        <Box>
          <Text as="h2" fontSize="30px" mb="5">
            Members:
          </Text>
          {renderMembers()}
        </Box>
      </Grid>
      <Box
        position="fixed"
        bottom="0"
        left="0"
        width="100%"
        backgroundColor="blue.0"
        padding="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mb="20"
      >
        <Text fontSize="25px">
          Country:{" "}
          <Text as="span" color="teal.500">
            {country}
          </Text>
        </Text>
        <Text fontSize="25px">
          Genre:{" "}
          <Text as="span" color="teal.500">
            {genreCode}
          </Text>
        </Text>
      </Box>
    </Box>
  );
};

export default BandDetails;
