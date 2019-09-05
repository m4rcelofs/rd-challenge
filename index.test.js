const {csRush, writeIn} = require('./index');


describe('RD Challenge test 1', () => {
  it('solves sample case 0', () => {
    const votes = [
      'Alex',
      'Michael',
      'Harry',
      'Dave',
      'Michael',
      'Victor',
      'Harry',
      'Alex',
      'Mary',
      'Mary',
    ];
    const result = writeIn(votes);
    expect(result).toBe('Michael')
  });

  it('solves sample case 1', () => {
    const votes = [
      'Victor',
      'Veronica',
      'Ryan',
      'Dave',
      'Maria',
      'Maria',
      'Farah',
      'Farah',
      'Ryan',
      'Veronica',
    ];
    const result = writeIn(votes);
    expect(result).toBe('Veronica')
  });

  it('ignores cases', () => {
    const votes = [
      'Veronica',
      'veronica',
      'Ryan',
    ];
    const result = writeIn(votes);
    expect(result).toBe('Veronica')
  });

  it('handles composed names', () => {
    const votes = [
      'Veronica Mars',
      'veronica mars',
      'Ryan',
    ];
    const result = writeIn(votes);
    expect(result).toBe('Veronica Mars')
  });
});


describe('RD Challenge test 2', () => {
  it('solves sample case 0', () => {
    const n = 4;
    const m = 6;
    const css = [[1, 60], [2, 20], [3, 95], [4, 75]];
    const customers = [[1, 90], [2, 20], [3, 70], [4, 40], [5, 60], [6, 10]];
    const vacant = [2, 4];
    const result = csRush(n, m, css, customers, vacant);
    expect(result).toBe('1');
  });

  it('returns 0 for draw', () => {
    const n = 2;
    const m = 6;
    const css = [[1, 60], [3, 95], [4, 0]];
    const customers = [[6, 59], [2, 59], [4, 59], [5, 94], [3, 94], [1, 94]];
    const vacant = [];
    const result = csRush(n, m, css, customers, vacant);
    expect(result).toBe('0');
  });

  it('does not draw with only one customer', () => {
    const n = 1;
    const m = 1;
    const css = [[1, 60]];
    const customers = [[1, 59]];
    const vacant = [];
    const result = csRush(n, m, css, customers, vacant);
    expect(result).toBe('1');
  });

  it('returns 0 when no one fulfills the requirements', () => {
    const n = 1;
    const m = 1;
    const css = [[1, 0]];
    const customers = [[1, 1]];
    const vacant = [];
    const result = csRush(n, m, css, customers, vacant);
    expect(result).toBe('0');
  });
});
