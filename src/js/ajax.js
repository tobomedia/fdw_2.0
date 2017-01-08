import http from 'superagent-bluebird-promise';


export default function performRequest(request, context) {
  return http.get(request).then((response) => {
        return response;
    }, (error) => {
        throw error;
    });
};
