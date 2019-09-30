import React from 'react';
import { Layout } from '../components/layout/layout.component';
import { GridContainer, GridElement, GridSampler, GridSpacer } from '../components/layout/grid/grid.styled';
import { Input } from '../components/ui/inputs/input/input.component';

const Index = () => (
  <Layout>
    <GridSpacer/>
    <GridContainer>
      <GridElement width={ 12 }><GridSampler>col-12</GridSampler></GridElement>
    </GridContainer>
    <GridContainer>
      <GridElement width={ 6 }><GridSampler>col-6</GridSampler></GridElement>
      <GridElement width={ 6 }><GridSampler>col-6</GridSampler></GridElement>
    </GridContainer>
    <GridContainer>
      <GridElement width={ 4 }><GridSampler>col-4</GridSampler></GridElement>
      <GridElement width={ 4 }><GridSampler>col-4</GridSampler></GridElement>
      <GridElement width={ 4 }><GridSampler>col-4</GridSampler></GridElement>
    </GridContainer>
    <GridContainer>
      <GridElement width={ 3 }><GridSampler>col-3</GridSampler></GridElement>
      <GridElement width={ 3 }><GridSampler>col-3</GridSampler></GridElement>
      <GridElement width={ 3 }><GridSampler>col-3</GridSampler></GridElement>
      <GridElement width={ 3 }><GridSampler>col-3</GridSampler></GridElement>
    </GridContainer>
    <GridContainer>
      <GridElement width={ 2 }><GridSampler>col-2</GridSampler></GridElement>
      <GridElement width={ 2 }><GridSampler>col-2</GridSampler></GridElement>
      <GridElement width={ 2 }><GridSampler>col-2</GridSampler></GridElement>
      <GridElement width={ 2 }><GridSampler>col-2</GridSampler></GridElement>
      <GridElement width={ 2 }><GridSampler>col-2</GridSampler></GridElement>
      <GridElement width={ 2 }><GridSampler>col-2</GridSampler></GridElement>
    </GridContainer>
    <GridContainer>
      <GridElement width={ 1 }><GridSampler>col-1</GridSampler></GridElement>
      <GridElement width={ 1 }><GridSampler>col-1</GridSampler></GridElement>
      <GridElement width={ 1 }><GridSampler>col-1</GridSampler></GridElement>
      <GridElement width={ 1 }><GridSampler>col-1</GridSampler></GridElement>
      <GridElement width={ 1 }><GridSampler>col-1</GridSampler></GridElement>
      <GridElement width={ 1 }><GridSampler>col-1</GridSampler></GridElement>
      <GridElement width={ 1 }><GridSampler>col-1</GridSampler></GridElement>
      <GridElement width={ 1 }><GridSampler>col-1</GridSampler></GridElement>
      <GridElement width={ 1 }><GridSampler>col-1</GridSampler></GridElement>
      <GridElement width={ 1 }><GridSampler>col-1</GridSampler></GridElement>
      <GridElement width={ 1 }><GridSampler>col-1</GridSampler></GridElement>
      <GridElement width={ 1 }><GridSampler>col-1</GridSampler></GridElement>
    </GridContainer>
    <GridSpacer/>
    <GridContainer>
      <GridElement width={ 3 }>
        <Input
          value=""
          type="text"
          placeholder="Saample input"
        />
      </GridElement>
      <GridElement width={ 3 }>
        <Input
          value=""
          type="text"
          placeholder="Sample input"
          success="Thats an a amazing success message"
        />
      </GridElement>
      <GridElement width={ 3 }>
        <Input
          value=""
          type="text"
          placeholder="Sample input"
          isTouched={ true }
          error="Thats an a amazing error message"
        />
      </GridElement>
    </GridContainer>
  </Layout>
);


export default Index
