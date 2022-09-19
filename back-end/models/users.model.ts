import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const result = await this.connection
      .execute('SELECT * FROM users');
    const [rows] = result;
    return rows as User[];
  }

  public async create(user: User): Promise<User> {
    const { nome, petName, email, phone, pet } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO users (nome, petName, email, phone, pet) VALUES (?, ?, ?, ?, ?)',
      [nome, petName, email, phone, pet],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}
