import styled, { CSSObject } from 'styled-components';
import { getDefaultThemeIfNotFound } from '../../theme/theme';
import { Padding, Margin } from '../../config/constants';

const Block = styled.div(({style, theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	const s = {
		position: "relative",
		backgroundColor: theme.block,
		color: theme.text,
		padding: Padding.Container,
		margin: Margin.Container,
		...style
	};
	return s as CSSObject;
});

export default Block;
