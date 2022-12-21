import type { JestConfigWithTsJest } from 'ts-jest';

export default async (): Promise<JestConfigWithTsJest> => {
  return {
    verbose: false,
    preset: 'ts-jest',
    testEnvironment: 'node',
  };
}