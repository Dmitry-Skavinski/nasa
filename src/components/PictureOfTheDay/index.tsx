import "./pictureOfTheDay.scss";
import { PictureProps } from './../../common/types/props';

export default function PictureOfTheDay({image}: PictureProps) {
	return (
		<div className="picture">
			<img src={image?.url} alt={image?.title} className="picture__image" />
			{
			image?.title
			?
				<h2 className="picture__title">{image.title}</h2>
			:
				<div className="picture__title-placeholder" />
			}
			{
			image?.explanation
			?
				<p className="picture__description">{image.explanation}</p>
			:
				<div className="picture__text-placeholder" />
			}
		</div>
	)
}
