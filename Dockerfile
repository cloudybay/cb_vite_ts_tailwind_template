FROM devforth/spa-to-http:1.0.6 AS source

RUN apk add 'curl==8.5.0-r0'

COPY ./dist/ .

USER 1000:1000
