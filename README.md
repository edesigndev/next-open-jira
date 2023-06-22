T

## Next.js - OpenJira App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa **detached**

MongoDB URL Local:

```
mongodb://localhost:27017
```

## Configurar las variables de entorno

Renombrar el archivo **.env.template** por **.env**

## Llenar la base de datos con información de pruebas

Llamar:

```
http://localhost:3000/api/seed
```

## Comandos de despliegue del frontend

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
