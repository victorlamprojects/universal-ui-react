import { FC } from "react";
import styled from "styled-components";
import { getDefaultThemeIfNotFound } from '../../theme/theme';

const Mark = styled.span(({ theme }) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		backgroundColor: theme.highlight
	};
});

export type SearchableProps = {
	searchText?: string;
	ignoreCase?: boolean;
}

const Searchable: FC<SearchableProps & {
	id?: string,
	text: string
}> = ({
	id=(Math.random() + 1).toString(36).substring(7),
	text="",
	searchText="",
	ignoreCase = true
}) => {
	if(searchText === ""){
		return <span>{text}</span>;
	}
	const parts = text.split(new RegExp(`(${searchText})`, `g${ignoreCase ? 'i' : ''}`));

	return (<span>
		{
			parts.map((part, i) => {
				if(searchText === undefined || searchText === null || searchText === "") {
					return part;
				}
				return part.toLowerCase() === searchText.toLowerCase() ? <Mark key={`${id}-${i}`}>{part}</Mark> : part;
			})
		}
	</span>);
}

export default Searchable;
