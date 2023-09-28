import { useSelector } from "react-redux";
// import news from "../../news.json";
import OneNews from "../OneNews/OneNews";
import { ListNewsStyled } from "./ListNews.styled";
import { selectNews } from "../../../../redux/global/globalSelectors";

const ListNews = () => {
  const news = useSelector(selectNews);

  // const sortNews = news.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      {news.length === 0 ? (
        <h3>News is displayed here...</h3>
      ) : (
        <ListNewsStyled>
          {news.map((item) => {
            return <OneNews key={item.id} {...item} />;
          })}
        </ListNewsStyled>
      )}
    </>
  );
};

export default ListNews;
