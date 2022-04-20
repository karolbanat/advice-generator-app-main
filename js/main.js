const shuffleBtn = document.querySelector('.card__shuffle-btn');
const adviceIdSpan = document.querySelector('.advice-id');
const quoteBlock = document.querySelector('.card__quote');

const fetchURL = 'https://api.adviceslip.com/advice';

const getAdvice = () => {
	fetch(fetchURL, { cache: 'no-cache' })
		.then((responese) => responese.json())
		.then((data) => {
			const slipObject = data.slip;
			adviceIdSpan.innerText = slipObject.id;
			quoteBlock.innerText = slipObject.advice;
		})
		.catch((err) => console.log('Some kind of error'));
};

shuffleBtn.addEventListener('click', getAdvice);
