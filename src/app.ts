import {dbConnection} from './helper'

export default function hello() {
   const db = dbConnection('dummy')
   return db
}