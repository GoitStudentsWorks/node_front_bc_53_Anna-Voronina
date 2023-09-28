import { useState } from "react";
import {
  ProductList,
  ProductItem,
  PetCategory,
  FavoriteBtn,
  HeartIconPrimal,
  NoticesItemImg,
  ItemTitle,
  WrapperBtn,
  WrapperInformation,
  InformationMap,
  IconInformation,
  IconWrapper,
  ContentWrapper,
} from "./ProductCardList.styled";
import Button from "@/shared/components/Button/Button";
import { ModalProductCart } from "../popups/ModalProductCart";

// Photo
import sprite from "../../../shared/icons/sprite.svg";
import card from "../img/Rectangle 24.png";

const ProductCardList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <ProductList>
      <ProductItem id="" key="">
        <IconWrapper>
          <PetCategory>test</PetCategory>

          <FavoriteBtn onClick={() => {}}>
            <HeartIconPrimal>
              <use href={sprite + "#heart"}></use>
            </HeartIconPrimal>
          </FavoriteBtn>

          <NoticesItemImg loading="lazy" src={card} alt="icon" />

          <WrapperInformation>
            <InformationMap>
              <IconInformation>
                <use href={sprite + "#location-1"}></use>
              </IconInformation>
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
          <ItemTitle>Сute dog looking for a home</ItemTitle>

          <WrapperBtn>
            <Button
              type="button"
              text="Learn more"
              variant="bigButtonFirst"
              onClick={handleModalOpen}
            />
          </WrapperBtn>
        </ContentWrapper>
      </ProductItem>
      {isModalOpen && <ModalProductCart setIsModalOpen={setIsModalOpen} />}
    </ProductList>
  );
};

export default ProductCardList;
