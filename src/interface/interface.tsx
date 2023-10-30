/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/**
 * @typedef Album
 * @property {number} id - The album id
 * @property {number} bandId - The band id
 * @property {string} name - The album name
 * @property {number} year - The year of the album
 */
interface Album {
  id: number;
  bandId: number;
  name: string;
  year: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/**
 * @typedef Band
 * @property {string} id - The band id
 * @property {string} name - The band name
 * @property {string[]} members - The members of the band
 * @property {string} genreCode - The genre code of the band
 * @property {string} country - The country of the band
 */
interface Band {
  id: string;
  name: string;
  members: string[];
  genreCode: string;
  country: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/**
 * @typedef Member
 * @property {string} name - The member name
 */
interface Member {
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/**
 * @typedef AuthContextType
 * @property {boolean} isAuthenticated - Authentication status
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setIsAuthenticated - Function to set authentication status
 */
interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/**
 * @typedef BandMember
 * @property {string} bandId - The band id of the member
 */
interface BandMember {
  bandId: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/**
 * GenreProps component props
 * @typedef GenreProps 
 * @property {(genreCode: string | null) => void} onGenreClick - Function to handle genre click 
 */
interface GenreProps {
  onGenreClick: (genreCode: string | null) => void;
}
