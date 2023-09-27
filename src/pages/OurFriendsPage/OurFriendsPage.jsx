import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriendsThunk } from "../../redux/global/globalOperations";
import { selectFriends } from "../../redux/global/globalSelectors";

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

  return <div>OurFriendsPage</div>;
};

export default OurFriendsPage;
