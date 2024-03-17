import Movie from '../Movie'

test('Тестирование класса Movie', () => {
    const movie = new Movie(1, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключение'], '137 мин. / 2:17', 1234)
    const expected = {
        id: 1,
        name: 'Мстители',
        originalName: 'The Avengers',
        year: 2012,
        country: 'США',
        tagline: 'Avengers Assemble!',
        genre: ['фантастика', 'боевик', 'фэнтези', 'приключение'],
        time: '137 мин. / 2:17',
        price: 1234
    }
    expect(movie).toEqual(expected)
})