import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../Form';
import { Router, useParams } from 'react-router-dom';
import history from 'util/history';
import { server } from './fixtures';
import selectEvent from 'react-select-event';
import { ToastContainer } from 'react-toastify';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn()
}));

describe('Product form create tests', () => {

    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({
            productId: 'create'
        })
        
    });

    jest.setTimeout(30000);

    test('should show toast and redirect when submit form correctly', async () => {
        
        render(
            <Router history={history}>
                <ToastContainer />
                <Form />
            </Router>
        );

        const nameInput = screen.getByTestId("name");
        const priceInput = screen.getByTestId("price");
        const imgUrlInput = screen.getByTestId("imgUrl");
        const descriptionInput = screen.getByTestId("description");
        const categoriesInput = screen.getByLabelText("Categorias");
        const submitButton = screen.getByRole('button', { name: /salvar/i });

        await selectEvent.select(categoriesInput, ['Computadores', 'Eletrônicos']);
        userEvent.type(nameInput, "Mouse");
        userEvent.type(priceInput, "100.51");
        userEvent.type(imgUrlInput, "https://i.pinimg.com/originals/e4/34/2a/e4342a4e0e968344b75cf50cf1936c09.jpg");
        userEvent.type(descriptionInput, "Mouse ultra rapido");
        
        userEvent.click(submitButton);

        waitFor(() => {
            const toastElemet = screen.getByText('Produto cadastrado com sucesso');
            expect(toastElemet).toBeInTheDocument();
            expect(history.location.pathname).toEqual('/admin/products');           
          });
    });

    test('should show 5 validation messages when just clicking submit', async () => {
        
        render(
            <Router history={history}>
                <Form />
            </Router>
        );
        
        const submitButton = screen.getByRole('button', { name: /salvar/i });
        
        userEvent.click(submitButton);

        await waitFor(() => {
            const messages = screen.getAllByText('Campo obrigatório');
            expect(messages).toHaveLength(5);
        });
        
    });

});