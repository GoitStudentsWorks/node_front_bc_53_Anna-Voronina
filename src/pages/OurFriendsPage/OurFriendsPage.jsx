import { OurFriendsList } from "../../modules/ourFriends/OurFriendsList/OurFriendsList";
import { Container } from "../../shared/components/Container/Container";
import { Title } from "../NewsPage/NewsPage.styled";

const OurFriendsPage = () => {
  return (
    <Container>
      <Title>Our Friends</Title>
      <OurFriendsList />
    </Container>
  );
};

export default OurFriendsPage;
