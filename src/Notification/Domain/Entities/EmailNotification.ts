import Notification from './Notification';
import StatusNotificationEnum from '../Enum/StatusNotificationEnum';
import TypeNotificationEnum from '../Enum/TypeNotificationEnum';
import IEmailNotificationData from './IEmailNotificationData';
import IFilesAttachments from './IFilesAttachments';

class EmailNotification extends Notification
{
    status: StatusNotificationEnum;
    type: TypeNotificationEnum;
    emailTemplatePath: string;
    htmlRender: string;
    senderName: string;
    from: string;
    to: string;
    cc: string;
    bcc: string;
    subject: string;
    external: boolean;
    _templatePathNameFile?: string;
    attachedFiles?: IFilesAttachments[];
    data?: IEmailNotificationData;

    getAttachedFiles(): IFilesAttachments[]
    {
        return this.attachedFiles;
    }
}

export default EmailNotification;
