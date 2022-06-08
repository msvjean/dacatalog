import { render, screen } from '@testing-library/react';
import ProductPrice from '..';

describe('ProductPrice tests', () => {

    test('should render ProductPrice', () => {
        render(
          <ProductPrice price={10} />  
        );
        expect(screen.getByText('R$')).toBeInTheDocument();
        expect(screen.getByText('10,00')).toBeInTheDocument();
    });

});