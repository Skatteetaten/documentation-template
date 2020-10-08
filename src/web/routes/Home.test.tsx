import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from './Home';

import '@testing-library/jest-dom/extend-expect';
import { act, render, RenderResult } from '@testing-library/react';

describe('Home', () => {
  it('should render fetched data', async () => {
    let renderResult: RenderResult | undefined;
    await act(async () => {
      renderResult = render(
        <MemoryRouter initialEntries={['/monkey']}>
          <Home />
        </MemoryRouter>
      );
    });

    expect(renderResult?.getByText('Hello')).toBeInTheDocument();
  });
});
