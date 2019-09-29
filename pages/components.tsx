import React from 'react';
import { Layout } from '../components/layout/layout.component';
import { GridContainer, GridElement } from '../components/layout/grid/grid.styled';
const Index = () => (
  <Layout>
    <GridContainer>
      Components
      <GridElement width={ 12 }>col-12</GridElement>
    </GridContainer>
    <GridContainer>
      <GridElement width={ 6 }>col-6</GridElement>
      <GridElement width={ 6 }>col-6</GridElement>
    </GridContainer>
    <GridContainer>
      <GridElement width={ 4 }>col-4</GridElement>
      <GridElement width={ 4 }>col-4</GridElement>
      <GridElement width={ 4 }>col-4</GridElement>
    </GridContainer>
    <GridContainer>
      <GridElement width={ 3 }>col-3</GridElement>
      <GridElement width={ 3 }>col-3</GridElement>
      <GridElement width={ 3 }>col-3</GridElement>
      <GridElement width={ 3 }>col-3</GridElement>
    </GridContainer>
    <GridContainer>
      <GridElement width={ 2 }>col-2</GridElement>
      <GridElement width={ 2 }>col-2</GridElement>
      <GridElement width={ 2 }>col-2</GridElement>
      <GridElement width={ 2 }>col-2</GridElement>
      <GridElement width={ 2 }>col-2</GridElement>
      <GridElement width={ 2 }>col-2</GridElement>
    </GridContainer>
    <GridContainer>
      <GridElement width={ 1 }>col-1</GridElement>
      <GridElement width={ 1 }>col-1</GridElement>
      <GridElement width={ 1 }>col-1</GridElement>
      <GridElement width={ 1 }>col-1</GridElement>
      <GridElement width={ 1 }>col-1</GridElement>
      <GridElement width={ 1 }>col-1</GridElement>
      <GridElement width={ 1 }>col-1</GridElement>
      <GridElement width={ 1 }>col-1</GridElement>
      <GridElement width={ 1 }>col-1</GridElement>
      <GridElement width={ 1 }>col-1</GridElement>
      <GridElement width={ 1 }>col-1</GridElement>
      <GridElement width={ 1 }>col-1</GridElement>
    </GridContainer>
  </Layout>
);


export default Index
