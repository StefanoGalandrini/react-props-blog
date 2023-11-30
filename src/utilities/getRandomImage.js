const usedIds = new Set();
const minId = 50;
const maxId = 200;
const totalIds = maxId - minId + 1; // Totale numeri disponibili

const getRandomImage = () =>
{
	if (usedIds.size >= totalIds)
	{
		console.log("Tutti gli ID delle immagini sono stati utilizzati.");
		return "../assets/imgs/no-image.jpg"; // img di fallback
	}

	let id;
	do
	{
		id = Math.floor(Math.random() * totalIds) + minId;
	} while (usedIds.has(id));

	usedIds.add(id);
	return `https://picsum.photos/id/${id}/400/250`;
};

export default getRandomImage;
