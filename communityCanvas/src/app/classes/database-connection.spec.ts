import { DatabaseConnection } from './database-connection';

describe('DatabaseConnection', () => {
  it('should create an instance', () => {
    expect(new DatabaseConnection()).toBeTruthy();
  });
});
