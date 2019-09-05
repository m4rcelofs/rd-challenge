const {writeIn} = require('./index');


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
