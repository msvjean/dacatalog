import { render, screen } from '@testing-library/react';
import { Product } from 'types/product';
import ProductCard from '..';

describe('ProductCard tests', () => {

    test('should render ProductCard', () => {

        const product: Product = {
            name: "Notebook",
            price: 2345.67,
            imgUrl: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000",
        } as Product;

        render(
            <ProductCard product={product} />
        );
        expect(screen.getByText(product.name)).toBeInTheDocument();
        expect(screen.getByAltText(product.name)).toBeInTheDocument();
        expect(screen.getByText('R$')).toBeInTheDocument();
        expect(screen.getByText('2.345,67')).toBeInTheDocument();
    });

});