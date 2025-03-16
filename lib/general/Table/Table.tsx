import { FC, useState, TableHTMLAttributes } from "react";
import styled from 'styled-components';
import { Padding, FontSize } from '../../config/constants';
import { getDefaultThemeIfNotFound } from '../../theme/theme';
import { TRow, TCol, TData, getDefaultHeaderView, getOverridenHeaderView } from './Table.type';

// Table
const TableContainer = styled.table<TableHTMLAttributes<HTMLTableElement> & {bordered?: boolean}>(({style, theme, bordered}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		background: "inherit",
		borderCollapse: "collapse",
		width: "100%",
		border: bordered ? `1px solid ${theme.text}` : "none",
		...style
	};
});
const TableHead = styled.thead``;
const TableBody = styled.tbody``;

// Table Header
const TableHeaderContainer = styled.tr(({theme}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		backgroundColor: theme.table.header,
		borderBottom: `1px solid ${theme.text}`
	};
});
const TableHeader = styled.th<TableHTMLAttributes<HTMLTableElement> & {bordered?: boolean}>(({style, theme, bordered}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		padding: Padding.Table,
		fontSize: FontSize.TableTitle,
		textAlign: "left",
		border: bordered ? `1px solid ${theme.text}` : "none",
		"&:last-child": {
			paddingRight: "0"
		},
		"&:hover": {
			cursor: "pointer",
		},
		...style
	};
});

// Table Content
const TableRow = styled.tr<TableHTMLAttributes<HTMLTableElement> & {striped?: boolean}>(({theme, striped}) => {
	theme = getDefaultThemeIfNotFound(theme);
	return {
		"&:nth-child(even)": {
			backgroundColor: striped ? theme.table.primary : "none"
		},
		"&.active": {
			backgroundColor: theme.table.secondary
		}
	};
});
const TableData = styled.td<TableHTMLAttributes<HTMLTableElement> & {bordered?: boolean}>(({style, theme, bordered}) => {
	theme = getDefaultThemeIfNotFound(theme);

	return {
		padding: Padding.Table,
		fontSize: FontSize.TableText,
		border: bordered ? `1px solid ${theme.text}` : "none",
		textAlign: "left",
		"&:last-child": {
			paddingRight: "0"
		},
		"&.active": {
			border: `1px solid ${theme.secondary}`
		},
		...style
	};
});


type TableProps = Omit<Omit<TableHTMLAttributes<HTMLTableElement>, "onDoubleClick">, "onSelect"> & {
	data?: TRow[];
	columnDefs?: TCol[];
	bordered?: boolean;
	striped?: boolean;
	onSelect?: (_row: number, _column: number, _data: TData) => void;
	onDoubleClick?: (_row: number, _column: number, _data: TData) => void;
};


const Table: FC<TableProps> = ({
	data,
	columnDefs,
	onSelect,
	onDoubleClick,
	bordered = false,
	striped = false,
	...args
}) => {
	const [selectedRow, setSelectedRow] = useState<number | undefined>(undefined);
	const [selectedCell, setSelectedCell] = useState<number | undefined>(undefined);
	const [sortStates, setSortStates] = useState<Map<string, ({key: number, fn: (_a: any, _b: any) => number})>>(new Map());
	const dataView = data || [];
	let headerView = getDefaultHeaderView(data && data[0]);
	if(columnDefs){
		headerView = getOverridenHeaderView(headerView, columnDefs);
	}

	if(sortStates.size > 0){
		// Currently only support single sorting
		sortStates.forEach((state) => dataView.sort(state.fn));
	}
	return (<div style={{overflow: "auto"}}>
		<TableContainer bordered={bordered} {...args}>
			<TableHead>
				<TableHeaderContainer>
				{
					headerView.map(header => (
						<TableHeader bordered={bordered} key={header.key} onClick={ () => {
							setSortStates(prev => {
								const m = new Map();
								let k = 0;
								if(prev.has(header.key)){
									k = prev.get(header.key)!.key + 1;
								}
								if(k === 2){
									m.delete(header.key);
								}
								else{
									m.set(header.key, {
										key: k,
										fn: (a: TRow, b: TRow) => (k == 0 ? header.sort(a, b) : header.sort(b, a))
									});
								}
								return m;
							});
						}}>
							{header.title || header.key}
							<span hidden={sortStates.get(header.key)?.key !== undefined}> ⇵</span>
							<span hidden={sortStates.get(header.key)?.key !== 0}> ⬇</span>
							<span hidden={sortStates.get(header.key)?.key !== 1}> ⬆</span>
						</TableHeader>
					))
				}
				</TableHeaderContainer>
			</TableHead>
			<TableBody>
				{
					dataView.map((d: TRow, i: number) => (
						<TableRow key={`${JSON.stringify(d)}-${i}`} striped={striped} className={`${selectedRow === i ? "active" : ""}`} onClick={()=>setSelectedRow(i)}>
							{
								headerView.map((header, j: number) => (
									<TableData
                                        key={`${header.key}-${i}`}
										bordered={bordered}
										className={`${selectedCell === i * headerView.length + j ? "active" : ""}`}
										onClick={()=>{
											setSelectedCell(i * headerView.length + j);
											if(onSelect){
												onSelect(i, j, d[header.key]);
											}
											if(onDoubleClick){
												onDoubleClick(i, j, d[header.key]);
											}
										}}>
										{ header.apply && header.apply(d[header.key]) || d[header.key]}
									</TableData>
								))
							}
						</TableRow>
					))
				}
			</TableBody>
		</TableContainer>
	</div>);
};

export default Table;
