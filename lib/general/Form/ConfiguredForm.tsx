import { FC } from 'react';
import { Form, FormTitle, FormGroup, FormRow, FormLabel, FormTextInput, FormDateInput, FormSwitchInput, FormSelect, FormSubmitButton } from './Form';
import { FState, FConfiguration, FConfigurationElement, FConfigurationGroup } from './Form.type';
import { DatetimeType } from "../Input/DateInput";
import { SwitchType } from "../Input/SwitchInput";

type ConfiguredFormProps = {
	onSubmit?: (formState: FState) => void;
	configuration: FConfiguration;
};

const getFormElement = (key: string, config: FConfigurationElement) => {
	let element = null;
	const { label, type, options, value, datetimeType, switchType, justifyContent, ...rest } = config;
	if(type === "text" || type === "password" || type === "email"){
		element = (<FormRow key={`row-${key}`} justifyContent={justifyContent}>
			{ (label || key) && <FormLabel htmlFor={key}>{label || key}</FormLabel> }
			<FormTextInput name={key} type={type} value={value as string} {...rest} />
		</FormRow>);
	}
	else if(type === "date"){
		element = (<FormRow key={`row-${key}`} justifyContent={justifyContent}>
			{ (label || key) && <FormLabel htmlFor={key}>{label || key}</FormLabel> }
			<FormDateInput name={key} value={value as Date} datetimeType={datetimeType as DatetimeType} {...rest} />
		</FormRow>);
	}
	else if(type === "switch"){
		element = (<FormRow key={`row-${key}`} justifyContent={justifyContent}>
			{ (label || key) && <FormLabel htmlFor={key}>{label || key}</FormLabel> }
			<FormSwitchInput name={key} value={String(value).toLowerCase() === 'true'} type={switchType || SwitchType.Round} {...rest} />
		</FormRow>);
	}
	else if(type === "select"){
		element = (<FormRow key={`row-${key}`} justifyContent={justifyContent}>
			{ (label || key) && <FormLabel htmlFor={key}>{label || key}</FormLabel> }
			<FormSelect name={key} selected={value as string} options={options} {...rest} />
		</FormRow>);
	}
	else if(type === "submit"){
		element = (<FormSubmitButton key={`submit-${key}`} name={key} {...rest}>{label}</FormSubmitButton>);
	}
	return element;
}
const getFormContent = (config: ({[key: string]: FConfigurationGroup | FConfigurationElement})): any => {
	const formContent = [];
	for(const [key, value] of Object.entries(config)) {
		// Group
		if(typeof value === "object" && (value as FConfigurationGroup).group){
			const group = value as FConfigurationGroup;
			formContent.push(<FormGroup key={`content-group-${key}`} name={key}>
				{ group.content && getFormContent(group.content)}
			</FormGroup>);
		}
		// Normal Form Element
		else {
			formContent.push(getFormElement(key, value as FConfigurationElement));
		}
	}
	return formContent;
};
const ConfiguredForm: FC<ConfiguredFormProps> = ({ onSubmit, configuration }) => {
	return (<Form onSubmit={onSubmit}>
		{
			configuration && configuration.title && (<FormTitle>{configuration.title}</FormTitle>)
		}
		{
			configuration && configuration.content && getFormContent(configuration.content)
		}
	</Form>);
}


export default ConfiguredForm;
