import "./app.scss";
import PictureOfTheDay from '../PictureOfTheDay/index';
import Menu from "../Menu";
import { useState } from "react"
import { IImage } from "../../common/types/responses";
import { getPictureOfTheDay } from "../../common/utils/api";

export default function App() {
	const [image, setImage]= useState<IImage>();

	async function updateImage(date?: string) {
		const newImageInfo: IImage = await getPictureOfTheDay(date);
		setImage(newImageInfo);
	}

	return (
		<div className="wrapper">
			<main className="content">
				<Menu updateImage={updateImage} />
				<PictureOfTheDay image={image} />
			</main>
		</div>
	)
}