import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('Should render content', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>children</h1>
      </SectionContainer>,
    );
    expect(screen.getAllByRole('heading')).toBeInTheDocument;
    expect(container.firstChild).toMatchSnapshot();
  });
});
