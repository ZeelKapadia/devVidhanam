FROM node:16.14.2-alpine AS build
WORKDIR /app
COPY package*.json ./


# Important commands
RUN npm install
# below coammand is similar like legacy-peer-deps  for the changes 
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points

COPY . .

RUN npm run build


FROM nginx:stable

COPY --from=build /app/dist/dev-vidhanam/ /usr/share/nginx/html

EXPOSE 80