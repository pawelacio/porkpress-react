import React from 'react';
import { Layout } from '../components/layout/layout.component';
import { GridContainer, GridElement, GridSampler, GridSpacer } from '../components/layout/grid/grid.styled';
import { Input } from '../components/ui/inputs/input/input.component';
import { Head1, Head2, Head3, Head4, Head5, Head6 } from '../components/styles/headers';
import { SolidButton, ButtonTypes, ButtonSizes } from '../components/ui/button/button.styled';

const Index = () => (
  <Layout>
    <GridContainer>
      <GridElement>
        <Head1>Design System</Head1>
      </GridElement>
    </GridContainer>
    <GridContainer>
      <GridElement>
        <Head3>Grid</Head3>
      </GridElement>
    </GridContainer>
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
      <GridElement>
        <Head3>Typography exaples</Head3>
      </GridElement>
      <GridElement>
        <Head1>This is heading h1</Head1>
      </GridElement>
      <GridElement>
        <Head2>This is heading h2</Head2>
      </GridElement>
      <GridElement>
        <Head3>This is heading h3</Head3>
      </GridElement>
      <GridElement>
        <Head4>This is heading h4</Head4>
      </GridElement>
      <GridElement>
        <Head5>This is heading h5</Head5>
      </GridElement>
      <GridElement>
        <Head6>This is heading h6</Head6>
      </GridElement>
    </GridContainer>
    <GridContainer>
      <GridElement>
        <Head3>Inputs</Head3>
      </GridElement>
      <GridElement width={ 3 }>
        <Input
          value=""
          type="text"
          placeholder="Sample input"
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
    <GridContainer>
      <GridElement>
        <Head3>Solid Buttons</Head3>
      </GridElement>
      <GridElement width={ 2 }>
        <SolidButton size={ ButtonSizes.BIG }>
          Button Big
        </SolidButton>
      </GridElement>
      <GridElement width={ 2 }>
        <SolidButton size={ ButtonSizes.MEDIUM }>
          Button Medium
        </SolidButton>
      </GridElement>
      <GridElement width={ 2 }>
        <SolidButton size={ ButtonSizes.SMALL }>
          Button Small
        </SolidButton>
      </GridElement>
      <GridElement width={ 2 }>
        <SolidButton size={ ButtonSizes.MEDIUM } disabled>
          Button Disabled
        </SolidButton>
      </GridElement>
    </GridContainer>
    <GridSpacer/>
  </Layout>
);


export default Index
