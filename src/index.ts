import express from 'express';
const app = express();
import {hello} from './routes';
 

app.get('/', hello);



app.listen(3333, ()=>{

  console.log(' Server on  🚀');
});