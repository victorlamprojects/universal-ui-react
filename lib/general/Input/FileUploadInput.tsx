import { FC, ChangeEvent, DragEvent } from "react";
import styled, { CSSObject } from "styled-components";

import { FontSize, Padding } from '../../config/constants';
import { Light } from '../../theme/theme';


const Container = styled.div(() => {
	const s = {
		minHeight: "100px",
		position: "relative"
	};
	return s as CSSObject;
});

const Input = styled.input(()=>{
	let s = {
		display: "none"
	};
	return s;
});
const Label = styled.label(({ theme }) => {
	theme = Object.keys(theme).length === 0 ? Light : theme;
	let s = {
		display: "block",
		position: "relative",
		height: "100%",
		fontSize: FontSize.Header,
		color: theme.primary,
		textAlign: "center",
		padding: Padding.Container,
		borderRadius: "12px",
		border: `3px dashed ${theme.primary}`,
		cursor: "pointer"
	};
	return s as CSSObject;
});

type FileUploadInputProps = {
	id?: string;
	text?: string;
	handleFileInput: (files: FileList) => void;
};

const FileUpload: FC<FileUploadInputProps> = ({ id=Math.random().toString(36).slice(-5), handleFileInput, text="Choose or Drop Files", ...rest }) => {
	const disableDefault = (e: DragEvent | ChangeEvent) => {
		e.preventDefault();
		e.stopPropagation();
	}
	return <Container
		onDrop={
			e => {
				disableDefault(e);
				const data = e.dataTransfer;
				if(!data.files?.length){
					return;
				}
				handleFileInput(data.files);
			}
		}
		onDragOver={ e => disableDefault(e) }
		onDragEnter={e => disableDefault(e) }
		onDragLeave={e => disableDefault(e) }
	>
		<Input id={`upload-button-${id}`} type="file" onChange={ (e: ChangeEvent<HTMLInputElement>) => {
			const input = e.target;
			if(!input.files?.length){
				return;
			}
			handleFileInput(input.files);
		}} {...rest} />
		<Label htmlFor={`upload-button-${id}`}>
			{text}&nbsp;<i className="fa-solid fa-upload" />
		</Label>
	</Container>
}

export default FileUpload;
