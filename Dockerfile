# syntax=docker/dockerfile:1
FROM node:18-alpine AS BUILD_IMAGE
RUN apk add git && git clone https://github.com/adrianhajdin/project_3D_developer_portfolio.git
WORKDIR /project_3D_developer_portfolio
RUN npm install --save --legacy-peer-deps react-tilt
RUN npm run build

FROM nginx
COPY --from=BUILD_IMAGE ./project_3D_developer_portfolio/dist/ /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;" ]
EXPOSE 80