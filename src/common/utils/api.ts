import { IImage } from "../types/responses";

export async function getPictureOfTheDay(date? : string) {
	const response: Response = await fetch("https://api.nasa.gov/planetary/apod?api_key=rNPgNFW7jjQ0BfeSKa15LFfZfDfocGsdqah1rYaq" + (date ? `&date=${date}` : ""));

	const json: IImage = await response.json();

	return json;
}
