import React, { useState, useEffect } from "react";
import { Box, Heading, List, ListItem, Link } from "@chakra-ui/react";
import api from "../../api/api";

/**
 * @typedef Genre
 * @property {string} code - The genre code
 * @property {number} id - The genre id
 * @property {string} name - The genre name
 */
interface Genre {
  code: string;
  id: number;
  name: string;
}

/**
 * Genre component
 * @param {object} props - The properties
 * @param {function} props.onGenreClick - Function to handle genre click
 */
const Genre: React.FC<GenreProps> = ({ onGenreClick }) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  /**
   * Fetch genres on component mount
   */
  useEffect(() => {
    const fetchGenres = () => {
      api
        .get("/genre")
        .then((response) => {
          setGenres(response.data);
        })
        .catch((error) => {
          console.error("Error fetching genre list:", error);
        });
    };

    fetchGenres();
  }, []);

  return (
    <Box
      className="genre-list"
      ml={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="20px"
    >
      <Heading as="h2" size="lg" mb={4}>
        Genre Filter
      </Heading>
      <List display="block">
        {genres.map((genre) => (
          <ListItem
            key={genre.id}
            _hover={{ color: "teal.500" }}
            fontSize="xl"
            onClick={() => {
              onGenreClick(genre.code);
            }}
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              {genre.name}
            </Link>
          </ListItem>
        ))}
        <ListItem
          _hover={{ color: "teal.500" }}
          fontSize="xl"
          onClick={() => onGenreClick(null)}
        >
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            Show all
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Genre;
