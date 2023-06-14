import styled, { CSSObject } from 'styled-components';
import { Light } from '../../theme/theme';
import { Padding } from '../../config/constants';

const Block = styled.div(({style, theme}) => {
	theme = Object.keys(theme).length === 0 ? Light : theme;
	const s = {
		position: "relative",
		backgroundColor: theme.block,
		color: theme.text,
		padding: Padding.Container,
		...style
	};
	return s as CSSObject;
});

export default Block;
