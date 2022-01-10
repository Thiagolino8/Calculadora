import tw from "twin.macro"

const Grid = tw.div`
  grid
  justify-center
  grid-cols-[repeat(4, 6rem)]
  grid-rows-[minmax(7rem, auto) repeat(5, 6rem)]
`;

export default Grid
