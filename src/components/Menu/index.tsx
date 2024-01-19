import { MenuProps } from "../../common/types/props";
import "./menu.scss";
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';
export default function Menu({ updateImage }: MenuProps) {
	const [date, setDate] = useState<Date>();
	useEffect(() => {
		updateImage(format(date || new Date(), "yyyy-MM-dd"));
	}, [date]);
	return (
		<div className="menu">
			<DayPicker mode="single" selected={date} onSelect={setDate}/>
		</div>
	)
}
