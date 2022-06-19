import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {

  setCurrentPage,
} from "../../Redux/actions";
import ButtonMsg from "../ChatBot/ButtonMsg";

import { Loading } from "../Loanding/Loading";
import { NoResults } from "../Loanding/NoResult";
import Card from "./Card";
import {
  ButtonCurrentPage,
  Container,
  ContainerCardsList,
  FlooterBar,
  WrapperButtons,
} from "./Cards.css";

const ITEMS_FOR_PAGE = 10;

export default function Cards() {
  const countries = useSelector((state) => state.countries);
  const currentPage = useSelector((state) => state.currentPage);
  const status = useSelector((state) => state.status);

  const dispatch = useDispatch();

  const filterCountries = () => {
    if (currentPage === 0) {
      return countries.slice(currentPage, currentPage + 9);
    }
    return countries.slice(currentPage, currentPage + ITEMS_FOR_PAGE);
  };
  const currentCountries = filterCountries();

  const nextPage = () => {
    currentPage === 0
      ? dispatch(setCurrentPage(currentPage + 9))
      : dispatch(setCurrentPage(currentPage + ITEMS_FOR_PAGE));
  };
  const prevPage = () => {
    if (currentPage === 9) return dispatch(setCurrentPage(currentPage - 9));
    if (currentPage > 0) dispatch(setCurrentPage(currentPage - ITEMS_FOR_PAGE));
  };

  return (
    <Container>
      {!status && <Loading />}
      {!currentCountries.length && status && <NoResults />}
      <ContainerCardsList>
        {currentCountries?.map((country) => (
          <Card key={country.id} country={country} />
        ))}
      </ContainerCardsList>
      <FlooterBar>
  
        <WrapperButtons>
        <ButtonCurrentPage disabled={currentPage === 0} onClick={prevPage}>
          Prev
        </ButtonCurrentPage>
        <ButtonCurrentPage
          disabled={currentCountries.length < 9 || currentPage === 240}
          onClick={nextPage}
        >
          Next
        </ButtonCurrentPage>
        </WrapperButtons>
        <ButtonMsg/>
      </FlooterBar>
    </Container>
  );
}
