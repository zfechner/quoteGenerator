const button = document.querySelector('#newQuote')
const author = document.querySelector('#author')
const text = document.querySelector('#quoteText')

const getNewQuote = async () => {
    try {
        const config = {
            headers:
            {
                'x-rapidapi-key': '~',
                'x-rapidapi-host': 'quotes15.p.rapidapi.com'
            }
        };
        const res = await axios.get('https://quotes15.p.rapidapi.com/quotes/random/', config);
        return [res.data.content, res.data.originator.name]
    } catch (err) {
        const errRes = 'No more quotes';
    }
};

const newQuote = async () => {
    text.textContent = '';
    author.textContent = '';
    const quote = await getNewQuote();
    console.log(quote)
    const quoteText = quote[0];
    const quoteAuthor = quote[1];
    const authorName = '-';
    const apostrophe = '"';
    text.append(apostrophe + quoteText + apostrophe);
    author.append(authorName + quoteAuthor + authorName);
}

button.addEventListener('click', newQuote);
