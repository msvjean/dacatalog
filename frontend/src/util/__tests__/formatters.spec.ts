import { formatPrice } from "util/formatters";

describe('formatPrice tests', () => {
    test('formatPrice should format number pt-BR when given 10.1', () => {
        const result = formatPrice(10.1);
        expect(result).toEqual('10,10');
    });
});


