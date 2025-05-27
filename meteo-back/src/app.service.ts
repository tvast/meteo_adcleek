import { Injectable } from '@nestjs/common';
import * as sqlite3 from "sqlite3";
import { open } from 'sqlite';

@Injectable()
export class CitiesService {
  private dbPromise = open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  });

  async findAll() {
    const db = await this.dbPromise;
    return db.all('SELECT * FROM city');
  }

  async findOne(insee: string) {
    const db = await this.dbPromise;
    return db.get('SELECT * FROM city WHERE insee = ?', insee);
  }
}