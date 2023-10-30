import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

/**
 * @typedef BandMembersContextType
 * @property {string[]} members - The members of the band
 * @property {Dispatch<SetStateAction<string[]>>} setMembers - Function to set the members of the band
 * @property {string | null} selectedBandId - The selected band id
 * @property {Dispatch<SetStateAction<string | null>>} setSelectedBandId - Function to set the selected band id
 * @property {string | null} genreCode - The genre code of the band
 * @property {Dispatch<SetStateAction<string | null>>} setGenreCode - Function to set the genre code of the band
 * @property {string | null} country - The country of the band
 * @property {Dispatch<SetStateAction<string | null>>} setCountry - Function to set the country of the band
 */
interface BandMembersContextType {
  members: string[];
  setMembers: Dispatch<SetStateAction<string[]>>;
  selectedBandId: string | null;
  setSelectedBandId: Dispatch<SetStateAction<string | null>>;
  genreCode: string | null;
  setGenreCode: Dispatch<SetStateAction<string | null>>;
  country: string | null;
  setCountry: Dispatch<SetStateAction<string | null>>;
}

const BandMembersContext = createContext<BandMembersContextType>({
  members: [],
  setMembers: () => {},
  selectedBandId: null,
  setSelectedBandId: () => {},
  genreCode: null,
  setGenreCode: () => {},
  country: null,
  setCountry: () => {},
});

/**
 * @typedef BandMembersProviderProps
 * @property {ReactNode} children - The children nodes
 */
interface BandMembersProviderProps {
  children: ReactNode;
}

/**
 * BandMembersProvider component
 * @param {BandMembersProviderProps} props - The properties
 */
export function BandMembersProvider({ children }: BandMembersProviderProps) {
  const [members, setMembers] = useState<string[]>([]);
  const [selectedBandId, setSelectedBandId] = useState<string | null>(null);
  const [genreCode, setGenreCode] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  return (
    <BandMembersContext.Provider
      value={{
        members,
        setMembers,
        selectedBandId,
        setSelectedBandId,
        genreCode,
        setGenreCode,
        country,
        setCountry,
      }}
    >
      {children}
    </BandMembersContext.Provider>
  );
}

export default BandMembersContext;
