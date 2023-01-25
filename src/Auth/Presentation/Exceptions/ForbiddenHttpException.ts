import ErrorHttpException from '../../../Shared/Presentation/Shared/ErrorHttpException';
import Locales from '../../../Shared/Presentation/Shared/Locales';
import MainConfig from '../../../Config/MainConfig';

const config = MainConfig.getInstance().getConfig().statusCode;

class ForbiddenHttpException extends ErrorHttpException
{
    constructor()
    {
        const locales = Locales.getInstance().getLocales();
        const key = 'auth.presentation.exceptions.forbidden';
        super(config['HTTP_FORBIDDEN'], {
            message: locales.__(key),
            errorCode: key
        });
    }
}

export default ForbiddenHttpException;
