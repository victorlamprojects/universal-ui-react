import {
	FC,
	ReactNode,
	Children,
	MouseEvent,
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
import { TextInput, DateInput, SwitchInput, Select } from '../Input';

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
export const FormRow = styled(Cell)(() => {
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
export const FormTitle = styled.div(() => {
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
export const FormLabel = styled(Cell)<FElementBaseProps & LabelHTMLAttributes<HTMLLabelElement>>(() => {
	return {
		margin: "0",
		"&>label": {
			fontSize: FontSize.FormText
		}
	};
});
export const FormTextInput = styled(TextInput)<ComponentProps<typeof TextInput> & FElementBaseProps>(() => {
	return {
		"&>input:not([type]),&>input[type=text],&>input[type=password],&>input[type=email]": {
			fontSize: FontSize.FormText
		}
	};
});
export const FormDateInput = styled(DateInput)<ComponentProps<typeof DateInput> & FElementBaseProps>(() => {
	return {
		"&>input[type=date]": {
			fontSize: FontSize.FormText
		}
	};
});
export const FormSwitchInput = styled(SwitchInput)<ComponentProps<typeof SwitchInput> & FElementBaseProps>(() => {
	return {
		"&>input[type=checkbox]": {
			fontSize: FontSize.FormText
		}
	};
});
export const FormSelect = styled(Select)<ComponentProps<typeof Select> & FElementBaseProps>(() => {
	return {
		"& > select": {
			fontSize: FontSize.FormText
		}
	};
});
export const FormSubmitButton = styled(Cell)<ComponentProps<typeof Button> & FElementBaseProps>(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		"& > * > button":{
			backgroundColor: theme.primary,
			fontSize: FontSize.FormText
		}
	};
});

type FormProps = Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> & {
	onSubmit?: (_formState: FState) => void
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
                const childEl = child as ReactElement<ComponentProps<typeof FormSubmitButton>>;
				const { justifyContent, children, ...rest } = childEl.props;
				newChild = cloneElement(childEl, {
					s: 12,
					m: 12,
					l: 12,
					children: <Grid justifyContent={justifyContent || "flex-end"} >
						<Button {...rest} onClick={ (e: MouseEvent<HTMLButtonElement>) => {
							e.preventDefault();
							e.stopPropagation();
							if(onSubmit){
								onSubmit(Object.fromEntries(formState));
							}
						}}>{children}</Button>
					</Grid>
				});
			}
			else if(elType === FormRow){
                const childEl = child as ReactElement<ComponentProps<typeof FormRow>>;
				newChild = cloneElement(childEl, {
					s: childEl.props.s || 12,
					m: childEl.props.m || 12,
					l: childEl.props.l || 12,
					children: (<Grid style={{margin: "0", justifyContent: childEl.props.justifyContent || "flex-start" }}>{childEl.props.children}</Grid>)
				});
			}
			else if(elType === FormSelect){
                const childEl = child as ReactElement<ComponentProps<typeof FormSelect>>;
				const { s, m, l, name, selected, options, ...rest } = childEl.props;
				if(!formState.has(name)){
					updateState(name, selected || "");
				}
				newChild = cloneElement(childEl, {
					s: s || 12,
					m: m || 6,
					l: l || 6,
					selected: formState.get(name),
					onChange: (d: string) => {
						updateState(name, d);
					},
					options: options,
					...rest
				});
			}
			else if(elType === FormSwitchInput){
                const childEl = child as ReactElement<ComponentProps<typeof FormSwitchInput>>;
				const { s, m, l, name, value, type, ...rest } = childEl.props;
				if(!formState.has(name)){
					updateState(name, value || false);
				}
				newChild = cloneElement(childEl, {
					s: s || 1,
					m: m || 1,
					l: l || 1,
					type: type,
					value: formState.get(name),
					onChange: (d: FData) => {
						updateState(name, d);
					},
					...rest
				});
			}
			else if(elType === FormTextInput){
                const childEl = child as ReactElement<ComponentProps<typeof FormTextInput>>;
				const { s, m, l, name, value, ...rest } = childEl.props;
				if(!formState.has(name)){
					updateState(name, value || "");
				}
				newChild = cloneElement(childEl, {
					s: s || 12,
					m: m || 6,
					l: l || 6,
					value: formState.get(name),
					onChange: (d: FData) => {
						updateState(name, d);
					},
					...rest
				});
			}
			else if(elType === FormDateInput){
                const childEl = child as ReactElement<ComponentProps<typeof FormDateInput>>;
				const { s, m, l, name, value, ...rest } = childEl.props;
				if(!formState.has(name)){
					updateState(name, value || new Date());
				}
				newChild = cloneElement(childEl, {
					s: s || 12,
					m: m || 6,
					l: l || 6,
					value: formState.get(name),
					onChange: (d: FData) => {
						updateState(name, d);
					},
					...rest
				});
			}
			else if(elType === FormLabel){
                const childEl = child as ReactElement<ComponentProps<typeof FormLabel>>;
				const { s, m, l, ...rest } = childEl.props;
				newChild = cloneElement(childEl, {
					s: s || 10,
					m: m || 4,
					l: l || 3,
				}, (<label {...rest}>{childEl.props.children}</label>));
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
