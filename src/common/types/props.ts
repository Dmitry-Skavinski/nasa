import { IImage } from './responses';

export interface PictureProps {
	image?: IImage
}

export interface MenuProps {
	updateImage: {
		(date?: string): void
	}
}