import {SERVICE_API} from '../utils/Const';
import {default as config} from '../utils/Config';

export class ApiClient {
    static sessionExpiredCallback;

    static getInstance(baseUrl) {
        return createApiClient(baseUrl);
    }

    static setSessionExpiredCallback(callback) {
        ApiClient.sessionExpiredCallback = callback;
    }

    constructor(baseUrl = config.BASE_URL) {
        this.baseUrl = baseUrl;
    }
    //###########################
    async getDataProduct(docEntry) {
        const url = this.getEndpointUrl(SERVICE_API.getDataProduct + '/' + docEntry);
        const response = await apiFetch(
            url,
            {
                method: 'GET',
            },
        );
        return response;
    }
    async createDocument(data) {
        const url = this.getEndpointUrl(SERVICE_API.createDocument);
        const response = await apiFetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            },
        );
        return response;
    }
    //###########################
    static async getSessionToken() {
        return await localStorage.getItem(config.general.localStorageNamed + 'Token');
    }

    static async getBusiness() {
        return await localStorage.getItem(config.general.localStorageNamed + 'Business');
    }

    getEndpointUrl(urlPath) {
        return this.baseUrl + urlPath;
    }
}
export function createApiClient(baseUrl) {
    return new ApiClient(baseUrl);
}

async function apiFetch(url, init) {
    try {

        const rawResponse = await fetch(url, init);

        const response = await rawResponse.json();

        evaluateSessionExpiredResponse(response);

        return response;
    } catch (e) {
        //console.log(e);
        return {
            status: 0,
            message: 'Ocurrió un error inesperado, por favor intente más tarde o ponganse en contacto con soporte',e,
        };
    }
}

async function apiFetchWithSession(url, init, optionalToken = undefined) {
    let token;

    if (!optionalToken) {
        token = await ApiClient.getSessionToken();
    } else {
        token = optionalToken;
    }

    if (init) {
        init.headers = {
            ...init.headers,
            Business: config.general.business,
        };

        if (token) {
            init.headers = {
                ...init.headers,
                Authorization: token || undefined,
            };
        }

    }
    return apiFetch(url, init);
}

function evaluateSessionExpiredResponse(response) {
    if (response.status < 0) {
        if (ApiClient.sessionExpiredCallback) {
            ApiClient.sessionExpiredCallback(response);
        }
    }
}