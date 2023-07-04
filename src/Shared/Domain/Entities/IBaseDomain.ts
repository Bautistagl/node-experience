import ITimestamps from './ITimestamps';

interface IBaseDomain extends ITimestamps
{
    getId(): string;
    setId(id: string): void;
}

export default IBaseDomain;
