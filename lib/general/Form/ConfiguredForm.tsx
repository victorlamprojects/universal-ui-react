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
	const { label, type, options, defaultValue, datetimeType, switchType, justifyContent, ...rest } = config;
	if(type === "text" || type === "password" || type === "email"){
		element = (<FormRow justifyContent={justifyContent}>
			{ (label || key) && <FormLabel htmlFor={key}>{label || key}</FormLabel> }
			<FormTextInput name={key} type={type} defaultValue={defaultValue} {...rest} />
		</FormRow>);
	}
	else if(type === "date"){
		element = (<FormRow justifyContent={justifyContent}>
			{ (label || key) && <FormLabel htmlFor={key}>{label || key}</FormLabel> }
			<FormDateInput name={key} defaultValue={defaultValue} datetimeType={datetimeType as DatetimeType} {...rest} />
		</FormRow>);
	}
	else if(type === "switch"){
		element = (<FormRow justifyContent={justifyContent}>
			{ (label || key) && <FormLabel htmlFor={key}>{label || key}</FormLabel> }
			<FormSwitchInput name={key} defaultValue={defaultValue} type={switchType || SwitchType.Round} {...rest} />
		</FormRow>);
	}
	else if(type === "select"){
		element = (<FormRow justifyContent={justifyContent}>
			{ (label || key) && <FormLabel htmlFor={key}>{label || key}</FormLabel> }
			<FormSelect name={key} selected={defaultValue} options={options} {...rest} />
		</FormRow>);
	}
	else if(type === "submit"){
		element = (<FormSubmitButton name={key} {...rest}>{label}</FormSubmitButton>);
	}
	return element;
}
const getFormContent = (config: ({[key: string]: FConfigurationGroup | FConfigurationElement})): any => {
	const formContent = [];
	for(const [key, value] of Object.entries(config)) {
		// Group
		if(typeof value === "object" && (value as FConfigurationGroup).group){
			const group = value as FConfigurationGroup;
			formContent.push(<FormGroup name={key}>
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
