import { useSelector } from "react-redux";
import OneNews from "../OneNews/OneNews";
import { ListNewsStyled, PlugStyled } from "./ListNews.styled";
import { selectNewsSort } from "../../../../redux/global/globalSelectors";

const ListNews = () => {
  const newsSort = useSelector(selectNewsSort);

  return (
    <>
      {newsSort.length === 0 ? (
        <PlugStyled>News are displayed here...</PlugStyled>
      ) : (
        <ListNewsStyled>
          {newsSort.map((item) => {
            return <OneNews key={item.id} {...item} />;
          })}
        </ListNewsStyled>
      )}
    </>
  );
};

export default ListNews;
