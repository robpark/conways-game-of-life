import { describe, it, expect } from 'vitest';
import { helloWorld } from '../src/hello-world.js';

describe('helloWorld', () => {
  it('should return greeting with default name', () => {
    const result = helloWorld();
    expect(result).toBe('Hello, World!');
  });

  it('should return greeting with custom name', () => {
    const result = helloWorld('Test');
    expect(result).toBe('Hello, Test!');
  });

  it('should fail this test', () => {
    const result = helloWorld('Test');
    expect(result).toBe('Hello, Wrong!');
  });
});
