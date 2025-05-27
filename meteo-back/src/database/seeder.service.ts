// database/seeder.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { initializeDB } from '../helpers/database-helper';

@Injectable()
export class SeederService implements OnModuleInit {
  async onModuleInit() {
    try {
      await initializeDB();  // call the correctly imported function
      console.log('📦 Database initialized by SeederService.');
    } catch (error) {
      console.error('❌ Error initializing database:', error);
    }
  }
}