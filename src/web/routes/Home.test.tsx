import React from 'react';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { Home } from './Home';

import '@testing-library/jest-dom/extend-expect';
import { act, render, RenderResult } from '@testing-library/react';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

afterEach(() => {
  axiosMock.get.mockClear();
});

describe('Home', () => {
  it('should render fetched data', async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: 'Hello from the other side',
    });

    let renderResult: RenderResult | undefined;
    await act(async () => {
      renderResult = render(
        <MemoryRouter initialEntries={['/message']}>
          <Home />
        </MemoryRouter>
      );
    });

    expect(
      renderResult?.getByText('Hello from the other side')
    ).toBeInTheDocument();

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
});
