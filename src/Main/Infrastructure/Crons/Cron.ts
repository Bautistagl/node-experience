import { ScheduledTask, schedule } from 'node-cron';
import Logger from '../../../Shared/Helpers/Logger';

abstract class Cron
{
    private scheduledTask: ScheduledTask;

    constructor(scheduled = false)
    {
        this.scheduledTask = schedule(this.time(), () =>
        {
            void (async() =>
            {
                Logger.info(`Running ${this.cronName()}`);
                await this.task();
            })();
        }, {
            scheduled
        });
    }

    start(): void
    {
        this.scheduledTask.start();
    }

    stop(): void
    {
        this.scheduledTask.stop();
    }

    abstract time(): string;
    abstract task(): Promise<void>;
    abstract cronName(): string;
}

export default Cron;
