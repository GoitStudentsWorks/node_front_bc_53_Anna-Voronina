import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFriendsThunk } from "../../redux/global/globalOperations";

import { OurFriendsList } from "../../modules/ourFriends/OurFriendsList/OurFriendsList";
import { Container } from "../../shared/components/Container/Container";
import { PageTitle } from "../../shared/components/PageTitle/PageTitle";

const OurFriendsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchFriendsThunk({
        page: 1,
        limit: 10,
      })
    );
  }, [dispatch]);

  return (
    <Container>
      <PageTitle title="Our Friends" />
      <OurFriendsList />
    </Container>
  );
};

export default OurFriendsPage;
