import { useState, useEffect, useContext } from "react";
import BandMembersContext from "../../context/bandMembersContext";
import Genre from "./genres";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

import {
  ChakraProvider,
  UnorderedList,
  ListItem,
  Flex,
  Heading,
  Box,
} from "@chakra-ui/react";
import api from "../../api/api";
import LogoutButton from "../utils/logout";
import { Link } from "react-router-dom";

/**
 * BandList component
 */
const BandList = () => {
  const [bands, setBands] = useState<Band[]>([]);
  const [allBands, setAllBands] = useState<Band[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [, setSortOrder] = useState<string>("asc");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setSelectedGenre] = useState<string | null>(null);
  const bandMembers = useContext(BandMembersContext) || {
    setMembers: () => [],
    selectedBandId: null,
    setSelectedBandId: () => {},
  };

  /* Handlers */

  /**
   * Handle band click
   * @param {Band} band - The band
   */
  const handleBandClick = (band: Band) => {
    if (bandMembers) {
      const membersOfCurrentBand = band.members;
      bandMembers.setMembers(membersOfCurrentBand);
      bandMembers.setSelectedBandId(band.id);
      bandMembers.setGenreCode(band.genreCode);
      bandMembers.setCountry(band.country);
    }
  };

  /**
   * Handle genre click
   * @param {string | null} genreCode - The genre code
   */
  const handleGenreClick = (genreCode: string | null) => {
    setSelectedGenre(genreCode);
    if (genreCode) {
      const matchingBands = allBands.filter(
        (band) => band.genreCode === genreCode
      );
      setBands(matchingBands);
    } else {
      setBands(allBands);
    }
  };

  /**
   * Handle sort click
   * @param {string} sortOrder - The sort order ("asc" or "desc")
   */
  const handleSortClick = (sortOrder: string) => {
    let sortedBands;
    if (sortOrder === "asc") {
      sortedBands = [...bands].sort((a, b) => a.name.localeCompare(b.name));
      setSortOrder("desc");
    } else {
      sortedBands = [...bands].sort((a, b) => b.name.localeCompare(a.name));
      setSortOrder("asc");
    }
    setBands(sortedBands);
  };

  /* Handlers */

  /**
   * Fetch bands on component mount
   */
  useEffect(() => {
    const fetchBands = () => {
      api
        .get("/bands")
        .then((response) => {
          setAllBands(response.data);
          setBands(response.data);
        })
        .catch((error) => {
          setError(
            error instanceof Error
              ? "Error fetching bands: " + error.message
              : "An error occurred while fetching bands."
          );
        });
    };

    fetchBands();
  }, []);

  const bandsGroup1 = bands.slice(0, 6);
  const bandsGroup2 = bands.slice(6, 12);

  return (
    <ChakraProvider>
      <Flex alignItems="center">
        <LogoutButton />
        <Genre onGenreClick={handleGenreClick} />
      </Flex>
      <Flex flexDir="column" align="center" justify="center">
        <Box mb={8}>
          <Flex alignItems="center">
            <Heading as="h1" size="3xl" ml={16}>
              List of Bands
            </Heading>
            <Flex ml={4} mt={3}>
              <Box
                as={FiArrowUp}
                size={24}
                cursor="pointer"
                _hover={{ color: "teal.500" }}
                onClick={() => handleSortClick("asc")}
              />
              <Box
                as={FiArrowDown}
                size={24}
                cursor="pointer"
                _hover={{ color: "teal.500" }}
                onClick={() => handleSortClick("desc")}
              />
            </Flex>
          </Flex>
        </Box>
        {error ? (
          <div>{error}</div>
        ) : (
          <Flex>
            <UnorderedList styleType="none" fontSize="20px" m="15">
              {bandsGroup1.map((band) => (
                <ListItem
                  key={band.id}
                  _hover={{ color: "teal.500", cursor: "pointer" }}
                  mb={2}
                >
                  <Link
                    to={`/user/bands/${band.name}`}
                    onClick={() => handleBandClick(band)}
                  >
                    {band.name}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
            <UnorderedList styleType="none" fontSize="20px" m="15">
              {bandsGroup2.map((band) => (
                <ListItem
                  key={band.id}
                  _hover={{ color: "teal.500", cursor: "pointer" }}
                  mb={2}
                >
                  <Link
                    to={`/user/bands/${band.name}`}
                    onClick={() => handleBandClick(band)}
                  >
                    {band.name}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Flex>
        )}
      </Flex>
    </ChakraProvider>
  );
};

export default BandList;
