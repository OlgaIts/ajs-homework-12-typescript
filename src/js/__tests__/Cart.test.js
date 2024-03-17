import Cart from '../Cart'
import Book from '../Book'

describe('класс Cart', () => {
  const cart = new Cart()

  test('Тестирование метода add()', () => {
    cart.add(new Book(1, 'Сказка о царе Салтане', 'А.С. Пушкин', 1525, 48))
    cart.add(new Book(2, 'Евгений Онегин', 'А.С. Пушкин', 2382, 320))
    cart.add(new Book(3, 'Руслан и Людмила', 'А.С. Пушкин', 1579, 192))

    expect(cart.getAll().length).toBe(3)
  });

  test('Тестирование метода calculateTotalCost()', () => {
    expect(cart.calculateTotalCost()).toBe(5486)
  });

  test('Тестирование метода calculateDiscountPrice()', () => {
    expect(cart.calculateDiscountPrice(12)).toBeCloseTo(4827.68)
    expect(cart.calculateDiscountPrice(25)).toBeCloseTo(4114.5)
    expect(cart.calculateDiscountPrice(50)).toBe(2743)
  });


  test('Тестирование метода delete()', () => {
    cart.add(new Book(4, 'Мертвые души', 'Н.В. Гоголь', 2500, 352))
    cart.delete(1)
    expect(cart.getAll().length).toBe(3)
  });



  test('Тестирование метода getAll()', () => {
    const expected = [
      {
        id: 2,
        name: 'Евгений Онегин',
        author: 'А.С. Пушкин',
        price: 2382,
        pages: 320
      },
      {
        id: 3,
        name: 'Руслан и Людмила',
        author: 'А.С. Пушкин',
        price: 1579,
        pages: 192
      },
       {
        id: 4,
        name: 'Мертвые души',
        author: 'Н.В. Гоголь',
        price: 2500,
        pages: 352
      }
    ]
    expect(cart.getAll()).toEqual(expected)
    expect(cart.getAll().length).toBe(3)
  });
});
