import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriendsThunk } from "../../redux/global/globalOperations";
import { selectFriends } from "../../redux/global/globalSelectors";
import { OurFriendsList } from "../../modules/ourFriends/OurFriendsList/OurFriendsList";
import { Container } from "../../shared/components/Container/Container";
import { Title } from "../NewsPage/NewsPage.styled";

const OurFriendsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchFriendsThunk({
        page: 1,
        limit: 9,
      })
    );
  }, [dispatch]);

  const friends = useSelector(selectFriends);

  return (
    <Container>
      <Title>Our Friends</Title>
      <OurFriendsList />
    </Container>
  );
};

export default OurFriendsPage;
