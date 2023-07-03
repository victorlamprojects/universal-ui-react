import {
	FC,
	ReactNode,
	Children,
	FormEvent,
	FormHTMLAttributes,
	LabelHTMLAttributes,
	ComponentProps,
	cloneElement,
	ReactElement,
	isValidElement,
	useState
} from "react";
import styled, { useTheme } from "styled-components";
import { Grid, Cell } from "../Grid/Grid";
import Button from "../Button/Button";
import { getDefaultThemeIfNotFound } from '../../theme/theme';
import { FData, FState, FElementBaseProps } from './Form.type';
import { FontSize, Padding } from '../../config/constants';
import { TextInput } from '../Input';

// Form Container
const FormContainer = styled.form(({ theme }) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		backgroundColor: theme.block,
		position: "relative",
		width: "calc(100% - 0.2rem * 2)",
		fontSize: FontSize.FormText,
		margin: "0.25rem 0.2rem"
	};
});
export const FormRow = styled(Cell)(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		margin: "0.1rem 0"
	};
});
const FormGroupName = styled.div(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		position: "absolute",
		fontSize: FontSize.FormGroupText,
		backgroundColor: theme.block,
		top: `-${FontSize.FormGroupText}`,
		color: theme.form.group,
		left: "0.25rem",
		padding: "0 0.5rem",
		zIndex: 100
	};
});
export const FormGroup: FC<ComponentProps<typeof Grid> & { name: string }> = (({name, children, ...rest}) => {
	const theme = getDefaultThemeIfNotFound(useTheme());
	const s = {
		width: "100%",
		borderRadius: "20px",
		position: "relative",
		margin: "1.5rem 0",
		border: `1px solid ${theme.form.group}`
	};

	return (<Grid style={s} {...rest}>
		<FormGroupName>{name}</FormGroupName>
		{children}
	</Grid>);
});

// Form Component
export const FormTitle = styled.div(({ theme }) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		width: "100%",
		minHeight: "24px",
		maxHeight: `calc(${FontSize.FormTitle} + 1.25rem)`,
		padding: Padding.Input,
		fontSize: FontSize.FormTitle,
		display: "block"
	};
});

// Form Controls
export const FormLabel = styled(Cell)<FElementBaseProps & LabelHTMLAttributes<HTMLLabelElement>>(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		margin: "0",
		"&>label": {
			fontSize: FontSize.FormText
		}
	};
});
type FormTextInputProps = ComponentProps<typeof TextInput> & FElementBaseProps;
export const FormTextInput = styled(TextInput)<FormTextInputProps>(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		"&>input:not([type]),&>input[type=text],&>input[type=password]": {
			fontSize: FontSize.FormText
		}
	};
});

export const FormSubmitButton = styled(Button)<ComponentProps<typeof Button> & FElementBaseProps>(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {};
});

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
	onSubmit?: (formState: FState) => void
};

export const Form: FC<FormProps> = ({children, onSubmit, ...rest}) => {
	const [formState, setFormState] = useState<Map<string, FData>>(new Map());

	const updateState = (key: string, value: FData) => {
		setFormState(prev => {
			return new Map(prev.set(key, value));
		});
	}

	const modifyChildren = (children: ReactNode): ReactNode => {
		return Children.map(children, (child) => {
			if(!isValidElement(child)){
				return child;
			}
			let newChild = child as ReactElement<any>;
			const elType = newChild.type;
			if(elType === FormSubmitButton){
				newChild = cloneElement(child as ReactElement<ComponentProps<typeof FormSubmitButton>>, {
					onClick: () => {
						if(onSubmit){
							onSubmit(Object.fromEntries(formState));
						}
					}
				});
			}
			else if(elType === FormRow){
				newChild = cloneElement(child as ReactElement<ComponentProps<typeof FormRow>>, {
					s: child.props.s || 12,
					m: child.props.m || 12,
					l: child.props.l || 12,
					children: (<Grid style={{margin: "0"}}>{child.props.children}</Grid>)
				});
			}
			else if(elType === FormTextInput){
				const { s, m, l, name, defaultValue, ...rest } = child.props;
				newChild = cloneElement(child as ReactElement<ComponentProps<typeof FormTextInput>>, {
					s: s || 12,
					m: m || 6,
					l: l || 6,
					value: formState.has(name) ? formState.get(name) : defaultValue,
					onChange: (e: FormEvent<HTMLInputElement>) => {
						updateState(name, e.currentTarget.value);
					},
					...rest
				});
			}
			else if(elType === FormLabel){
				const { s, m, l, ...rest } = child.props;
				newChild = cloneElement(child as ReactElement<ComponentProps<typeof FormLabel>>, {
					s: s || 12,
					m: m || 4,
					l: l || 3,
				}, (<label {...rest}>{child.props.children}</label>));
			}

			return cloneElement(newChild, {...newChild.props}, modifyChildren(newChild.props.children));
		});
	}

	return (<FormContainer {...rest}>
		<Grid>
			{modifyChildren(children)}
		</Grid>
	</FormContainer>);
};
