# Coding Assignment for DAOFAB

##### Install Node Modules

```
cd frontend
npm install
cd ..
cd backend
npm install
cd ..
```

## Backend

We have Written Backend in NodeJS

To run Backend Server you can run the command

```
$ cd backend
$ touch .env
$ echo "PORT = 3000" | tee -a .env
$ npm run dev
```


## Frontend

We have Written Frontend in React JS + Typescript

To connect the Frontend Server with backend 
```
$ cd frontend
$ touch .env
$ echo "VITE_TEST_URL="http://localhost:3000"" | tee -a .env
$ npm run dev
```
If you want to change the port, you can the change the port value present in .env file

## Assignment

After running the all the command above

Our frontend server will run on 
```
http://localhost:5173/
```
