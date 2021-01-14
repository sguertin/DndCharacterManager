export default class Ajax {
    static _request(
        url,
        requestBody = null,
        success = null,
        failure = null,
        method = 'GET'
    ) {
        return new Promise((resolve, reject) => {
            const XHR = new XMLHttpRequest();
            if (!XHR) {
                const errorMsg = 'Cannot create an XMLHTTP instance';
                if (failure) {
                    failure(errorMsg);
                }
                if (reject) {
                    reject(errorMsg);
                }
                return;
            }
            XHR.open(method, url);
            //Send the proper header information along with the request
            XHR.onreadystatechange = () => {
                // In local files, status is 0 upon success in Mozilla Firefox
                if (XHR.readyState === XMLHttpRequest.DONE) {
                    let status = XHR.status;
                    if (status === 0 || (status >= 200 && status < 400)) {
                        // The request has been completed successfully
                        let content = null;
                        if (XHR.responseText) {
                            content = JSON.parse(XHR.responseText);
                        }
                        if (success) {
                            success(content, status);
                        }
                        if (resolve) {
                            resolve(content, status);
                        }
                    } else {
                        // Oh no! There has been an error with the request!
                        const errorMsg = `An error occurred with the request to "${url}" Status Code: ${status.toString()}`;
                        if (failure) {
                            failure(errorMsg, status);
                        }
                        if (reject) {
                            reject(errorMsg, status);
                        }
                    }
                }
            };
            XHR.setRequestHeader('Content-Type', 'application/json');
            if (requestBody) {
                requestBody = JSON.stringify(requestBody);
            }
            XHR.send(requestBody);
        });
    }

    static get = (url, success = null, failure = null) =>
        Ajax._request(url, null, success, failure);
    static post = (url, requestBody = null, success = null, failure = null) =>
        Ajax._request(url, requestBody, success, failure, 'POST');
    static put = (url, requestBody = null, success = null, failure = null) =>
        Ajax._request(url, requestBody, success, failure, 'PUT');
    static put = (url, requestBody = null, success = null, failure = null) =>
        Ajax._request(url, requestBody, success, failure, 'DELETE');
    static option = (url, requestBody = null, success = null, failure = null) =>
        Ajax._request(url, requestBody, success, failure, 'OPTION');
}

export default class AjaxStore {
    // TODO: Implement cacheing to layer over default Ajax implementation
}
