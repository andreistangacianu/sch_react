import qs from "qs";

const RestRequest = (() => {
  const getRequest = (url, params, headers, callback, errorCallback) => {
    // parse & add the params to the query string of the url
    if (params && Object.keys(params).length > 0) {
      url += `?${decodeURIComponent(qs.stringify(params))}`;
      params = null;
    }

    return fetchWrapper(url, "GET", params, headers, callback, errorCallback);
  };

  const postRequest = (url, params, headers, callback, errorCallback) => {
    return fetchWrapper(url, "POST", params, headers, callback, errorCallback);
  };

  const putRequest = (url, params, headers, callback, errorCallback) => {
    return fetchWrapper(url, "PUT", params, headers, callback, errorCallback);
  };

  const deleteRequest = (url, params, headers, callback, errorCallback) => {
    return fetchWrapper(
      url,
      "DELETE",
      params,
      headers,
      callback,
      errorCallback
    );
  };

  // The wrapper for the fetch method that includes params parsing for Get & Post as well as callbacks for success & error
  const fetchWrapper = (
    url,
    httpMethod,
    params,
    headers,
    callback,
    errorCallback
  ) => {
    // Set the default headers
    let defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    // merge the default headers with whatever custom headers we have
    let reqHeaders = { ...defaultHeaders, ...headers };

    return fetch(url, {
      method: httpMethod,
      mode: "cors",
      headers: reqHeaders,
      body:
        ["GET", "HEAD", "DELETE"].indexOf(httpMethod) > -1
          ? null
          : JSON.stringify(params)
    })
      .then(response => {
        // callback
        if (
          response.headers.get("Content-Type") &&
          response.headers
            .get("Content-Type")
            .indexOf("x-www-form-urlencoded") > -1
        ) {
          return response.text().then(text => {
            let parsed = qs.parse(text);
            callback(parsed);
            return parsed;
          });
        }

        return response.text().then(text => {
          try {
            var json = JSON.parse(text);
          } catch (e) {
            errorCallback({ message: text, code: response.status });
            throw { message: text, code: response.status };
          }

          callback(json);
          return json;
        });
      })
      .catch(error => {
        console.debug(error);
      });
  };

  return {
    get: getRequest,
    post: postRequest,
    put: putRequest,
    delete: deleteRequest
  };
})();
console.log(RestRequest);
export default RestRequest;
