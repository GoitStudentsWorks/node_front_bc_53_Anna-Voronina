import news from "../../news.json";
import OneNews from "../OneNews/OneNews";
import { ListNewsStyled } from "./ListNews.styled";

const ListNews = () => {
  const sortNews = news.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      {sortNews.lenght === 0 ? (
        <h3>News is displayed here...</h3>
      ) : (
        <ListNewsStyled>
          {sortNews.map((item) => {
            return <OneNews key={item.id} {...item} />;
          })}
        </ListNewsStyled>
      )}
    </>
  );
};

export default ListNews;
