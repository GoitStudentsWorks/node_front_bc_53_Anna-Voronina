import data from "../ourFriends.json";
import { OurFriendsCard } from "../OurFriendsCard/OurFriendsCard";
import { StyledList } from "./OurFriendsList.styled";

export const OurFriendsList = () => {
  return (
    <StyledList>
      {data.map((res, idx) => {
        return <OurFriendsCard key={idx} {...res} />;
      })}
    </StyledList>
  );
};
