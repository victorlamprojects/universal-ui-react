import { FC } from 'react';
import { Form, FormTitle, FormGroup, FormRow, FormLabel, FormTextInput, FormDateInput } from './Form';
import { FState, FConfiguration, FConfigurationElement, FConfigurationGroup } from './Form.type';
import { DatetimeType } from "../Input/DateInput";

type ConfiguredFormProps = {
	onSubmit?: (formState: FState) => void;
	configuration: FConfiguration;
};

const getFormElement = (key: string, config: FConfigurationElement) => {
	let input = null;
	const { label, type, datetimeType, ...rest } = config;
	if(type === "text" || type === "password" || type === "email"){
		input = <FormTextInput name={key} type={type} {...rest} />
	}
	else if(type === "date"){
		input = <FormDateInput name={key} datetimeType={datetimeType as DatetimeType} />
	}
	return (<FormRow>
		{
			(label || key) && <FormLabel htmlFor={key}>{label || key}</FormLabel>
		}
		{
			input
		}
	</FormRow>);
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
const ConfiguredForm: FC<ConfiguredFormProps> = ({ configuration }) => {
	return (<Form>
		{
			configuration && configuration.title && (<FormTitle>{configuration.title}</FormTitle>)
		}
		{
			configuration && configuration.content && getFormContent(configuration.content)
		}
	</Form>);
}


export default ConfiguredForm;
