import { HttpPipe } from './http.pipe';

describe('HttpPipe', () => {
  const pipe = new HttpPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
