import {
  TOPIC_LOAD,
  TOPIC_LOAD_SUCCESS,
  TOPIC_LOAD_FAIL,
} from './actionTypes.js';

export function load(slug) {
  return {
    types: [TOPIC_LOAD, TOPIC_LOAD_SUCCESS, TOPIC_LOAD_FAIL],
    promise: (client) => {
      return client
        .get(`api/v1/topic/${slug}?casing=camel`)
        .then(data => {
          return {
            title: data.title,
            relativeUrl: data.relativeUrl,
            children: data.children.map(child => {
              return {
                kind: child.kind,
                title: child.title,
                nodeSlug: child.nodeSlug
              };
            })
          };
        });
    },
    slug: slug
  };
}