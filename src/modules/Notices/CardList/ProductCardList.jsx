import {ProductList, ProductItem, PetCategory, FavoriteBtn, HeartIconPrimal, NoticesItemImg, ItemTitle, WrapperBtn, WrapperInformation, InformationMap, IconInformation, IconWrapper, ContentWrapper } from "./ProductCardList.styled";
import Button from '@/shared/components/Button/Button';

// const city = [
//   {
//     id: 1,
//     name: Lviv,
//   },
//   {
//     id: 2,
//     name: Ivano-Frankivsk,
//   },
//   {
//     id: 3,
//     name: Khmelnytskyi,
//   },
// ]

// Photo
import sprite from '../../../shared/icons/sprite.svg';
import card from '../img/Rectangle 24.png';

const ProductCardList = () => {


  return <ProductList>

      <ProductItem id="" key="">
        <IconWrapper>
       <PetCategory>test</PetCategory>

          <FavoriteBtn
            onClick={()=> {}}
          >
            <HeartIconPrimal >
              <use href={sprite + "#heart"}></use>
            </HeartIconPrimal>
          </FavoriteBtn>

          <NoticesItemImg
            loading="lazy"
            src={card}
            alt="icon"
          />

          <WrapperInformation>
            <InformationMap>
              <IconInformation>
                <use href={sprite + "#location-1"}></use>
              </IconInformation>
            {/* {city.name.lengtgh > 20
                ? (list_name = list_name.slice(0, 20) + '...')
                : (list_name = list_name)
              } */}
              Lviv
            </InformationMap>

            <InformationMap>
              <IconInformation>
                <use href={sprite + "#clock"}></use>
              </IconInformation>
              1 year
            </InformationMap>

            <InformationMap>
              <IconInformation>
                <use href={sprite + "#female"}></use>
              </IconInformation>
              female
            </InformationMap>
          </WrapperInformation>
        </IconWrapper>

        <ContentWrapper>
          <ItemTitle>
            Сute dog looking for a home
          </ItemTitle>

          <WrapperBtn>
            <Button type="button" text="Learn more" variant="bigButtonFirst" />
          </WrapperBtn>
        </ContentWrapper>

      </ProductItem>
    </ProductList>
};

export default ProductCardList;
