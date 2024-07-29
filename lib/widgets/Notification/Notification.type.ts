import { NotificationType, VerticalAlignment, HorizontalAlignment } from '../../config/constants';
export type NotificationProps = {
	title?: string,
	text?: string,
	horizontal?: HorizontalAlignment;
	vertical?: VerticalAlignment;
	type?: NotificationType | string,
};
