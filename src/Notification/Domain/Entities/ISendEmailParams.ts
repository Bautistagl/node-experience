import TypeNotificationEnum from '../Enum/TypeNotificationEnum';
import IEmailNotificationData from './IEmailNotificationData';

interface ISendEmailParams
{
    type: TypeNotificationEnum;
    args: Record<string, any>
    name: string;
    subject?: string;
    data?: IEmailNotificationData;
    files?: unknown[];
    to: string;
    cc?: string[];
    bcc?: string[];
    external?: boolean;
    templatePathNameFile?: string;
}

export default ISendEmailParams;
