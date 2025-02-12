
class BaseAxiosRepository
{
    protected config: Record<string, any>;

    constructor()
    {
        this.config = {
            method: 'get',
            maxBodyLength: Infinity,
            headers: {
                'Content-Type': 'application/json'
            },
            validateStatus: (status: number) =>
            {
                return status < 500;
            }
        };
    }
}

export default BaseAxiosRepository;
